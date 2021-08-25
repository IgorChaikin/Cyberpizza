const { Cart, OrderStage } = require('./models');

const ordersGet = (cartId) => {
  const result = {};
  // firstly search cart with price and ids array...
  return Cart.find({ _id: cartId })
    .then((query) => {
      const cart = query[0];
      result.price = cart?.price ?? 0;
      return OrderStage.aggregate([
        { $sort: { _id: 1 } },
        {
          $lookup: {
            from: 'orders',
            let: { orderStageId: '$_id' },
            as: 'orders',
            pipeline: [
              {
                $match: {
                  $expr: {
                    // ...only after that make order query to db for search only orders of
                    // this cart, not all orders. It helps save time during work with db
                    $and: [
                      { $eq: ['$$orderStageId', '$orderStageId'] },
                      { $in: ['$_id', cart?.orderIds ?? []] },
                    ],
                  },
                },
              },
              { $sort: { time: -1 } },
              {
                $lookup: {
                  from: 'items',
                  localField: 'itemId',
                  foreignField: '_id',
                  as: 'item',
                },
              },
              { $unwind: { path: '$item', preserveNullAndEmptyArrays: true } },
            ],
          },
        },
      ]);
    })
    .then((query) => {
      result.stages = query ?? [];
      return result;
    });
};

module.exports = ordersGet;

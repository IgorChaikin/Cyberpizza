class Service{
    constructor(selectedId) {
        this.data = {
            selectedCategory: null,
            categories:[],
            items: [],
            orders: {
                ordered:[],
                baking:[],
                finishing:[],
                served:[]
            }
        };
        this.changeHandler = {};
    }

    start() {
        this.update();
        this.refresh = setInterval(()=> this.update(), 2000);
    }

    stop() {
        clearInterval(this.refresh);
    }

    getData(props) {
        return this.data
    }

    async getDataAsync(url, prop, query = {}){
        const params = Object.entries(query).map((value)=>`${value[0]}=${value[1]}`).join('&');
        return  fetch(`${url}?${params}`, {method: 'GET',}).then((res) => res.json())
            .then((data)=>this.data[prop] = data).catch(console.error);
    }

    checkChanges(oldData, newData) {
        if(oldData !== newData) {
            Object.keys(this.changeHandler)
                .forEach((elem) => {
                    if(typeof this.changeHandler[elem] === 'function') {
                        this.changeHandler[elem]();
                    }
                });
        }
    }

    getItems(id) {
        const cash = JSON.stringify(this.data);
        this.data.selectedCategory = id;
        this.getDataAsync('/items', 'items', {id: id})
            .then(()=>{
                const newData = JSON.stringify(this.data);
                this.checkChanges(cash, newData);
            }).catch(console.error)
    }

    postOrder(item){
        const cash = JSON.stringify(this.data);
        fetch(`/orders`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({item: item})
        })
            .then((res) => res.json())
            .then((data)=>{
                this.data.orders = data;
                const newData = JSON.stringify(this.data);
                this.checkChanges(cash, newData);
            }).catch(console.error);
    }

    update(){
        const cash = JSON.stringify(this.data);
        Promise.allSettled([
                this.getDataAsync('/categories', 'categories')
                .then(()=>{
                    //get items of some category only after all categories titles is loaded
                    this.data.selectedCategory = this.data.selectedCategory ?? this.data.categories[0]?.id;
                    return this.getDataAsync('/items', 'items', {id: this.data.selectedCategory});
                }),
                this.getDataAsync('/orders', 'orders')])
            .then((res)=>{
                const newData = JSON.stringify(this.data);
                if(res.findIndex((elem)=>elem.status==='rejected')===-1) {
                    //handle event if no one promise rejected
                    this.checkChanges(cash, newData);
                }
            });
    }

    addChangeListener(callback) {
        this.changeHandler[callback.name] = ()=>{callback();}
    }

    removeChangeListener(callback) {
        delete this.changeHandler[callback.name];
    }

}


export const dataSource = new Service();
dataSource.start();

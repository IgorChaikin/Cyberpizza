const getCookiesObj = require('../utils/getCookiesObj');

describe('Test /api/auth/register path', () => {
  it('Get cookies of null', () => {
    const result = getCookiesObj(null);
    expect(JSON.stringify(result)).toBe('{}');
  });

  it('Get cookies of undefined', () => {
    const result = getCookiesObj(undefined);
    expect(JSON.stringify(result)).toBe('{}');
  });

  it('Get cookies of empty string', () => {
    const result = getCookiesObj('');
    expect(JSON.stringify(result)).toBe('{}');
  });

  it('Get cookies of empty array', () => {
    const result = getCookiesObj([]);
    expect(JSON.stringify(result)).toBe('{}');
  });

  it('Get cookies of valid array', () => {
    const result = getCookiesObj([
      'cartId=6141e4db0370301538b04859; Max-Age=0; Path=/; Expires=Thu, 23 Sep 2021 10:20:00 GMT',
      'token=eyJh.yNwfQ.jog98; Max-Age=86; Path=/; Expires=Thu, 23 Sep 2021 10:21:26 GMT',
    ]);
    expect(result.cartId).toBe('6141e4db0370301538b04859');
    expect(result.token).toBe('eyJh.yNwfQ.jog98');
  });

  it('Get cookies of valid string', () => {
    const result = getCookiesObj('cartId=6141e4db0370301538b04859; token=eyJh.yNwfQ.jog98');
    expect(result.cartId).toBe('6141e4db0370301538b04859');
    expect(result.token).toBe('eyJh.yNwfQ.jog98');
  });
});

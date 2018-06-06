import * as request from 'supertest';
import * as koa from 'koa';

import { OrderRouter } from '../OrderRouter';

const fakeRepository = {
  find: jest.fn().mockResolvedValue([{ id: 1 }]),
  findOne: jest.fn().mockResolvedValue({ id: 1 }),
  save: jest
    .fn()
    .mockImplementation(
      obj => (obj.id ? { updated: true } : { created: true })
    ),
  remove: jest.fn().mockResolvedValue({})
};

const sut = new koa().use(OrderRouter(() => fakeRepository).routes());

describe('Given OrderRouter', () => {
  describe(`when get('/')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut.callback()).get('/order/');
      return result;
    });

    test('it should return a list', () => {
      return result.expect(200, [{ id: 1 }]);
    });
  });

  describe(`when get('/id')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut.callback()).get('/order/1');
      return result;
    });

    it('it should return an item', () => {
      return result.expect(200, { id: 1 });
    });
  });

  describe(`when post('/')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut.callback())
        .post('/order/')
        .send({ data: true });
      return result;
    });

    test('it should return a created item', () => {
      return result.expect(200, { created: true });
    });
  });

  describe(`when put('/id')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut.callback())
        .put('/order/1')
        .send({ id: 1 });
      return result;
    });

    test('it should return an updated item', () => {
      return result.expect(200, { updated: true });
    });
  });

  describe(`whe delete('/id')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut.callback()).delete('/order/1');
      return result;
    });

    test('it should return an empty item', () => {
      return result.expect(200);
    });
  });
});

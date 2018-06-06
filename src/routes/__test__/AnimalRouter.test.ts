import * as request from 'supertest';
import * as koa from 'koa';

import { AnimalRouter } from '../AnimalRouter';

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

const sut = new koa().use(AnimalRouter(() => fakeRepository).routes());

describe('Given AnimalRouter', () => {
  describe(`when get('/')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut.callback()).get('/animal/');
      return result;
    });

    test('it should return a list', () => {
      return result.expect(200, [{ id: 1 }]);
    });
  });

  describe(`when get('/id')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut.callback()).get('/animal/1');
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
        .post('/animal/')
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
        .put('/animal/1')
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
      result = request(sut.callback()).delete('/animal/1');
      return result;
    });

    test('it should return an empty item', () => {
      return result.expect(200);
    });
  });
});

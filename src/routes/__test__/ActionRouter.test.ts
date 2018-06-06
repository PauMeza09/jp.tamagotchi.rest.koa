import * as request from 'supertest';
import * as koa from 'koa';

import { ActionRepository } from '../../repositories/ActionRepository';

jest.mock('../../repositories/ActionRepository.ts');

ActionRepository.mockImplementation(() => fakeRepository);

import { ActionRouter } from '../ActionRouter';

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

const sut = new koa();

sut.use(ActionRouter.routes());

describe('Given ActionRouter', () => {
  describe(`when get('/')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut.callback()).get('action/');
    });

    test('it should return a list', () => {
      result.expect(200, [{ id: 1 }]);
    });

    test('it should have called ActionRepository.find', () => {
      expect(fakeRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe(`when get('/id')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut).get('action/1');
    });

    test('it should return an item', () => {
      result.expect(200, { id: 1 });
    });

    test('it should have called ActionRepository.findOne', () => {
      expect(fakeRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe(`when post('/')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut)
        .post('action/')
        .send({ data: true });
    });

    test('it should return a created item', () => {
      result.expect(200, { created: true });
    });

    test('it should have called ActionRepository.save', () => {
      expect(fakeRepository.save).toHaveBeenCalledTimes(1);
    });
  });

  describe(`when put('/id')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut)
        .post('action/1')
        .send({ id: 1 });
    });

    test('it should return an updated item', () => {
      result.expect(200, { updated: true });
    });

    test('it should have called ActionRepository.save', () => {
      expect(fakeRepository.save).toHaveBeenCalledTimes(1);
    });
  });

  describe(`whe delete('/id')`, () => {
    let result;

    beforeAll(() => {
      result = request(sut).delete('action/');
    });

    test('it should return an empty item', () => {
      result.expect(200, {});
    });

    test('it should have called ActionRepository.remove', () => {
      expect(fakeRepository.remove).toHaveBeenCalledTimes(1);
    });
  });
});

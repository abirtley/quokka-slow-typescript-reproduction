/* eslint-disable fp/no-nil, fp/no-unused-expression */
import { Sample } from '../../core/sample';

it('foo', () => {
  Sample(); //?
  expect(Sample()).toEqual('The API is live');
});

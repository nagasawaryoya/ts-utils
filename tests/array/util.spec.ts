import { ArrayUtil } from '@/array/util';

describe('ArrayUtilのテストを実行する。', (): void => {
  test('is関数の引数に配列が渡された際はtrueを返すことをテストする。', (): void => {
    expect(ArrayUtil.is([])).toBe(true);
  });

  test('is関数の引数に配列以外が渡された際はfalseを返すことをテストする。', (): void => {
    expect(ArrayUtil.is([])).toBe(true);
  });
});

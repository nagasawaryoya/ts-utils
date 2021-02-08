import { StringUtil } from '@/utils/stringUtil';

describe('StringUtilクラスのテストを実行する。', (): void => {
  describe('【メソッド】isのテストを実行する。', (): void => {
    it('引数に文字列が渡された場合は「true」を返すことをテストする。', (): void => {
      expect(StringUtil.is('あいうえお')).toBeTruthy();
    });

    it('引数に文字列以外が渡された場合は「false」を返すことをテストする。', (): void => {
      expect(StringUtil.is(['a'])).toBeFalsy();
      expect(StringUtil.is(0)).toBeFalsy();
      expect(StringUtil.is({ a: 1, b: '2' })).toBeFalsy();
    });
  });

  describe('【メソッド】isEmptyのテストを実行する。', (): void => {
    it('引数に渡された文字列が空の場合は「true」を返すことをテストする。', (): void => {
      expect(StringUtil.isEmpty('')).toBeTruthy();
    });

    it('引数に「null」か「undefined」が渡された場合は「true」を返すことをテストする。', (): void => {
      expect(StringUtil.isEmpty(null)).toBeTruthy();
      expect(StringUtil.isEmpty(undefined)).toBeTruthy();
    });

    it('引数に渡された文字列が空でない場合は「false」を返すことをテストする。', (): void => {
      expect(StringUtil.isEmpty('あいうえお')).toBeFalsy();
    });
  });

  describe('【メソッド】arrangeのテストを実行する。', (): void => {
    it('引数に渡された値を文字列にして返すことをテストする。', (): void => {
      console.log(typeof StringUtil.arrange(undefined));
      expect(StringUtil.arrange(1)).toBe('1');
      expect(StringUtil.arrange({ test: 'aaaa' })).toBe('{"test":"aaaa"}');
      expect(StringUtil.arrange(null)).toBe('null');
      expect(StringUtil.arrange(undefined)).toBe('undefined');
    });

    it('引数に渡された値が文字列の場合はそのまま返すことをテストする。', (): void => {
      expect(StringUtil.arrange('あいうえお')).toBe('あいうえお');
    });
  });

  describe('【メソッド】formatのテストを実行する。', (): void => {
    it('可変指定メッセージに文字列内の要素を順次穴埋めしていくことをテストする。', (): void => {
      expect(
        StringUtil.format({ text: 'あ{0}う{1}お', params: ['い', 'え'] })
      ).toBe('あいうえお');
    });
  });
});

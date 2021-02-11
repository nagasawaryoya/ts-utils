import { ArrayUtil } from '@/utils/arrayUtil';

const testArray = ['dog', 'dog', 'cat'];
const testUniqueArray = ['dog', 'cat', 'bird'];
const testObjectArray = [
  { id: 1, gender: 'man', like: 'dog' },
  { id: 2, gender: 'woman', like: 'dog' },
  { id: 3, gender: 'woman', like: 'cat' },
];
const deepNestArray = [
  [1, 2, 3],
  [4, 5, 6, [7, 8, 9]],
  [10, 11, 12, [13, 14, 15, [16, 17, 18]]],
  [19, 20, 21, [22, 23, 24, [25, 26, 27, [28, 29, 30]]]],
];
const deepNestObjectArray = [
  [{ a: 'a' }],
  [{ a: 'a' }, [{ a: 'a' }, { a: 'a' }]],
  [
    { a: 'a' },
    [{ a: 'a' }, { a: 'a' }, { a: 'a' }, [{ a: 'a' }, { a: 'a' }, { a: 'a' }]],
  ],
];

describe('ArrayUtilクラスのテストを実行する。', (): void => {
  describe('【メソッド】isのテストを実行する。', (): void => {
    it('引数に配列が渡された場合は「true」を返すことをテストする。', (): void => {
      expect(ArrayUtil.is([])).toBeTruthy();
      expect(ArrayUtil.is([[]])).toBeTruthy();
      expect(ArrayUtil.is(['a', 'b'])).toBeTruthy();
      expect(ArrayUtil.is([{ test: 'aaaa' }])).toBeTruthy();
      expect(ArrayUtil.is([undefined, null])).toBeTruthy();
      expect(ArrayUtil.is([{ test: null }])).toBeTruthy();
      expect(ArrayUtil.is([{ test: undefined }])).toBeTruthy();
    });

    it('引数に配列以外が渡された場合は「false」を返すことをテストする。', (): void => {
      expect(ArrayUtil.is('配列じゃない')).toBeFalsy();
      expect(ArrayUtil.is(0)).toBeFalsy();
      expect(ArrayUtil.is({ test: 'aaaa' })).toBeFalsy();
      expect(ArrayUtil.is(null)).toBeFalsy();
      expect(ArrayUtil.is(undefined)).toBeFalsy();
    });
  });

  describe('【メソッド】isEmptyのテストを実行する。', (): void => {
    it('引数に渡された配列が空の場合は「true」を返すことをテストする。', (): void => {
      expect(ArrayUtil.isEmpty([])).toBeTruthy();
    });

    it('引数に「null」か「undefined」が渡された場合は「true」を返すことをテストする。', (): void => {
      expect(ArrayUtil.isEmpty(null)).toBeTruthy();
      expect(ArrayUtil.isEmpty(undefined)).toBeTruthy();
    });

    it('引数に渡された配列が空でない場合は「false」を返すことをテストする。', (): void => {
      expect(ArrayUtil.isEmpty([[]])).toBeFalsy();
      expect(ArrayUtil.isEmpty(['a', 'b'])).toBeFalsy();
      expect(ArrayUtil.isEmpty([{ test: 'aaaa' }])).toBeFalsy();
      expect(ArrayUtil.isEmpty([undefined, null])).toBeFalsy();
      expect(ArrayUtil.isEmpty([{ test: null }])).toBeFalsy();
      expect(ArrayUtil.isEmpty([{ test: undefined }])).toBeFalsy();
    });
  });

  describe('【メソッド】arrangeのテストを実行する。', (): void => {
    it('引数に渡された値を配列にして返すことをテストする。', (): void => {
      expect(ArrayUtil.arrange('test')).toEqual(['test']);
      expect(ArrayUtil.arrange(1)).toEqual([1]);
      expect(ArrayUtil.arrange({ test: 'aaaa' })).toEqual([{ test: 'aaaa' }]);
      expect(ArrayUtil.arrange(null)).toEqual([null]);
      expect(ArrayUtil.arrange(undefined)).toEqual([undefined]);
    });

    it('引数に渡された値が配列の場合はそのまま返すことをテストする。', (): void => {
      expect(ArrayUtil.arrange(['test'])).toEqual(['test']);
      expect(ArrayUtil.arrange([1])).toEqual([1]);
      expect(ArrayUtil.arrange([{ test: 'aaaa' }])).toEqual([{ test: 'aaaa' }]);
      expect(ArrayUtil.arrange([null])).toEqual([null]);
      expect(ArrayUtil.arrange([undefined])).toEqual([undefined]);
      expect(
        ArrayUtil.arrange([
          { aaa: 'aaa', bbb: 'bbb' },
          { aaa: 'aaa', bbb: ['b', 'b', 'b'] },
        ])
      ).toEqual([
        { aaa: 'aaa', bbb: 'bbb' },
        { aaa: 'aaa', bbb: ['b', 'b', 'b'] },
      ]);
    });
  });

  describe('【メソッド】deepCopyのテストを実行する。', (): void => {
    it('引数に渡された値が配列の場合はコピーして返すことをテストする。', (): void => {
      expect(ArrayUtil.arrange(['test'])).toEqual(['test']);
      expect(ArrayUtil.arrange([1])).toEqual([1]);
      expect(ArrayUtil.arrange([{ test: 'aaaa' }])).toEqual([{ test: 'aaaa' }]);
      expect(ArrayUtil.arrange([null])).toEqual([null]);
      expect(ArrayUtil.arrange([undefined])).toEqual([undefined]);
      expect(
        ArrayUtil.arrange([
          { aaa: 'aaa', bbb: 'bbb' },
          { aaa: 'aaa', bbb: ['b', 'b', 'b'] },
        ])
      ).toEqual([
        { aaa: 'aaa', bbb: 'bbb' },
        { aaa: 'aaa', bbb: ['b', 'b', 'b'] },
      ]);
    });
  });

  describe('【メソッド】shallowCopyのテストを実行する。', (): void => {
    it('引数に渡された値が配列の場合はコピーして返すことをテストする。', (): void => {
      expect(ArrayUtil.arrange(['test'])).toEqual(['test']);
      expect(ArrayUtil.arrange([1])).toEqual([1]);
      expect(ArrayUtil.arrange([{ test: 'aaaa' }])).toEqual([{ test: 'aaaa' }]);
      expect(ArrayUtil.arrange([null])).toEqual([null]);
      expect(ArrayUtil.arrange([undefined])).toEqual([undefined]);
      expect(
        ArrayUtil.arrange([
          { aaa: 'aaa', bbb: 'bbb' },
          { aaa: 'aaa', bbb: ['b', 'b', 'b'] },
        ])
      ).toEqual([
        { aaa: 'aaa', bbb: 'bbb' },
        { aaa: 'aaa', bbb: ['b', 'b', 'b'] },
      ]);
    });
  });

  describe('【メソッド】duplicateのテストを実行する。', (): void => {
    it('引数に渡された配列内の重複した値の配列を返すことをテストする。', (): void => {
      expect(
        ArrayUtil.duplicate({ array: ['A', 'B', 'A', 'C', 'B', 'D'] })
      ).toEqual(['A', 'B']);
      expect(ArrayUtil.duplicate({ array: [1, 2, 1, 2, 3, 4] })).toEqual([
        1,
        2,
      ]);
    });

    it('引数に渡された配列内で重複した値がない場合は空の配列を返すことをテストする。', (): void => {
      expect(
        ArrayUtil.duplicate({ array: ['A', 'B', 'C', 'D', 'E', 'F'] })
      ).toEqual([]);
      expect(ArrayUtil.duplicate({ array: [1, 2, 3, 4, 5, 6] })).toEqual([]);
    });

    it('引数"ignore"に渡された値は重複を無視することをテストする。', (): void => {
      expect(
        ArrayUtil.duplicate({
          array: ['A', 'B', 'A', 'C', 'B', 'D'],
          ignore: 'A',
        })
      ).toEqual(['B']);
      expect(
        ArrayUtil.duplicate({ array: [1, 2, 1, 2, 3, 4], ignore: 1 })
      ).toEqual([2]);
    });
  });

  describe('【メソッド】findOneのテストを実行する。', (): void => {
    it('引数に渡されたobject配列"array"の"key"の値と"keyValue"が重複している値の先頭を返すことをテストする。', (): void => {
      expect(
        ArrayUtil.findOne({
          array: testObjectArray,
          keyValue: 'dog',
          key: 'like',
        })
      ).toEqual({ id: 1, gender: 'man', like: 'dog' });
    });

    it('引数に渡されたobject配列"array"の"key"の値と"keyValue"が重複している値がない場合は「null」を返すことをテストする。', (): void => {
      expect(
        ArrayUtil.findOne({ array: testObjectArray, keyValue: 4, key: 'id' })
      ).toBeNull();
    });
  });

  describe('【メソッド】findのテストを実行する。', (): void => {
    it('引数に渡されたobject配列"array"の"key"の値と"keyValue"が重複している値を全て返すことをテストする。', (): void => {
      expect(
        ArrayUtil.find({ array: testObjectArray, keyValue: 'dog', key: 'like' })
      ).toEqual([
        { id: 1, gender: 'man', like: 'dog' },
        { id: 2, gender: 'woman', like: 'dog' },
      ]);
    });

    it('引数に渡されたobject配列"array"の"key"の値と"keyValue"が重複している値がない場合は空の配列を返すことをテストする。', (): void => {
      expect(
        ArrayUtil.find({ array: testObjectArray, keyValue: 4, key: 'id' })
      ).toEqual([]);
    });
  });

  describe('【メソッド】uniqueのテストを実行する。', (): void => {
    describe('- 配列', (): void => {
      it('引数に渡された配列内の値を一意にして返すことをテストする。', (): void => {
        expect(ArrayUtil.unique({ array: testArray })).toEqual(['dog', 'cat']);
      });

      it('引数に渡された配列内の値が既に一意で合った場合はそのまま返すことをテストする。', (): void => {
        expect(ArrayUtil.unique({ array: testUniqueArray })).toEqual(
          testUniqueArray
        );
      });
    });

    describe('- object配列', (): void => {
      it('引数に渡された配列内の指定されたkeyの値を一意にして返すことをテストする。', (): void => {
        expect(
          ArrayUtil.unique({ array: testObjectArray, key: 'like' })
        ).toEqual([
          { id: 1, gender: 'man', like: 'dog' },
          { id: 3, gender: 'woman', like: 'cat' },
        ]);
      });

      it('引数に渡された配列内の指定されたkeyの値をが既に一意で合った場合はそのまま返すことをテストする。', (): void => {
        expect(ArrayUtil.unique({ array: testObjectArray, key: 'id' })).toEqual(
          testObjectArray
        );
      });
    });
  });

  describe('【メソッド】groupingのテストを実行する。', (): void => {
    describe('- 配列', (): void => {
      it('引数に渡された配列内の値をグループ化したobjectを返すことをテストする。', (): void => {
        expect(ArrayUtil.grouping({ array: testArray })).toEqual({
          cat: ['cat'],
          dog: ['dog', 'dog'],
        });
        expect(ArrayUtil.grouping({ array: testUniqueArray })).toEqual({
          bird: ['bird'],
          cat: ['cat'],
          dog: ['dog'],
        });
      });
    });

    describe('- object配列', (): void => {
      it('引数に渡された配列内の指定されたkeyの値をグループ化したobjectを返すことをテストする。', (): void => {
        expect(
          ArrayUtil.grouping({ array: testObjectArray, key: 'like' })
        ).toEqual({
          cat: [{ gender: 'woman', id: 3, like: 'cat' }],
          dog: [
            { gender: 'man', id: 1, like: 'dog' },
            { gender: 'woman', id: 2, like: 'dog' },
          ],
        });

        expect(
          ArrayUtil.grouping({ array: testObjectArray, key: 'id' })
        ).toEqual({
          1: [{ gender: 'man', id: 1, like: 'dog' }],
          2: [{ gender: 'woman', id: 2, like: 'dog' }],
          3: [{ gender: 'woman', id: 3, like: 'cat' }],
        });
      });
    });
  });

  describe('【メソッド】flattenのテストを実行する。', (): void => {
    it('引数に空の配列が渡された場合はそのまま返すことをテストする。', (): void => {
      expect(ArrayUtil.flatten([])).toEqual([]);
    });

    it('引数にネストのない配列が渡された場合はそのまま返すことをテストする。', (): void => {
      expect(ArrayUtil.flatten([0, 1, 2])).toEqual([0, 1, 2]);
      expect(ArrayUtil.flatten(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    it('引数にネストされた配列が渡された場合はフラット化して返すことをテストする。', (): void => {
      expect(ArrayUtil.flatten([[]])).toEqual([]);
      expect(ArrayUtil.flatten([[[]]])).toEqual([]);
      expect(ArrayUtil.flatten(deepNestArray)).toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
      ]);
      expect(ArrayUtil.flatten(deepNestObjectArray)).toEqual([
        { a: 'a' },
        { a: 'a' },
        { a: 'a' },
        { a: 'a' },
        { a: 'a' },
        { a: 'a' },
        { a: 'a' },
        { a: 'a' },
        { a: 'a' },
        { a: 'a' },
        { a: 'a' },
      ]);
    });
  });

  describe('【メソッド】maxLevelのテストを実行する。', (): void => {
    it('引数に空の配列が渡された場合は「0」を返すことをテストする。', (): void => {
      expect(ArrayUtil.maxLevel([])).toBe(0);
    });

    it('引数にネストのない配列が渡された場合は「0」を返すことをテストする。', (): void => {
      expect(ArrayUtil.maxLevel([0, 1, 2])).toBe(0);
      expect(ArrayUtil.maxLevel(['a', 'b', 'c'])).toBe(0);
    });

    it('引数にネストされた配列が渡された場合は階層（ネストの深さ）を返すことをテストする。', (): void => {
      expect(ArrayUtil.maxLevel([[]])).toBe(1);
      expect(ArrayUtil.maxLevel([[[]]])).toBe(2);
      expect(ArrayUtil.maxLevel(deepNestArray)).toBe(4);
      expect(ArrayUtil.maxLevel(deepNestObjectArray)).toBe(3);
    });
  });

  describe('【メソッド】rangeのテストを実行する。', (): void => {
    it('引数に"stop"のみ渡された場合は 0~stop までの数列を作成し、返すことをテストする。', (): void => {
      expect(ArrayUtil.range({ stop: 10 })).toEqual([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
      ]);
    });

    it('引数に"start"と"stop"が渡された場合は start~stop までの数列を作成し、返すことをテストする。', (): void => {
      expect(ArrayUtil.range({ start: 1, stop: 10 })).toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
      ]);
    });

    it('引数に"start"と"stop"と"step"が渡された場合は start~stop までの数列を step の感覚で増やしながら作成し、返すことをテストする。', (): void => {
      expect(ArrayUtil.range({ start: 2, stop: 10, step: 2 })).toEqual([
        2,
        4,
        6,
        8,
      ]);
    });
  });

  describe('【メソッド】isSupersetのテストを実行する。', (): void => {
    describe('引数"arrayA"は"arrayB"の「上位集合」であると同時に、"arrayB"は"arrayA"の「下位集合」である。', (): void => {
      it('引数"arrayA"の値は"arrayB"の値を全て含む場合は「true」を返すことをテストする。', (): void => {
        expect(
          ArrayUtil.isSuperset({
            arrayA: ['A', 'B', 'C', 'A'],
            arrayB: ['A', 'B', 'A'],
          })
        ).toBeTruthy();
      });
    });

    describe('二つの配列は集合の関係性に無い。', (): void => {
      it('引数"arrayA"の値は"arrayB"の値を全て含ない場合は「false」を返すことをテストする。', (): void => {
        expect(
          ArrayUtil.isSuperset({
            arrayA: ['A', 'B', 'A'],
            arrayB: ['A', 'B', 'C', 'A'],
          })
        ).toBeFalsy();
      });
    });
  });

  describe('【メソッド】unionのテストを実行する。', (): void => {
    it('引数"arrayA"と"arrayB"の値を含む全ての値をユニークにして返すことをテストする。', (): void => {
      expect(
        ArrayUtil.union({
          arrayA: ['A', 'B', 'C', 'A'],
          arrayB: ['A', 'B', 'A'],
        })
      ).toEqual(['A', 'B', 'C']);
    });
  });

  describe('【メソッド】intersectionのテストを実行する。', (): void => {
    it('引数"arrayA"と"arrayB"の値に重複する全ての値をユニークにして返すことをテストする。', (): void => {
      expect(
        ArrayUtil.intersection({
          arrayA: ['A', 'B', 'C', 'A'],
          arrayB: ['A', 'B', 'A'],
        })
      ).toEqual(['A', 'B']);
    });

    it('引数"arrayA"と"arrayB"の値に重複する値が無い場合は空の配列を返すことをテストする。', (): void => {
      expect(
        ArrayUtil.intersection({
          arrayA: ['A', 'B', 'C', 'A'],
          arrayB: ['X', 'Y', 'Z'],
        })
      ).toEqual([]);
    });
  });

  describe('【メソッド】differenceのテストを実行する。', (): void => {
    it('引数"arrayA"の値の中から"arrayB"の値を取り除いた値を全て返すことをテストする。', (): void => {
      expect(
        ArrayUtil.difference({
          arrayA: ['A', 'B', 'C', 'A', 'D'],
          arrayB: ['A', 'B', 'A', 'E'],
        })
      ).toEqual(['C', 'D']);
    });

    it('引数"arrayA"と"arrayB"の値が全て同じ場合は空の配列を返すことをテストする。', (): void => {
      expect(
        ArrayUtil.difference({
          arrayA: ['A', 'B', 'C', 'A', 'D'],
          arrayB: ['A', 'B', 'C', 'A', 'D'],
        })
      ).toEqual([]);
    });
  });

  describe('【メソッド】swapのテストを実行する。', (): void => {
    it('引数で受け取った要素同士の配列内の順序を入れ替えた配列を返すことをテストする。', (): void => {
      expect(
        ArrayUtil.swap<string>({
          array: ['A', 'B', 'C', 'D', 'E'],
          index1: 1,
          index2: 2,
        })
      ).toEqual(['A', 'C', 'B', 'D', 'E']);
    });

    it('引数"index1"と"index2"の値が同じ場合は入れ替えずに配列を返すことをテストする。', (): void => {
      expect(
        ArrayUtil.swap<string>({
          array: ['A', 'B', 'C', 'D', 'E'],
          index1: 2,
          index2: 2,
        })
      ).toEqual(['A', 'B', 'C', 'D', 'E']);
    });
  });
});

/**
 * プリミティブ型
 */
export type Primitive = boolean | number | string | bigint | symbol | undefined;

/**
 * keyの値でグループ化したオブジェクトの型
 */
export type GroupObj<T> = {
  [key in string | number]: T[];
};

/**
 * 配列ユーティリティークラス
 */
export class ArrayUtil {
  /**
   * 値が配列であるか検証する。
   *
   * @param {any} arg 対象要素
   * @returns {boolean} true: 配列である false: 配列でない
   */
  public static is(arg: any): arg is Array<any> {
    return arg && Array.isArray(arg);
  }

  /**
   * 配列が空か検証する。
   *
   * @param {T[] | null | undefined} array 対象配列
   * @returns {boolean} true: 配列である false: 配列でない
   */
  public static isEmpty<T>(array: T[] | null | undefined): boolean {
    return !array || array.length === 0;
  }

  /**
   * 値を配列にして返却する。
   *
   * @param {T} arg 値
   * @returns {T[]}
   */
  public static arrange<T>(arg: any): T[] {
    return this.is(arg) ? arg : [arg];
  }

  /**
   * 配列をdeepコピーする。
   *
   * @param {T[]} array 値
   * @returns {T[]} deepコピーした配列
   */
  public static deepCopy<T>(array: T[]): T[] {
    return JSON.parse(JSON.stringify(array));
  }

  /**
   * 配列をshallowコピーする。
   *
   * @param {T[]} array 値
   * @returns {T[]} shallowコピーした配列
   */
  public static shallowCopy<T>(array: T[]): T[] {
    return [...array];
  }

  /**
   * 配列内の重複値の配列を返却する。
   *
   * @param {T[]} array 対象配列
   * @param {T | undefined} ignore 無視する値
   * @returns {T[]} 重複値配列 (未存在の場合は空配列を返却)
   */
  public static duplicate<T>({
    array,
    ignore,
  }: {
    array: T[];
    ignore?: T | undefined;
  }): T[] {
    return [
      ...new Set(
        array.filter(
          (e, _, self) =>
            self.indexOf(e) !== self.lastIndexOf(e) && e !== ignore
        )
      ),
    ];
  }

  /**
   * object配列を指定keyの値で検索しkeyValueとkey重複している値の先頭を返却する。
   *
   * @param {T[]} array 対象配列
   * @param {Primitive} keyValue 検証値
   * @param {string} key キーフィールド名
   * @returns {T | null} 検索結果配列の先頭の値 | 未存在
   */
  public static findOne<T>({
    array,
    keyValue,
    key,
  }: {
    array: T[];
    keyValue: Primitive;
    key: keyof T;
  }): T | null {
    return array.filter((ar: any) => ar[key] === keyValue)[0] ?? null;
  }

  /**
   * object配列を指定keyの値で検索しkeyValueとkey重複している値を全て返却する。
   *
   * @param {T[]} array 対象配列
   * @param {Primitive} keyValue 検証値
   * @param {string} key キーフィールド名
   * @returns {T[]} 検索結果配列 (未存在の場合は空配列を返却)
   */
  public static find<T>({
    array,
    keyValue,
    key,
  }: {
    array: T[];
    keyValue: Primitive;
    key: keyof T;
  }): T[] {
    return array.filter((ar: any) => ar[key] === keyValue);
  }

  /**
   * 配列内の値を一意にして返却する。
   * keyが指定されている時は、object配列
   *
   * @param {T[]} array 対象配列
   * @param {string} key キーフィールド名
   * @returns {T[]}: 値が一意な配列
   */
  public static unique<T>({ array, key }: { array: T[]; key?: keyof T }): T[] {
    return array.filter(
      ((set) => (data: T) => {
        const value = key ? data[key] : data;
        return !set.has(value) && set.add(value);
      })(new Set())
    );
  }

  /**
   * 配列を指定した値でグループ化して返却する。
   * keyが指定されている時は、object配列
   *
   * @param {T[]} array 対象配列
   * @param {keyof T} key キーフィールド名
   * @returns {GroupObj<T>} 値でグループ化されたobject
   */
  public static grouping<T>({
    array,
    key,
  }: {
    array: T[];
    key?: keyof T;
  }): GroupObj<T> {
    const groupObj: GroupObj<T> = {};
    array.map((value) => {
      const groupKey = key ? value[key] : value;
      (groupObj[`${groupKey}`] = groupObj[`${groupKey}`] ?? []).push(value);
    });

    return groupObj;
  }

  /**
   * 配列を指定した値でフラット化して返却する。
   *
   * @param {any[]} array 対象配列
   * @returns {T[]} フラット化した配列
   */
  public static flatten<T>(array: any[]): T[] {
    if (array.every((arr: unknown[]) => !this.is(arr))) {
      return array;
    }

    return this.flatten([].concat.apply([], array));
  }

  /**
   * 配列内の最大階層（ネストの深さ）を返却する。
   * [] => 0
   * [[]] => 1
   *
   * @param {any[]} array 対象配列
   * @returns {number} 最大階層
   */
  public static maxLevel(array: any[]): number {
    if (array.every((arr: unknown[]) => !this.is(arr))) {
      return 0;
    }

    return 1 + this.maxLevel([].concat.apply([], array));
  }

  /**
   * 任意の範囲、増分の等差数列作成する。
   *
   * @param {number} start 数列の開始
   * @param {number} stop 数列の終了
   * @param {number} step 数列の増分
   * @returns {number[]} 数列
   */
  public static range({
    start,
    stop,
    step,
  }: {
    start?: number;
    stop: number;
    step?: number;
  }): number[] {
    const range: number[] = [];
    for (let i = start ?? 0; i < stop; i += step ?? 1) {
      range.push(i);
    }

    return range;
  }

  /**
   * arrayAはarrayBの上位集合であるか検証する。
   *
   * trueの場合:
   * arrayAはarrayBの上位集合（スーパーセット）である。
   * arrayBはarrayAの下位集合（サブセット）である。
   *
   * @param {T[]} arrayA 対象配列A
   * @param {T[]} arrayB 対象配列B
   * @returns {boolean}
   */
  public static isSuperset<T>({
    arrayA,
    arrayB,
  }: {
    arrayA: T[];
    arrayB: T[];
  }): boolean {
    const setA = new Set(arrayA);

    return arrayB.every((arrB) => setA.has(arrB));
  }

  /**
   * arrayAとarrayBの和集合を返却する。
   *
   * @param {T[]} arrayA 対象配列A
   * @param {T[]} arrayB 対象配列B
   * @returns {T[]} 和集合
   */
  public static union<T>({
    arrayA,
    arrayB,
  }: {
    arrayA: T[];
    arrayB: T[];
  }): T[] {
    const union = new Set(arrayA);
    arrayB.map((arrB) => union.add(arrB));

    return Array.from<T>(union);
  }

  /**
   * arrayAとarrayBの積集合を返却する。
   *
   * @param {T[]} arrayA 対象配列A
   * @param {T[]} arrayB 対象配列B
   * @returns {T[]} 積集合
   */
  public static intersection<T>({
    arrayA,
    arrayB,
  }: {
    arrayA: T[];
    arrayB: T[];
  }): T[] {
    const setA = new Set(arrayA);
    const intersection: Set<T> = new Set();
    arrayB
      .filter((arrB) => setA.has(arrB))
      .map((arrB) => intersection.add(arrB));

    return Array.from<T>(intersection);
  }

  /**
   * arrayAとarrayBの差集合を返却する。
   *
   * @param {T[]} arrayA 対象配列A
   * @param {T[]} arrayB 対象配列B
   * @returns {T[]} 差集合
   */
  public static difference<T>({
    arrayA,
    arrayB,
  }: {
    arrayA: T[];
    arrayB: T[];
  }): T[] {
    const difference = new Set(arrayA);
    arrayB.map((arrB) => difference.delete(arrB));

    return Array.from<T>(difference);
  }

  /**
   * 引数で受け取った要素同士の配列内の順序を入れ替える。
   *
   * @param {T[]} array 順序入れ替え前の配列
   * @param {number} index1 入れ替える要素のindex1
   * @param {number} index2 入れ替える要素のindex2
   * @returns {T[]} 順序入れ替え後の配列
   */
  public static swap<T>({
    array,
    index1,
    index2,
  }: {
    array: T[];
    index1: number;
    index2: number;
  }): T[] {
    const tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
    return array;
  }

  /**
   * 深さnのオブジェクト配列を探索し、任意の値と一致したオブジェクトを取り除いた配列を返却する。
   *
   * @param {any[]} array 対象配列
   * @param {string | number} value 任意の値
   * @param {string | number} targetKey オブジェクト内の対象のkey
   * @param {string | number} childrenKey 配列内を掘るための葉ノードのkey
   * @returns {any[]} オブジェクト配列
   */
  public static removeTreeValue({
    tree,
    value,
    targetKey = 'id',
    childrenKey = 'children',
  }: {
    tree: any[];
    value: string | number;
    targetKey?: string | number;
    childrenKey?: string | number;
  }): any[] {
    return tree.filter((tr) => {
      if (tr[targetKey] === value) {
        return false;
      } else if (tr[childrenKey] && tr[childrenKey].length > 0) {
        tr[childrenKey] = this.removeTreeValue({
          tree: tr[childrenKey],
          value: value,
          targetKey: targetKey,
          childrenKey: childrenKey,
        });
      }
      return true;
    });
  }
}

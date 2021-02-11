/**
 * 文字列ユーティリティークラス
 */
export class StringUtil {
  /**
   * 値が文字列であるか検証する。
   *
   * @param {any} arg 対象要素
   * @returns {boolean} true: 文字列である false: 文字列でない
   */
  public static is(arg: any): arg is string {
    return typeof arg === 'string';
  }

  /**
   * 文字列が空か検証する。
   *
   * @param {string} arg 対象要素
   * @returns {boolean} true: 文字列である false: 文字列でない
   */
  public static isEmpty(arg: string | null | undefined): boolean {
    return !arg || arg.length === 0;
  }

  /**
   * 値を文字列にして返却する。
   *
   * @param {any} arg 値
   * @returns {string}
   */
  public static arrange(arg: any): string {
    if (this.is(arg)) {
      return arg;
    } else if (typeof arg === 'object') {
      return JSON.stringify(arg);
    } else {
      return `${arg}`;
    }
  }

  /**
   * メッセージ文フォーマット
   *
   * @param {string} text メッセージ文
   * @param {any[]} params 可変値パラメータ
   * @returns {string} フォーマット後の文字列
   *
   * @description
   * 'あああ{0}いいいい{1}うううう'などの可変指定メッセージのフォーマットを行う。
   */
  public static format({
    text,
    params,
  }: {
    text: string;
    params: any[];
  }): string {
    for (let i = 0; i < params.length; i++) {
      text = text.replace(new RegExp('\\{' + i + '\\}', 'g'), params[i]);
    }
    return text;
  }
}

/**
 * 文字列ユーティリティークラス
 */
export class stringUtil {
  /**
   * メッセージ文フォーマット
   * 'あああ{0}いいいい{1}うううう'などの可変指定メッセージのフォーマットを行う。
   *
   * @param string text メッセージ文
   * @param any[] params 可変値パラメータ
   * @returns フォーマット後の文字列
   */
  public static format(text: string, ...params: any[]): string {
    for (let i = 0; i < params.length; i += 1) {
      text = text.replace(new RegExp('\\{' + i + '\\}', 'g'), params[i]);
    }
    return text;
  }
}

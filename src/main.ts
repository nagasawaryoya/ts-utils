import { StringUtil } from './utils/stringUtil';

function start() {
  return StringUtil.format({ text: 'あ{0}う{1}お', params: ['い', 'え'] });
  // StringUtil.format('あ{0}う{1}お', ['い', 'え']);
}

console.log(start());

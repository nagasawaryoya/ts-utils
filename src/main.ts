import { performance } from 'perf_hooks';
// import { SortUtil } from './utils/sortUtil';

/***
 * min以上max未満の乱数を返却する。
 *
 * @param number min 最小値（整数）
 * @param number max 最大値（整数）
 * @returns number 乱数
 */
function getRandomInt({ min, max }: { min: number; max: number }): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * 整数の乱数配列を生成する。
 *
 * @param min number 最小値（整数）
 * @param length number 生成する配列の長さ
 * @returns 整数の乱数配列
 */
function getRandomArray({ min, length }: { min: number; length: number }): number[] {
  const initAry: number[] = [];
  const arr: number[] = [];

  for (let i = 0; i < length; i++) {
    initAry.push(min + i);
  }

  while (initAry.length > 0) {
    arr.push(
      initAry
        .splice(getRandomInt({ min: min, max: initAry.length }), 1)
        .slice(-1)[0]
    );
  }

  return arr;
}

function start() {
  const arr = getRandomArray({ min: 0, length: 10000 });

  // 実行
  const startTime = performance.now();
  // ソート関数呼び出し

  const endTime = performance.now();
  console.log(endTime - startTime);
}

start();

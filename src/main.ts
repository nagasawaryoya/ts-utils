// /**
//  * 引数で受け取った配列を挿入ソートして返却する。
//  *
//  * @param arr number[] ソートする配列
//  * @returns number[]
//  */
// function insert(arr: number[], count: number = 0): number[] {
//   let current = count;
//   while (count < arr.length) {
//     if (current >= 0 && arr[current] < arr[current - 1]) {
//       arr = swap({ array: arr, index1: current, index2: current - 1 });
//       current--;
//     } else {
//       current = count++;
//     }
//   }
//   return arr;
// }

// /**
//  * 引数で受け取った配列を挿入ソートして返却する。(再帰ver)
//  *
//  * @param arr number[] ソートする配列
//  * @returns number[]
//  */
// function insertRecursion(arr: number[], count: number = 0): number[] {
//   let current = count;
//   while (current >= 0 && arr[current] < arr[current - 1]) {
//     arr = swap({ array: arr, index1: current, index2: current - 1 });
//     current--;
//   }
//   return count === arr.length ? arr : insertRecursion(arr, count + 1);
// }

// /**
//  * 引数で受け取った要素同士の配列内の順序を入れ替える。
//  *
//  * @param arr number[] ソートする配列
//  * @returns number[]
//  */
// function swap({
//   array,
//   index1,
//   index2,
// }: {
//   array: number[];
//   index1: number;
//   index2: number;
// }): number[] {
//   const tmp = array[index1];
//   array[index1] = array[index2];
//   array[index2] = tmp;
//   return array;
// }

// /***
//  * min以上max未満の乱数を返却する。
//  *
//  * @param number min 最小値（整数）
//  * @param number max 最大値（整数）
//  * @returns number 乱数
//  */
// function getRandomInt({ min, max }: { min: number; max: number }): number {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// /**
//  * 整数の乱数配列を生成する。
//  *
//  * @param min number 最小値（整数）
//  * @param length number 生成する配列の長さ
//  * @returns 整数の乱数配列
//  */
// function getRandomArray({
//   min,
//   length,
// }: {
//   min: number;
//   length: number;
// }): number[] {
//   const initAry: number[] = [];
//   const arr: number[] = [];
//   for (let i = 0; i < length; i++) {
//     initAry.push(min + i);
//   }
//   while (initAry.length > 0) {
//     arr.push(
//       initAry
//         .splice(getRandomInt({ min: min, max: initAry.length }), 1)
//         .slice(-1)[0]
//     );
//   }
//   return arr;
// }
// function start() {
//   // const arr = getRandomArray({ min: 0, length: 8909 });
//   const arr = getRandomArray({ min: 0, length: 10 });
//   // 実行
//   console.log(insert(arr));
//   // console.log(isort(arr));
// }
// start();

// ==================================================
// ==================================================
// ==================================================

const test2: any[] = [
  {
    id: '1',
    child: [{ id: '2' }, { id: '3' }],
  },
  {
    id: '4',
    child: [{ id: '5' }, { id: '6' }],
  },
  {
    id: '7',
    child: [
      { id: '8' },
      {
        id: '9',
        child: [
          { id: '10' },
          {
            id: '11',
            child: [{ id: '12' }],
          },
        ],
      },
    ],
  },
];

const removeTreeValue = ({
  tree,
  value,
  targetKey = 'id',
  childrenKey = 'children',
}: {
  tree: any[];
  value: string | number;
  targetKey?: string | number;
  childrenKey?: string | number;
}): any[] => {
  return tree.filter((tr) => {
    if (tr[targetKey] === value) {
      return false;
    } else if (tr[childrenKey] && tr[childrenKey].length > 0) {
      tr[childrenKey] = removeTreeValue({
        tree: tr[childrenKey],
        value: value,
        targetKey: targetKey,
        childrenKey: childrenKey,
      });
    }
    return true;
  });
};

console.log(
  removeTreeValue({
    tree: test2,
    value: '2',
  })
);

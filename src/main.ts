var test = [
  {
      p: 1,
      c: 1,
      depath: 0
  },
  {
      p: 1,
      c: 2,
      depath: 1
  },
  {
      p: 1,
      c: 3,
      depath: 2
  },
  // {
  //     p: 1,
  //     c: 4,
  //     depath: 1
  // },
  // {
  //     p: 1,
  //     c: 9,
  //     depath: 3
  // },
  // {
  //     p: 1,
  //     c: 10,
  //     depath: 3
  // },
  // {
  //     p: 1,
  //     c: 11,
  //     depath: 4
  // },
  {
      p: 2,
      c: 2,
      depath: 0
  },
  {
      p: 2,
      c: 3,
      depath: 1
  },
  // {
  //     p: 3,
  //     c: 3,
  //     depath: 0
  // },
  // {
  //     p: 4,
  //     c: 4,
  //     depath: 0
  // },
  // {
  //     p: 5,
  //     c: 5,
  //     depath: 0
  // },
  // {
  //     p: 6,
  //     c: 6,
  //     depath: 0
  // },
  // {
  //     p: 7,
  //     c: 7,
  //     depath: 0
  // },
  // {
  //     p: 8,
  //     c: 8,
  //     depath: 0
  // },
];

const align = (roots: any[], nodes: any[], results: any[] = [], isNext = false): any => {
  const currentRoot = getRootOne(roots);
  // const participants = findParticipants(currentRoot[currentRoot.length - 1], nodes);
  let participants = [];
  console.log(currentRoot);
  if (!isNext) {
      participants = findParticipants(currentRoot.slice(-2)[0], nodes);
  } else {
      participants = findParticipants(currentRoot.slice(-1)[0], nodes);
  }

  if (participants.length) {
      // 下階層がないか探索
      isNext = false;
      const underLevelIndex = findUnderLevelIndex(participants);
      const node = nodes.splice(underLevelIndex, 1)[0];
      currentRoot.push(node);
  } else {
      // 次にすすむ
      isNext = true;
      results.push(roots.shift());
  }

  return (!nodes.length || !roots.length) ? results : align(roots, nodes, results, isNext);
};

// ルートでないことを確認する
const notRoot = (node: any) => node.p !== node.c;
// ルートの関係者のノードの配列を返却
const findParticipants = (root: any, nodes: any[]) => (
  nodes
  .filter((n: any) => notRoot(n))
  .filter((n: any) => root.p === n.p)
);
// ルートのみの配列を作成する
const findRoot = (roots: any) => roots.filter((root: any) => root.p === root.c).map((root: any) => [root]);
// ルートの先頭を非破壊的に取得
const getRootOne = (roots: any[]) => [...roots][0];
// 直下の階層のノードを探索する
const findUnderLevelIndex = (nodes: any) => {
  const depaths = nodes
      .filter((node: any) => notRoot(node))
      .map((node: any) => node.depath);
  return Math.min(...depaths);
};

const create = (array: any) => {
  const roots = findRoot(array);
  return align(roots, test);
};

// console.log(create(test));
create(test);
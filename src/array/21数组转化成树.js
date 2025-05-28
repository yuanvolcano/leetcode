const list = [
  ['a', 'aa', 'aaa', 'aaaa'],
  ['b', 'bb', 'bbb'],
  ['a', 'ab', 'aba'],
  ['a', 'aa', 'aab'],
];
// 转为：
const tree = [
  {
    name: 'a',
    child: [
      {
        name: 'aa',
        child: [
          {
            name: 'aaa',
            child: [
              {
                name: 'aaaa',
                child: [],
              },
            ],
          },
          {
            name: 'aab',
            child: [],
          },
        ],
      },
      {
        name: 'ab',
        child: [
          {
            name: 'aba',
            child: [],
          },
        ],
      },
    ],
  },
  {
    name: 'b',
    child: [
      {
        name: 'bb',
        child: [
          {
            name: 'bbb',
            child: [],
          },
        ],
      },
    ],
  },
];

function transformListToTree(list) {
  const result = [];
  for (let childList of list) {
    for (let item of childList) {
      findParentNode(item, result);
    }
  }
  return result;
}

function findParentNode(value, list, index = 1) {
  let val = value.slice(0, index);
  const curNode = list.find((item) => item.name === val);
  if (index === value.length && curNode) return;
  if (curNode && curNode.child) {
    findParentNode(value, curNode.child, ++index);
  } else {
    list.push({
      name: value,
      child: [],
    });
  }
}

const result = transformListToTree(list);
console.log(result);

/**
 * 将扁平列表转换为树形结构
 * @param {Array<{code: string, parentCode: string, name: string}>} list - 扁平列表数据
 * @returns {Array} 树形结构数据
 */
const listToTree = (list) => {
  // 使用 Map 存储所有节点，key 为 code
  const nodeMap = new Map(list.map((item) => [item.code, { ...item, children: [] }]));
  const tree = [];

  // 构建树形结构
  for (const [code, node] of nodeMap) {
    const parent = nodeMap.get(node.parentCode);
    if (parent) {
      parent.children.push(node);
    } else {
      tree.push(node);
    }
  }

  return tree;
};

// 测试数据
const list = [
  {
    code: '1001',
    parentCode: '',
    name: '北京',
  },
  {
    code: '10011',
    parentCode: '1001',
    name: '海淀',
  },
  {
    code: '10012',
    parentCode: '1001',
    name: '大兴',
  },
  {
    code: '100112',
    parentCode: '10011',
    name: '五道口',
  },
  {
    code: '1002',
    parentCode: '',
    name: '上海',
  },
  {
    code: '10022',
    parentCode: '1002',
    name: '徐汇',
  },
  {
    code: '1003',
    parentCode: '',
    name: '武汉',
  },
];

const tree = listToTree(list);
console.log(JSON.stringify(tree, null, 2));

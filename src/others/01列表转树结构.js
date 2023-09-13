const listTransferTree2 = function (list) {
  const idMap = new Map(), tree = []
  for (const item of list) {
    idMap.set(item.code, item)
  }
  for (const item of list) {
    const parent = idMap.get(item.parentCode)
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(item)
    } else {
      tree.push(item)
    }
  }
  return tree
}

const list = [
  {
    code: '1001',
    parentCode: '',
    name: '北京'
  },
  {
    code: '10011',
    parentCode: '1001',
    name: '海淀'
  },
  {
    code: '10012',
    parentCode: '1001',
    name: '大兴'
  },
  {
    code: '100112',
    parentCode: '10011',
    name: '五道口'
  },
  {
    code: '1002',
    parentCode: '',
    name: '上海'
  },
  {
    code: '10022',
    parentCode: '1002',
    name: '徐汇'
  },
  {
    code: '1003',
    parentCode: '',
    name: '武汉'
  }

]

const tree = listTransferTree2(list)
console.log(tree)

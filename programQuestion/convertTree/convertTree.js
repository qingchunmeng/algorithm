/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-02-28 21:06:37
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-02-28 21:09:03
 * @FilePath: /algorithm/programQuestion/converTree.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 实现 convert 方法，把原始 list 转换成树形结构， 要求尽可能降低时间复杂度
// 以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编 号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换 成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如 下:
// 图片见文件夹
function convert(list) {
    let len = list.length;
    let map = new Map();
    let result = [];
    for (let i = 0; i < len; i++) {
      let temp = list[i];
      if (!map.has(temp.parentId)) {
        map.set(temp.parentId, []);
      }
      map.get(temp.parentId).push(temp);
    }
  
    for(let key of map.keys()) {
      let temp = map.get(key);
      let tempLength = temp.length;
      for (let i = 0; i < tempLength; i++) {
        let node = temp[i];
        if (map.has(node.id)) {
          node.children = map.get(node.id);
        }
        if (key == 0) {
          result.push(node);
        }  
      }
    }
    return result;
  }
  
  let list = [{
    id: 1, name: '部门A',parentId: 0
  },{
    id: 2, name: '部门B',parentId: 0
  },{
    id: 3, name: '部门C',parentId: 1
  },{
    id: 4, name: '部门D',parentId: 1
  },{
    id: 5, name: '部门E',parentId: 2
  },{
    id: 6, name: '部门F',parentId: 3
  },{
    id: 7, name: '部门G',parentId: 2
  },{
    id: 8, name: '部门H',parentId: 4
  },{
    id: 9, name: '部门I',parentId: 5
  }];
  
  const result = convert(list);
  console.log('***********');
  console.log(result);
  console.log(JSON.stringify(result));
  
  
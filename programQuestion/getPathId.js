/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-02-28 21:14:24
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-02-28 21:14:53
 * @FilePath: /algorithm/programQuestion/getPathId.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */




function getPathById(catalog, id, callback){
    //定义变量保存当前结果路径
    let temppath = [];
    try {
      function getNodePath(node) {
        temppath.push(node.id);
  
        //找到符合条件的节点，通过throw终止掉递归
        if (node.id === id) {
          throw ('GOT IT!');
        }
        if (node.children && node.children.length > 0) {
          for (let i = 0; i < node.children.length; i++) {
            getNodePath(node.children[i]);
          }
          //当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
          temppath.pop();
        } else {
          //找到叶子节点时，删除路径当中的该叶子节点
          temppath.pop();
        }
      }
      getNodePath(catalog);
    } catch (e) {
      let result = temppath;
      callback(result);
    }
  }


  let catalog = {
    id: 1001,
    children: [
      {
        id: 100101,
        children: [
          {id: 10010101, children: []},
          {id: 10010102, children: []},
        ]
      },
      {
        id: 100102,
        children: [
          {id: 10010201, children: []},
          {id: 10010202, children: []},
          {id: 10010203, children: []}
        ]
      },
    ]
};

getPathById(catalog, 10010202, res => {
    let path = res.join('->');
    console.log(path);
});



/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-02-28 21:21:53
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-02-28 21:25:58
 * @FilePath: /algorithm/programQuestion/genArr.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
 
// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
  function generArray (arr) {
    arr = Array.from(new Set(arr)).sort((a, b) => a - b);
    let map = new Map();
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let t = Math.floor(arr[i]/10);
      console.log('arr[i]--',arr[i])
      if (!map.has(t)) {
        console.log('map.has(t',arr[i])
        map.set(t,[arr[i]]);
      } else {
        console.log('已经有了',arr[i])
        map.get(t).push(arr[i]);
      }  
    }
    console.log('map', map);
    let result = [];
    let mapKeys = map.keys();
    for (let key of mapKeys) {
      result.push(map.get(key));
    }
    return result;
  }
  
  let arr1 = [2, 10, 3, 4, 5, 11, 10, 11, 20];
  let y = generArray(arr1);
  console.log('y-------');
  console.log(y);
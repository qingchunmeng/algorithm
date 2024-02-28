/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-02-28 21:23:00
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-02-28 21:25:21
 * @FilePath: /algorithm/programQuestion/rotateArr.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
示例 1:
输入:[1,2,3,4,5,6,7] 和 k=3 输出:[5,6,7,1,2,3,4] 解释: 向右旋转 1 步: [7,1,2,3,4,5,6] 向右旋转 2 步:[6,7,1,2,3,4,5] 向右旋转 3 步:[5,6,7,1,2, 3, 4]
示例 2:
输入:[-1,-100,3,99] 和 k=2 输出:[3,99,-1,-100] 解释: 向右旋转 1 步:[99, -1, -100, 3] 向右旋转 2 步: [3, 99, -1, -100]
*/


function rotateArray(arr, k) {
    let len = arr.length;
    let step = k % len;
    return arr.slice(len - step, len).concat(arr.slice(0, len-k));
  }
  
  let arr3 = [1,2,3,4,5,6];
  console.log(rotateArray(arr3, 7))
  
 // 或者
  function fn (arr) {
    let len = arr.length;
    let k = 0;
    for (let i = 0; i < len - k; i++) {
      let temp = arr[i];
      if (temp === 0) {
        arr.splice(i, 1);
        arr.push(temp);
        i --;
        k ++;
      }
    }
    return arr;
  }
  
  const m = [0, 1, 0, 3, 12];
  console.log(fn(m));
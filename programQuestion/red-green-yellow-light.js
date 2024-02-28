/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-02-28 21:18:08
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-02-28 21:18:14
 * @FilePath: /algorithm/programQuestion/red-green-yellow-light.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function light(time, cb) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        cb();
        resolve();
      }, time);
    });
  }
  const red = () => {
    console.log('red');
  }
  const green = () => {
    console.log('green');
  }
  const yellow = () => {
    console.log('yellow');
  }
  var step = function () {
    Promise.resolve().then(function () {
      return light(3000, red);
    }).then(function () {
      return light(2000, green)
    }).then(function (){
      return light(1000, yellow);
    }).then(function(){
      step();
    });
  }
  
  step();
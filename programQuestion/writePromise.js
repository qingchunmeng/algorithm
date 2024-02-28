/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-02-28 21:20:19
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-02-28 21:20:24
 * @FilePath: /algorithm/programQuestion/writePromise.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Promise.prototype.finally = function(callback) {
    let P = this.constructor;
    return this.then(res => P.resolve(callback()).then(() => res), reason =>
      P.resolve(callback()).then(() => {
        throw reason;
      }));
  }
  
  
  Promise.prototype.finally = function(callback) {
    let P = this;
    return this.then(val => this.resolve(callback).then(() => val), error => this.resolve(callback).then(() => {throw error}));
  }
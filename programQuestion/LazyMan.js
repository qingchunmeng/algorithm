/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-02-28 21:16:19
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-02-28 21:16:24
 * @FilePath: /algorithm/programQuestion/LazyMan.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

class LazyManClass {
    constructor(name) {
      this.name = name;
      console.log(`Hi, I am ${name}`);
      this.queue = [];
      setTimeout(() => {
        this.next();
      }, 0);
    }
    sleep (time) {
      let self = this;
      const fn = () => {
        return new Promise((resolve, reject) => {
          setTimeout(()=> {
            console.log(`sleep--等待了${time}秒`);
            this.next()
            resolve(self);
          }, time);
        });
      };
      // const fn = () => {
      //   setTimeout(()=> {
      //     console.log(`sleep--等待了${time}秒`);
      //     this.next();
      //   }, time);
      // };
      this.queue.push(fn);
      // return this;
    }
    eat(food) {
      const fn = function () {
        console.log('I am eating ' + food);
      }
      this.queue.push(fn);
      this.next();
      // return this;
    }
    sleepFirst(time) {
      const fn = () => {
        setTimeout(()=> {
          console.log(`sleepFirst--等待了${time}秒`);
          this.next();
        }, time);
      };
      // const fn = () => {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(()=> {
      //       console.log(`sleepFirst--等待了${time}秒`);
      //       resolve(this.next());
      //     }, time);
      //   });
      // };
      this.queue.unshift(fn);
      
      return this;
    }
    next(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const fn = this.queue.shift();
          fn && fn();
          resolve();
        }, 0);
      });
    }
  }
  
  const LazyMan = function () {
    return new LazyManClass('Tony');
  };
  // LazyMan('Tony').sleep(10).eat('lunch');
  
  // LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
   
  // LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
  
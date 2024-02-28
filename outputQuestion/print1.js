/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-02-23 17:26:07
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-02-28 21:24:52
 * @FilePath: /lottie-tools/client/src/router/test2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



// var b = 10;
// (function b(){  
//     b = 20;
//     console.log(b);
//  })();

var a = {
    i: 1,
    toString() {
      return a.i++;
    }
   };
   if (a == 1 && a == 2 && a ==3) {
    console.log('a------1');
   }
  
   let b = [1,2,3];
   b.toString = b.shift;
   if (b == 1 && b == 2 && b == 3) {
    console.log('b----1');
   }
  
   const sleep = (time) => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
      });
   }
  
   let xx = [3, 15, 8, 29, 102, 22];
   console.log('sort-----');
   console.log(xx.sort());
  
  var obj = {
    2: 3,
    3: 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
  };
  console.log('obj[0]---',obj[0],obj)
  obj.push(1);
  obj.push(2);
  obj.push(3);
  console.log(obj);
  console.log('obj[0]---2---',obj['0'])
  console.log(JSON.stringify(obj))
  
  let arr7 = [1, 3, 5];
  arr7.splice(1, 0, 2); // 在索引1处插入2
  arr7.push(6);
  console.log(arr7); // [1, 2, 3, 5, 6]
  
  
  let arr10 = [1];
  let arr11 = [2];
  let arr12 = [3];
  Array.prototype.push.apply(arr10, arr11, arr12);
  console.log(arr10); // [1, 2, 3]
  
  let arr13 = [1,4];
  let arr14 = [2,5,9];
  let arr15 = [3,6,8];
  arr13.push(...arr14, ...arr15);
  console.log(arr13); // [1, 2, 3]
  
  var a = {n:1};
  var b1 = a;
  a.x = a = {n: 2};
  console.log(a.x);
  console.log(a);
  console.log(b1,b1.x);
  
 
  
  
  // c , b, b
  
  var a = {}, bb = '123', cc = 123;
  a[bb] = 'b'; 
  a[cc] = 'c';
  console.log(a[bb]);
  
  var aaa = {}, bbb = Symbol('123'), ccc = Symbol(123);
  aaa[bbb] = 'b'; 
  aaa[ccc] = 'c';
  console.log(aaa[bbb]);
  
  var a3 = {}, b3 = {key: '123'}, c3 = {
    key: '456'
  };
  a3[b3] = 'b'; 
  a3[c3] = 'c';
  console.log(a3[b3]);
  
  
  
  
  function Foo() {
    Foo.a = function () {
      console.log(1);
    }
    this.a = function () {
      console.log(2);
    }
  }
  
  Foo.prototype.a = function() {
    console.log(3);
  }
  
  Foo.a = function() {
    console.log(4);
  }
  Foo.a();
  let objx = new Foo();
  objx.a();
  Foo.a();
  console.log(objx);
  console.log(objx.__proto__.a());
  
  
  function changeObjProperty(o) {
    o.siteUrl = 'http://www.baidu.com';
    o = new Object();
    o.siteUrl = 'http://www.google.com';
  }
  
  let webSite = new Object();
  changeObjProperty(webSite);
  console.log(webSite.siteUrl);
  
  function add(num) {
    return function() {
      return num + arguments[0];
    }
  }
  
/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-02-28 21:11:23
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-02-28 21:11:35
 * @FilePath: /algorithm/outputQuestion/eval-new-Function.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

var x = 'global'; 
function indirectEval(){
    'use strict';
    var x = 'local';
    console.log(eval('x'))
    // 不同方式调用 call 
    console.log('********');
    console.log( eval.call(null, 'x') ); // global
    console.log( window.eval('x') ); // global
    console.log( (1,eval)('x') ); // global (1)
    var xeval = eval;
    console.log( xeval('x') ); // global
    var obj = { eval: eval }
    console.log( obj.eval('x') ); // global
} 
indirectEval();

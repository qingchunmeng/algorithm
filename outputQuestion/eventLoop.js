/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-02-07 16:41:41
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-02-27 14:55:45
 * @FilePath: /lottie-tools/client/src/router/test1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

console.log('Start')

setImmediate(() => console.log('T1'))

new Promise(resolve => {
    resolve()
    console.log('P1')
}).then(() => {
    console.log('P1 then')
    setImmediate(() => console.log('T2'))
    new Promise(resolve => {
        resolve()
        console.log('P2')
    }).then(() => {
        console.log('P2 then')
    })
})
console.log('End')


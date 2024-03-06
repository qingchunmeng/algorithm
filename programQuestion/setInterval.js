/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-03-06 17:02:36
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-03-06 17:15:47
 * @FilePath: /algorithm/programQuestion/setInterval.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// setInterval的纠偏实现

function setTimeout_custom (time) {
    let ms = time || 5000;
    let count = 0;
    let timer;
    let startTime = new Date().getTime();
    let interval = 1000;
    if (ms >= 0) {
        timer = setTimeout(countDownTime, interval);
    }

    function countDownTime() {
        count ++;
        let offset = new Date().getTime() - ( startTime + count * interval);
        let nextTime = interval - offset;
        if (nextTime < 0) {
            nextTime = 0;
        }
        ms -= interval;
        console.log(`误差${offset}ms,下一次执行时间${nextTime}ms后，离活动开始还有${ms}ms`);
        if (ms < 0) {
            clearTimeout(timer);
        } else {
            timer = setTimeout(countDownTime, nextTime);
        }
    }
}
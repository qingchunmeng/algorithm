/*
 * @Author: mengqingchun mengqingchun@zuoyebang.com
 * @Date: 2024-03-06 18:43:02
 * @LastEditors: mengqingchun mengqingchun@zuoyebang.com
 * @LastEditTime: 2024-03-06 19:15:09
 * @FilePath: /algorithm/programQuestion/extends.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 原型链继承缺点： 包含引用类型的原型属性会被所有的实例共享，容易造成属性的修改混乱，在创建子类型的实例时，不能向超类型的构造函数中传递参数
// 借用构造函数继承, 优点：可以在子类构造函数中向超类型构造函数添加参数
// 缺点： 和构造函数一样，所有的方法都在构造函数中定义，无法做到函数的复用，超类型的原型中定义的的方法，对于子类型而言也是不可见的
function SuperType() {
    this.colors = ['red', 'blue', 'green'];
}

function SubType() {
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors); // red, blue, green, black

var instance2 = new SubType();
console.log(instance2.colors); // red, blue, green

//组合继承,优点：组合继承避免了原型链继承和借用构造函数的缺陷，融合了他们的优点
//缺点：调用了两次构造函数，导致积累的原型对象中增添了不必要的超类的实例对象中的所有属性

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(this.age);
}

var instance1 = new SubType("james",9);
instance1.colors.push("black");
console.log(instance1.colors);  //"red,blue,green,black"
instance1.sayName(); // "james"
instance1.sayAge(); // 9

var instance2 = new SubType("kobe",10);
console.log(instance2.colors);  //"red,blue,green"
instance2.sayName(); // "kobe"
instance2.sayAge(); // 10


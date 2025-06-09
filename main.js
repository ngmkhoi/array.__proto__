//push() – Thêm phần tử vào cuối mảng

Array.prototype.push2 = function(value){
    this[this.length] = value;
}

// Test the custom push2 method
let arr = [1, 2, 3];
arr.push2(4);
console.log(arr); // Output: [1, 2, 3, 4]

let foods = ['Bánh Mì', 'Phở', 'Bún']
foods.push2('Hủ Tiếu');
console.log(foods);

console.log('----------------------------------------------------');

//- map() – Tạo mảng mới từ mảng cũ qua 1 hàm xử lý
Array.prototype.map2 = function (callback, thisArg) {
    const length = this.length
    const result = new Array(length)

    for(let i = 0; i < length; i++){
        if(i in this){
            result[i] = callback.call(thisArg, this[i], i, this)
        }
    }
    return result
};

const numberM = [1, 2, 3, 4];

// Tạo ra mảng mới chứa các phần tử mảng cũ x 2
const result10 = numberM.map2(num => num * 2);

console.log(result10);

const result11 = numberM.map2(String);

console.log(result11);

const prices = [100, 150, 200];
const taxRate = 0.1; // 10%

const result12 = prices.map2(price => price + price * taxRate);

console.log(result12);

console.log('----------------------------------------------------');

//- reduce() – Tính giá trị duy nhất từ mảng
Array.prototype.reduce2 = function(callback, initialValue){
    const length = this.length

    if (length === 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumulator = initialValue;
    for(let i = 0; i < length; i++){
        if(i in this){
            if(accumulator === undefined){
                accumulator = this[i];
            } else {
                accumulator = callback(accumulator, this[i], i, this);
            }
        }
    }
    return accumulator;
}

const numbersR = [1,2,3, , ,5,6];
const sumR = numbersR.reduce2((total, number, index, arr) => {
    console.log(`Index ${index}: total = ${total}, number = ${number}`);
    return total + number;
}); 

console.log(sumR); // Kết quả: 10

console.log('----------------------------------------------------');

//- forEach() - Duyệt qua từng phần tử của mảng và thực hiện một hàm xử lý
Array.prototype.forEach2 = function(callback, thisArg){
    const length = this.length
    for(let i = 0; i < length; i++){
        if(i in this){
            callback.call(thisArg, this[i], i, this);
        }
    }
}

//vd1
const sparseArr = [1, , 3]; 
sparseArr.forEach2((value, index) => {
    console.log(`Value: ${value}, Index: ${index}`);
});

//vd2
const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.forEach2(function(item, index) {
    console.log(index, item);
});

const numbers = [1, 2, 3, 4];
let sum = 0;

//vd3
numbers.forEach2(number => {
    sum += number;
});
  
console.log(sum);

console.log('----------------------------------------------------');

//find()
Array.prototype.find2 = function(callback, thisArg){
    const length = this.length
    for(let i = 0; i < length; i++){
        if(i in this && callback.call(thisArg, this[i], i, this)){
            return this[i];
        }
    }
    return undefined;
}

//vd1
const numbers2 = [4, 10, 18, 5, 24, 78];
const result = numbers2.find2(num => num > 10);

console.log(result);

//vd2
const users = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Carol", age: 19 }
  ];
const result2 = users.find(user => user.age > 21);
  
console.log(result2);

//vd3
const products = [
    { name: "Toaster", price: 100 },
    { name: "Blender", price: 45 },
    { name: "Kettle", price: 60 }
  ];
  const result3 = products.find(product => product.price < 50);
  
  console.log(result3)

  console.log('----------------------------------------------------');


//findIndex()
Array.prototype.findIndex2 = function(callback, thisArg){
    const length = this.length;
    for(let i = 0; i < length; i++){
        if(i in this && callback.call(thisArg, this[i], i, this)){
            return i;
        }
    }
    return -1;
}

//vd1
const result4 = numbers2.findIndex2(num => num > 10);

console.log(result4);

//vd2
const result5 = users.findIndex2(user => user.age > 21);
  
console.log(result5);

//vd3
const result6 = products.findIndex2(product => product.price < 50);
  
console.log(result6)

console.log('----------------------------------------------------');


//filter()
Array.prototype.filter2 = function(callback, thisArg){
    const length = this.length;
    const result = [];
    for(let i = 0; i < length; i++){
        if(i in this && callback.call(thisArg, this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}

let numbersF = [1, 2, 3, 4, 5, 6];

// Lọc tất cả các phần tử chẵn.
let result7 = numbersF.filter2(function(item) {
  return item % 2 === 0;
});

console.log(result7);

let F2 = [-2, 5, 8, -10, 0, 20];
let result8 = F2.filter2(n => n > 0);

console.log(result8);

let items = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "orange"
  ];
  let result9 = items.filter2((item, index, array) => {
    return array.indexOf(item) === index;
  });
  
  console.log(result9);
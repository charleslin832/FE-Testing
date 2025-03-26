// const { sum } = require('../unit-jest');

// **** 模擬函數
// 基本用法
const myFunction1 = jest.fn();
// 設置模擬函數的行為
myFunction1.mockReturnValue(42);
// 呼叫模擬函數
console.log(myFunction1()); // 輸出: 42

// 模擬函數的參數和返回值
const sum1 = jest.fn((a, b) => a + b);
console.log(sum1(2, 3)); // 輸出: 5
console.log(sum1(4, 5)); // 輸出: 9

// 驗證模擬函數的調用
const myFunction2 = jest.fn();
myFunction2(1, 2);
// 驗證模擬函數被呼叫一次
expect(myFunction2).toBeCalledTimes(1);
// 驗證模擬函數被傳入 1 和 2 作為參數
expect(myFunction2).toBeCalledWith(1, 2);

// **** 模擬模組
jest.mock('../unit-jest');
const { sum } = require('../unit-jest');
sum.mockReturnValue(42);
console.log(sum(2, 3)); // 輸出: 42，，，，


// import * as math from '../math';

// // 引入模組的實際內容
// jest.requireActual('../math');
// // 模擬 subtract 函數，，
// math.subtract = jest.fn();
// math.subtract.mockReturnValue(10);
// console.log(math.add(2, 3)); // 實際的 add 函數
// console.log(math.subtract(5, 3)); // 模擬的 subtract 函數，輸出: 10
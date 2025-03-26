const { sum } = require('../unit-jest');

// ****** 測試生命周期函數
// beforeAll 和 afterAll
// beforeAll 會在所有測試案例運行之前執行一次，而 afterAll 會在所有測試案例運行完成後執行一次。
// beforeEach 和 afterEach
// beforeEach 會在每個測試案例運行前執行，而 afterEach 會在每個測試案例運行後執行。
beforeAll(() => {
    console.log('所有測試案例開始執行前');
});

afterAll(() => {
    console.log('所有測試案例完成後');
});

beforeEach(() => {
    console.log('每個測試案例開始前');
});

afterEach(() => {
    console.log('每個測試案例結束後');
});

test('1 + 1 應該等於 2', () => {
    expect(sum(1, 1)).toBe(2);
});

test('2 + 2 應該等於 4', () => {
    expect(sum(2, 2)).toBe(4);
});
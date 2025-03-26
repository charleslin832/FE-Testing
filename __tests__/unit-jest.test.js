const { sum } = require('../unit-jest');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
// toBe(value)
// 檢查是否等於特定值
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});
// not.toBe(value)
// 檢查是否不等於特定值
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});
// toEqual(value)
// 檢查是否等於特定值（對象或數組）
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

// toBeNull() / toBeDefined() / toBeTruthy() / toBeFalsy()
// 檢查是否為 null/ 檢查是否已定義 / 檢查是否為真值 / 檢查是否為假值
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});
// toBeGreaterThan(value) / toBeLessThan(value) / toEqual(value)
// 檢查數字是否大於、小於或等於特定值。
// toBeGreaterThanOrEqual(value) / toBeLessThanOrEqual(value)
// 檢查數字是否大於等於或小於等於特定值。
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});
// toBeCloseTo(value, numDigits)
// 比較浮點數，確保它們在特定小數位數下相等。
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
    expect(0.1 + 0.2).toBeCloseTo(0.3, 5); // 表示小數點後五位
});
// toMatch(pattern)
// 用於檢查字串是否與正則表達式模式匹配。
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// toContain(value)
// 檢查數組或字串是否包含特定元素或子串
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

// toHaveLength(value)
// 檢查數組或字串的長度
test('字串長度為 10', () => {
    const str = 'Hello, Jest!';
    expect(str).toHaveLength(12);
});

test('數組長度為 4', () => {
    const arr = [1, 2, 3, 4];
    expect(arr).toHaveLength(4);
});

// toThrow(error?)
// 用於測試函數是否拋出了一個特定的錯誤。
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);

    // Or you can match an exact error message using a regexp like below
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});

// toContainEqual(item)
// 用於檢查數組是否包含特定元素，可以用於深度比較。
test('數組包含特定元素', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(arr).toContainEqual({ id: 2 });
});
// toBeInstanceOf(Class)
// 用於檢查值是否屬於特定類別的實例。
class MyClass { }
const instance = new MyClass();

test('變量應該是 MyClass 的實例', () => {
    expect(instance).toBeInstanceOf(MyClass);
});
// toHaveProperty(keyPath?, value?)
// 用於檢查對象是否具有特定屬性，或者該屬性的值是否符合預期。
const myObject = {
    prop1: 'value1',
    prop2: {
        subProp: 'value2',
    },
};
test('myObject 應該具有特定屬性', () => {
    expect(myObject).toHaveProperty('prop1');
    expect(myObject).toHaveProperty('prop2.subProp', 'value2');
});
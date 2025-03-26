const { sum, fetchData3 } = require('../unit-jest');
// 使用 describe
// 你可以使用 describe 函數來創建測試套件，並將相關的測試案例放在該測試套件中。
// describe 接受兩個參數：描述文字和一個函數，該函數包含了該測試套件中的測試案例。

// 組織性：describe 允許你按功能或模組組織你的測試案例，使測試代碼更易於理解和維護。
// 可讀性：描述文字可以提供對測試套件內容的說明，使其他開發者能夠快速理解你的測試用例。
// 狀態隔離：describe 可以幫助你在測試之間創建狀態隔離，以確保測試獨立運行。
// 運行控制：你可以選擇運行特定的測試套件，從而更快地運行相關的測試。

describe('加法函數', () => {
    test('1 + 1 應該等於 2', () => {
        expect(sum(1, 1)).toBe(2);
    });

    test('2 + 2 應該等於 4', () => {
        expect(sum(2, 2)).toBe(4);
    });
});

// 巢狀 describe
// 你可以嵌套 describe 函數以更深入地組織你的測試套件，這特別適用於複雜的測試情境。
describe('外層測試套件', () => {
    describe('內層測試套件 1', () => {
        test('測試案例 1', () => {
            // 測試邏輯
        });

        test('測試案例 2', () => {
            // 測試邏輯
        });
    });

    describe('內層測試套件 2', () => {
        test('測試案例 3', () => {
            // 測試邏輯
        });

        test('測試案例 4', () => {
            // 測試邏輯
        });
    });
});

// 異步測試
// 可以在 describe 內部使用 beforeAll、afterAll、beforeEach、afterEach 等函數來初始化或清理異步操作的資源。
describe('異步測試', () => {
    let data;
    beforeAll(async () => {
        data = await fetchData3();
    });
    test('資料應為 "hello world"', () => {
        expect(data).toBe('hello world');
    });
});
// 只運行特定的測試
// 可以在 describe 區塊內使用 test.only 或 it.only 來指定只運行該區塊的測試。
describe('僅運行這個測試', () => {
    // 不只只運行此測試，整份檔案除了這測試以外都會被skip
    test.only('這個測試將被執行', () => {
        expect(sum(1, 1)).toBe(2);
    });
    test('這個測試不會被執行', () => {
        expect(sum(2, 4)).toBe(6);
    });
});

// 略過特定的測試
// 可以在 describe 區塊內使用 test.skip 或 it.skip 來指定跳過該區塊的測試。
describe('略過這個測試', () => {
    test.skip('這個測試將被略過', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('這個測試會被執行', () => {
        expect(sum(3, 4)).toBe(7);
    });
});

// 共用變數和設定
// 可以在 describe 區塊內部設定變數或配置，讓所有的測試案例都可以使用。
describe('共用變數和設定', () => {
    let sharedVariable;
    beforeAll(() => {
        sharedVariable = '共用的變數';
    });
    test('第一個測試案例', () => {
        expect(sharedVariable).toBe('共用的變數');
    });
    test('第二個測試案例', () => {
        expect(sharedVariable).toBe('共用的變數');
    });
});

// 動態生成測試案例
// 可以在 describe 內部動態生成測試案例，這在某些情況下非常有用。
describe.each([
    [1, 1, 2],
    [2, 2, 4],
    [3, 3, 6],
])('加法函數', (a, b, expected) => {
    test(`${a} + ${b} 應該等於 ${expected}`, () => {
        expect(sum(a, b)).toBe(expected);
    });
});
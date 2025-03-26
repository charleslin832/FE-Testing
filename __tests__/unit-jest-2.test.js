const { fetchData1, fetchData2, fetchData3 } = require('../unit-jest');
// **** 異步測試
// done
test('fetchData 函數應該返回 "hello world"', (done) => {
    function callback(data) {
        expect(data).toBe('hello world');
        done(); // 告訴 Jest 測試已完成
    }

    fetchData1(callback);
});

// promise
test('fetchData 函數應該返回 "hello world"', () => {
    return fetchData2().then(data => {
        expect(data).toBe('hello world');
    });
});

// async / await
test('fetchData 函數應該返回 "hello world"', async () => {
    const data = await fetchData3();
    expect(data).toBe('hello world');
});
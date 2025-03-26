function sum(a, b) {
  return a + b;
}
function fetchData(callback) {
  callback('hello world');
}
function fetchData1(callback) {
  setTimeout(() => {
    callback('hello world');
  }, 100);
}
function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello world');
    }, 100);
  });
}
async function fetchData3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello world');
    }, 100);
  });
}
module.exports = {
  sum,
  fetchData,
  fetchData1,
  fetchData2,
  fetchData3,
};
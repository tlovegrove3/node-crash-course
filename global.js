
setTimeout(() => {
    console.log('Timeout has occurred');
    clearInterval(int);
    console.log('Interval cleared');
}, 3000);

const int = setInterval(() => {
    console.log('Interval has occurred');
}, 1000);

console.log(__dirname);
console.log(__filename);

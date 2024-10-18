module.exports = function reverse (n) {
    const absN = Math.abs(n);
    const stringN = absN.toString();
    const arr = stringN.split(''); 
    const reversed = arr.reverse(); 
    const reversedString = reversed.join('');
    return +(reversedString);
    }

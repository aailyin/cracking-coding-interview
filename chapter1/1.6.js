/*
  Реализуйте метод для выполнения простейшего сжатия строк с использованием счетчика повторяющихся символов.
  Если сжатая строка не становится короче исходной, то метод возвращает исходную строку. Строка состоит только из букв a-z.
  
  aabcccccaaa -> a2b1c5a3
  abc         -> abc
*/
// My solution:
function optimize(str) {
    let result = '', 
        sum = 0, 
        current = str[0], 
        length = str.length;

    for (let i = 0; i < length; i++) {
        if (current === str[i]) {
            sum++;
        } else {
            result += `${current}${sum}`;
            sum = 1;
            current = str[i];
        }
        if (i === length - 1) {
            result += `${current}${sum}`;
        }
    }
    return length <= result.length ? str : result;
}

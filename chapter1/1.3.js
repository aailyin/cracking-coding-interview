// Напишите метод, заменяющий все пробелы в строке символами '%20'. 
// Можете считать, что длина строки позволяет сохранить дополнительные символы, а фактическая длина строки известна заранее.

// My solution:
function replace(str) {
    let trim = '', 
        result = '',
        i = 0,
        length = str.length;

    for (i; i < length; i++) {
        if (str[i] === ' ' && i > 0 && (str[i-1] === ' ')) {
            continue;
        }
        trim += str[i];
    }
    length = trim.length;
    for (i = 0; i < length; i++) {
        if (trim[i] === ' ') {
            if (i === 0 || i === length - 1) {
                continue;
            } else {
                result += '%20';
            }
        } else {
            result += trim[i];
        }
    }
    return result;
}

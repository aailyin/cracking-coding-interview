// Напишите функцию, которая проверяет, является ли заданная строка перестановкой палиндрома. 
// Палиндром не ограничивается словами из словаря.
// 
// My solution:
function check(str) {
    if (!str) {
        return false;
    }

    let hash = {}, i = 0, length = str.length, char;
    
    for (i; i < length; i++) {
        char = str[i].toLowerCase();
        if (char === ' ') {
            continue;
        }
        hash[char] = hash[char] === undefined ? 0 :  hash[char] + 1;
    }

    let med = 0;
    for (i in hash) {
        if (!(hash[i] % 2)) {
            med++;
            if (med > 1) {
                return false;
            }
        }
    }
    return true;
}

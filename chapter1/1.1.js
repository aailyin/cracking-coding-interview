// Реализуйте алгоритм, определяющий, все ли символы в строке встречаются только один раз. 
// А если при этом запрещено использование дополнительных структур данных?

// My solution:
function isUniqueChars(s = '') {
    if (!s) {
        return false;
    }

    let hash = {}, length = s.length;
    for (var i = 0; i < length; i++) {
        if (hash[s[i]]) {
            return false;
        }
        hash[s[i]] = true;
    }
    return true;
}

// Almost the same in the book + additional solution using bitmap

/*
  Существует три вида модифицирующих операций со строками: вставка символа, удаление символа и замена символа. 
  Написать функцию, которая проверяет, находятся ли две строки на расстоянии одной модификации (или нуля модификаций).
  pale, ple   -> true
  pales, pale -> true
  pale, bale  -> true
  pale, bake  -> false
*/

function check(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    let isFoundDiff = false, index1 = 0, index2 = 0,
        s1 = str1.length > str2.length ? str1 : str2;
        s2 = str1.length > str2.length ? str2 : str1;

    while (index1 < s1.length && index2 < s2.length) {
        if (s1[index1] !== s2[index2]) {
            if (isFoundDiff) {
                return false;
            }
            isFoundDiff = true;

            if (s1.length === s2.length) {
                index2++;
            }
        } else {
            index2++;
        }
        index1++; // всегда смещаем указатель длинной строки
    }
    return true;
}

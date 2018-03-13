/*
  Для двух строк s1 и s2 написать код, который проверяет, получена ли строка s2 циклическим сдвигом s1,
  используя только один вызов метода isSubstring.
  
  s1 = waterbottle
  s2 = erbottlewat
  => true
*/
function isCorrect(s1, s2) {
    const length = s1.length;
    if (s2.length === length && length > 0) {
        let s3 = s1 + s1;
        return s3.isSubstring(s2);
    }
    return false;
}

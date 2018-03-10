// Для двух строк напишите метод, определяющий, является ли одна строка перестановкой другой.

// My solution:
function check(str1, str2) {
    let length = str1.length;
    
    if (length !== str2.length) { return false; }
    
    let hash = {}, char, i = 0;

    for (i; i < length; i++) {
        char = str1[i];
        hash[char] = hash[char] == undefined ? 1 : hash[char] + 1;
    }

    for (i = 0; i < length; i++) {
        char = str2[i];
        if (!hash[char]) { return false; }
        else { --hash[char]; }
    }

    return true;
}

/* The first solution from book on Java:
   String sort(String s) {
      char[] content = s.toCharArray();
      java.util.Arrays.sort(content);   // qsort has N*logN time complexity 
      return new String(content);
   }
   boolean check(String s, String t) {
      if (s.length() != t.length()) {
         return false;
      }
      return sort(s).equals(sort(t));
   }
*/

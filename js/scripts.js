"use strict";

function btnClick1() {
    let str, inputField;
    
    inputField = document.getElementById("input");
    str = inputField.value;

    if(str.length >= 2){
        if(palindrome(str))
        {
            alert('This is a palindrome!');
        }
        else
        {
            alert('This is NOT a palindrome.');
        }
    } else {
        alert('There must me two or more characters.');
    }
  }
  
  function btn1Clear() {
    document.getElementById("input").value = "";
  }


  function palindrome(str) {
    //assign pointers to begining and end of the string.
    let begin = 0;
    let end = str.length - 1;

    while (end > begin) {
        //Look for white space or non-alphanumeric characters. Move pointer forward if true.
        if ( str[begin].match(/[\W_]/) ) {
          begin++;
          continue;
        }

        //Look for white space or non-alphanumeric characters. Move pointer back if true.
        if ( str[end].match(/[\W_]/) ) {
          end--;
          continue;
        }

        //Compare the current characters. If not a match the testing is done, return false. If match is true move pointers to next character.
        if ( str[begin].toLowerCase() !== str[end].toLowerCase() ) return false
        begin++;
        end--;
      }

      //Whole string matches - return true.
      return true;
}
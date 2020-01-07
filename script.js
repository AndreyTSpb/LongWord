function func(str) {
  let arr_str = str.split(' ');
  let num = 0;
  let word = '';
  for(var i = 0; i < arr_str.length; i++){
    if(arr_str[i].length > num){
				num = arr_str[i].length;
        word = arr_str[i];
     }
  }
  return word;
}
let wrd = func("The quick (browndddd) fox jumped (over the) lazy dog");

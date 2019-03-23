module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets_arr = [];
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      if(bracketsConfig[j][0] != bracketsConfig[j][1]) {
        if(str[i] == bracketsConfig[j][0]) {
          brackets_arr.push(str[i]);
          continue;
        } else if(str[i] == bracketsConfig[j][1] 
          && brackets_arr[brackets_arr.length - 1] == bracketsConfig[j][0]) {
          brackets_arr.pop();
          continue;
        } else if(str[i] == bracketsConfig[j][1] && str[i-1] != bracketsConfig[j][0]){
          return false;
        }
      } else if(bracketsConfig[j][0] == bracketsConfig[j][1] && str[i] == bracketsConfig[j][0]) {
        if(str[i] == bracketsConfig[j][0] && brackets_arr[brackets_arr.length-1] != str[i]) {
          brackets_arr.push(str[i]);
          continue;
        } else {
          brackets_arr.pop();
          continue;
        }
      } 
    }
  }

  if(brackets_arr.length > 0) {
    return false;
  }

  return true;
}

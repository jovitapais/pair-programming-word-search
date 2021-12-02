//const {transpose} = require("./transpose")
const transpose = function (array) {

    return array[0].map(function (_, column) {
       return array.map(function (row) {
          return row[column]; 
        });
       });
  };
  

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log(horizontalJoin)
   // for (const l of horizontalJoin) {
     //   if (l.includes(word)) return true
    //}
//}   const transpose1 = transpose(letters)
   //console.log(transpose1);
   if (horizontalJoin.includes(word)) return true 
   const transpose1 = transpose(letters)
   //console.log(transpose1);
    const verticalJoin = transpose1.map(ls => ls.join(''))
    if (verticalJoin.includes(word)) return true
    
    // put transpose function below
   return false 
}





module.exports = wordSearch
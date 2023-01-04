function convertToRoman(num) {
  const symbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  //your code here

      
       if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 //console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

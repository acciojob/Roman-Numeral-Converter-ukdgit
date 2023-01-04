function convertToRoman(num) {
  	const obj = {0:['M',1000], 1:['D', 500], 2:['C', 100], 3:['L', 50], 4:['X', 10], 5:['V', 5], 6:['I', 1]};

	let arr = [];
	for (let i in obj){
		let count = 0;
		if (num >= obj[i][1]){
			count = Math.floor(num / obj[i][1]);
			num -= count*obj[i][1];
			if (count===4 && (obj[i][0]==='C'||obj[i][0]==='X'||obj[i][0]==='I')){
				if(arr[arr.length-1]===obj[i-1][0]){
					arr.pop();
					arr.push(obj[i][0], obj[i-2][0]);
					continue;	
				}
				arr.push(obj[i][0], obj[i-1][0]);
				continue;
			}
			for (let j=1; j<=count; j++){
				arr.push(obj[i][0])
			}
		} 
	}
	return arr.join('');
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 //console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

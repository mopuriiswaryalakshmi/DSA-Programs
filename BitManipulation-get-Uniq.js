// Given an array in which all the element are coming twice except one element which is coming only one time

function findUniqEle(arr) {
  let uniq = 0
	for(let num of arr) {
		console.log("------------")
		console.log(uniq)
		console.log(num)
		console.log(uniq ^= num)
		uniq ^= num
		console.log(uniq)
		console.log("------------")
	}
	console.log(uniq)
	return uniq
}

const array = [1, 2, 3, 2, 1];
findUniqEle(array)

/* 
1 0 1
0 1 1
1 1 1
*/
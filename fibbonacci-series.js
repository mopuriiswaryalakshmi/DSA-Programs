function FibbonacceSeries(num){
	const fibSeries = []
	let num1 = 0, num2 = 1	
	for(i=0; i<num; i++){
		temp = num1+num2
		num1 = num2
		num2 = temp
		fibSeries.push(num2)
	}
	return fibSeries
}

console.log(FibbonacceSeries(10))
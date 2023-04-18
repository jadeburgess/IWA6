
const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay !== undefined && minuteOfDay !== undefined && hourOfDay === 0 && minuteOfDay === 0) {
	const taxAsDecimal = tax / '100'
    const starting = salary * 1 - taxAsDecimal
	const balance = starting - transport - food - rent
}
	
console.log('R ${balance.toFixed(2)}')
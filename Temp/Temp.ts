
class Temp 
{
	value: number;
	unit: string;
	constructor(value: number, unit: string) {
		this.value = value;
		this.unit = unit;
	}		

	toString () {
		return "Value: " + this.value + ", Unit: " + this.unit;
	}	
}

export default Temp;
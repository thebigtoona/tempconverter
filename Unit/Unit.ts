function round(value, decimals) {
	return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

class UnitConverter 
{
	constructor () {} 
	
	public static isValidUnit (measure: string) {
		let units = ["f","F","k","K","c","C","Kelvin","Fahrenheit","Celsius"];
		if (units.indexOf(measure) > 0) return true;
		
		return false;
	}
  
	public static formatUnitType (measure: string) {
		if (measure.toUpperCase() === 'K' || measure.toUpperCase() === 'KELVIN') return 'K';
		if (measure.toUpperCase() === 'C' || measure.toUpperCase() === 'CELCIUS') return 'C';
		if (measure.toUpperCase() === 'F' || measure.toUpperCase() === 'FAHRENHEIT') return 'F';
		
		return false;
	}

	public static FtoC = (fahrenheit: number) => round((fahrenheit - 32) / 1.8, 2)

	public static FtoK = (fahrenheit: number) => round((fahrenheit + 459.67) * (5/9), 2)

	public static CtoF = (celsius: number) => round((celsius * 1.8) + 32, 2)

	public static CtoK = (celsius: number) => round(celsius + 273.15, 2)
	
	public static KtoF = (kelvin: number) => round((kelvin * (9/5)) - 459.67, 2)
	
	public static KtoC = (kelvin: number) => round(kelvin - 273.15, 2)

	public static convertUnit (value: number, measure: string, conversion: string) {
		if (measure && conversion) {
			const m:string|boolean = UnitConverter.formatUnitType(measure);
			const conv:string|boolean = UnitConverter.formatUnitType(conversion);
			if (!m || !conv) return false
			
			if (m === 'F') {
				switch (conv) {
					case 'C':
						return UnitConverter.FtoC(value);
					case 'K':
						return UnitConverter.FtoK(value);
					default:
					 return value;
				}
			}

			if (m === 'C') {
				switch (conv) {
					case 'F': 
						return UnitConverter.CtoF(value);
					case 'K':
						return UnitConverter.CtoK(value);
					default: 
						return value;
				}
			}

			if (m === 'K') {
				switch (conv) {
					case 'F': 
						return UnitConverter.KtoF(value);
					case 'C':
						return UnitConverter.KtoC(value);
					default: 
						return value;
				}
			}

			return false;  
		}
	}
}

export default UnitConverter;
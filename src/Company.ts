import faker from "faker";
import { IMappable } from './CustomMap';

export class Company implements IMappable{

	companyName: string;
	phrase: string;
	location: {
		lat: number;
		lng: number;
	}
	color = 'blue';
	constructor(){
		this.companyName = faker.company.companyName();
		this.phrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		}
	}

	markerContent() {
		return `<div><h2>Company name ${this.companyName}</h2> 
				<p>Comany pharse: ${this.phrase}</p></div>`
	}
}

export interface IMappable {
	location: {
		lat: number;
		lng: number;
	}
	markerContent(): string;
	color: string
}


export class CustomMap {

	private map: google.maps.Map;

	constructor(mapDivId: string){
		this.map = new google.maps.Map(document.getElementById(mapDivId) as HTMLElement, {
			zoom: 4,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}

	addMarker(data: IMappable):void{
		const marker = new google.maps.Marker({
			map: this.map,
			position: {
				lat: data.location.lat,
				lng: data.location.lng
			}
		});

		const infoWindow = new google.maps.InfoWindow({
			content: data.markerContent()
		});

		marker.addListener('click', () => {
			infoWindow.open(this.map, marker);
		})

	}
}
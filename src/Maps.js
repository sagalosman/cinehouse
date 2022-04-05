import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken='pk.eyJ1Ijoic2FnYWwiLCJhIjoiY2wxZW5pYTM3MHN4ajNibnJienM1anZocyJ9.VcM3pQjqMDOD2bTkBsBwTQ';

const data = [
	{
		"location": "Greenwich Ave & Norman Ave at NE corner",
		"city": "Greenwich",
		"coordinates": [-0.02361377,51.48467332],
	},
	{
		"location": "6th Ave & 42nd St at NW corner",
		"city": "Canary Wharf",
		"coordinates": [-0.01383067,51.49404492],
	},
	{
		"location": "Essex St & Delancey St at SE corner",
		"city": "Shepherd's Bush",
		"coordinates": [ -0.2130222,51.52637608],
	},
  {
		"location": "Camden Town & Norman Ave at NE corner",
		"city": "Camden Town",
		"coordinates": [-0.18407591,51.53483032],
	},
	{
		"location": "6th Ave & 42nd St at NW corner",
		"city": "Kilburn",
		"coordinates": [-0.20778329,51.53634934],
	},
	{
		"location": "Islington St & Delancey St at SE corner",
		"city": "Islington",
		"coordinates": [-0.09420802,51.5338918],
	}
]


class Map extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			lng: -0.127758,
			lat: 51.507351,
			zoom: 10
		}
	}

	componentDidMount() {
		// Set up map 
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

    data.forEach((location) => {
			console.log(location)
			const marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(map);

		})
	}

	render(){
		return(
			<div>
				<div className='map' ref={el => this.mapContainer = el} style={{width:'100%',height:'50vh',
          display: "flex",
          justifyContent: "center",
          alignItems: "center"}} />
			</div>
		)
	}
}

export default Map;



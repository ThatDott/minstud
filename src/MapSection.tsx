import MapSVG from './MapSVG.tsx'
import { useState } from 'react'

export default function MapSection(){
	const [municipality, setMunicipality] = useState(null);

	const getMunicipality = (e: React.MouseEvent<SVGElement>) => {
		setMunicipality(e.target.parentElement.id)
	}

	const noMunicipality = () => {
		setMunicipality(null)
	}

	return (
		<div id='map'>
		  <h2>Bukidnon Today</h2>
		  <p>The province now composes of 21 Municipalities</p>
    		  <div className='sub-container'>
		    <div className='sub-container-left'>
		      {municipality ? <h2>{municipality}</h2> : <h6>(Hover over Map)</h6>}
		    </div>
		    <div className='sub-container-right'>
		      <MapSVG handleHover={getMunicipality} leaveHover={noMunicipality}/>
	            </div>
		  </div>
                  <h5>...</h5>
		</div>
	)
}

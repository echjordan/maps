import React from 'react'

const ShelterInfo = () => {
  const homeBaseInfo = <p>Homebase is a homelessness prevention program administered by Community-Based Organizations (CBOs) in high-need neighborhoods. The CBOs provide casework services and also help individuals and families locate existing community-based resources such as job training, child care, and anti-eviction legal services. \n \n You are strongly encouraged to call your nearest HomeBase location before visiting.Depending on your address and situation, you may be advised to go to a different HomeBase office in your borough.</p>

  const dropInInfo = <p>Centers that provide hot meals, showers, medical help and a place to sleep.</p>
  return(
    <div>
    <img id="homebase" src="https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_23-32.png" />
    <span>
      <h3 id="homebase-title">Homebase Locations</h3>
    </span>
    {homeBaseInfo}
    <hr />
    <img id="homebase" src="https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_24-32.png" />
    <span>
      <h3 id="dropins-title"> Drop In Centers</h3>
    </span>
    {dropInInfo}
    </div>
  )
}

export default ShelterInfo

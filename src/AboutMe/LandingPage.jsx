import React from 'react';

export default function LandingPage() {
  return <div style={{position:"relative",top:"20vh", textAlign:"center"}}>
  <h1 style={{position:"relative",top:"10px",height:"10vh",width:"100vw",color:"white"}}>Michael Abebe Personal Website</h1>
  <h1 style={{position:"relative",top:"10px",height:"10vh",width:"100vw",color:"white" }}>Software Engineer based in Maryland</h1>
  <h2 style={{ position: "relative", top: "10px", height: "10vh", color: "white", marginBottom: "0px" }}>Past Projects:</h2>
  <h2 style={{color:"white"}}>Air Quality by City in the U.S.A.</h2>
  <img src='Air_Project.png' alt="Project about air quality" style={{ position: "relative", height: "100vh", width: "90vw",top:"0px" }} />
  <h1 style={{ color: "white" }}>Travel Bucket list</h1>
  <img src='Travel_Bucket_List.png' alt="Travel Bucket List Homepage" style={{ position: "relative", top: "0px", height: "100vh", width: "80vw" }} />
  <h1 style={{ color: "white" }}>Search for a place to visit</h1>
  <img src='Discover.png' alt="Search for places to visit" style={{ position: "relative", top: "0px", height: "100vh", width: "80vw" }} />
  <h1 style={{ color: "white" }}>Results from searching for Honolulu</h1>
  <img src='Discovered_Place.png' alt="Response from Travel destination" style={{ position: "relative", top: "0px", height: "100vh", width: "80vw" }} />
  <h1 style={{ color: "white" }}>Graphical representation of Travel Bucket list</h1>
  <img src='Filterable_Graphs.png' alt="Bar Graph of most wanted" style={{ position: "relative", top: "0px", height: "100vh", width: "80vw" }} />
  <h1 style={{ color: "white" }}>Table of Travel Bucket list</h1>
  <img src='Bucket_List_Table.png' alt="Table of travel destinations" style={{ position: "relative", top: "0px", height: "100vh", width: "80vw" }} />
  <h1 style={{ color: "white" }}>Map of places visited and a ranking out of 5 on the experience</h1>
  <img src='Map_Visual.png' alt="ArcGIS Map" style={{ position: "relative", top: "0px", height: "100vh", width: "80vw" }} />
</div>;
}

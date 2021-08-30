import React, {useEffect} from 'react';
import './InfoContainer.css'
import SimpleBar from 'simplebar-react';
import Card from './containerCard'

import 'simplebar/dist/simplebar.min.css';

export default function InfoContainer(){
  return (
      <div class="main-row">
          <div class="menu-row">
              <SimpleBar>
                  <div class="menu-data container">
                      <div style={{fontFamily: "'Inter', sans-serif",color: "white"}}>Weather</div>
                      <div style={{fontFamily: "'Inter', sans-serif",color: "rgba(255,255,255,.5)",fontSize:"12px"}}>get the information about weather</div>
                  </div>
                  <div class="menu-data container">
                      <div style={{fontFamily: "'Inter', sans-serif",color: "white"}}>Movies</div>
                      <div style={{fontFamily: "'Inter', sans-serif",color: "rgba(255,255,255,.5)",fontSize:"12px"}}>get the information about Movies</div>
                  </div>
                  <div class="menu-data container">
                      <div style={{fontFamily: "'Inter', sans-serif",color: "white"}}>Dogs</div>
                      <div style={{fontFamily: "'Inter', sans-serif",color: "rgba(255,255,255,.5)",fontSize:"12px"}}>get the information about Dogs</div>
                  </div>
                  <div class="menu-data container">
                      <div style={{fontFamily: "'Inter', sans-serif",color: "white"}}>Nasa</div>
                      <div style={{fontFamily: "'Inter', sans-serif",color: "rgba(255,255,255,.5)",fontSize:"12px"}}>get the information about Nasa</div>
                  </div>
                  <div class="menu-data container">
                      <div style={{fontFamily: "'Inter', sans-serif",color: "white"}}>Food</div>
                      <div style={{fontFamily: "'Inter', sans-serif",color: "rgba(255,255,255,.5)",fontSize:"12px"}}>get the information about weather</div>
                  </div>
                  <div class="menu-data container">
                      <div style={{fontFamily: "'Inter', sans-serif",color: "white"}}>Food</div>
                      <div style={{fontFamily: "'Inter', sans-serif",color: "rgba(255,255,255,.5)",fontSize:"12px"}}>get the information about weather</div>
                  </div>
                  <div class="menu-data container">
                      <div style={{fontFamily: "'Inter', sans-serif",color: "white"}}>Food</div>
                      <div style={{fontFamily: "'Inter', sans-serif",color: "rgba(255,255,255,.5)",fontSize:"12px"}}>get the information about weather</div>
                  </div>
                  <div class="menu-data container">
                      <div style={{fontFamily: "'Inter', sans-serif",color: "white"}}>Food</div>
                      <div style={{fontFamily: "'Inter', sans-serif",color: "rgba(255,255,255,.5)",fontSize:"12px"}}>get the information about weather</div>
                  </div>
                  <div class="menu-data container">
                      <div style={{fontFamily: "'Inter', sans-serif",color: "white"}}>Food</div>
                      <div style={{fontFamily: "'Inter', sans-serif",color: "rgba(255,255,255,.5)",fontSize:"12px"}}>get the information about weather</div>
                  </div>
              </SimpleBar>
        </div>
        <div class="container info-container">
            <Card image="url(./location.png)" bgColor="#AE00FB" info="Get complete weather data at particular location using location coordinates" heading="Location Coordinates"/>
            <Card image="url(./city.webp)" bgColor="#FB9300" info="Get complete weather data at particular location using city name" heading="City Name"/>
            <Card image="url(./pollution.jpg)" bgColor="#BB8760" info="Get complete air pollution data at particular location using location coordinates" heading="Air Pollution"/>
            <Card image="url(./location-1.png)" bgColor="#00C1D4" info="Get complete geocoding data of particular location" heading="Geocoding"/>
        </div>
      </div>
  );
}

import React from 'react'
import City from "../Component/Cities/City";
import Hero from "../Component/Hero/Hero";
import Slider from "../Component/Slider/Slider";
import EasyStep from "../Component/EasySTep/EasyStep";





import sec1 from '../img/sec1.jpeg'
import sec2 from '../img/sec2.jpeg'
import sec3 from '../img/sec3.jpeg'
// import { Router } from 'react-router-dom';


function HomePage() {
  return (
    <div>
        {/* <Router> */}
         <Hero/>
         <EasyStep/>
     
     <City
     name={"Air Avenue City"}
     detail={"Air Avenue City Faisalabad is a prominent residential community located in Faisalabad, Pakistan. It is a well-planned and thoughtfully designed housing project that offers a range of modern amenities and a comfortable living environment. The city is strategically situated near the Faisalabad International Airport, making it convenient for frequent travelers. Air Avenue City features a variety of residential plots, including different sizes and categories to cater to the diverse needs and preferences of residents."}
    image = {sec1}
     />
     <Slider/>

      <City
     name={"Hussain Shaheed Suhrawardy"}
     detail={"Hussain Shaheed Suhrawardy Colony is a residential colony located in Faisalabad, Pakistan. It is named after Hussain Shaheed Suhrawardy, a prominent Pakistani political leader. The colony offers a variety of housing options, including houses and apartments, to cater to different preferences and needs. It provides residents with essential amenities, such as schools, parks, and shopping centers, ensuring a convenient and comfortable living experience."}
    image = {sec2}
     />
     <Slider/>

      <City
     name={"Rehman Village"}
     detail={"Rehman Village in Faisalabad is a well-known residential community. It offers a range of housing options, including houses and apartments, to accommodate diverse needs. The village provides essential amenities and facilities, such as schools, parks, and within close proximity. Rehman Village is a sought-after residential destination, known for its convenient location and comfortable living environment. "}
    image = {sec3}
     />
     <Slider/>
    {/* <Router/> */}
    </div>
  )
}

export default HomePage

import React from "react";
import './Gallery.css';



const Gallery = () => {
  
  
  return (
  <>
  <section className="gallery-container">
  <img src="./img/banner-gallery.jpg" type="image" alt="header" />
  <div className="container gallery-content">
    <div className="row">
      <div className="col-sm-6 content">
    <h1>Gallery</h1>
    </div>
  </div>
  </div>
</section>
  
  <section className="background">
<div className="container7">
    
    <div className="box">
      
      <div className="dream">
        <img src="./img/pic1.jpg"/>
         <img src="./img/pic2.jpg"/>
          <img src="./img/pic3.jpg"/>
           <img src="./img/pic4.jpg"/>
            <img src="./img/pic5.jpg"/>
            
      </div>

        <div className="dream">
        <img src="./img/pic6.jpg"/>
         <img src="./img/pic7.jpg"/>
          <img src="./img/pic8.jpg"/>
           <img src="./img/pic9.jpg"/>
            <img src="./img/pic10.jpg"/>
            
      </div>

        <div className="dream">
        <img src="./img/pic11.jpg"/>
         <img src="./img/pic12.jpg"/>
          <img src="./img/pic13.jpg"/>
           <img src="./img/pic14.jpg"/>
            <img src="./img/pic15.jpg"/>
            
      </div>

      


    </div>
    <div className="btn">
      <a href="/Gallery">More</a>
    </div>
    </div>
    </section>
  </>
  );
};

export default Gallery;
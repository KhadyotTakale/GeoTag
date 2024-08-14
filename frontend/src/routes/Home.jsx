import React, { useState } from "react";
import "./Home.css";
import img1 from "/src/assets/img1.png";

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="container">
        <div className="geotag">
          <h1>Welcome To Photo GeoTagging Website</h1>
        </div>
        <div className="geotagimage">
          <img src={img1} alt="geotag" />
        </div>
      </div>

      <div className="info">
        <div className="imgadd">
          <h1>Add Image Here</h1>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
        </div>
      </div>
    </>
  );
};

export default Home;

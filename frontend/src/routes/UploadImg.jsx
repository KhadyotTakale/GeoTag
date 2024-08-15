import React, { useState } from "react";
import "./UploadImg.css";
import img2 from "/src/assets/img2.svg"; // Import the image

const UploadImg = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file, index) => ({
      name: `img${uploadedImages.length + index + 1}`,
      file: file,
    }));

    // Add new images to the uploaded images list
    setUploadedImages((prevImages) => [...prevImages, ...newImages]);

    // Generate preview URLs for the images
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store images in the database (Backend integration needed)
    console.log("Uploaded images:", uploadedImages);
  };

  return (
    <div className="upload-container">
      <img src={img2} alt="Upload" className="upload-icon" /> {/* Add image */}
      <h2>Upload an Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="upload-section">
          <label htmlFor="imageUpload">Select Images:</label>
          <input
            type="file"
            id="imageUpload"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit" className="upload-button">
          Upload
        </button>
      </form>
      {uploadedImages.length > 0 && (
        <div className="image-preview-section">
          <h3>Your Uploaded Images:</h3>
          <ul className="image-list">
            {uploadedImages.map((image, index) => (
              <li key={index}>
                {image.name}
                <img
                  src={previewImages[index]}
                  alt={`Preview of ${image.name}`}
                  className="preview-img"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadImg;

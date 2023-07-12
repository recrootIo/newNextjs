import React, { useState } from "react";
import styles from "./imagesupload.module.css";

const ImagesUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };

  return (
    <div className={styles.app}>
      {/* <div className={styles.heading}>React Multiple Images Preview</div> */}
      <div>
        <input type="file" id="file" multiple onChange={handleImageChange} />
        {/* <div className={styles.labelHolder}>
          <label htmlFor="file" className="label">
            <i className={styles.materialIcons}>add_a_photo</i>
          </label>
        </div> */}
        <div className={styles.result}>{renderPhotos(selectedFiles)}</div>
      </div>
    </div>
  );
};

export default ImagesUpload;

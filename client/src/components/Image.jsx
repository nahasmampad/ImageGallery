import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Image() {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const { data } = await axios.get("https://picsum.photos/v2/list");
    setImages(data);
  };

  useEffect(() => {
    getImages();
  }, []);

  console.log(images, "images");

  return (
    <div className="Image">
      <div className="image_container">
        {
            images.length > 0 && images.map((img,val)=>(
                <div className="imge_view"><img src={img?.download_url} alt="" /></div>
            ))
        }
      </div>
      h
    </div>
  );
}

export default Image;

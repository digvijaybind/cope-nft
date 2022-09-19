
import React from "react";
import { ImageContainer } from "./commonstyle";

function ImageContent({ image, name, role, align, side }) {
  return (
    <ImageContainer>
      <div
        className={side ? "imgEnd" : "imgStart"}
        style={{ display: "flex", justifyContent: align }}
      >
        <div className={`image-content ${side && 'mobile-end'}`}>
          {side && (
            <div className="developer-details">
              <div className="developername">{name}</div>
              <div className="developerTitle">{role}</div>
            </div>
          )}
          <img src={image} className="dev-image" />
          {!side && (
            <div className="developer-info">
              <div className="developername">{name}</div>
              <div className="developerTitle">{role}</div>
            </div>
          )}
        </div>
      </div>
    </ImageContainer>
  );
}

export default ImageContent;

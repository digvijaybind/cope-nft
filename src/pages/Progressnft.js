import React from "react";
import { ProgressContainer, ProgressWrapper } from "./Commonstylepage";
const Progressnft = () => {
  return (
    <ProgressContainer>
      <div className="progress-title">YOUR MINTING IS IN PROGRESS</div>
      <div className="loader">
        <div class="snippet" data-title=".dot-flashing">
          <div class="stage">
            <div class="dot-flashing"></div>
          </div>
        </div>
      </div>
    </ProgressContainer>
  );
};

export default Progressnft;

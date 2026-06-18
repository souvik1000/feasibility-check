import React from 'react';

import { handleDownload } from "./helper";
import DownloadIcon from '../../assets/download.svg';

import './downloadable.css';

export interface IImagesData {
  images: string[];
}

const DownloadableZip: React.FC<IImagesData> = ({ images }) => {
  return (
    <div className="download-btn-container">
      <button
        onClick={() => handleDownload(images)}
        className="download-btn"
      >
        <img 
          src={DownloadIcon} 
          alt="Download icon" 
          width="16" 
          height="16"
        />
        Download Images (.ZIP)
      </button>
    </div>
  );
};

export default DownloadableZip;

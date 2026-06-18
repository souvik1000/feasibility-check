import React from 'react';

import Button from '../shared/Button';
import { handleDownload } from "./helper";

export interface IImagesData {
  images: string[];
}

const DownloadableZip: React.FC<IImagesData> = ({ images }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Button
        onClick={() => handleDownload(images)}
      >
        Download Images (.ZIP)
      </Button>
    </div>
  );
};

export default DownloadableZip;

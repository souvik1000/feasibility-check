import { Spin } from 'antd';
import React, { use, Suspense } from 'react';

import PercentileScore from './components/PercentileScore';
import DownloadableZip from './components/DownloadableZip';
import { barDataPromise, imagesPromise } from './app.service';

import './App.css';
import PDFGenerator from './components/PDFGenerator';

const App: React.FC = () => {
  const barData = use(barDataPromise);
  const imagesData = use(imagesPromise);

  return (
    <div className="app-container">
      <Suspense
        fallback={
          <div className="loading-container">
            <Spin size="large" tip="Loading dashboard data..." />
          </div>
        }
      >
        <PercentileScore barData={barData} />
        <DownloadableZip images={imagesData.images} />
        <PDFGenerator />
      </Suspense>
    </div>
  );
};

export default App;

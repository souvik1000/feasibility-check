import type { IImagesData } from './components/DownloadableZip';
import type { IProgressBarItem } from './components/shared/ProgressBar';

import fallbackData from './data/bar-data.json';

export const barDataPromise = fetch('/src/data/bar-data.json')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to load bar data: ${res.status}`);
    }
    return res.json() as Promise<IProgressBarItem[]>;
  })
  .catch((err) => {
    console.warn('Failed to fetch bar data, using fallback:', err);
    return fallbackData as IProgressBarItem[];
  });

export const imagesPromise = fetch('/src/data/images.json')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to load images: ${res.status}`);
    }
    return res.json() as Promise<IImagesData>;
  })
  .catch((err) => {
    console.warn('Failed to fetch images, using empty fallback:', err);
    return { images: [] } as IImagesData;
  });

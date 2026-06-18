export const convertSvgToPng = (svgElement: SVGElement, width: number, height: number): Promise<string> => {
  return new Promise<string>((resolve) => {
    try {
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const DOMURL = window.URL || window.webkitURL || window;
      const url = DOMURL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/png'));
        } else {
          resolve('');
        }
        DOMURL.revokeObjectURL(url);
      };
      img.src = url;
    } catch (e) {
      console.error('Failed to convert SVG chart to PNG', e);
      resolve('');
    }
  });
};

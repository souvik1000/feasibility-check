export const fetchJSON = async <T>(url: string, fallback?: T): Promise<T | undefined> => {
    return fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP Error: ${res.status} ${res.statusText}`)
            }
            return res.json() as Promise<T>
        })
        .catch((err) => {
            console.warn(`Failed to fetch ${url}, using local fallback:`, err)
            return fallback
        })
}

export const triggerFileDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

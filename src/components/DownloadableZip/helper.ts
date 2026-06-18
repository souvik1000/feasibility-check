import { downloadZip } from "client-zip"

// Used generetor to perform async url to fetch data [one-by-one]
// It will save memory by processing one by one async way.
async function* imageResponses(urls: string[]) {
    for (const [index, url] of urls.entries()) {
        // Here you can call service to generate presigned-url 
        // And then do fetch the image data one by one and do process
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}`)
        }

        // Fixed to JPEG but it can bt dynamically through API call
        const ext = "jpg"

        // Can give name & ext based on Pre-signed URL directly
        yield {
            name: `image-${index + 1}.${ext}`,
            input: response,
        }
    }
}

// Use Promise if images counts are lesser.
// Promise.all() will works parallel to make it faster.
// const imageResponse = (urls: string[]) =>
//     Promise.all(
//         urls.map(async (url, index) => {
//             const response = await fetch(url)

//             if (!response.ok) {
//                 throw new Error(`Failed to fetch ${url}`)
//             }

//             const ext = "jpg"

//             return {
//                 name: `image-${index + 1}.${ext}`,
//                 input: response,
//             }
//         }),
//     )

export const handleDownload = async (imageUrls: string[]) => {
    const blob = await downloadZip(imageResponses(imageUrls)).blob()

    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "images.zip"
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
}

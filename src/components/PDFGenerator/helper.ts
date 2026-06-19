const convertSvgToPng = (
    svgElement: SVGElement,
    width: number,
    height: number,
): Promise<string> => {
    return new Promise<string>((resolve) => {
        try {
            const svgString = new XMLSerializer().serializeToString(svgElement)
            const svgBlob = new Blob([svgString], {
                type: "image/svg+xml;charset=utf-8",
            })
            const DOMURL = window.URL || window.webkitURL || window
            const url = DOMURL.createObjectURL(svgBlob)

            const img = new Image()
            img.onload = () => {
                const canvas = document.createElement("canvas")
                canvas.width = width
                canvas.height = height
                const ctx = canvas.getContext("2d")
                if (ctx) {
                    ctx.fillStyle = "#ffffff"
                    ctx.fillRect(0, 0, width, height)
                    ctx.drawImage(img, 0, 0, width, height)
                    resolve(canvas.toDataURL("image/png"))
                } else {
                    resolve("")
                }
                DOMURL.revokeObjectURL(url)
            }
            img.src = url
        } catch (e) {
            console.error("Failed to convert SVG chart to PNG", e)
            resolve("")
        }
    })
}

const convertCanvasToPng = (canvasElement: HTMLCanvasElement): string => {
    try {
        return canvasElement.toDataURL("image/png")
    } catch (e) {
        console.error("Failed to export canvas to PNG", e)
        return ""
    }
}

export const generateImageFromChart = async () => {
    let chartImageUri = ""
    let dualChartImageUri = ""

    // Capture Recharts SVG element
    const svgElement = document.querySelector(
        ".recharts-trend-chart .recharts-wrapper > svg",
    ) as SVGElement | null
    if (svgElement) {
        chartImageUri = await convertSvgToPng(svgElement, 1200, 600)
    }

    // Capture G2Plot Canvas element
    const chartCanvas = document.querySelector(
        ".ant-design-plots-dual-chart canvas",
    ) as HTMLCanvasElement | null
    if (chartCanvas) {
        dualChartImageUri = convertCanvasToPng(chartCanvas)
    }

    return { chartImageUri, dualChartImageUri }
}

export default class imageHelper {
    
    private constructor() {
    }
    public static async getBase64Image(img: HTMLImageElement) {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        let ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
        let dataURL = canvas.toDataURL("image/" + ext);
        return dataURL;
    }
    public static async getBase64(src: string) {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.crossOrigin = ""; // 支持跨域图片
            image.src = src;
            image.onload = async () => {
                let base64 = await this.getBase64Image(image);
                resolve(base64);
            };
        });
    }
} 
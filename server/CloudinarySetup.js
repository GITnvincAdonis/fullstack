const cloudinary = require('cloudinary').v2;
require('dotenv').config()

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
  });


(async function run(){
    
const images = [
    './images/BundleSkinCareRender.png',
    './images/SinglesSkincareRender.png']
    
    for(const image of images){
        const result = await cloudinary.uploader.upload(image)
        console.log(result.secure_url);
    }

})();
const cloudinary = require('cloudinary').v2;
require('dotenv').config()

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
  });


(async function run(){
    
    // const images = [     './images/BundleSkinCareRender.png',
    //  './images/SinglesSkincareRender.png']


    // const images = ['./images/hyaluronic acid.png','./images/hydrating cleanser.png','./images/Moisturizer.png','./images/Nia.png','./images/squalene.png','./images/untitled.png' ]
    // for(const image of images){
    //     const result = await cloudinary.uploader.upload(image)
    //    console.log(result.public_id);
    // }

    const images = ['./images/INITA.png' ]
    for(const image of images){
        const result = await cloudinary.uploader.upload(image)
       console.log(result.public_id);
    }
// try {
//     const vids = ['./images/0001-0522.mp4' ]
//     for(const vid of vids){
//         const result = await cloudinary.uploader.upload(vid,{resource_type: 'video'})
//         console.log(result.public_id);
//     }
// } catch (error) {
//     console.log(error.message)
// }
  
})();
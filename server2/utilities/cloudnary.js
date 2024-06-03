import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'
(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name:process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret // Click 'View Credentials' below to copy your API secret
    });
    
    // Upload an image
     const uploadOnCloudinary=async(localFilePath)=>{
        try {
            if(!localFilePath) return null
            const uploadResult = await cloudinary.uploader.upload( localFilePath , {
                resource_type:"auto"
            })
            console.log(uploadResult)
            console.log("flie uploaded successfully",uploadResult.url);  
        } catch (error) {
            fs.unlinkSync(localFilePath)
            console.log(error);
            return null
        }
    }
    
    
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url("shoes", {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url("shoes", {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();

module.exports={
    uploadOnCloudinary
}
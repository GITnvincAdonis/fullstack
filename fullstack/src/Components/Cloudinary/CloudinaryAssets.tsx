import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";

export function CImage(props: { CloudinaryImageID: string }) {
  const { CloudinaryImageID } = props;

  const cld = new Cloudinary({
    cloud: {
      cloudName: `${import.meta.env.VITE_CLOUDINARY_NAME}`,
    },
  });

  try {
    const myImage = cld
      .image(CloudinaryImageID)
      .format("auto")
      .resize(scale(400));

    return <AdvancedImage cldImg={myImage}></AdvancedImage>;
  } catch (error) {
    console.log("an error occured trying to use image: " + error);
    return (
      <>
        <div>error</div>
      </>
    );
  }
}
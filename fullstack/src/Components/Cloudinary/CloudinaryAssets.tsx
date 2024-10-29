import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";

export function CImage(props: {
  CloudinaryImageID: string;
  classNames?: string;
  image_size: number;
}) {
  const { CloudinaryImageID, classNames, image_size } = props;

  const cld = new Cloudinary({
    cloud: {
      cloudName: `${import.meta.env.VITE_CLOUDINARY_NAME}`,
    },
  });

  try {
    const myImage = cld
      .image(CloudinaryImageID)
      .format("auto")
      .quality("auto:eco")
      .resize(scale().width(image_size));

    return (
      <AdvancedImage className={classNames} cldImg={myImage}></AdvancedImage>
    );
  } catch (error) {
    console.log("an error occured trying to use image: " + error);
    return (
      <>
        <div>error</div>
      </>
    );
  }
}
export function CVid(props: {
  CloudinaryVideoID: string;
  classNames?: string;
}) {
  const { CloudinaryVideoID, classNames } = props;

  const cld = new Cloudinary({
    cloud: {
      cloudName: `${import.meta.env.VITE_CLOUDINARY_NAME}`,
    },
  });

  try {
    const video = cld.video(CloudinaryVideoID).format("auto");

    return (
      <AdvancedVideo
        id="myVid"
        className={classNames}
        cldVid={video}
        autoPlay
        loop
        muted
        controls
      ></AdvancedVideo>
    );
  } catch (error) {
    console.log("an error occured trying to use image: " + error);
    return (
      <>
        <div>error</div>
      </>
    );
  }
}

import { ChangeEvent, SetStateAction, useState } from "react";
import ProfileImage from "./ProfileImage";

const ImageUpload = ({
  setSelectedImage,
  defaultImage,
}: {
  setSelectedImage: React.Dispatch<SetStateAction<File | null>>;
  defaultImage: string | null;
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(defaultImage);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <ProfileImage image={previewImage} />
      </div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUpload;

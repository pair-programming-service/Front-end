import profileSvg from "../../assets/images/register/profile.svg";

const ProfileImage = ({ image }: { image: string | null }) => {
  return (
    <img
      src={image || profileSvg}
      className="w-20 h-20 border rounded-full object-cover"
    />
  );
};

export default ProfileImage;

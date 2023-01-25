import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const SocialIcons = ({ item }) => {
  const icons = [
    <FaTwitter />,
    <FaTelegramPlane />,
    <FaDiscord />,
    <FaInstagram />,
    <FaRedditAlien />,
    <FaFacebookF />,
    <FaLinkedinIn />,
    <FaGithub />,
  ];

  return (
    <>
      <a href={item.socialMediaAddress} target="_blank" rel="noreferrer">
        <div className="p-3 rounded-md bg-[#f39200] bg-opacity-0 hover:bg-opacity-10 cursor-pointer transition-all hover:text-[#f39200]">
          <span>{icons[item.socialMediaName]}</span>
        </div>
      </a>
    </>
  );
};

export default SocialIcons;

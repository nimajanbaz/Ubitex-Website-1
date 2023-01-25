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
        <div>
          <a href={item.socialMediaAddress} target="_blank" rel="noreferrer">
            <span>{icons[item.socialMediaName]}</span>
          </a>
        </div>
      </>
    );
  };
  
  export default SocialIcons;
  
import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SOCIAL_LINKS = {
  facebook: "https://facebook.com/",
  twitter: "https://twitter.com/",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
  github: "https://github.com/",
};

const SocialButton = () => {
  return (
    <StyledWrapper>
      <ul className="wrapper">
        {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
          <li
            key={key}
            className={`icon ${key}`}
            onClick={() => window.open(url, "_blank")}
          >
            <span className="tooltip">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            {key === "facebook" && <FaFacebookF size={20} target="_blank" />}
            {key === "twitter" && <FaTwitter size={20}   target="_blank"/>}
            {key === "instagram" && <FaInstagram size={20}   target="_blank"/>}
            {key === "linkedin" && <FaLinkedinIn size={20}  target="_blank" />}
            {key === "github" && <FaGithub size={20}  target="_blank"/>}
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    display: flex;
    justify-content: center;
    gap: 16px;
    padding: 40px 0;
    flex-wrap: wrap;
  }

  .icon {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${({ theme }) => theme === "dark" ? "#333" : "#fff"};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme === "dark" ? "#fff" : "#333"};

    &:hover {
      transform: scale(1.15) translateY(-5px);
      box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
    }
  }

  .tooltip {
    position: absolute;
    top: -35px;
    background: ${({ theme }) => theme === "dark" ? "#222" : "#f1f1f1"};
    color: ${({ theme }) => theme === "dark" ? "#fff" : "#333"};
    font-size: 13px;
    padding: 5px 10px;
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s ease;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .icon:hover .tooltip {
    opacity: 1;
    top: -45px;
  }

  /* Magnetic effect */
  .icon:hover {
    animation: bounce 0.4s ease;
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.3);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1.05);
    }
  }

  /* Individual brand colors on hover */
  .facebook:hover {
    background: #1877f2;
    color: #fff;
  }
  .twitter:hover {
    background: #1da1f2;
    color: #fff;
  }
  .instagram:hover {
    background: #e4405f;
    color: #fff;
  }
  .linkedin:hover {
    background: #0077b5;
    color: #fff;
  }
  .github:hover {
    background: #333;
    color: #fff;
  }

  /* Responsive */
  @media (max-width: 480px) {
    .wrapper {
      gap: 12px;
    }
    .icon {
      width: 44px;
      height: 44px;
    }
  }
`;

export default SocialButton;

import React from 'react';
import { BsTwitter, BsInstagram} from 'react-icons/bs';
import { FaLinkedinIn, FaGithub} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://twitter.com/macclare07" target="_blank" rel="noreferrer">
            <BsTwitter />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/claree_cee" target='blank' rel='noreferrer'>
            <BsInstagram />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/angela-mbakwe-45953619a" target='blank' rel='noreferrer'>
            <FaLinkedinIn />
            </a>
        </div>
        <div>
            <a href="https://github.com/Macclare" target='blank' rel='noreferrer'>
            <FaGithub />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia
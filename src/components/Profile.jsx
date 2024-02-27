import React from 'react';
import Potrait from '../assets/profile.png';
import {
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa6';

const Profile = () => {
  const socialData = [
    {
      name: 'github',
      icon: <FaGithub />,
      link: 'https://github.com/PraisesPJMT/',
    },
    {
      name: 'linkedin',
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/praises-tula/',
    },
    {
      name: 'twitter',
      icon: <FaTwitter />,
      link: 'https://twitter.com/PraisesPJMT/',
    },
    {
      name: 'facebook',
      icon: <FaFacebook />,
      link: 'https://web.facebook.com/praises.musa/',
    },
    {
      name: 'instagram',
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/praisespjmt/',
    },
  ];

  return (
    <section id='profile'>
      <h1>Praises Musa Tula</h1>
      <h2>Software Developer</h2>
      <div className='avatar'>
        <img
          src={Potrait}
          alt='Praises Tula'
        />
      </div>
      <p>
        I'm a Software Developer located in Nigeria. I have great
        <span> passion</span> for UI creation, effect, animation and dynamic
        user experiences.
        <br />
        <br />
        Always <span>eager to learn</span>, I stay current on security
        <span>best practices</span> and explore new avenues for growth
      </p>
      <a
        href='#'
        className='email'
        target='_blank'
      >
        praisesmusa@gmail.com
      </a>

      <div id='socials'>
        {socialData.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target='_blank'
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className='tag'>
        <span>P</span>
      </div>
    </section>
  );
};

export default Profile;

import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'tomasaltero@gmail.com',
    href: 'tomasaltero@gmail.com',
  },
  {
    social: 'github',
    link: 'Tomialtero',
    href: 'https://www.github.com/Tomialtero',
  },
  {
    social: 'linkedin',
    link: 'tomialtero',
    href: 'https://www.linkedin.com/in/tomas-altero-27679b210/',
  },
  {
    social: 'twitter',
    link: '@Tomi_Altero5',
    href: 'https://twitter.com/Tomi_Altero5',
  },
  {
    social: 'instagram',
    link: '@tomi_altero',
    href: 'https://www.instagram.com/tomi_altero/',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.redes</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;

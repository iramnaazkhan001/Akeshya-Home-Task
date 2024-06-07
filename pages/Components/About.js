import { Button } from 'react-bootstrap';
import styles from '../../styles/About.module.css';
import { BsEmojiSmile } from "react-icons/bs";
import { BsJournalRichtext } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { BsGlobe } from "react-icons/bs";

import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
    <div className={styles.titleContainer}>
        <h1 className={styles.title}>ABOUT US</h1>
      </div>
    <div className={styles.content}>
      <div className={styles.left}>
        <p>
          We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
        </p>
        <ul>
          <li>We started with a simple idea: do what is best for the client.</li>
          <li>Our methodical and individual approach to each project delivers the finest possible results for your media.</li>
          <li>Our day-to-day work is to solve your problems utilizing the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.</li>
        </ul>
      </div>
      <div className={styles.right}>
        <p>
          We&apos;re professional, but we&apos;re also friendly, and we&apos;ll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you&apos;re interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.
        </p>
        <Button className="custom-button" style={{ border: '2.5px solid #14279B', color: '#14279B', borderRadius: '40px', backgroundColor: 'white' }}>
          Learn More
        </Button>
      </div>
    </div>
    <div className={styles.infoWrapper}>
      <div className={styles.image}>
        <Image src="/trophy.png" alt="Trophy" width={400} height={300} />
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.value}><BsEmojiSmile color='#0033a0' /> 3835039</span>
          <span className={styles.label}>Organic Reach (Global)</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.value}><BsJournalRichtext color='#0033a0' /> 14081</span>
          <span className={styles.label}>Watch Hours (Asia)</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.value}><GoClock color='#0033a0' /> 85</span>
          <span className={styles.label}>Campaigns</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.value}><BsGlobe color='#0033a0' /> 17</span>
          <span className={styles.label}>Excellent CTR % (Asia)</span>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default About;

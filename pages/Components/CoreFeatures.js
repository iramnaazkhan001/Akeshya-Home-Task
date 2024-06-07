import React from 'react';
import styles from '../../styles/CoreFeatures.module.css';

const features = [
    { title: 'Web design', icon: '🌐' },
    { title: 'Development', icon: '💻' },
    { title: 'Branding', icon: '📣' },
    { title: 'Media buying', icon: '🛒' },
    { title: 'Search engine', icon: '🔍' },
    { title: 'Brand strategy', icon: '📝' },
    { title: 'Local search marketing', icon: '📍' },
    { title: 'Lead Tracking & Management', icon: '📊' },
    { title: 'Contact management', icon: '📒' },
    { title: 'Media management', icon: '🎬' },
    { title: 'Social scheduling', icon: '📅' },
    { title: 'Ad retargeting', icon: '📈' },
];

function CoreFeatures() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>OUR CORE FEATURES</h1>
            <p className={styles.subtitle}>
                Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.
            </p>
            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>{feature.icon}</div>
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoreFeatures;

import Image from 'next/image';

const logos = [
    { src: '/pen.png', alt: 'Logo 1' },
    { src: '/c2.png', alt: 'Logo 2' },
    { src: '/c3.png', alt: 'Logo 3' },
    { src: '/c4.png', alt: 'Logo 4' },
    { src: '/c5.png', alt: 'Logo 5' },
    { src: '/c6.png', alt: 'Logo 6' },
];

function LogoPage() {
  return (
    <div className="logo-carousel">
     {logos.map((logo, index) => (
        <div key={index} className="logo-item">
          <Image src={logo.src} alt={logo.alt} width={100} height={100} />
        </div>
      ))}
    </div>
  );
}

export default LogoPage;

import React, { useState, useEffect } from "react";
import BackgroundDesktop from '../assets/showcaseimg-desktop.webp';
import BackgroundMobile from '../assets/showcaseimg-mobile.webp';

const HeroPage = () => {
    const [bgImage, setBgImage] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        const newImage = window.innerWidth < 768 ? BackgroundMobile : BackgroundDesktop;
        setBgImage(newImage);
    };

handleResize ();

window.addEventListener('resize', handleResize);

return () => window.removeEventListener('resize', handleResize);
}, []);

useEffect(() => {
    if (bgImage) {
        const img = new Image();
        img.src = bgImage;
        img.onload = () => setIsLoaded(true);
    }
}, [bgImage]);

const scrollToSection = (sectionId) => {
    const element= document.getElementById(sectionId);
    if (element) {
        const offSetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offSetTop,
            behavior: 'smooth',
            });
    }
}

const heroStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.7s ease-out'
};

    return (
        <section id="home" className="hero" style={heroStyle}>
           <div className="hero-overlay">
            <div className="hero-top-section">
                <h1 className="Fabulojatitulo">
                    Fabuloja Modas
                </h1>
                <p className="Estilo">Descubra o melhor estilo para você.</p>
                <div className="hero-buttons-animation">
                    <button className="btn-man" onClick={() => scrollToSection('Masculino')}>
                        Moda Masculina
                    </button>
                    <button className="btn-woman" onClick={() => scrollToSection('Feminino')}>
                        Moda Feminina
                    </button>
                    </div>
                </div>
        <div className="hero-scroll-animation-bounce">
            ↓
                </div>
            </div>
        </section>
    );
};

export default HeroPage;
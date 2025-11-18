import React, { useState, useEffect } from 'react';

const NavTopPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
        setIsMenuOpen(false);
    };

    return (
            <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <a 
                        href="#" 
                        className="nav-top" 
                        onClick={(e) => {
                            e.preventDefault(); 
                            scrollToSection('home');
                        }}
                    >

                        
                        Fabulosa Modas
                    </a>

                    <ul className="nav-menu">
                        <li>
                            <button 
                                className="nav-link" 
                                onClick={() => scrollToSection('home')}
                            >
                                Home
                            </button>
                        </li>
                       
                        <li>
                            <button 
                                className="nav-link" 
                                onClick={() => scrollToSection('Footer')}
                            >
                                Contato
                            </button>
                        </li>
                    </ul>
                    
                    <button 
                        className="nav-toggle" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        ☰
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="mobile-menu">
                        <button onClick={() => scrollToSection('home')}>Home</button>
                        <button onClick={() => scrollToSection('Footer')}>Contato</button>
                    </div>         
                )}
            </nav>
    );
};

export default NavTopPage;

// Fazer funcionar o modo de clicar no contato e ir até o footer,
// fiz funcionar, mas não consegui manter (IMPORTANTE - FOCAR )
// HORA DE PREPARAR AS FONTES ???????? (OPCIONAL)
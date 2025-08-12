import { useState } from "react";
import lacostetshirt from '../assets/lacostetshirt.avif';
import lacostetshirt2 from '../assets/lacostetshirt2.avif';
import hugoboss from '../assets/hugoboss.webp';
import hugoboss2 from '../assets/hugoboss2.webp';
import eckoUnltd from '../assets/eckoUnltd.webp';
import eckoUnltd2 from '../assets/eckoUnltd2.webp';
import nikeSportWear from '../assets/nikeSportWear.webp';
import nikeSportWear2 from '../assets/nikeSportWear2.webp';
import adidasEssentials from '../assets/adidasEssentials.webp';
import adidasEssentials2 from '../assets/adidasEssentials2.webp';
import calvinKlein from '../assets/calvinKlein.webp';
import calvinKlein2 from '../assets/calvinKlein2.avif';
import poloRalphLauren from '../assets/poloRalphLauren.webp';
import poloRalphLauren2 from '../assets/poloRalphLauren2.avif';
import oakleyTshirt from '../assets/oakleyTshirt.webp';
import oakleyTshirt2 from '../assets/oakleyTshirt2.webp';

import { ShoppingCart } from "lucide-react";

export default function MainLandingPage() {
    const [activeTab, setActiveTab] = useState('Masculino');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => setSelectedProduct(product);
    const closeModal = () => setSelectedProduct(null);

    // Jogar o projeto para o Git, deixar salvo, é claro. (PRIORIDADE ALTA IMPORTANTE)
    // Criar um componente chamado footer, pra "finalizar" a landingpage (MEDIA PRIORIDADE)
    // Complementar a coleção feminina.
    // será que consigo minimizar esses import ? (PRIORIDADE??)
    const collections = {
        Masculino: [
            {
                id: 1, name: 'Camisa Lacoste', price: 'R$ 90,00',
                image: lacostetshirt,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza` },


            {
                id: 2, name: 'Camisa HugoBoss', price: 'R$ 95,00',
                image: hugoboss,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },


            {
                id: 3, name: 'Camisa Ecko Unltd', price: 'R$ 89,00',
                image: eckoUnltd,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },

            {
                id: 4, name: 'Camisa Nike Sportswear', price: 'R$ 99,00',
                image: nikeSportWear,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
            {
                id: 5, name: 'Camisa Adidas Essentials', price: 'R$ 100,00',
                image: adidasEssentials,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
            {
                id: 6, name: 'Camisa Calvin Klein', price: 'R$ 97,00',
                image: calvinKlein,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },

            {
                id: 7, name: 'Camisa Polo RalphLauren', price: 'R$ 89,00',
                image: poloRalphLauren,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
            {
                id: 8, name: 'Camisa Oakley', price: 'R$ 87,00',
                image: oakleyTshirt,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },

            {
                id: 9, name: 'Camisa Lacoste', price: 'R$ 90,00',
                image: lacostetshirt2,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza` },


            {
                id: 10, name: 'Camisa HugoBoss', price: 'R$ 95,00',
                image: hugoboss2,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },


            {
                id: 11, name: 'Camisa Ecko Unltd', price: 'R$ 89,00',
                image: eckoUnltd2,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },

            {
                id: 12, name: 'Camisa Nike Sportswear', price: 'R$ 99,00',
                image: nikeSportWear2,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
            {
                id: 13, name: 'Camisa Adidas Essentials', price: 'R$ 100,00',
                image: adidasEssentials2,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
            {
                id: 14, name: 'Camisa Kalvin Klein', price: 'R$ 97,00',
                image: calvinKlein2,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },

            {
                id: 15, name: 'Camisa Polo RalphLauren', price: 'R$ 89,00',
                image: poloRalphLauren2,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
            {
                id: 16, name: 'Camisa Oakley', price: 'R$ 87,00',
                image: oakleyTshirt2,
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },




        ],

        Feminino: [
            { id: 20, name: 'Look 1', price: 'R$ 90,10' },
            { id: 21, name: 'Look 2', price: 'R$ 89,00' },
            { id: 22, name: 'Look 3', price: 'R$ 78,00' },
            { id: 23, name: 'Look 4', price: 'R$ 97,00' },
            { id: 24, name: 'Look 5', price: 'R$ 99,00' }
        ]
    };

    return (
        <div className="landing-page">
            
            {selectedProduct && (
                <div className="modal-backdrop" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>X</button>

                        <div className="modal-image-container">
                            <img src={selectedProduct.image} alt={selectedProduct.name} />
                        </div>

                        <div className="modal-product-info">
                            <h3>{selectedProduct.name}</h3>
                            <p className="modal-price">{selectedProduct.price}</p>
                            <p className="modal-details">{selectedProduct.details}</p>

                            <div className="modal-actions">
                                <button className="add-to-cart-button">
                                    <ShoppingCart size={20} />
                                    Adicionar ao carrinho
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <section id="collections" className="collections-section">
                <div className="section-container">
                    <div className="section-header">
                        <h2 className="section-title"> Coleção Fabuloja</h2>
                        <div className="section-description">
                            <p>Elegância e sofisticação para o homem moderno,
                            <p>Descubra as peças que combinam com seu estilo de qualidade premium.</p>
                        </p>
                    </div>
                    </div>
                    <div className="tabs-container">
                        <div className="tabs-wrapper">
                            <button className={`tab-button ${activeTab === 'Masculino' ? 'active-tab' : 'inactive-tab'}`}
                                onClick={() => setActiveTab('Masculino')}> Moda Masculino </button>

                            <button className={`tab-button ${activeTab === 'Feminino' ? 'active-tab' : 'inactive-tab'}`}
                                onClick={() => setActiveTab('Feminino')}> Moda Feminino </button>
                        </div>
                    </div>

                    <div className="collection-grid">
                        {collections[activeTab].map((item) => (
                            <div key={item.id} className="collection-card">
                                <div className="product-image" onClick={() => openModal(item)}>
                                    <img src={item.image} alt={item.name} />
                                </div>

                                <div className="product-info">
                                    <h3 className="product-name">{item.name}</h3>
                                    <p className="product-price">{item.price}</p>
                                </div>

                                <div className="product-hover-overlay">
                                    <button className="quick-view-button" onClick={() => openModal(item)}>
                                        Ver Detalhes
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
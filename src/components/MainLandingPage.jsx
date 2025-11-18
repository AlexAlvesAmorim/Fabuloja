import { useState } from "react";
import lacostetshirt from '../assets/manvitrine/lacostetshirt.avif';
import lacostetshirt2 from '../assets/manvitrine/lacostetshirt2.avif';
import hugoboss from '../assets/manvitrine/hugoboss.webp';
import hugoboss2 from '../assets/manvitrine/hugoboss2.webp';
import eckoUnltd from '../assets/manvitrine/eckoUnltd.webp';
import eckoUnltd2 from '../assets/manvitrine/eckoUnltd2.webp';
import nikeSportWear from '../assets/manvitrine/nikeSportWear.webp';
import nikeSportWear2 from '../assets/manvitrine/nikeSportWear2.webp';
import adidasEssentials from '../assets/manvitrine/adidasEssentials.webp';
import adidasEssentials2 from '../assets/manvitrine/adidasEssentials2.webp';
import calvinKlein from '../assets/manvitrine/calvinKlein.webp';
import calvinKlein2 from '../assets/manvitrine/calvinKlein2.avif';
import poloRalphLauren from '../assets/manvitrine/poloRalphLauren.webp';
import poloRalphLauren2 from '../assets/manvitrine/poloRalphLauren2.avif';
import oakleyTshirt from '../assets/manvitrine/oakleyTshirt.webp';
import oakleyTshirt2 from '../assets/manvitrine/oakleyTshirt2.webp';

import { ShoppingCart } from "lucide-react";

export default function MainLandingPage() {
    const [activeTab, setActiveTab] = useState('Masculino');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => setSelectedProduct(product);
    const closeModal = () => setSelectedProduct(null);

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
                id: 14, name: 'Camisa Calvin Klein', price: 'R$ 97,00',
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

        Feminina: [
            {
                id: 20, name: 'Conjunto boho chic e jeans', price: 'R$ 87,00',
                image: '/womanvitrine/conjuntobohochicjeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },

            {
                id: 21, name: 'Conjunto Cropped e jeans', price: 'R$ 90,00',
                image: '/womanvitrine/conjuntocroppedjeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza` },


            {
                id: 22, name: 'Conjunto Jaqueta Jeans, blusa de trico e saia', price: 'R$ 95,00',
                image: '/womanvitrine/conjuntojaquetajeansblusasaia.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },


            {
                id: 23, name: 'Conjunto Cropped e saia Jeans', price: 'R$ 89,00',
                image: '/womanvitrine/conjuntocroppedjeanscinto.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },

            {
                id: 24, name: 'Conjunto Cropped de Trico e short Jeans', price: 'R$ 99,00',
                image: '/womanvitrine/conjuntocroppedtricoshortjeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
            {
                id: 25, name: 'Conjunto Cropped Preto e short jeans', price: 'R$ 100,00',
                image: '/womanvitrine/conjuntocroppedpretojeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
            {
                id: 26, name: 'Conjunto Jeans', price: 'R$ 97,00',
                image: '/womanvitrine/conjuntojeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },

            {
                id: 27, name: 'Conjunto Cropped florido e short jeans', price: 'R$ 89,00',
                image: '/womanvitrine/conjuntoCroppedFloridojeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
            {
                id: 28, name: 'Conjunto Cropped Preto, bandana e short jeans', price: 'R$ 87,00',
                image: '/womanvitrine/conjuntoCroppedBandanaPretoJeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },

            {
                id: 29, name: 'Conjunto Cropped Amarelo e Saia Jeans', price: 'R$ 90,00',
                image: '/womanvitrine/conjuntoCroppedAmareloJeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza` },


            {
                id: 30, name: 'Conjunto Cropped preto, Saia Jeans e bolsa bege', price: 'R$ 95,00',
                image: '/womanvitrine/conjuntoCroppedPretoBolsaBegeJeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },


            {
                id: 31, name: 'Conjunto Cropped Listrado e short Jeans', price: 'R$ 89,00',
                image: '/womanvitrine/conjuntoCroppedListradoJeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },

            {
                id: 32, name: 'Conjunto Cropped Marrom e short Jeans', price: 'R$ 99,00',
                image: '/womanvitrine/conjuntoCroppedmarromjeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
            {
                id: 33, name: 'Conjunto Cropped Azul escuro e short jeans', price: 'R$ 100,00',
                image: '/womanvitrine/conjuntoCroppedAzuljeans.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
            {
                id: 34, name: 'Conjunto Bluzinha azul e short listrado', price: 'R$ 97,00',
                image: '/womanvitrine/conjuntoBlusinhaAzulShortListrado.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },

            {
                id: 35, name: 'Conjunto de Body e short', price: 'R$ 89,00',
                image: '/womanvitrine/conjuntoBodyBermuda.webp',
                details: `Aposte em um visual despojado e muito conforto com a Camisa Polo Lacoste Masculina!,
                 Disponiveis nos tamanhos P, M, G e GG. Cores: Preto, Branco, Vermelho, Cinza`
            },
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
                            <p>A elegância essencial para a moda moderna,
                                <p>Descubra as peças que combinam com seu estilo de qualidade premium.</p>
                            </p>
                        </div>
                    </div>
                    <div className="tabs-container">
                        <div className="tabs-wrapper">
                            <button className={`tab-button ${activeTab === 'Masculino' ? 'active-tab' : 'inactive-tab'}`}
                                onClick={() => setActiveTab('Masculino')}> Moda Masculino </button>

                            <button className={`tab-button ${activeTab === 'Feminina' ? 'active-tab' : 'inactive-tab'}`}
                                onClick={() => setActiveTab('Feminina')}> Moda Feminina </button>
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
import { Container, Card, Col, Row } from 'react-bootstrap';
import actividades from "../assets/actividades.jpg";
import biblioteca from '../assets/biblioteca.jpg';
import canchas from '../assets/cancha.jpg';
import escenario from '../assets/escenario.jpg';
import mastil from '../assets/mastil.jpg';
import patio from '../assets/patio.jpg';
import '../styles/galeria.css';
import '../styles/animations.css';
import { useFontSizes } from '../context/FontSizeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Galeria() {
    const fontSizes = useFontSizes();

    // Referencias para animaciones
    const [tituloRef, tituloVisible] = useScrollAnimation();
    const [introRef, introVisible] = useScrollAnimation();
    const [card1Ref, card1Visible] = useScrollAnimation();
    const [card2Ref, card2Visible] = useScrollAnimation();
    const [card3Ref, card3Visible] = useScrollAnimation();
    const [card4Ref, card4Visible] = useScrollAnimation();
    const [card5Ref, card5Visible] = useScrollAnimation();
    const [card6Ref, card6Visible] = useScrollAnimation();

    const cards = [
        {
            title: 'Actividades',
            text: 'Obras de teatro.',
            imgSrc: actividades,
            ref: card1Ref,
            visible: card1Visible,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
                    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"/>
                </svg>
            ),
        },
        {
            title: 'Biblioteca',
            text: 'Un espacio para la lectura y el aprendizaje.',
            imgSrc: biblioteca,
            ref: card2Ref,
            visible: card2Visible,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                </svg>
            ),
        },
        {
            title: 'Canchas',
            text: 'Espacio deportivo amplio.',
            imgSrc: canchas,
            ref: card3Ref,
            visible: card3Visible,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-.5 2.5A.5.5 0 0 1 6 6.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
                    <path d="M2 1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1v-2h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1V5h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 13v1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h3m8 0h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-3m0-5v1H3v-1m0-5h10m0 1H3V5m0-2h10V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"/>
                </svg>
            ),
        },
        {
            title: 'Escenario',
            text: 'Eventos y presentaciones escolares.',
            imgSrc: escenario,
            ref: card4Ref,
            visible: card4Visible,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l3.235 1.94a2.8 2.8 0 0 0-.233 1.027L1 5.384v5.721l3.453-2.124c.146.277.329.524.55.723L1 12.384V12a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.384l-4.003-2.68c.221-.2.404-.446.55-.723L15 11.105V5.383l-3.002 1.801a2.8 2.8 0 0 0-.233-1.026L15 4.217V4a1 1 0 0 0-1-1z"/>
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                </svg>
            ),
        },
        {
            title: 'Mástil',
            text: 'Símbolo de nuestra bandera.',
            imgSrc: mastil,
            ref: card5Ref,
            visible: card5Visible,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                </svg>
            ),
        },
        {
            title: 'Patio',
            text: 'Espacio para encuentro y recreo.',
            imgSrc: patio,
            ref: card6Ref,
            visible: card6Visible,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>
            ),
        },
    ];

    return (
        <section id="galeria" className="py-4">
            <Container>
                <h2 
                    ref={tituloRef}
                    className={`info-titulo text-center fw-bold text-uppercase mb-3 pb-3 animate-on-scroll ${tituloVisible ? 'animated' : ''}`}
                    style={{ fontSize: fontSizes.galeriaTitle, wordBreak: 'break-word', hyphens: 'auto' }}
                >
                    SECTORES DE NUESTRO ESTABLECIMIENTO
                </h2>

                <p 
                    ref={introRef}
                    className={`galeria-intro text-start mb-4 animate-on-scroll ${introVisible ? 'animated' : ''}`}
                    style={{ fontSize: fontSizes.contentText, maxWidth: '800px' }}
                >
                    Conoce los distintos sectores de nuestra institución.
                </p>
                
                <Row xs={1} sm={2} md={3} className="g-4">
                    {cards.map((card, idx) => (
                        <Col key={idx}>
                            <div ref={card.ref}>
                                <div className={`galeria-card-wrapper h-100 animate-on-scroll ${card.visible ? 'animated' : ''}`}>
                                    <div className="galeria-card-image-container">
                                        <img 
                                            src={card.imgSrc} 
                                            alt={card.title}
                                            className="galeria-card-image"
                                        />
                                        <div className="galeria-card-overlay">
                                            <div className="galeria-card-content">
                                                <div className="galeria-card-icon-display mb-3">
                                                    {card.icon}
                                                </div>
                                                <div className="galeria-card-line mb-3"></div>
                                                <h3 className="galeria-card-title mb-3" style={{ fontSize: fontSizes.galeriaCardTitle }}>
                                                    {card.title}
                                                </h3>
                                                <p className="galeria-card-text mb-0" style={{ fontSize: fontSizes.galeriaCardText }}>
                                                    {card.text}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="galeria-card-shine"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Galeria;

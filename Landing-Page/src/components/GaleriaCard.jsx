import { useFontSizes } from '../context/FontSizeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function GaleriaCard({ card }) {
    const fontSizes = useFontSizes();
    const [cardRef, cardVisible] = useScrollAnimation();

    return (
        <div ref={cardRef}>
            <div className={`galeria-card-wrapper h-100 animate-on-scroll ${cardVisible ? 'animated' : ''}`}>
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
    );
}

export default GaleriaCard;

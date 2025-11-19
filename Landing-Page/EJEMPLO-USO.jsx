// 📝 EJEMPLO: Cómo usar el sistema de tipografía en un nuevo componente

import React from 'react';
import { Container } from 'react-bootstrap';
import { useFontSizes } from '../context/FontSizeContext';

function EjemploComponente() {
  // 1. Importar el hook
  const fontSizes = useFontSizes();

  return (
    <Container>
      {/* 2. Aplicar los tamaños inline con style */}
      
      {/* Título principal de sección */}
      <h1 style={{ fontSize: fontSizes.sectionTitle }}>
        Mi Título Principal
      </h1>

      {/* Subtítulo */}
      <h2 style={{ fontSize: fontSizes.sectionSubtitle }}>
        Mi Subtítulo
      </h2>

      {/* Texto de contenido */}
      <p style={{ fontSize: fontSizes.contentText }}>
        Este es un párrafo de texto que se ajustará automáticamente
        según el tamaño de la pantalla, incluyendo pantallas 4K.
      </p>

      {/* Botón */}
      <button style={{ fontSize: fontSizes.buttonText }}>
        Hacer Click
      </button>

      {/* También puedes usar tamaños base */}
      <div>
        <span style={{ fontSize: fontSizes.small }}>Texto pequeño</span>
        <span style={{ fontSize: fontSizes.base }}>Texto normal</span>
        <span style={{ fontSize: fontSizes.large }}>Texto grande</span>
      </div>

      {/* ⚠️ IMPORTANTE: Los tamaños se actualizan automáticamente
          cuando el usuario cambia el tamaño de la ventana */}
    </Container>
  );
}

export default EjemploComponente;

/* 
  📚 TAMAÑOS DISPONIBLES:
  
  Tamaños Base:
  - fontSizes.small
  - fontSizes.base
  - fontSizes.medium
  - fontSizes.large
  - fontSizes.xlarge
  - fontSizes.xxlarge
  
  Navbar:
  - fontSizes.navbarTitle
  - fontSizes.navbarLink
  
  Secciones:
  - fontSizes.sectionTitle
  - fontSizes.sectionSubtitle
  
  Contenido:
  - fontSizes.contentText
  - fontSizes.contentTitle
  
  Carrusel:
  - fontSizes.carouselTitle
  - fontSizes.carouselText
  - fontSizes.carouselCaption
  
  Planes/Oferta Académica:
  - fontSizes.planesTitle
  - fontSizes.planesTurnos
  - fontSizes.planesAccordion
  - fontSizes.planesDescription
  - fontSizes.planesInfoTitle
  
  Galería:
  - fontSizes.galeriaTitle
  - fontSizes.galeriaCardTitle
  - fontSizes.galeriaCardText
  
  Botones:
  - fontSizes.buttonText
  - fontSizes.buttonLarge
  
  Footer:
  - fontSizes.footerTitle
  - fontSizes.footerSubtitle
  - fontSizes.footerText
  - fontSizes.footerSmall
  
  Formularios:
  - fontSizes.formTitle
  - fontSizes.formLabel
  - fontSizes.formInput
  
  Mapa:
  - fontSizes.mapaTitle
  
  Factor de escala (por si lo necesitas):
  - fontSizes.scaleFactor
*/

/* 
  🎨 ALTERNATIVA: Usar con styled-components o emotion
  
  import styled from 'styled-components';
  
  const Title = styled.h1`
    font-size: ${props => props.fontSize};
  `;
  
  function MiComponente() {
    const fontSizes = useFontSizes();
    return <Title fontSize={fontSizes.sectionTitle}>Mi Título</Title>;
  }
*/

/* 
  💡 TIPS:
  
  1. Siempre importa useFontSizes al inicio del componente
  2. Usa style={{ fontSize: fontSizes.xxx }} para aplicar tamaños
  3. No es necesario agregar !important, los estilos inline tienen alta especificidad
  4. Los tamaños ya incluyen la unidad (px), no agregues más
  5. Si necesitas un tamaño nuevo, agrégalo en useResponsiveFontSize.jsx
*/

import { useState, useEffect } from 'react';

const useResponsiveFontSize = () => {
  const [fontSizes, setFontSizes] = useState({
    // Tamaños base
    base: '16px',
    small: '14px',
    medium: '18px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '48px',

    // Navbar
    navbarTitle: '20px',
    navbarLink: '16px',

    // Títulos y contenido
    sectionTitle: '36px',
    sectionSubtitle: '20px',
    contentText: '17px',
    contentTitle: '22px',

    // Carrusel
    carouselTitle: '42px',
    carouselText: '20px',
    carouselCaption: '14px',

    // Oferta Académica
    planesTitle: '36px',
    planesTurnos: '19px',
    planesAccordion: '17px',
    planesDescription: '16px',
    planesInfoTitle: '17px',

    // Galería
    galeriaTitle: '36px',
    galeriaCardTitle: '18px',
    galeriaCardText: '15px',

    // Botones
    buttonText: '16px',
    buttonLarge: '18px',
    buttonSize: '55px',
    buttonIconSize: '24px',

    // Footer
    footerTitle: '18px',
    footerSubtitle: '15px',
    footerText: '14px',
    footerSmall: '13px',

    // Formularios
    formTitle: '24px',
    formLabel: '16px',
    formInput: '16px',

    // Mapa
    mapaTitle: '36px',

    // Factores
    scaleFactor: 1,
    buttonScale: 1,
  });

  useEffect(() => {
    const calculateFontSizes = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Calculamos un factor de escala basado en el ancho de pantalla
      // Usando una fórmula más proporcional que escala mejor
      let scaleFactor = 1;
      let buttonScale = 1;
      
      if (width <= 375) {
        // Móviles muy pequeños
        scaleFactor = 0.75;
        buttonScale = 0.85;
      } else if (width <= 576) {
        // Móviles
        scaleFactor = 0.85;
        buttonScale = 0.9;
      } else if (width <= 768) {
        // Tablets pequeñas
        scaleFactor = 0.95;
        buttonScale = 0.95;
      } else if (width <= 992) {
        // Tablets grandes
        scaleFactor = 1;
        buttonScale = 1;
      } else if (width <= 1366) {
        // Laptops pequeñas
        scaleFactor = 1.1;
        buttonScale = 1.05;
      } else if (width <= 1920) {
        // Full HD (Base de referencia)
        scaleFactor = 1.2;
        buttonScale = 1.1;
      } else if (width <= 2560) {
        // 2K - Escalado más agresivo
        scaleFactor = 2.0;
        buttonScale = 1.9;
      } else if (width <= 3840) {
        // 4K - Escalado EXTREMO para que se vea igual que en 1080p
        scaleFactor = 3.8;
        buttonScale = 3.5;
      } else {
        // 5K+ - Escalado máximo
        scaleFactor = 4.8;
        buttonScale = 4.5;
      }

      // También consideramos la altura para pantallas muy anchas pero bajas
      const aspectRatio = width / height;
      if (aspectRatio > 2.5) {
        scaleFactor *= 0.9;
        buttonScale *= 0.9;
      }

      setFontSizes({
        // Tamaños base
        base: `${16 * scaleFactor}px`,
        small: `${14 * scaleFactor}px`,
        medium: `${18 * scaleFactor}px`,
        large: `${24 * scaleFactor}px`,
        xlarge: `${32 * scaleFactor}px`,
        xxlarge: `${48 * scaleFactor}px`,
        
        // Navbar
        navbarTitle: `${20 * scaleFactor}px`,
        navbarLink: `${16 * scaleFactor}px`,
        
        // Títulos de secciones (Sobre Nosotros, Galería, etc)
        sectionTitle: `${36 * scaleFactor}px`,
        sectionSubtitle: `${20 * scaleFactor}px`,
        
        // Contenido
        contentText: `${17 * scaleFactor}px`,
        contentTitle: `${22 * scaleFactor}px`,
        
        // Carrusel
        carouselTitle: `${42 * scaleFactor}px`,
        carouselText: `${20 * scaleFactor}px`,
        carouselCaption: `${14 * scaleFactor}px`,
        
        // Oferta Académica
        planesTitle: `${36 * scaleFactor}px`,
        planesTurnos: `${19 * scaleFactor}px`,
        planesAccordion: `${17 * scaleFactor}px`,
        planesDescription: `${16 * scaleFactor}px`,
        planesInfoTitle: `${17 * scaleFactor}px`,
        
        // Galería
        galeriaTitle: `${36 * scaleFactor}px`,
        galeriaCardTitle: `${18 * scaleFactor}px`,
        galeriaCardText: `${15 * scaleFactor}px`,
        
        // Botones de texto
        buttonText: `${16 * scaleFactor}px`,
        buttonLarge: `${18 * scaleFactor}px`,
        
        // Botones flotantes (contacto e inicio)
        buttonSize: `${55 * buttonScale}px`,
        buttonIconSize: `${24 * buttonScale}px`,
        
        // Footer
        footerTitle: `${18 * scaleFactor}px`,
        footerSubtitle: `${15 * scaleFactor}px`,
        footerText: `${14 * scaleFactor}px`,
        footerSmall: `${13 * scaleFactor}px`,
        
        // Formulario de contacto
        formTitle: `${24 * scaleFactor}px`,
        formLabel: `${16 * scaleFactor}px`,
        formInput: `${16 * scaleFactor}px`,
        
        // Mapa
        mapaTitle: `${36 * scaleFactor}px`,
        
        // Factores de escala (por si se necesitan en componentes)
        scaleFactor: scaleFactor,
        buttonScale: buttonScale
      });
    };

    // Calculamos al montar el componente
    calculateFontSizes();

    // Recalculamos cuando cambia el tamaño de la ventana
    // Usamos un debounce para evitar cálculos excesivos
    let timeoutId;
    const debouncedCalculate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculateFontSizes, 150);
    };

    window.addEventListener('resize', debouncedCalculate);

    // Limpiamos el evento al desmontar
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedCalculate);
    };
  }, []);

  return fontSizes;
};

export default useResponsiveFontSize;

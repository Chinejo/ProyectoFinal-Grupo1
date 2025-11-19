# Sistema de Tipografía Responsiva con React Hooks

## 🎯 Solución Implementada (Sin Media Queries)

Esta solución reemplaza completamente el uso de media queries CSS por un enfoque 100% JavaScript/React usando hooks personalizados y contexto de React.

## 📁 Estructura de Archivos

```
src/
├── hooks/
│   └── useResponsiveFontSize.jsx    # Hook personalizado para cálculo de tamaños
├── context/
│   └── FontSizeContext.jsx          # Contexto y Provider para compartir tamaños
├── components/
│   ├── NavBar.jsx                   # ✅ Actualizado
│   ├── Footer.jsx                   # ✅ Actualizado
│   ├── SobreNosotros.jsx           # ✅ Actualizado
│   ├── OfertaAcademica.jsx         # ✅ Actualizado
│   ├── Galeria.jsx                  # ✅ Actualizado
│   ├── Mapa-ubicacion.jsx          # ✅ Actualizado
│   ├── Carrusel.jsx                 # ✅ Actualizado
│   ├── Boton-contacto.jsx          # ✅ Actualizado
│   └── Boton-inicio.jsx             # No requiere cambios
└── styles/
    ├── navBar.css                   # ✅ Limpiado
    ├── footer.css                   # ✅ Limpiado
    ├── sobreNosotros.css           # ✅ Limpiado
    ├── ofertaAcademica.css         # ✅ Limpiado
    ├── galeria.css                  # ✅ Limpiado
    ├── mapaubi.css                  # ✅ Limpiado
    ├── carrusel.css                 # ✅ Limpiado
    └── boton-contacto.css          # ✅ Limpiado
```

## 🔧 Cómo Funciona

### 1. Hook `useResponsiveFontSize`

Este hook personalizado:
- Detecta el tamaño de la ventana usando `window.innerWidth` y `window.innerHeight`
- Calcula un factor de escala basado en rangos de resolución
- Retorna un objeto con todos los tamaños de fuente calculados
- Se actualiza automáticamente cuando cambia el tamaño de ventana (con debounce)

**Rangos de pantalla:**
- 480px: Factor 0.8125 (Móviles pequeños)
- 576px: Factor 0.875 (Móviles)
- 768px: Factor 0.9375 (Tablets)
- 992px: Factor 1.0 (Tablets grandes)
- 1200px: Factor 1.0625 (Laptops)
- 1440px: Factor 1.125 (Laptops grandes)
- 1920px: Factor 1.125 (Full HD)
- 2560px: Factor 1.1875 (2K)
- 3840px: Factor 1.3125 (4K) ⭐
- 5K+: Factor 1.4375

### 2. Context API

El `FontSizeContext` provee los tamaños de fuente a toda la aplicación:
```jsx
<FontSizeProvider>
  <App />
</FontSizeProvider>
```

### 3. Uso en Componentes

En cualquier componente:
```jsx
import { useFontSizes } from '../context/FontSizeContext';

function MiComponente() {
  const fontSizes = useFontSizes();
  
  return (
    <h1 style={{ fontSize: fontSizes.sectionTitle }}>
      Mi Título
    </h1>
  );
}
```

## 📊 Tamaños Disponibles

El hook provee estos tamaños calculados automáticamente:

### Tamaños Base
- `base`: 16px * scaleFactor
- `small`: 14px * scaleFactor
- `medium`: 18px * scaleFactor
- `large`: 24px * scaleFactor
- `xlarge`: 32px * scaleFactor
- `xxlarge`: 48px * scaleFactor

### Tamaños Específicos
- **Navbar**: `navbarTitle`, `navbarLink`
- **Secciones**: `sectionTitle`, `sectionSubtitle`
- **Contenido**: `contentText`, `contentTitle`
- **Carrusel**: `carouselTitle`, `carouselText`, `carouselCaption`
- **Planes**: `planesTitle`, `planesTurnos`, `planesAccordion`, `planesDescription`, `planesInfoTitle`
- **Galería**: `galeriaTitle`, `galeriaCardTitle`, `galeriaCardText`
- **Botones**: `buttonText`, `buttonLarge`
- **Footer**: `footerTitle`, `footerSubtitle`, `footerText`, `footerSmall`
- **Formulario**: `formTitle`, `formLabel`, `formInput`
- **Mapa**: `mapaTitle`

## ✨ Ventajas de esta Solución

### 1. **Sin Media Queries** ✅
- Tu profesora estará feliz
- Todo el control está en JavaScript
- Más dinámico y flexible

### 2. **Actualización en Tiempo Real** ⚡
- Los tamaños se recalculan al cambiar el tamaño de ventana
- Usa debounce para optimizar el rendimiento
- No requiere recargar la página

### 3. **Escalado Perfecto en 4K** 📺
- Factor de escala 1.3125 para pantallas 4K (3840px)
- Factor de escala 1.4375 para pantallas 5K+
- El texto siempre es legible

### 4. **Centralizado** 🎯
- Un solo lugar para ajustar todos los tamaños
- Fácil de mantener y modificar
- Consistencia garantizada

### 5. **Type-Safe** 🔒
- Todos los tamaños están definidos en el hook
- No hay valores mágicos en los componentes
- Fácil de depurar

## 🔄 Cómo Ajustar Tamaños

### Opción 1: Cambiar el Factor de Escala
Edita `src/hooks/useResponsiveFontSize.jsx`:
```jsx
if (width <= 3840) {
  // Pantallas 4K
  scaleFactor = 1.5; // Aumentar para textos más grandes
}
```

### Opción 2: Cambiar Tamaños Base
Edita los multiplicadores en el mismo archivo:
```jsx
navbarTitle: `${22 * scaleFactor}px`, // Era 20, ahora 22
```

### Opción 3: Agregar Nuevos Tamaños
Agrega más propiedades al objeto retornado:
```jsx
return {
  // ... existentes
  myCustomSize: `${19 * scaleFactor}px`,
};
```

Y úsalo en tus componentes:
```jsx
<p style={{ fontSize: fontSizes.myCustomSize }}>Texto</p>
```

## 🧪 Testing

Para probar en diferentes tamaños de pantalla:

1. Abre Chrome DevTools (F12)
2. Activa el modo dispositivo (Ctrl + Shift + M)
3. Prueba diferentes resoluciones:
   - iPhone SE: 375x667
   - iPad: 768x1024
   - Laptop: 1366x768
   - Desktop HD: 1920x1080
   - 4K: 3840x2160

4. Verifica que el texto sea legible en todas las resoluciones

## 🐛 Troubleshooting

### Problema: Los tamaños no se actualizan
**Solución**: Verifica que `FontSizeProvider` esté envolviendo tu `<App />` en `main.jsx`

### Problema: Error "useFontSizes must be used within FontSizeProvider"
**Solución**: Asegúrate de que el componente esté dentro del Provider

### Problema: Los tamaños son muy grandes/pequeños en 4K
**Solución**: Ajusta el `scaleFactor` en el hook para pantallas de 3840px+

## 📚 Recursos Adicionales

- [React Context API](https://react.dev/reference/react/useContext)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Window.innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth)

## 🎓 Aprendizajes

Esta solución demuestra:
- ✅ Uso avanzado de React Hooks
- ✅ Patrón Context API para estado global
- ✅ Responsive design sin CSS
- ✅ Optimización con debounce
- ✅ Diseño escalable y mantenible

---

**Desarrollado con ❤️ sin media queries para hacer feliz a tu profesora** 😄

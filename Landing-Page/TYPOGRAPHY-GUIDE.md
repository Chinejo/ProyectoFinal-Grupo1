# Sistema de Tipografía Responsiva

## Cambios Implementados

### 1. Base de Fuente Responsiva (index.css)
Se configuró una base de fuente que se escala automáticamente según el tamaño de la pantalla:

```css
:root {
  font-size: clamp(14px, 0.8vw + 0.5vh, 20px);
}
```

Esta configuración:
- **Mínimo**: 14px (pantallas pequeñas)
- **Óptimo**: Se calcula dinámicamente usando viewport width (vw) y viewport height (vh)
- **Máximo**: 20px (pantallas muy grandes)

### 2. Función clamp() Mejorada

Se actualizaron todos los tamaños de fuente usando una fórmula más efectiva:

```css
font-size: clamp(min, preferido, max);
```

**Antes**: `clamp(1.75rem, 4vw, 2.8rem)`
- Problema: En pantallas 4K, 4vw era demasiado pequeño

**Ahora**: `clamp(1.75rem, 2.5vw + 0.5rem, 3rem)`
- Solución: Combina viewport width con un valor base (rem), escalando mejor en pantallas grandes

### 3. Media Queries para Pantallas 4K

Se agregaron media queries específicas en `responsive-typography.css`:

- **Pantallas 2K (2560px+)**: font-size base de 18px
- **Pantallas 4K (3840px+)**: font-size base de 20px
- **Tablets (1024px-)**: font-size base de 15px
- **Móviles (768px-)**: font-size base de 14px

### 4. Elementos Actualizados

#### Títulos principales (h2)
```css
font-size: clamp(1.75rem, 2.5vw + 0.5rem, 3rem);
```

#### Texto de contenido
```css
font-size: clamp(1rem, 1vw + 0.2rem, 1.25rem);
```

#### Navbar
- Título: `clamp(1.1rem, 1.5vw + 0.3rem, 2rem)`
- Botones: `clamp(0.9rem, 1vw + 0.2rem, 1.3rem)`

#### Footer
- Texto base: `clamp(0.875rem, 1vw, 1rem)`
- Títulos h3: `clamp(1rem, 1.5vw, 1.3rem)`

## Ventajas del Sistema

1. **Escalado Uniforme**: Todos los textos mantienen proporciones consistentes
2. **Legibilidad en 4K**: Los textos ya no se ven microscópicos
3. **Responsive**: Funciona perfectamente en móviles, tablets y desktop
4. **Mantenible**: Fácil de ajustar modificando los valores en :root
5. **Performante**: Usa características CSS nativas sin JavaScript

## Pruebas Recomendadas

Prueba el sitio en:
- ✅ Móvil (< 768px)
- ✅ Tablet (768px - 1024px)
- ✅ Desktop HD (1920x1080)
- ✅ Desktop 2K (2560x1440)
- ✅ Desktop 4K (3840x2160)

## Ajustes Adicionales (Opcional)

Si algún texto aún se ve muy pequeño o grande, puedes ajustar:

1. **Valores base en :root** (index.css):
   ```css
   font-size: clamp(14px, 0.8vw + 0.5vh, 20px);
   ```

2. **Media queries específicas** (responsive-typography.css):
   ```css
   @media screen and (min-width: 3840px) {
     :root {
       font-size: 22px; /* Aumentar si se ve pequeño en 4K */
     }
   }
   ```

3. **Elementos individuales**: Ajusta los valores clamp() en sus archivos CSS respectivos

## Archivos Modificados

- ✅ `src/index.css` - Base de fuente responsiva
- ✅ `src/main.jsx` - Import del nuevo archivo CSS
- ✅ `src/styles/responsive-typography.css` - Media queries para diferentes pantallas
- ✅ `src/styles/navBar.css` - Tamaños responsivos
- ✅ `src/styles/footer.css` - Tamaños responsivos
- ✅ `src/styles/sobreNosotros.css` - Tamaños responsivos
- ✅ `src/styles/ofertaAcademica.css` - Tamaños responsivos
- ✅ `src/styles/galeria.css` - Tamaños responsivos
- ✅ `src/styles/mapaubi.css` - Tamaños responsivos
- ✅ `src/styles/carrusel.css` - Tamaños responsivos
- ✅ `src/styles/boton-contacto.css` - Tamaños responsivos

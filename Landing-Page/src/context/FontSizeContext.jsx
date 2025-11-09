import React, { createContext, useContext } from 'react';
import useResponsiveFontSize from '../hooks/useResponsiveFontSize';

const FontSizeContext = createContext();

export const useFontSizes = () => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSizes debe usarse dentro de FontSizeProvider');
  }
  return context;
};

export const FontSizeProvider = ({ children }) => {
  const fontSizes = useResponsiveFontSize();

  return (
    <FontSizeContext.Provider value={fontSizes}>
      {children}
    </FontSizeContext.Provider>
  );
};

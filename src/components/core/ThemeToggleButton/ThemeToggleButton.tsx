import React from 'react';
import { useTheme } from '../../../ThemeContext';
import { StyledButton } from '@/components/core/ThemeToggleButton/ThemeToggleButton.styles';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledButton onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </StyledButton>
  );
};

export default ThemeToggleButton;
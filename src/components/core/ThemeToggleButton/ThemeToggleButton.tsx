import React from 'react';

import { useTheme } from '../../../ThemeContext';
import LightIcon from '@/components/icons/LightIcon';
import DarkIcon from '@/components/icons/DarkIcon';
import { StyledButton } from '@/components/core/ThemeToggleButton/ThemeToggleButton.styles';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledButton onClick={toggleTheme}>
      <span className={theme === 'light' ? 'active' : ''}>
        <LightIcon />
        Light
      </span>
      <span className={theme === 'dark' ? 'active' : ''}>
        <DarkIcon />
        Dark
      </span>
    </StyledButton>
  );
};

export default ThemeToggleButton;
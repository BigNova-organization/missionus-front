import React from 'react';

import { Theme } from '../../theme/Theme.model';

import './Buttons.styles.css';

type ButtonType = 'primary' | 'secondary';

interface ButtonProps {
  type: ButtonType;
  theme: Theme;
  onClick?: (...args: any[]) => void;
  children:React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ theme, type, onClick, children }) => (
  <button
    className={`button button--${type}`}
    onClick={onClick}
    style={{ ...theme as React.CSSProperties }}
  >
    {children}
  </button>
)
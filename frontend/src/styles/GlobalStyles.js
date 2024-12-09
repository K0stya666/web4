import { createGlobalStyle, keyframes } from 'styled-components';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.2); }
  50% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.4); }
  100% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.2); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #000000;
    color: #FFFFFF;
    font-family: 'Orbitron', sans-serif;
    background-image: 
      linear-gradient(0deg, transparent 24%, 
        rgba(255, 0, 0, .05) 25%, 
        rgba(255, 0, 0, .05) 26%, 
        transparent 27%, 
        transparent 74%, 
        rgba(255, 0, 0, .05) 75%, 
        rgba(255, 0, 0, .05) 76%, 
        transparent 77%),
      linear-gradient(90deg, transparent 24%, 
        rgba(255, 0, 0, .05) 25%, 
        rgba(255, 0, 0, .05) 26%, 
        transparent 27%, 
        transparent 74%, 
        rgba(255, 0, 0, .05) 75%, 
        rgba(255, 0, 0, .05) 76%, 
        transparent 77%);
    background-size: 50px 50px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    background: rgba(10, 10, 10, 0.95);
    border: 1px solid #333;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.1), transparent);
      animation: shine 3s infinite linear;
    }
  }

  @keyframes shine {
    to {
      left: 100%;
    }
  }

  th, td {
    padding: 1rem;
    text-align: center;
    border: 1px solid #333;
    position: relative;
  }

  th {
    background: rgba(26, 26, 26, 0.95);
    color: #FFFFFF;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #FF0000, transparent);
    }
  }

  tr {
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 0, 0, 0.05);
      td {
        color: #FF0000;
      }
    }
  }

  svg#graph {
    background: rgba(10, 10, 10, 0.95);
    border: 1px solid #333;
    margin: 2rem 0;
    transition: all 0.3s ease;
    animation: ${glowAnimation} 3s infinite ease-in-out;
    
    &:hover {
      animation: ${pulseAnimation} 2s infinite ease-in-out;
    }
    
    line, text {
      stroke: #FFFFFF;
      fill: #FFFFFF;
      transition: all 0.3s ease;
    }
    
    text {
      font-family: 'Orbitron', sans-serif;
      font-size: 0.8rem;
      
      &:hover {
        fill: #FF0000;
        transform: scale(1.1);
      }
    }
    
    polygon, rect, path {
      fill: rgba(255, 0, 0, 0.1);
      stroke: #FF0000;
      stroke-width: 1;
      transition: all 0.3s ease;
      
      &:hover {
        fill: rgba(255, 0, 0, 0.2);
        stroke-width: 2;
        filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.5));
      }
    }

    circle {
      transition: all 0.3s ease;
      
      &:hover {
        r: 4;
        fill: #FF0000;
        filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.5));
      }
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  ::-webkit-scrollbar-thumb {
    background: #FF0000;
    border-radius: 0;
    border: 1px solid #1a1a1a;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #CC0000;
  }

  ::selection {
    background: rgba(255, 0, 0, 0.2);
    color: #FF0000;
  }
`;
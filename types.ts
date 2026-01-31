
import React from 'react';

// Extend the global JSX namespace to include the 'iconify-icon' custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        icon?: string; 
        width?: string | number; 
        height?: string | number; 
        flip?: string; 
        rotate?: string | number; 
        class?: string;
        className?: string;
      }, HTMLElement>;
    }
  }
}

// Also augment the React namespace specifically to ensure visibility in modern TSX environments
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        icon?: string; 
        width?: string | number; 
        height?: string | number; 
        flip?: string; 
        rotate?: string | number; 
        class?: string;
        className?: string;
      }, HTMLElement>;
    }
  }
}

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export interface ChartDataPoint {
  time: string;
  height: number;
  anomalies: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

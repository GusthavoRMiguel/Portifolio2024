import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    box: {
      shadow: string;
      shadow_secondary: string;
    };
    background: {
      colors: {
        primary: string;
        secondary: string;
      };

      linear: {
        primary: string;
        hover: string;
      };
    };
    font: {
      family: string;
      sizes: {
        xxxxsmall: string;
        xxxsmall: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        xxxlarge: string;
        huge: string;
      };
    };
    colors: {
      scrollbar_thumb: string;
      scrollbar_track: string;
      sidebar: string;
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
      text_hover: string;
      text_secondary: string;
      text_secondary_hover: string;
      text_tertiary: string;
      text_tertiary_hover: string;
      overlay: string;
      white: string;
      purple: string;
      blue: string;
    };
    layers: {
      base: number;
      menu: number;
      overlay: number;
      modal: number;
      alwaysOnTop: number;
    };
    transition: {
      default: string;
      fast: string;
    };
  }
}

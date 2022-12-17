import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    font: {
      bookman: string;
      cuprum: string;
      freestyle: string;
    };
    colors: {
      milk: string;
      milkWarm: string;
      golden: string;
      naples: string;
      putty: string;
      cold: string;
      coldDark: string;
      black075: string;
      red: string;
    };
    screens: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xl2: string;
    };
  }
}

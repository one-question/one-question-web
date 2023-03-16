/** ts 에서 window 객체에 global function 추가하려면 아래와 같이 window interface 에 해당 함수 타입을 추가해줘야함.. */
declare global {
  interface Window {
    callBackHandler: Function;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    xs: React.CSSProperties;
    sm: React.CSSProperties;
    md: React.CSSProperties;
    lg: React.CSSProperties;
    xl: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    xs?: React.CSSProperties;
    sm?: React.CSSProperties;
    md?: React.CSSProperties;
    lg?: React.CSSProperties;
    xl?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
export {};

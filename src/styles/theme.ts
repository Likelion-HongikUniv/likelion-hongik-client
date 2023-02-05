export const BLACK_1 = "#000000";
export const BLACK_2 = "#242424B2";
export const WHITE_1 = "#ffffff";
export const WHITE_2 = "#878787";


export interface screenSize {
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number,
}

// 사이즈 참고만 하세요! 
// sm = 모바일, md = 태블릿, lg = 폴드, xl = 데스크탑

const theme = ({
  values: {
    xs: 0,
    sm: 600,
    md: 768,
    lg: 992,
    xl: 1200,
  },
});
import theme from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;

    base: typeof theme.base;
  }
}

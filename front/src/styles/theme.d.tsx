import 'emotion/react';

declare module '@emotion/react' {
    export interface ThemeTypes {
        fontSizes: {
            sm: string;
            base: string;
            md: string;
            lg: string;
        };
        colors: {
            black: string;
            dark: string;
            primary: string;
            secondary: string;
        };
    }
}

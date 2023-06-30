import { AppProps } from 'next/app';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
})

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antiliasing;
    outline: none;
  }
`

const theme = {
  colors: {
    primary: '#2c83fb',
    secondary: '#1f76f0',
    green: '#F0F8FF',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme} >
        <div className={pjs.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}
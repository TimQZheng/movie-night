import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import {createTheme, NextUIProvider} from "@nextui-org/react";

const lightTheme = createTheme({
    type: 'light',
})

const darkTheme = createTheme({
    type: 'dark',
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </ThemeProvider>
    )
}

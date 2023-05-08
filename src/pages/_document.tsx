import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import {NextPageContext} from "next";
import {RenderPage} from "next/dist/shared/lib/utils";

class MyDocument extends Document {
    static async getInitialProps(ctx: NextPageContext & {
        renderPage: RenderPage;
        defaultGetInitialProps(ctx: DocumentContext, options?: { nonce?: string }): Promise<DocumentInitialProps>
    }) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles])
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>{CssBaseline.flush()}</Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
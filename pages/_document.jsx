import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

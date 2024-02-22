import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'
export default function Document() {
  // const router=useRouter();
  // const data=`Muthu | ${router}`;
  return (
    <Html lang="en">
      <Head >
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import React, {ReactNode} from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode,
  title?: String,
}

const Layout = ({ children, title = 'Music spotify'}: Props) => (
  <div>
    <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
    <footer>
      <hr />
      <span></span>
    </footer>
  </div>
);

export default Layout
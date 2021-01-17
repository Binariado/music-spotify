import React, {ReactNode} from 'react'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
  children?: ReactNode,
  title?: String,
}

const Layout = styled.div`
`;

const LayoutComponent = ({ children, title = 'Music spotify'}: Props) => (
  <Layout className="bg-primary">
    <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
    {/* <footer>
      <hr />
      <span></span>
    </footer> */}
  </Layout>
);

export default LayoutComponent
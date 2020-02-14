import Head from "next/head";

import Navbar from "../Navbar";

const Layout: React.FC = props => (
  <>
    <Head>
      <title>Tradeling - Infinite recursive shape</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/materia/bootstrap.min.css" rel="stylesheet" />
      <meta charSet="utf-8" />
    </Head>
    <Navbar />
    <div className='container'>
      <div className="Content">{props.children}</div>
    </div>
  </>
);

export default Layout;

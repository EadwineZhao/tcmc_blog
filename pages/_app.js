import React, { useEffect, useState} from "react";
import Layout from "../components/Layout";
import '../styles/globals.scss';
// import '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}



export default MyApp

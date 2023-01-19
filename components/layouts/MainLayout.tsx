import React from 'react';
import Head from 'next/head';
import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css';

export const MainLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className={styles.container}>

          <Head>
            <title>Home - K</title>
            <meta name="description" content="Home Page"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico"/>
          </Head>

          <Head>
            <meta name="keywords" content="kabra, curso, next.js"/>
          </Head>
    
          <NavBar/>
    
          <main className={styles.main}>

            { children }
        
          </main>
          </div>
      )
}

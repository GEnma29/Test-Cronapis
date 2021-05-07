import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
const ElementDeleted = () => {
    return (
        <div>
            <div className="container">
      <Head>
        <title>Test Prueba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      <div className="">
        <div className="navbar">
        <img src="/vercel.svg" alt="Vercel Logo" className="NavbarLogo" />
        <div  className="navigation">
                <Link href="/CreateStore">
                    <a>Create Store</a>
                </Link>

                <Link href="/">
                    <a>Stores</a>
                </Link>

                <Link href="/Edit">
                    <a>Edit</a>
                </Link>
        </div>
        </div>
        
        </div>
      </header>

      <main>
       <div className="container">
           <div>
           <Image
        src="/Delete.png"
        alt="Item Deleted"
        width={300}
        height={200}
      />
               <h1>Document Deleted</h1>
               <Link href="/">
                 <button className ="btn_blue">Come back to Store</button>
               </Link>
           </div>

       </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
   
        .container {
          min-height: 75vh;
          width: 100%;
          display: grid;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .navbar{
          display: flex;
          flex-direction: row;
          justify-content:space-between;
          width: 100%;

        }
        .NavbarLogo{
          height: 1.2em;
          margin: 0.6rem 4rem 0 auto;
        }
        .navigation {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          list-style: none;
          margin: 0; 
        }
        .navigation a {
          text-decoration: none;
          display: block;
          padding: .5em;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
          line-height: 1.5;
        }

        .card img{
          border-radius: 10px;
          width: 100%;
        }
        
        .btn_blue{
          border: 2px solid #008CBA;
          border-radius: 40px;
          width: 160px;
          height: 40px;
          margin: 0.5rem;
          font-size: 1rem;
          background-color:#ffff;
          color

        }
        .btn_green{
          border: 2px solid #4CAF50;
          border-radius: 40px;
          width: 120px;
          height: 50px;
          margin: 0.5rem;
          font-size: 1rem;
          background-color:#ffff;
          color

        }
        .btn_red:hover{
          background-color: #f44336;
          color: white;
        }
        .btn_blue:hover{
          background-color: #008CBA;
          color: white;
        }
        .btn_green:hover{
          background-color: #4CAF50;
          color: white;
        }



        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .btn_blue {
            margin: auto 1em 0 4rem;
            
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>    
</div>
    )
}

export default ElementDeleted

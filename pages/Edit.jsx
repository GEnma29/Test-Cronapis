import Head from 'next/head'
import Link from 'next/link'
import { connectToDatabase } from '../util/mongodb'
import { useForm } from "react-hook-form";
const Edit = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors)
    const onSubmit = async (data) => {
      console.log(data);
      const SenData = await fetch(`http://localhost:3000/api/insert/`,{
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
      const res= await SenData.json()
      console.log(res)
      
    }
    return (
      <div className="container">
            <Head>
             <title>Edit Store</title>
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
               <h1 className="title">
                 Cronapis Test 
               </h1>
               <p className="description">
                <a href="https://github.com/GEnma29">Enmanuel Alfonzo</a>
                </p>
                <h2>Stores</h2>
                <div className="gradient-background">
                  <div className="Container_Form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input 
                            type="text"
                            {...register("name",{
                              required:true,
                              type:String,
                              maxLength: 25,
                            })}
                             id="name"
                             placeholder="Store name"
                             />
                        </div>
                        <div>
                            <label htmlFor="Direction">Direction</label>
                            <input 
                            type="text" 
                            {...register("Direction")}
                            id="Direction"  
                            placeholder="Store Direction"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">phone</label>
                            <input 
                            type="text" 
                            {...register("phone")}
                            id="phone"  
                            placeholder="Store phone"/>
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input 
                            type="email" 
                            {...register("email")}
                            id="phone"  
                            placeholder="Store email"/>
                        </div>
                        <div>
                            <div>
                                Location
                                <div>
                                    <div>
                                        <label htmlFor="latitude">Latitude</label>
                                        <input 
                                        type="text" 
                                        {...register("latitude")}
                                        id="latitude" 
                                        placeholder="Store coordinates Latitude"/>
                                    </div>
                                    <div>
                                        <label htmlFor="longitude">Longitude</label>
                                        <input 
                                        type="text" 
                                        {...register("longitude")}
                                        id="longitude"  
                                        placeholder="Store coordinates Longitude"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="imageUrl">Url image</label>
                            <input 
                            type="text" 
                            {...register("imageUrl")}
                            id="imageUrl" 
                            placeholder="Store url image"/>
                        </div>
                        
                          <button  className="btn_green">Add Store</button>
                        
                    </form>
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
          min-height: 100vh;
          width: 100%;
          padding: 0;
          margin:0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding:0;
          margin:0;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
        }
        .gradient-background {
           align-items: center;
           justify-content: center;
           background: linear-gradient(62deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
           animation: gradient 15s ease infinite; 
           background-size: 420% 400%;
           border-radius: 30px;
           min-height: 90vh;
           width: 110%;
          
        }
        @-webkit-keyframes gradient{
          0% {
            background-position: 0 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
             background-position: 0% 50%;
          }
        }
        @keyframes gradient{
          0% {
            background-position: 0 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
             background-position: 0% 50%;
          }
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

        .Container_Form{
            display: flex;
            flex-direction:column;
            margin: .1rem 0 0 38rem;
            flex-basis: 45%;
            padding: 2rem;
            font-size: calc(18px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
            background-color:#fff;
            border: 1px solid #0a0a0a;
            border-radius: 10px;
            width: 20%;
            transition: color 0.15s ease, border-color 0.15s ease;

        }
        
        .Container_Form label {
            display: flex;
            flex-direction:column;
            margin: 0.3rem;
            font-weight: 500;
        }
        .Container_Form input {
            border: 1px solid #eaeaea;
            border-radius: 10px;
            cursor:pointer;
            margin: 0.2rem;
            text-decoration: none;
            height: 30px;
        }
        input :focus{
          box-shadow:#6EC3C7;
          outline:none;
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
        .btn_green{
          border: 2px solid #4CAF50;
          border-radius: 40px;
          width: 120px;
          height: 50px;
          margin: 1rem 1em 0 1.6rem;
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
          .Container_Form{
            width: 60%;
            margin: 0.4rem 0 0 6rem;
          }
          .btn_green{
            margin: 1rem 1em 0 2.5rem;

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
    )
}

export default Edit

export async function getServerSideProps(context) {
    const {db} = await connectToDatabase();
    const data = await db.collection('Stores').find({}).limit(20).toArray();
    const properties = JSON.parse(JSON.stringify(data))
    return {
      props: { properties: properties },
    }
  }
  

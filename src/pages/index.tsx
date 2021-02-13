// import Head from 'next/head'
// import styles from '../styles/Landing.module.css'

// export default function Landing() {
//   return (
//     <div className={styles.buttons_container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }

import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Landing.module.css'

// import calculatorIcon from '../../assets/images/icons/calculator.svg'
// import lupaIcon from '../../assets/images/icons/magnifying-glass.svg'
// import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className={styles.page_landing}>
      <Head>
        <title>GoCorreios</title>
      </Head>
      <div className={`${styles.page_landing_content} ${styles.container}`}>
        <div className={styles.logo_container}>
          <img src='./assets/images/logo.svg' alt="GoCorreios" />
          <p className={styles.text}>Use os serviços dos Correios</p>
          <p className={styles.sub_text}>
            Aqui você encontra facilidade para calcular frete e ver onde suas encomendas estão.
          </p>
        </div>
        <div className={styles.buttons_container}>

          <Link href="/fare/calculation">
            <div className={styles.button}>
              <img src='./assets/images/icons/calculator.svg' alt="Frete" />

              Frete
            </div>

            </Link>


          <Link href="/">
          <div className={styles.button}>

                <img src='./assets/images/icons/magnifying-glass.svg' alt="Rastreamento" />
                Rastreamento
                </div>

            </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing

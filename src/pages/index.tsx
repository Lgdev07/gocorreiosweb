import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Landing.module.css'

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

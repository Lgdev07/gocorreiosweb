import { useEffect, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { NextRouter, withRouter } from 'next/router'

import styles from './Result.module.css'
import Head from 'next/head'

interface WithRouterProps {
  router: NextRouter
}

interface FareProps extends WithRouterProps {
  query: {
    days_for_delivery: string
    deliver_home: string
    deliver_saturday: string
    obs: string
    price: string
    service: string
  }
}

const FareResult: NextPage<FareProps> = ({ query }) => {
  const [daysForDelivery, setDaysForDelivery] = useState('')
  const [deliver_home, setDeliverHome] = useState('')
  const [deliver_saturday, setDeliverSaturday] = useState('')
  const [obs, setObs] = useState('')
  const [price, setPrice] = useState('')
  const [service, setService] = useState('')

  const handleShare = async () => {
    if (navigator.share) {
      navigator.share({
        title: 'Resultado Frete',
        text: `
          Preço: ${query.price}
          Serviço: ${query.service}
          Dias para entrega: ${query.days_for_delivery}
          Entrega em casa: ${query.deliver_home}
          Entrega aos sábados: ${query.deliver_saturday}
          Observações: ${query.obs}
        `
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }

  useEffect(() => {
    setDaysForDelivery(query.days_for_delivery)
    setDeliverHome(query.deliver_home)
    setDeliverSaturday(query.deliver_saturday)
    setObs(query.obs)
    setPrice(query.price)
    setService(query.service)
  }, [query])

  return (
    <div className={`${styles.fare_result} container`}>
      <Head>
        <title>GoCorreios - Cálculo de Frete - Resultado</title>
      </Head>
      <div className={styles.logo_container}>
        <Link href="/fare/calculation">
          <img src='../assets/images/icons/back.svg' className={styles.back_icon} alt="Back" />
        </Link>

        <img src='../assets/images/logo.svg' alt="GoCorreios" />
        <p className={styles.text}>Calculo de Frete - Resultado</p>
      </div>
      {navigator.share &&
        <button className={styles.button_share} onClick={handleShare}>
          Compartilhar
        </button>}
      <div className={styles.result_container}>
        <div className={styles.result_value}>
          <p>Preço</p>
          <p>R$ {price}</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Serviço</p>
          <p>{service}</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Dias para entrega</p>
          <p>{daysForDelivery}</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Entrega em casa</p>
          <p>{deliver_home === "N" ? "Não" : "Sim"}</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Entrega aos sábados</p>
          <p>{deliver_saturday === "N" ? "Não" : "Sim"}</p>
        </div>
        <div className={styles.separator}/>
        <div className={`${styles.result_value} ${styles.observations}`}>
          <p>Observações</p>
          <p>{obs}</p>
        </div>
      </div>
      <footer>
        <p>Feito por <a href="https://github.com/Lgdev07"><b>Luan Gomes</b></a></p>
      </footer>
    </div>
  )
}

export default withRouter(FareResult)

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      query,
    },
  };
};

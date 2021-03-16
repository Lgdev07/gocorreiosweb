import { useEffect, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { NextRouter, withRouter } from 'next/router'

import styles from './Result.module.css'
import Head from 'next/head'

interface FareProps {
  days_for_delivery: string
  deliver_home: string
  deliver_saturday: string
  obs: string
  price: string
  service: string
}

const FareResult: NextPage<FareProps> = () => {
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
          Preço: ${price}
          Serviço: ${service}
          Dias para entrega: ${daysForDelivery}
          Entrega em casa: ${deliver_home}
          Entrega aos sábados: ${deliver_saturday}
          Observações: ${obs}
        `
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }

  useEffect(() => {
    const result = localStorage.getItem('fareResult')
    const resultObject:FareProps = JSON.parse(result)

    setDaysForDelivery(resultObject.days_for_delivery)
    setDeliverHome(resultObject.deliver_home)
    setDeliverSaturday(resultObject.deliver_saturday)
    setObs(resultObject.obs)
    setPrice(resultObject.price)
    setService(resultObject.service)
  }, [])

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
      {global.navigator && global.navigator.share &&
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

export default FareResult

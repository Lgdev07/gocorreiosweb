import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

import styles from './Result.module.css'
import Head from 'next/head'

interface FareProps {
  days_for_delivery?: string
  deliver_home?: string
  deliver_saturday?: string
  obs?: string
  price?: string
  service?: string
  cep_origin?: string
  cep_destination?: string
  weight?: string
  lenght?: string
  height?: string
  width?: string
}

const FareResult: NextPage<FareProps> = () => {
  const [result, setResult] = useState<FareProps>({})

  const handleShare = async () => {
    if (navigator.share) {
      navigator.share({
        title: `Resultado Frete de ${result.cep_origin} para ${result.cep_destination}`,
        text: `
        Preço: ${result.price}
        Serviço: ${result.service}
        Dias para entrega: ${result.days_for_delivery}
        Entrega em casa: ${result.deliver_home}
        Entrega aos sábados: ${result.deliver_saturday}
        Observações: ${result.obs}
        `
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }

  useEffect(() => {
    const result = localStorage.getItem('fareResult')
    const resultObject:FareProps = JSON.parse(result)

    setResult(resultObject)
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
        <p className={styles.text}>Cálculo de Frete - Resultado</p>
      </div>
      {global.navigator && global.navigator.share &&
        <button className={styles.button_share} onClick={handleShare}>
          Compartilhar
        </button>}

      <div className={styles.result_container}>
        <div className={styles.result_value}>
          <p>De</p>
          <p>Para</p>
          <p>{result.cep_origin}</p>
          <p>{result.cep_destination}</p>
        </div>
      </div>

      <div className={styles.result_container}>
        <div className={styles.result_value}>
          <p>Preço</p>
          <p>R$ {result.price}</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Serviço</p>
          <p>{result.service}</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Dias para entrega</p>
          <p>{result.days_for_delivery}</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Entrega em casa</p>
          <p>{result.deliver_home === "N" ? "Não" : "Sim"}</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Entrega aos sábados</p>
          <p>{result.deliver_saturday === "N" ? "Não" : "Sim"}</p>
        </div>
        <div className={styles.separator}/>
        <div className={`${styles.result_value} ${styles.observations}`}>
          <p>Observações</p>
          <p>{result.obs}</p>
        </div>
      </div>

      <div className={styles.result_container}>
        <div className={styles.result_object_title}>
          <p>Detalhes do Objeto</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Peso</p>
          <p>{result.weight}</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Comprimento</p>
          <p>{result.lenght}</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Altura</p>
          <p>{result.height}</p>
        </div>
        <div className={styles.separator}/>
        <div className={styles.result_value}>
          <p>Largura</p>
          <p>{result.width}</p>
        </div>
      </div>

      <footer>
        <p>Feito por <a href="https://github.com/Lgdev07"><b>Luan Gomes</b></a></p>
      </footer>
    </div>
  )
}

export default FareResult

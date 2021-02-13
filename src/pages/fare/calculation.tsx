import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Loader from 'react-loader-spinner'

import styles from './Calculation.module.css'

import Input from '../../components/Input'
import Select from '../../components/Select';
import { useForm } from 'react-hook-form';
import api from '../../services/api'
import Head from 'next/head'

interface FareProps {
  service: string
  cep_origin: string
  cep_destination: string
  weight: string
  lenght: string
  height: string
  width: string
}

const Calculation = () => {
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FareProps) => {
    try {
      setLoading(true)
      const result = await api.post('/fares', data)
      router.push({
        pathname: '/fare/result',
        query: result.data
      })
    } catch {
      setLoading(false)
      alert("Erro ao calcular, tente novamente")
    }
  }

  return (
    <div className={`${styles.fare_calculation} container`}>
      <Head>
        <title>GoCorreios - Cálculo de Frete</title>
      </Head>
      <div className={styles.logo_container}>
        <Link href="/">
          <a>
            <img src='../assets/images/icons/back.svg' className={styles.back_icon} alt="Back" />
          </a>
        </Link>

        <img src='../assets/images/logo.svg' alt="GoCorreios" />
        <p className={styles.text}>Cálculo de Frete</p>
      </div>

      {loading &&
        <div className={styles.loading}>
          <Loader type="ThreeDots" color="#fbd700" height="100" width="100" />
        </div>}

      {!loading &&
      < form onSubmit={handleSubmit(onSubmit)}>
      <Select
        name="service"
        label="Serviço"
        register={register}
        options={[
          { value: 'SEDEX', label: 'SEDEX' },
          { value: 'PAC', label: 'PAC' }
        ]}
      />

      <Input
        name="cep_origin"
        label="Cep origem"
        defaultValue="09981380"
        register={register}
        required
      />
      <Input
        name="cep_destination"
        label="Cep destino"
        register={register}
        required
      />

      <div className={styles.bottom_input}>
        <Input
          name="weight"
          label="Peso(em Kg)"
          type="number"
          defaultValue="1"
          register={register}
          required
        />
        <Input
          name="lenght"
          type="number"
          defaultValue="15"
          label="Largura"
          register={register}
          required
        />
        <Input
          name="height"
          type="number"
          defaultValue="15"
          label="Altura"
          register={register}
          required
        />
        <Input
          name="width"
          type="number"
          defaultValue="18"
          label="Comprimento"
          register={register}
          required
        />
      </div>
      <footer>
        <button type="submit">
          Consultar
      </button>
        <p>Feito por <a href="https://github.com/Lgdev07"><b>Luan Gomes</b></a></p>
      </footer>
      </form>
      }
    </div>
  )
}

export default Calculation

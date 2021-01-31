import React, { useState } from 'react'
import Loader from 'react-loader-spinner'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/Input'
import Select from '../../components/Select';
import { useForm } from 'react-hook-form';
import api from '../../services/api'

interface FareProps {
  service: string
  cep_origin: string
  cep_destination: string
  weight: string
  lenght: string
  height: string
  width: string
}

const FareCalculation: React.FC = () => {
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FareProps) => {
    try {
      setLoading(true)
      const result = await api.post('/fares', data)
      history.push('/fare-result', result.data)
    } catch {
      setLoading(false)
      alert("Erro ao calcular, tente novamente")
    }
  }
  console.log(errors);

  return (
    <div id="fare-calculation" className="container">
      <div className="logo-container">
        <Link to="/">
          <img src={backIcon} id="back-icon" alt="Back" />
        </Link>

        <img src={logoImg} alt="GoCorreios" />
        <p className="text">Calculo de Frete</p>
      </div>

      {loading &&
        <div className="loading">
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

      <div className="bottom-input">
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

export default FareCalculation

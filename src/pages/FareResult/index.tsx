import React, { useEffect, useState } from 'react'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import { Link } from 'react-router-dom'

interface FareProps {
  location: {
    state: {
      days_for_delivery: string
      deliver_home: string
      deliver_saturday: string
      obs: string
      price: string
      service: string
    }
  }
}

const FareResult: React.FC<FareProps> = ({ location }) => {
  const [daysForDelivery, setDaysForDelivery] = useState('')
  const [deliver_home, setDeliverHome] = useState('')
  const [deliver_saturday, setDeliverSaturday] = useState('')
  const [obs, setObs] = useState('')
  const [price, setPrice] = useState('')
  const [service, setService] = useState('')

  useEffect(() => {
    setDaysForDelivery(location.state.days_for_delivery)
    setDeliverHome(location.state.deliver_home)
    setDeliverSaturday(location.state.deliver_saturday)
    setObs(location.state.obs)
    setPrice(location.state.price)
    setService(location.state.service)
  }, [location.state])

  return (
    <div id="fare-result" className="container">
      <div className="logo-container">
        <Link to="/">
          <img src={backIcon} id="back-icon" alt="Back" />
        </Link>

        <img src={logoImg} alt="GoCorreios" />
        <p className="text">Calculo de Frete - Resultado</p>
      </div>

      <div className="result-container">
        <div className="result-value">
          <p>Preço</p>
          <p>R$ {price}</p>
        </div>
        <div className="separator" />
        <div className="result-value">
          <p>Serviço</p>
          <p>{service}</p>
        </div>
        <div className="separator" />
        <div className="result-value">
          <p>Dias para entrega</p>
          <p>{daysForDelivery}</p>
        </div>
        <div className="separator" />
        <div className="result-value">
          <p>Entrega em casa</p>
          <p>{deliver_home == "N" ? "Não" : "Sim"}</p>
        </div>
        <div className="separator" />
        <div className="result-value">
          <p>Entrega aos sábados</p>
          <p>{deliver_saturday == "N" ? "Não" : "Sim"}</p>
        </div>
        <div className="separator" />
        <div className="result-value observations">
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

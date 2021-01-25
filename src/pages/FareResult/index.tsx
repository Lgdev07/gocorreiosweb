import React, { useEffect } from 'react'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import { Link } from 'react-router-dom'

interface FareProps {
  location: {
    state: {
      service: string
      cep_origin: string
      cep_destination: string
      weight: string
      lenght: string
      height: string
      width: string
    }
  }
}

const FareResult: React.FC<FareProps> = ({ location }) => {

  useEffect(() => {
    console.log(location.state);
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
          <p>R$ 400,40</p>
        </div>
        <div className="separator" />
        <div className="result-value">
          <p>Serviço</p>
          <p>SEDEX</p>
        </div>
        <div className="separator" />
        <div className="result-value">
          <p>Dias para entrega</p>
          <p>2</p>
        </div>
        <div className="separator" />
        <div className="result-value">
          <p>Entrega em casa</p>
          <p>Sim</p>
        </div>
        <div className="separator" />
        <div className="result-value">
          <p>Entrega aos sábados</p>
          <p>Não</p>
        </div>
        <div className="separator" />
        <div className="result-value observations">
          <p>Observações</p>
          <p>O CEP de destino está sujeito a condições especiais de entrega  pela  ECT e será realizada com o acréscimo de até 7 (sete) dias úteis ao prazo regular.</p>
        </div>
      </div>
      <footer>
        <p>Feito por <a href="https://github.com/Lgdev07"><b>Luan Gomes</b></a></p>
      </footer>
    </div>
  )
}

export default FareResult

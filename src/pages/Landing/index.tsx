import React from 'react'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import calculatorIcon from '../../assets/images/icons/calculator.svg'
import lupaIcon from '../../assets/images/icons/magnifying-glass.svg'
import { Link } from 'react-router-dom'

const Landing:React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="GoCorreios" />
          <p className="text">Use os serviços dos Correios</p>
          <p className="sub-text">
            Aqui você encontra facilidade para calcular frete e ver onde suas encomendas estão.
          </p>
        </div>
        <div className="buttons-container">
          <Link to="/fare-calculation">
            <img src={calculatorIcon} alt="Frete" />
            Frete
          </Link>

          <Link to="/">
            <img src={lupaIcon} alt="Rastreamento" />
            Rastreamento
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing

import React, { Fragment } from 'react'
import './customer.css';

const HeadTable = () => {
  return (
    <Fragment>
        <div className="cells">Nom</div>
        <div className="cells">Prénom</div>
        <div className="cells">Date de naissance</div>
        <div className="cells">Email</div>
        <div className="cells">Numéro de téléphone</div>
        <div className="cells">Voir</div>
        <div className="cells">Supprimer</div>
    </Fragment>
  )
}

export default HeadTable
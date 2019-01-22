import React, { Component } from 'react'
import { connect } from 'react-redux'
import MoneyMask from 'helpers/money'

class Info extends Component {
  render() {
    const {companyName, description} = this.props.info
    const {latestPrice} = this.props
    if (!companyName) return false
    return (
      <div className="mb-2 mt-4">
        <hr/>
        <h2>{companyName}</h2>
        <p>{description}</p>
        <p className="text-info">Último preço: <strong>{MoneyMask(latestPrice)}</strong></p>
      </div>
    )
  }
}

const mapStateToProps = ({company}) => {
  return {
    info: company.company || {},
    latestPrice: company.quote && company.quote.latestPrice
  }
}

export default connect(mapStateToProps, null)(Info)
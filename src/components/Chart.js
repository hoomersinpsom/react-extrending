import React, { Component } from 'react'
import { connect } from 'react-redux'
import MoneyMask from 'helpers/money'
import moment from 'moment'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip}  from 'recharts'

class Chart extends Component {
  dateFormat(val) {
    return moment(val).format('DD/MM/YYYY')
  }
  render() {
    const {chart} = this.props
    if (chart.length === 0) return false
    return (
      <div className="mb-3">
        <p>Gráfico com os dados das ações:</p>
        <LineChart  width={700} height={300} data={chart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="high" stroke="#12de12" />
          <Line type="monotone" dataKey="close" stroke="blue" />
          <Line type="monotone" dataKey="low" stroke="#de1212" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            dataKey="date"
            tickFormatter={val => this.dateFormat(val)}
          />
          <YAxis
            dataKey="high"
            tickFormatter={val => MoneyMask(val)}
          />
          <Tooltip
            formatter={val => MoneyMask(val)}
            labelFormatter={val => this.dateFormat(val)}
          />
        </LineChart>
      </div>
    )
  }
}

const mapStateToProps = ({company}) => {
  return {
    chart: company.chart || []
  }
}

export default connect(mapStateToProps, null)(Chart)
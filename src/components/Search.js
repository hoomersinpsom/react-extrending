import React, { Component } from 'react'
import { getSymbol } from 'http/search'
import { bindActionCreators } from 'redux'
import { company } from 'actions'
import { connect } from 'react-redux'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      symbol: ''
    }
    this.sendForm = this.sendForm.bind(this)
  }
  handleInput = e => {
    const symbol = e.target.value
    this.setState({
      symbol
    })
  }
  async sendForm (e) {
    e.preventDefault()
    const {data} = await getSymbol(this.state.symbol)
    this.props.company(data)
  }
  render() {
    return (
      <form  onSubmit={this.sendForm} className="mb-2">
        <div className="form-row align-items-center">
          <div className="col-auto">
            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.symbol}
              className="form-control"
              placeholder="ex: aapl"
              required
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Buscar</button>
          </div>
        </div>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      company
    },
    dispatch
  )
}
export default connect(null, mapDispatchToProps)(Search)

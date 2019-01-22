import React, { Component } from 'react'
import { getSymbol } from 'http/search'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      symbol: '',
      result: {}
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
    console.log(data)
    this.setState({
      result: data
    })
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
        <pre>
          {JSON.stringify(this.state.result)}
        </pre>
      </form>
    );
  }
}

export default Search;

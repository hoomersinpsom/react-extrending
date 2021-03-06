import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loading } from 'actions'

import Search from 'components/Search'
import Info from 'components/Info'
import Chart from 'components/Chart'

import classnames from 'classnames'
import 'sweetalert2/dist/sweetalert2.css'
import './App.css'

class App extends Component {
  componentDidMount () {
    setTimeout(() => {
      this.props.loading(false)
    }, 1000)
  }
  render() {
    return (
      <div className={classnames('app-wrap', {'loading': this.props.isLoading})}>
        <div className="container">
          <h1>IEX</h1>
          <Search />
          <Info />
          <Chart />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.loading.isLoading > 0
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loading
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

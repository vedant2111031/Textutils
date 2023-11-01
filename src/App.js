
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey="d9c6c8df31ad4a1a85bf258385c39088"
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={18} country='in' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={18} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={18} country='in' category='entertainment' />}></Route>
            <Route path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={18} country='in' category='general' />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={18} country='in' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={18} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={18} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={18} country='in' category='technology' />}></Route>
            <Route path='/US' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='US' pageSize={18} country='us' category='general' />}></Route>
            <Route path='/Russia' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='Russia' pageSize={18} country='rs' category='general' />}></Route>
            <Route path='/Australia' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='Australia' pageSize={18} country='au' category='general' />}></Route>
          </Routes>
        </Router> 
      </div>
    )
  }
}

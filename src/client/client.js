import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'

const MOUNT_NODE = document.querySelector('#root')

ReactDOM.hydrate(<Home />, MOUNT_NODE)


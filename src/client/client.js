import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

const MOUNT_NODE = document.querySelector('#root')

ReactDOM.hydrate(
	<BrowserRouter>
		<Routes/>
	</BrowserRouter>
	, MOUNT_NODE)


import React from 'react'
import { createRoot } from 'react-dom/client'

import './styles'

// pages
import Home from './pages/Home'


const root = createRoot(document.getElementById('root'))
root.render(<Home/>)
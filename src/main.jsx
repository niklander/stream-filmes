import React from 'react'
import ReactDOM from 'react-dom/client'
import {Browser, Routers, Route} from "react-router-dom";
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowseRouter>
    <Routers>
      <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Home />} />
      <Route path="search/" element={<Home />} />
      </Route>
    </Routers>
    </BrowseRouter>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Coreconcepts from './Coreconcepts'
// import './index.css'
// import Taskone from './Taskone.jsx'
import Onclicktry from './Onclicktry.jsx';


// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
      {/* <Taskone/> */}
    <Onclicktry>Click me</Onclicktry>
    
    <Coreconcepts />
 

  </StrictMode>
)

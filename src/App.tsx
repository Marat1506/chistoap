import './App.css'
import { Box } from '@mui/material'
import Header from './components/Header/Header'
import Table from './components/Table/Table'
import Bottom from './components/Bottom/Bottom'
import { Provider } from 'react-redux'
import store from './store/store'
import Modal from './components/Modal/Modal'

function App() {
  

  
  return (
    <Box >
      <Provider store={store}>
      <Header />
      <Table />
      <Bottom />

      <Modal />
      </Provider>

     
  
    </Box>
  )
}

export default App

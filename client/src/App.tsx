
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'
import { FinancialRecordsProvider } from './context/financialrecordscontext'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <FinancialRecordsProvider>
              <Dashboard />
            </FinancialRecordsProvider>
          } />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>

    </>
  )
}

export default App

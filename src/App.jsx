import './App.css'
import HeaderComponent from './Component/HeaderComponent'
import ListEmployeeeComponent from './Component/ListEmployeeeComponent'
import FooterComponent from './Component/FooterComponent'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import EmployeeComponent from './Component/EmployeeComponent'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* // http://localhost:4000 */}
            <Route path='/' element={<ListEmployeeeComponent />} ></Route> 
            {/* // http://localhost:4000/employees */}
            <Route path='/employees' element = { <ListEmployeeeComponent />}></Route>
            {/* // http://localhost:4000/add-employees */}
            <Route path='/add-employee' element = { <EmployeeComponent />} ></Route>
            {/* // http://localhost:4000/update-employees/1 */}
            <Route path='/edit-employee/:id' element = { <EmployeeComponent />} ></Route>

          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App

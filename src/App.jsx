import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom';
import './App.css'

import ListUser from '../components/ListUser'
import CreateUser from '../components/CreateUser'
import EditUser from '../components/EditUser'

function App() {

  return (
    <>
      <h5>React CRUD operation using PHP API and MySQL</h5>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={
            <ListUser />
          } />
          <Route path="user/create" element={
            <CreateUser />
          } />
          <Route path="user/:id/edit" element={
            <EditUser />
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

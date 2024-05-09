import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router";

/*
 *           six
 *           \
 *    three  seven   zero
 *     \     \ \     \
 *   two  five \   nine
 *   \ \   \ \ \   \ \
 * one \ four\ \ eight
 * \ \ \ \ \ \ \ \ \ \
 * o t h f i s v e n z
 * 05-06-18:03:55
 * zizs oezhii
 * zizs_oezhii@gmail.com
 * 0506180355
 */

export default function CreateUser() {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => (
      {...values, [name]: value}
    ))
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post('http://localhost:80/api/user/save', inputs)
      .then(
        function(response) {
          console.log(response.data)
          navigate('/')
        }
      )
  }

  return (
    <>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email: </label>
              </th>
              <td>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Mobile: </label>
              </th>
              <td>
                <input
                  type="text"
                  name="mobile"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  )
}

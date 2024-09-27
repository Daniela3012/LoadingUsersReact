import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const UserComponent = () => {

    const {data, isLoading, errors} = useFetch('https://jsonplaceholder.typicode.com/users');
    
  return (
    <>
    <h2>Lista de usuarios</h2>
    {
        isLoading?<p>Cargando ...</p>
        : errors ? 
        <p>Ha ocurrido un error: {errors}</p>
        : <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => {
              return (
                  <tr key={user.id}>
                      <th scope="row">{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                  </tr>
              )
          })}
        </tbody>
      </table>
    }
    </>
  )
}

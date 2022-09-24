import React from 'react';
import { useState } from 'react';
import { UsersData } from '../Data/data';

const MultiSearch = () => {
  const [query,setQuery] = useState("")
  const keys = ["name", "username"]
  return (
    <>
    <br />
      <input type="text" placeholder='search...' 
      onChange={((e)=>setQuery(e.target.value))}/>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>UserName</th>
          </tr>
          {UsersData
          .filter((item)=>keys.some((key)=>item[key].toLowerCase().includes(query)))
          .map(({name, username, age, id})=>{
            return(
              <tr key={id}>
                <td>{username}</td>
                <td>{age}</td>
                <td>{name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default MultiSearch;
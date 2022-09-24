import React from 'react';
import { UsersData } from '../Data/data';
import { useState } from 'react';


const SingleSearch = () => {
  const [query, setQuery] = useState("")

  return (
    <>
    <br />
    <input type="text" placeholder='search..' onChange={((e)=>setQuery(e.target.value))}/>
    {UsersData.filter((item)=>item.name.toLowerCase().includes(query)).map(({name, id})=>{
      return (
        <div key={id}>
            <h3>{name}</h3>
        </div>
      )
    })}
    </>
  )
}

export default SingleSearch;
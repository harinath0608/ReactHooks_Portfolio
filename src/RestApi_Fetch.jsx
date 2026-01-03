// Rest Api with error handling of http from browser and try catch
// Fetch API and show names and numbers
// showing loading 

import React, { useEffect, useState } from 'react'

const RestApi = () => {

    const[data,setData] = useState([])
    const[load,setLoad] = useState(false)
    const[error,seterror] = useState("")

    useEffect(()=> {

        const fetchData = async() => {

            try {

                setLoad(true);

                const response = await fetch("https://dummyjson.com/users")

                if (!response.ok) {
                    throw new Error("API returned error page")
                }

                const result = await response.json();
                
                console.log(result)
                setData(result.users);
                
            } catch (error) {
                console.error("Handled safely", error.message);
                seterror(error.message)
            } finally {
                setLoad(false)
            }
            
        }

        fetchData()

    },[])

     if (load) return <h2>Loading...</h2>;
     if (error) return <h2 style={{ color: "red" }}> {error} </h2>;

  return (
    <div>
        <h2> User List </h2>
        <ul>
            {data.map((user)=>(
                // console.log(user)
                <li key={user.id}> {user.firstName} {user.lastName} | {user.phone} </li>   
            ))}
        </ul>
    </div>
  )
}

export default RestApi

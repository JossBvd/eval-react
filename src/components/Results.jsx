import React from 'react'
import { useEffect, useState } from 'react'

export default function Results(props) {
    
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Appel de l'Api Github
      fetch(`https://api.github.com/users/${props.username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
    }, [props.username])
    console.log(user);

    return (
    <>
        {user === null || !user.login ? 
        ( <p>Aucun utilisateur trouvé</p> ) 
        : ( <ul>
                <li><img src={user.avatar_url} alt="" /></li>
                <li>Username: {user.login}</li>
                <li>Location: {user.location != null ? user.location : "Not found"}</li>
            </ul>)}    
    </>
    )
}

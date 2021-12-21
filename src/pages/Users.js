import React from 'react';
import {Link} from 'react-router-dom'
import {usersList} from '../utils/Data'

function Users() {
//   const perper =   usersList.map((person) => {
//     <h1><Link to = {`/users/${person.id}`}>{person.name}</Link></h1>
//     })
    
    const people = usersList.map(person => (
        <h3 key={person.id}><Link to={`/users/${person.id}`}>{person.name}</Link> - ${person.age}</h3>
    ))

    return (
        <div>
            <h1>People</h1>
              {people}
        </div>
    );

}

export default Users;
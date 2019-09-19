import React from 'react'

const People = ({ people, deletePerson }) => {

    // const { people } = props
    // const peopleList = people.map(person => {
    //     if (person.age > 20) {


    //         return (
    //             <div className="wijdan" key={person.id}>
    //                 <div>
    //                     Name: {person.name}
    //                 </div>
    //                 <div>
    //                     Age: {person.age}
    //                 </div>
    //                 <div>
    //                     Hobbies: {person.hobbies}
    //                 </div>
    //                 <br />
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })

    return (
        <div className="people-list">
            {people.map(person => {
                return person.age > 20 ? (
                    <div className="people" key={person.id}>
                        <p>
                            Name: {person.name} Age: {person.age} Hobbies: {person.hobbies}
                            <button onClick={() => { deletePerson(person.id) }}>Delete</button>
                        </p>
                    </div>) : null;
            })}
        </div>
    )
}

export default People

import React from 'react'
import conceptsArray from './ConceptArray'
import Concept from './Concept'

export default function Concepts(props) {
    const conceptsComoponents = conceptsArray.map(concept => {
    return <Concept name={concept.name} id={concept.id} size={concept.size} key={concept.id} />}) 

    if(props.conceptsDisplay === true) {
            return (
            <div>
                {conceptsComoponents}
            </div>
        )
    } else  {
        return null
    }
    
}

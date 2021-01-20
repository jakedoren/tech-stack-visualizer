import React from 'react'
import Node from './Node'
import ComponentData from './ComponentData'
export default function Tools(props) {
    const AppComponents = ComponentData.map(node => <Node name={node.name} id={node.id} size={node.size} key={node.id} />)
    if(props.toolsDisplay === true) {
            return (
            <div>
                {AppComponents}
            </div>
        )
    } else {
        return null
    }
    
}

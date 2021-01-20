import React from 'react'

export default function Concept(props) {
const styles = {
        height: props.size,
        width: props.size,
        backgroundColor: "red",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto"
    }

    return (
        <div style={styles}>
            <h1>{props.name}</h1>
        </div>
    )
}

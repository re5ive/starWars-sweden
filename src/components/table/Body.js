import React from 'react';
import Row from "./Row";

function Body({rows}){
    return(
        <tbody>
            {(rows || []).map(((row, i) => <Row key={`row_${i}`} cells={row}/>))}
        </tbody>
    )
}

export default Body
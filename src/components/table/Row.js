import React from 'react';
import Cell from "./Cell";
import {keyValues} from "../../config";

function Row ({cells}){
    return(
        <tr className="table_row">
            {(keyValues || []).map(({key}, i) => <Cell key={`${cells[key]}_${i}`} value={cells[key]}/>)}
        </tr>
    )
}

export default Row
import React from 'react';
import Body from "./Body";
import Header from "./Header";
import {keyValues} from "../../config";

function Table({data}){
    console.log(data)
    return(
        <table>
            <Header keyValues={keyValues} headerCells={[1,2,3]}/>
            {!!data && <Body rows={data.results}/> }
        </table>
    )

}

export default Table
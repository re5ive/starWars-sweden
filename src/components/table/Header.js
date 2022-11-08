import React from 'react';
import HeaderCell from "./HeaderCell";
import {keyValues} from "../../config";

function Header(){
    return(
        <thead>
            <tr className='table_header_row'>
                {(keyValues||[]).map(({label, key}) => <HeaderCell key={key} name={label} keyName={key}/>)}
            </tr>
        </thead>
    )

}

export default Header
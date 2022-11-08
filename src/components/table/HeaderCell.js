import React, {useContext} from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import {AppContext} from "../../context/AppContext";
import { filter } from '../../config'

function HeaderCell({name, keyName}){
    const context = useContext(AppContext);
    const {setOrder, order} = context ? context : {data: [], setUrl: () => {}, setOrder: () => {}}
    return(
        <th onClick={() => {
            if(order.key === keyName && !order.asc) {
                setOrder(filter)
            }else{
                setOrder({asc: order.key !== keyName, key: keyName})
            }
        }}>{name} <span>{ order.key === keyName ? order.asc ? <FaAngleDown />:  <FaAngleUp /> : '' }</span></th>
    );
}

export default HeaderCell
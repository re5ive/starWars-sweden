import React, {useContext, useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import {AppContext} from "../../context/AppContext";
//import debounce from 'lodash.debounce'
function Search(){
    const context = useContext(AppContext);
    const {setUrl} = context ? context : {data: [], setUrl: () => {}, setOrder: () => {}};
    const delayCall = (value) => {
        setUrl(`https://swapi.dev/api/people?search=${value}`)
    }
    const [searchValue] = useState('');
    return(
        <div data-testid="search-testId" className='search_box'>
            <FaSearch />
            <input 
                placeholder="Type to search..."  
                name={'search'} 
                defaultValue={searchValue} 
                onChange={(e) => {
                    delayCall(e.target.value)
                }}
            />
        </div>
    )
}

export default Search;
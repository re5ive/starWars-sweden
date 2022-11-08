import axios from "axios";
import {useEffect, useState} from 'react'
import {sortData} from "../utils";
import {filter} from '../config'

function useApiFetch(){
    const [data, setData] = useState(null);
    const [orderedData, setOrderedData] = useState(null);
    const [url, setUrl] = useState('https://swapi.dev/api/people');
    const [order, setOrder] = useState(filter);
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(url);
            setData(data);
        }
        fetchData()
            .catch(console.log)

    }, [url]);

    useEffect(() => {
        if(data && data.results) {
            const _data = {...data, results : sortData(data, order)}
            setOrderedData(_data)
        }
    }, [data, order]);

    return [orderedData, setUrl, setOrder, order];
}

export default useApiFetch
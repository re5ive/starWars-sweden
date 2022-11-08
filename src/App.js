import React, {useContext} from 'react';
import './App.css';
import Table from "./components/table/Table";
import Search from './components/header/Search'
import {AppContext} from "./context/AppContext";

function App() {
  const context = useContext(AppContext);
  const {data, setUrl} = context ? context : {data: [], setUrl: () => {}, setOrder: () => {}}

  return (
    <main>
      <header>
        <Search/>
      </header>
      <Table data={data}/>

      {data && data.count === 0 ? <div className='no_data_found'>No DAta</div> : null}
        <button className={`${data && data.previous ? 'prev_av' : 'no_prev'} btn_box btn_prev`} onClick={() => {
            if(data && data.previous){
                setUrl(data.previous)
            }

        }}>Previous</button>
      <button className={`${data && data.next ? 'next_av' : 'no_next'} btn_box btn_next`}  onClick={() => {
        if(data && data.next){
          setUrl(data.next)
        }

      }}>Next</button>
    </main>
  );
}

export default App;

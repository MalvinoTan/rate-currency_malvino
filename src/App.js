import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Table from './components/Table';

const App = () => {

  const [data, setDatas] = useState(null);

  const getData = async () => {
    return axios.get("https://api.currencyfreaks.com/latest?apikey=550d6c819a5441e1a4235f2ee0496dc7&symbols=CAD,EUR,IDR,JPY,CHF,GBP");
  };

  useEffect(() => {
    getData().then(res => setDatas(res.data));
  }, []);

  return (
    <div className="App">
      {
        data ?
          <>
            <Table 
              headers={["Currency", "We Buy", "Exchange Rate", "We Sell"]} 
              datas={data.rates} 
            />
            <small>Rates are based from 1 {data.base}.</small>
          </>
            :
            <></>
      }
      <small>This application uses API from https://currencyfreaks.com.</small>
    </div>
  );
}

export default App;

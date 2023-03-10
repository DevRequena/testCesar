import axios from 'axios';
import { useEffect, useState } from 'react';
import { Filter } from '../Filter/Filter';
import { Header } from '../Header/Header';
import { CardImages } from '../ListCard/CardImages';
import './card.css'

export const Card = () => {

  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);


  const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
      axios.get(url).then((response) => {
        setData(response.data);
        setDataFilter(response.data);
      });
    }, []);



  return (
    <>
      <Header/>
      <Filter
        data={data}
        setDataFilter={setDataFilter}
      />       
      <div className='container'>
            {dataFilter.map((info) => {
              return (
                <CardImages
                  key={info.id}
                  name={info.name} 
                  email={info.email} 
                  city={info.address.city} 
                  company={info.company.name}
                  avatar={info.id}
                  address={info.address}
                  quote={info.company}
                  />
              )
            })}
      </div>
    
    </>
  )
}

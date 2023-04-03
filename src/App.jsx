import { useEffect, useState } from 'react'
import './App.scss'
import Combo from './components/Combo';
import { getCotation } from './api/monetizationApi';

function App() {
  const [de, setDe] = useState({ label: 'Real brasileiro', value: 'BRL' });
  const [para, setPara] = useState({ label: 'Dolar americano', value: 'USD' });

  const [deValor, setDeValor] = useState("1");
  const [paraValor, setParaValor] = useState("");

  const moedas = [
    { label: 'Real brasileiro', value: 'BRL' },
    { label: 'Dolar americano', value: 'USD' },
    { label: 'Euro', value: 'EUR' },
    { label: 'Libra', value: 'GBP' },
    { label: 'Peso', value: 'INR' },
  ];

  const moedasDe = moedas.filter(moeda => moeda.value != de.value && moeda.value != para.value);
  const moedasPara = moedas.filter(moeda => moeda.value != de.value && moeda.value != para.value);

  useEffect(() => {
      if(de.value !== undefined && para.value !== undefined){
        getCotation(de.value, para.value)
        .then((response) => {
          setParaValor(response.data[`${de.value}${para.value}`].bid);
        });
      }
      else {
        setParaValor("");
      }   
  }, [de, para]);


  return (
    <div className="cota-now">
      <div className="cota-now__colorful-header">
      </div>
      <div className='cota-now__content'>
        <div className='content__box'>
          <div className='content__box__header'>
            <p className='content__box__header__title'> <strong>De:</strong> {de && de.label}</p>
            <p className='content__box__header__title'> <strong>Para:</strong> {para && para.label}</p>
          </div>
          <div className='content__box__body'>
            <Combo 
              options={moedasDe}
              label="De"
              value={de}
              setValue={setDe}
            />
            <Combo 
              options={moedasPara}
              label="Para"
              value={para}  
              setValue={setPara}
            />
          </div>
          <div className='content__box__footer'>
            <span>{deValor} {de && de.value} = {paraValor} {para && para.value}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

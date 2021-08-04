import React from 'react';
import { Alert, Badge } from 'react-bootstrap';

const CurrencyInfo = ({ currency }) => {
  const suply = currency.description.split('of')[2].split(' ')[1]
  const value = currency.description.split('is')[2].split(' ')[1] + ' USD'
  const points = Number(currency.description.split('is')[3].split(' ')[2])
  const volume = currency.description.split('with')[1].split(' ')[1]
  return (
    <div>
      <h1>{currency.name} <img src={currency.logo} alt={currency.name}/><span style={{ fontSize: '17px' }}>{'  '}{currency.symbol}</span></h1>
      <Alert variant="primary" className="mt-3 mb-5"><h4>Stats</h4></Alert>
      <div className='currency_info'>
        <span className="suply">
          <p className="text-center">Suply</p>
          <strong>{suply}</strong>
        </span>
        <span className="value">
        <p className="text-center">Value</p>
          <strong>{value}</strong>
        </span>
        <span className={`status ${points > 0 ? 'up' : 'down'}`}>
        <p className="text-center">Points</p>
          <strong>{points > 0 ? <i className="fas fa-arrow-up"></i> : <i className="fas fa-arrow-down"></i>}{points}</strong> last 24hrs
        </span>
        <span className="volume">
        <p className="text-center">Volume</p>
        <strong>{volume}</strong>
        </span>
      </div>
      <br />
      <h4 className='mt-4 mb-4'>Description</h4>
      <p className="text-justify">{currency.description}</p>
      <h4 className='mt-4 mb-4'>Tag Names</h4>
      {
        currency["tag-names"].map((group,key) => (
          <Badge bg="primary" key={key} pill>{group}</Badge>
          ))
      }
      <h4 className='mt-4 mb-4'>Tag Groups</h4>
      {
        currency["tag-groups"].map((group,key) => (
          <Badge bg="secondary" key={key} pill>{group}</Badge>
        ))
      }
    </div>
  );
};

export default CurrencyInfo;
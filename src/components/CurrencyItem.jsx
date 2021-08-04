import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';

const CurrencyItem = ({ currency, onClick, idActive }) => {
  const points = Number(currency.description.split('is')[3].split(' ')[2])
  const handleCLick = () => {
    onClick(currency.id, currency)
  }
  return (
      <ListGroup.Item as="li" style={{cursor: 'pointer'}} className='currency-item' active={idActive === currency.id} onClick={handleCLick}>
        <Row>
          <Col sm={3}>
            <img src={currency.logo} alt={currency.name} className="w-100"/>
          </Col>
          <Col sm={6}>
            <h3>{currency.name}</h3>
            <p>{currency.symbol}</p>
          </Col>
          <Col sm={3}>
          <span className={`${points > 0 ? 'up-pill' : 'down-pill'}`}>
            <strong>{points > 0 ? <i className="fas fa-arrow-up"></i> : <i className="fas fa-arrow-down"></i>}{points}</strong>
          </span>
          </Col>
        </Row>
      </ListGroup.Item>
  );
};

export default CurrencyItem;
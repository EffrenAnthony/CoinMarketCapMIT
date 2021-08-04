import React, { useEffect,  useReducer,  useState } from 'react';
import axios from 'axios';
import CurrencyItem from './CurrencyItem';
import { Container, Row, Col, Spinner, Alert, ListGroup} from 'react-bootstrap';
// import currencyMock from '../mock/currencies';
import CurrencyInfo from './CurrencyInfo';
const CurrencyList = () => {
  // const [currencies, setCurriencies] = useState([])
  const [ currentCurrency, setCurrentCurrency] = useState()
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    currencies: [],
  });
  const API = 'http://localhost:3333'
  const [idActive, setIdActive] = useState('')
  // const memoizedResult = useMemo(currencies, [currencies]);
  useEffect(() => {
    // Uncomment this setTimeOut if to try without fetching data
    // setTimeout(function () {
    //   console.log('hola')
    //   setCurriencies(currencyMock)
    // }, 2000)
    dispatch({ type: 'FETCH_INIT' })
    try{
      async function fetchData(API){
        const resp = await axios.get(API)
        const arrCurrencies = []
        for (const currency of resp.data.data){
          let completeCurrency = await (await axios.get(API + '/'+currency.id)).data.data[currency.id]
          arrCurrencies.push(completeCurrency)
        }
        dispatch({ type: 'FETCH_SUCCESS', payload: arrCurrencies})
      }
      fetchData(API)
    } catch(err) {
      dispatch({ type: 'FETCH_FAILURE'})
    }
  }, [])
  const handleShowData = (id, currency) => {
    setIdActive(id)
    setCurrentCurrency(currency)
  }
  function dataFetchReducer (state, action) {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
        case 'FETCH_SUCCESS':
          return {
            ...state,
            isLoading: false,
            isError: false,
            currencies: action.payload,
          };
        case 'FETCH_FAILURE':
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
        default:
          throw new Error();
    }
  }
  return (
    <Container className='mt-5'>
      {
        state.currencies.length > 0 ?
        <Row>
          <Col md={3}>
            <ListGroup as="ul">
            {
              state.currencies.map(currency => (                
                  <CurrencyItem  key={currency.id} currency={currency} onClick={handleShowData} idActive={idActive}/>
                  ))
                }
                </ListGroup>
          </Col>
          <Col md={9}>
            {
              currentCurrency &&
              <CurrencyInfo currency={currentCurrency}/>
            }
          </Col>
        </Row>
        :
        <div className='d-flex justify-content-center flex-column align-items-center'>
          <Alert variant='info'>Fetching data, please wait...</Alert>
          <Spinner animation="border" size="xl" />
        </div>

      }
    </Container>
  );
};

export default CurrencyList;
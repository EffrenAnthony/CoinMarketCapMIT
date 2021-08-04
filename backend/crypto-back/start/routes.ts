/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import axios from 'axios'

import Env from '@ioc:Adonis/Core/Env'

Route.get('/', async () => {

  const API = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map'
  let qs = `?start=1&limit=10`
  const resp = await axios.get(API + qs,{
    responseType: 'json',
    headers: {
      'X-CMC_PRO_API_KEY': Env.get('API_KEY')
    }
  })


  return resp.data
})
Route.get('/:id', async ({ params }) => {
  const API = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info'
  let qs = `?id=${params.id}`
  const resp = await axios.get(API + qs,{
    responseType: 'json',
    headers: {
      'X-CMC_PRO_API_KEY': Env.get('API_KEY')
    }
  })


  return resp.data
})

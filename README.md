# Coin Market Cap API - MIT MERN

## Description
In this project I use [Coin Market Cap API](https://coinmarketcap.com/api/) to fetch every single data for crypto currencies in the global market. To do it I used `create-react-app` to create a React Project to implement the frontend application. To fetch the data, as the documentation of the API says, I had to create a backend in order to protect my API keys, otherwise the API should reject the request in the client side.

## Technologies and dependencies: 
`React` using create-creat-app, `AdonisJS` to implement a simple backend to fetch the API. To get the data, y used the API from [Coin Market Cap API](https://coinmarketcap.com/api/) and finally, to style all my components, I used `React Bootstrap`.
## How to run:

- Clone this repo
```bash
git clone https://github.com/EffrenAnthony/CoinMarketCapMIT
```
- Install CLIENT dependencies
>Go to your terminal and place in the directory of the project and run
```bash
npm install
```

- Install BACKEND dependencies
>Go to your terminal and place in the directory called backend, then go to crypo-back directory and run
```bash
npm install
```

- Run Backend
>Go to your terminal and place in the directory called backend, then go to crypo-back directory and run
```bash
npm run dev
```
- Run Frontend
>Go to your terminal and place in the directory of the project and run
```bash
npm start
```

- To quit any of both servers just press Cmd or Ctrl + c in your terminal.

## Roadmap of future improves

- Add pagination because now the project just get the first 10 elements of the API
- Make responsive the UI
- Get more data from the API to draw graphs
- Add an input to search a currency

## Licence

[MIT](https://choosealicense.com/licenses/mit/)

>To read more about the Licence, please, click on the link above
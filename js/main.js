const rates = {}

const elementUSD = document.querySelector('[data-value="USD"]')
const elementEUR = document.querySelector('[data-value="EUR"]')
const elementGBP = document.querySelector('[data-value="GBP"]')
const resultSumUsd = document.querySelector('#resultSumUSD')
const resultSumEur = document.querySelector('#resultSumEUR')
const resultSumGbp = document.querySelector('#resultSumGBP')
const resultSumUah = document.querySelector('#resultSumUAH')
const input = document.querySelector('#input')
const select = document.querySelector('#select')
const inputWrapper = document.querySelector('#get-convert__input-wrapper')


async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  const data = await response.json()
  rates.USD = data.Valute.USD
  rates.EUR = data.Valute.EUR
  rates.GBP = data.Valute.GBP
  rates.UAH = data.Valute.UAH

  elementUSD.innerHTML = `${(rates.USD.Value / rates.UAH.Value * 10).toFixed(2)} ₴`
  elementEUR.innerHTML = `${(rates.EUR.Value / rates.UAH.Value * 10).toFixed(2)} ₴`
  elementGBP.innerHTML = `${(rates.GBP.Value / rates.UAH.Value * 10).toFixed(2)} ₴`
}

input.oninput = convertValueInput
select.oninput = convertValueSelect

function convertValueInput() {
  resultSumUsd.value = (((parseFloat(input.value) / rates.USD.Value) * rates[select.value].Value) / 10).toFixed(2)
  resultSumEur.value = (((parseFloat(input.value) / rates.EUR.Value) * rates[select.value].Value) / 10).toFixed(2)
  resultSumGbp.value = (((parseFloat(input.value) / rates.GBP.Value) * rates[select.value].Value) / 10).toFixed(2)
  resultSumUah.value = (((parseFloat(input.value) / rates.UAH.Value) * rates[select.value].Value)).toFixed(2)

  if (select.value !== 'UAH') {
    resultSumUsd.value = ((parseFloat(input.value) / rates.USD.Value) * rates[select.value].Value).toFixed(2)
    resultSumEur.value = ((parseFloat(input.value) / rates.EUR.Value) * rates[select.value].Value).toFixed(2)
    resultSumGbp.value = ((parseFloat(input.value) / rates.GBP.Value) * rates[select.value].Value).toFixed(2)
    resultSumUah.value = (((parseFloat(input.value) / rates.UAH.Value) * rates[select.value].Value) * 10).toFixed(2)
  }

  if (resultSumUsd.value === 'NaN') {
    resultSumUsd.value = ''
    resultSumEur.value = ''
    resultSumGbp.value = ''
    resultSumUah.value = ''
  }
}


function convertValueSelect() {
  resultSumUsd.value = (((parseFloat(input.value) / rates.USD.Value) * rates[select.value].Value) / 10).toFixed(2)
  resultSumEur.value = (((parseFloat(input.value) / rates.EUR.Value) * rates[select.value].Value) / 10).toFixed(2)
  resultSumGbp.value = (((parseFloat(input.value) / rates.GBP.Value) * rates[select.value].Value) / 10).toFixed(2)
  resultSumUah.value = (((parseFloat(input.value) / rates.UAH.Value) * rates[select.value].Value)).toFixed(2)

  if (select.value !== 'UAH') {
    resultSumUsd.value = ((parseFloat(input.value) / rates.USD.Value) * rates[select.value].Value).toFixed(2)
    resultSumEur.value = ((parseFloat(input.value) / rates.EUR.Value) * rates[select.value].Value).toFixed(2)
    resultSumGbp.value = ((parseFloat(input.value) / rates.GBP.Value) * rates[select.value].Value).toFixed(2)
    resultSumUah.value = (((parseFloat(input.value) / rates.UAH.Value) * rates[select.value].Value) * 10).toFixed(2)
  }

  if (resultSumUsd.value === 'NaN') {
    resultSumUsd.value = ''
    resultSumEur.value = ''
    resultSumGbp.value = ''
    resultSumUah.value = ''
  }

  if (select.value === 'UAH') {
    inputWrapper.setAttribute('class', 'get-convert__input-wrapper-uah')
  } else if (select.value === 'USD') {
    inputWrapper.setAttribute('class', 'get-convert__input-wrapper-usd')
  } else if (select.value === 'EUR') {
    inputWrapper.setAttribute('class', 'get-convert__input-wrapper-eur')
  } else if (select.value === 'GBP') {
    inputWrapper.setAttribute('class', 'get-convert__input-wrapper-gbp')
  }
}



getCurrencies()





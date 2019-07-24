import axios from 'axios';

//FIXME
const backendApi = 'https://veinte.net/api';

export async function getCoins() {
  try {
    const response = await axios({
      method: 'get',
      url: backendApi + '/coins',
    });
    return response.data;
  } catch(error) {
    console.log(error);
    //TODO: handle error
  }
}

export async function changeCoins(fromCoinId, toCoinId, amount) {
  try {
    const response = await axios({
      method: 'post',
      url: backendApi + '/user/change',
      headers: { 'x-access-token': localStorage.getItem('token') },
      data: { fromCoinId, toCoinId, amount }
    });
    return response;
  } catch(error) {
    console.log(error.response);
    const formattedError = Object.assign({}, error.response);
    if (error.response.data.indexOf('Not enough money') !== -1) {
      formattedError.data = 'No hay suficiente dinero';
    }
    return formattedError;
  }
}
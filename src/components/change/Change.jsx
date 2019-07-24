import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ChangeForm from './ChangeForm';
import ChangeConfirmation from './ChangeConfirmation';

const coins = [
  {
    coinId: '1',
    prefix: 'USD'
  },
  {
    coinId: '2',
    prefix: 'BS',
    buyRate: 22,
    sellRate: 20
  },
  {
    coinId: '3',
    prefix: 'BTC',
    buyRate: 10000,
    sellRate: 9900
  }
]

function calculateChangeValue(value, fromCoinId, toCoinId) {
  if (value === "") return 0;
  if (fromCoinId === toCoinId) return value;
  const fromCoin = coins.find(coin => coin.coinId === fromCoinId);
  const toCoin = coins.find(coin => coin.coinId === toCoinId);
  const baseCoinAmount = value * (fromCoin.buyRate || 1);
  return baseCoinAmount / (toCoin.sellRate || 1);
}

export default function Change(props) {

  const [openChangeConfirmation, setOpenChangeConfirmation] = React.useState(false);

  const [values, setValues] = React.useState({
    fromCoinId: '1',
    toCoinId: '1',
    amountFrom: 0,
    amountTo: 0
  });

  function handleClose() {
    setOpenChangeConfirmation(false);
  }

  function handleSelectChange(event) {
    let changeValue = values.amountTo;
    const newValues = Object.assign({}, values);
    newValues[event.target.name] = event.target.value;
    if (values.amountFrom !== 0) {
      changeValue = calculateChangeValue(values.amountFrom, newValues.fromCoinId, newValues.toCoinId);
    }
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
      amountTo: changeValue
    }));
  }

  function handleInputChange(event) {
    const changeInputName = event.target.name;
    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0;
    const changeOutputName = ['amountFrom', 'amountTo'].find(name => name !== event.target.name);
    const changeValue = calculateChangeValue(event.target.value, values.fromCoinId, values.toCoinId);
    setValues(oldValues => ({
      ...oldValues,
      [changeOutputName]: parseFloat(changeValue),
      [changeInputName]: value 
    }));
  }

  function onClickSwapButton() {
    let changeValue = values.amountTo;
    if (values.amountFrom !== 0) {
      changeValue = calculateChangeValue(values.amountFrom, values.toCoinId, values.fromCoinId);
    }
    const newFromCoinId = values.toCoinId;
    const toCoinId = values.fromCoinId;
    setValues(oldValues => ({
      ...oldValues,
      fromCoinId: newFromCoinId,
      toCoinId,
      amountTo: changeValue
    }));
  }

  function getCoinPrefix() {
    const coin = coins.find(coin => coin.coinId === values.toCoinId);
    return coin.prefix;
  }

  function disableButton() {
    return values.amountTo === 0 || values.amountTo === values.amountFrom;
  }

  return (
    <div>
      <ChangeConfirmation
        openChangeConfirmation={openChangeConfirmation}
        handleClose={handleClose}
        amount={values.amountTo}
        coin={getCoinPrefix()}
      />
      <ChangeForm
        coins={coins}
        handleSelectChange={handleSelectChange}
        handleInputChange={handleInputChange}
        onClickSwapButton={onClickSwapButton}
        values={values}
      /> 
      <Grid container >
        <Grid item xs={12}>
          <Button
            disabled={disableButton()}
            onClick={() => setOpenChangeConfirmation(true)}
            color="primary"
          >
            CAMBIAR
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
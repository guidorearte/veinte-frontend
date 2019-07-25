import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ChangeForm from './ChangeForm';
import ChangeConfirmation from './ChangeConfirmation';
import ChangeResponse from './ChangeResponse';

function calculateChangeValue(coins, value, fromCoinId, toCoinId) {
  if (value === "") return 0;
  if (fromCoinId === toCoinId) return value;
  const fromCoin = coins.find(coin => coin._id === fromCoinId);
  const toCoin = coins.find(coin => coin._id === toCoinId);
  const baseCoinAmount = value / (fromCoin.buyRate || 1);
  return baseCoinAmount * (toCoin.sellRate || 1);
}

export default function Change(props) {

  const [openChangeConfirmation, setOpenChangeConfirmation] = React.useState(false);
  const [openChangeResponse, setOpenChangeResponse] = React.useState(false);

  const [values, setValues] = React.useState({
    fromCoinId: '',
    toCoinId: '',
    amountFrom: 0,
    amountTo: 0
  });

  React.useEffect(() => {
    if (props.coins.length > 0) {
      setValues(oldValues => ({
        ...oldValues,
        fromCoinId: props.coins[0]._id,
        toCoinId: props.coins[0]._id
      }));
    }
  }, [props.coins]);

  React.useEffect(() => {
    if (Object.keys(props.response).length !== 0) {
      setOpenChangeResponse(true);
    }
  }, [props.response]);

  function handleClose() {
    setOpenChangeConfirmation(false);
  }

  function handleSelectChange(event) {
    let changeValue = values.amountTo;
    const newValues = Object.assign({}, values);
    newValues[event.target.name] = event.target.value;
    if (values.amountFrom !== 0) {
      changeValue = calculateChangeValue(props.coins, values.amountFrom, newValues.fromCoinId, newValues.toCoinId);
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
    const changeValue = calculateChangeValue(props.coins, event.target.value, values.fromCoinId, values.toCoinId);
    setValues(oldValues => ({
      ...oldValues,
      [changeOutputName]: parseFloat(changeValue),
      [changeInputName]: value 
    }));
  }

  function onClickSwapButton() {
    let changeValue = values.amountTo;
    if (values.amountFrom !== 0) {
      changeValue = calculateChangeValue(props.coins, values.amountFrom, values.toCoinId, values.fromCoinId);
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
    const coin = props.coins.find(coin => coin._id === values.toCoinId);
    return coin ? coin.prefix : '';
  }

  function disableButton() {
    return values.amountTo === 0 || values.amountTo === values.amountFrom;
  }

  return (
    <div>
      <ChangeResponse
        openChangeResponse={openChangeResponse}
        handleClose={() => setOpenChangeResponse(false)}
        response={props.response}
      />
      <ChangeConfirmation
        openChangeConfirmation={openChangeConfirmation}
        handleClose={handleClose}
        amount={values.amountTo}
        coin={getCoinPrefix()}
        confirmChange={() => props.confirmChange(values)}
      />
      <ChangeForm
        coins={props.coins}
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
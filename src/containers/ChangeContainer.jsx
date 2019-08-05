import React from 'react';
import Change from '../components/change/Change';
import { getCoins, changeCoins } from '../api/backend';

export default class ChangeContainer extends React.Component {

  state = {
    coins: [],
    response: {}
  }

  async componentDidMount() {
    const coins = await getCoins();
    this.setState({coins});
  }

  async confirmChange({fromCoinId, toCoinId, amountFrom}) {
    const response = await changeCoins(fromCoinId, toCoinId, amountFrom);
    this.setState({response});
  }

  render() {
    return (
      <Change
        coins={this.state.coins}
        confirmChange={this.confirmChange.bind(this)}
        response={this.state.response}
      />
    );
  }
}
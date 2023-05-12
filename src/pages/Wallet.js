import React, { Component } from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends Component {
  render() {
    return (
      <main>
        <Header />
        <WalletForm />
      </main>
    );
  }
}

export default Wallet;

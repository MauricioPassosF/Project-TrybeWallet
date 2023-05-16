import React, { Component } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import './css/Wallet.css';

class Wallet extends Component {
  render() {
    return (
      <main className="wallet-page">
        <Header />
        <WalletForm />
        <Table />
      </main>
    );
  }
}

export default Wallet;

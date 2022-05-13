import './App.css';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  //to create hook 
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);
  const [value, setValue] = useState('');
  const clearUp = () => {
    (document.getElementById('myInput') as HTMLInputElement).value = ''
  }

  return (
    <div className="App">
      <h1>{amount}</h1>
      <label>Enter the amount:
        <input id='myInput' onChange={event => setValue(event.target.value)} />
      </label>
      <button onClick={() => {depositMoney(Number(value)); clearUp()}}>Deposit</button>
      <button onClick={() => {withdrawMoney(Number(value)); clearUp()}}>Withdraw</button>
      <button onClick={() => {bankrupt(); clearUp()}}>Bankrupt</button>
    </div>
  );
}

export default App;

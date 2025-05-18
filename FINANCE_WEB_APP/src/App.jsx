import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero.JSX'

function App() {
  const [user, setUser] = useState(false)
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState("income")
  const [transactions, setTtransaction] = useState([])


  const handleAddTransaction = ()=>
{
 setTtransaction([...transactions, {amount, type}])
 setAmount("")
}
console.log(transactions)
  return (
    <div>
      <Header user={user} />
      <Hero amount={amount} 
            setAmount={setAmount} 
            transactions={transactions}
            type={type}
            setType={setType}
            handleAddTransaction={handleAddTransaction}
            />
    </div>
  )
}

export default App

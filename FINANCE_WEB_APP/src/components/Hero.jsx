function Hero({ amount,
    setAmount,
    transactions,
    type,
    setType,
    handleAddTransaction
}) {

    const totalIncome = transactions.reduce((acc, transaction)=>
        
            transaction.type == "income"? acc + Number(transaction.amount) : acc ,0
           
        
)
    const totalExpense = transactions.reduce((acc, transaction)=>
    
            transaction.type == "expense"? acc + Number(transaction.amount) : acc,0)

    const balance = totalIncome - totalExpense
    return (
        <div>
            <div className="flex justify-center align-center">
                <div className="flex gap-10 my-4">
                <div className="px-14 py-3 border-3 border-blue-600 rounded-md">
                    <div className="font-bold">Income</div>
                    <div className="font-bold text-2xl text-green-600">{totalIncome}</div>
                </div>
                <div className="px-14 py-3 border-3 border-blue-600 rounded-md ">
                    <div className="font-bold">Expense</div>
                    <div className="font-bold text-2xl text-red-600"> {totalExpense}</div>
                </div>
                <div className="px-14 py-3 border-3 border-blue-600 rounded-md  ">
                    <div className="font-bold">Balance</div>
                    <div className={`${balance < 0 ? "text-red-600" : "text-green-600"} font-bold text-2xl `}>{balance}</div>
                </div>
                </div>
            </div>

            <div className="flex justify-center align-center gap-5">
                <input
                    onChange={(e) => setAmount(e.target.value)}
                    className=" border-2 border-blue-600 rounded-md py-2 px-2"
                    type="number"
                    placeholder="Add Amount"
                    value={amount}

                />
                <select
                    onChange={(e) => setType(e.target.value)}
                    className=" border-2 border-blue-600 rounded-md py-2 px-2">
                    value={type}
                    <option  value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <button
                    onClick={handleAddTransaction}
                    className=" border-2 border-blue-600 rounded-md py-2 px-2 bg-blue-600 text-white font-semibold">
                    Submit
                </button>
            </div >
            <div className="flex flex-col">

            {
                transactions.map((data,index)=>{
                    return(
                    <div key={index} className="flex justify-center my-2 ">
                    <h1 className="font-semibold w-70  text-3xl">{index + 1}{')'}{data.amount}</h1>
                    <h1 className="font-semibold text-3xl">{data.type}</h1>
                    </div>
                    )
                })
            }
            </div>
           
            
        </div>




    )
}

export default Hero
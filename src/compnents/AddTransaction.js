import { useState } from "react"

const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
  return (
    <>
    <h1>Add  Transaction</h1>
    <form>
        <div className="form-control">
            <label htmlFor='text'>text</label>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} id='text' placeholder='enter text......'/>
        </div>
        <div>
            <label htmlFor='amount'> amount</label>
            <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)}id='amount' placeholder='enter amount...'/>
            <button className='btn'>add Transaction</button>
        </div>

    </form>
    </>
  )
}

export default AddTransaction
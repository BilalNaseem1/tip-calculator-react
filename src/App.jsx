import { useState } from 'react';

export default function App() {

  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState(0);
  
  const billNum = parseFloat(bill) || 0;
  const tipAmount = (billNum * tipPercentage) / 100;
  const totalAmount = billNum + tipAmount;

  const tipOptions = [10, 15, 20];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#191919]">
      <h1 className="text-2xl text-white py-4">Tip Calculator</h1>
      <div>

      <div
      className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md w-80 mb-4"
        >
          <input
            type="number"
            placeholder="Enter bill amount"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="border border-gray-300 rounded p-2 w-50
            font-medium text-gray-700 focus:outline-none focus:ring-2
            focus:ring-blue-500 focus:border-blue-500"
          />
      </div>

      <div
        className="flex  items-center justify-center bg-white p-6 rounded-lg shadow-md w-80">
          {tipOptions.map((option) => (
            <button
              key={option}
              onClick={() => setTipPercentage(option)}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded ${tipPercentage === option ? 'ring-2 ring-blue-500' : ''}`}
            >
              {option}%
            </button>
          ))}
      </div>
    </div>
      <p className="text-lg mt-4 text-white">Tip Amount: ${tipAmount.toFixed(2)}</p>
      <p className="text-lg mt-2 text-white">Total Amount: ${totalAmount.toFixed(2)}</p>
    </div>
  )
}
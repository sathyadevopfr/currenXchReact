import { useState } from 'react';
import { useCurrencyInfo } from './CustomizedHooks/useCurrencyinfo'; 
import InputBox from './Components/InputBox';
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0);
  const useCurrency = useCurrencyInfo(from);
  const options = Object.keys(useCurrency)
  const convert = () => {
    const rate = useCurrency[to]
    if (rate != null) {
       setConvertedAmount(amount * rate.toFixed(2));
    }
    else {
      setConvertedAmount(0);
       }
  }
  const swap = () => {
    setFrom(to);
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount);
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center item-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2023/07/09/13/29/ai-generated-8116142_1280.jpg')`,
      }}
    >
      <div className="w-full" style={{ marginTop: "17%" }}>
        <div className="w-full  max-w-md mx-auto border border-gray-60 rounded-lg p-8 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={e => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={amount => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="to"
                currencyOptions={options}
                onCurrencyChange={currency => setTo(currency)}
                amount={convertedAmount}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              type="submit"
            >
              Convert
              {" "} {from.toUpperCase()} to {to.toUpperCase()}
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App

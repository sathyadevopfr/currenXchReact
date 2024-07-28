import React ,{useId} from 'react'

const InputBox = ({
  label,
  amount,
  onCurrencyChange,
  onAmountChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  disabledCurrency = false,
  className = "",
}) => {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
                  onChange={(e) =>
                  {
                      const value = Number(e.target.value);
if(!isNaN(value)) {onAmountChange && onAmountChange(value);}}} />
      </div>
      <div className="flex w-1/2 flex-wrap justify-end text-center">
        <p className="text-black/40 mb-2 w-full ">Currency Type</p>
        <select
          name=""
          id=""
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={e => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={disabledCurrency}
        >
          {currencyOptions.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox
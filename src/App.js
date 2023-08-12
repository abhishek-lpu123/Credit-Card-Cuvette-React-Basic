import './App.css';
import Front from './assets/Front.png';
import Back from './assets/Back.png';
import BG from './assets/BG.png';
import { useState } from 'react';
function App() {
  const [name, setName] = useState("JANE APPLESEED");
  const [num, setNum] = useState("0000 0000 0000 0000");
  const [mon, setMon] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("123");
  const [showName, setShowName] = useState("");
  const [showNum, setShowNum] = useState("");
  const [showMon, showSetMon] = useState("");
  const [showYear, showSetYear] = useState("");
  const [showCvc, setShowCvc] = useState("");

  let handleChange1 = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^A-Za-z ]/g, '');
    setShowName(sanitizedValue);
  }
  let handleChange2 = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^\d]/g, '');
    const editedValue = sanitizedValue.match(/.{1,4}/g);
    if (editedValue) {
      setShowNum(editedValue.join(' '));
    } else {
      setShowNum('');
    }
  }
  let handleChange3 = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^\d]/g, '');
    showSetMon(sanitizedValue);
  }
  let handleChange4 = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^\d]/g, '');
    showSetYear(sanitizedValue);
  }
  let handleChange5 = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^\d]/g, '');
    setShowCvc(sanitizedValue);
  }
  let handleSubmit = () => {
    const cardNameRegex = /^[A-Za-z ]+$/;
    const cardNumRegex = /^[0-9 ]{19}$/;
    const cardMonRegex = /^(0[1-9]|1[0-2])$/;
    const cardYearRegex = /^([2-3][0-9])$/;
    const cardCvvRegex = /^[0-9]{3}$/;
    if (
      cardNameRegex.test(showName) &&
      cardNumRegex.test(showNum) &&
      cardMonRegex.test(showMon) &&
      cardYearRegex.test(showYear) &&
      cardCvvRegex.test(showCvc)
    ) {
      setName(showName);
      setNum(showNum);
      setMon(showMon);
      setYear(showYear);
      setCvc(showCvc);
    } else {
      alert("Validation failed for at least one field");
    }
  };

  return (
    <div className='container' style={{ backgroundImage: `url(${BG})` }}>
      <div className='LeftImgs' >
        <img id='Front' src={Front} alt='Front' />
        <img id='Back' src={Back} alt='Back' />
      </div>
      <div className='cardText'>
        <p id='cardNumber'>{num}</p>
        <p id='cardName'>{name.toUpperCase()}</p>
        <p id='cardExp'>{mon}/{year}</p>
        <p id='cardCvv'>{cvc}</p>
      </div>
      <div className='RightForm'>
        <label for='name'>CARDHOLDER NAME</label>
        <input type='text' id='name' placeholder='e.g. Jane Appleseed' value={showName} maxLength={20} onChange={handleChange1}></input>
        <label for='number'>CARD NUMBER</label>
        <input type='text' id='number' placeholder='e.g. 1234 5678 9123 0000' value={showNum} onChange={handleChange2} maxLength={19}></input>
        <div className='exp-cvv'>
          <label for='exp'>EXP. DATE(MM/YY)</label>
          <label for='cvv'>CVV</label></div>
        <div className='exp-cvv-num'>
          <input type='text' id='exp' placeholder='MM' onChange={handleChange3} value={showMon} maxLength={2}></input>
          <input type='text' placeholder='YY' onChange={handleChange4} value={showYear} maxLength={2}></input>
          <input type='text' id='cvv' placeholder='e.g. 123' value={showCvc} maxLength={3} onChange={handleChange5}></input></div>
        <button className='Submit' onClick={handleSubmit}>SUBMIT</button>
      </div>
    </div>
  );
}
export default App;

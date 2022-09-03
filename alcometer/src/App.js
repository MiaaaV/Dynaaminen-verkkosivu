import './App.css';
import { useState } from 'react'

function Alcometer() {

  const [weight, setWeight] = useState(89)
  const [bottles, setBottles] = useState(3)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState()
  
  const [result, setResult] = useState(0)
  
  function handleSubmit(e) {
    e.preventDefault();
    
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burn = weight / 10;
    let newGrams = grams - (burn * time);

    if (gender === "male") {
      let newResult = newGrams / (weight * 0.7)
      if (result < 0) {
        setResult(0)
      }
      else {
        setResult(newResult);
      }
    }

    else if (gender === "female"){
      let newResult = newGrams / (weight * 0.6)
      if (newResult < 0) {
        setResult(0)
      }
      else {
        setResult(newResult)
      }
    }

  }

  return (

      <form>
        
      <h3>Calculating alcohol blood level</h3>

      <div>
          <label>Weight</label>
          <br></br>
          <input name="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      
      <div>
        <label>Bottles</label>
        <br></br>
        <select name="bottles" type="number" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div>
        <label>Time</label>
        <br></br>
        <select name="time" type="number" value={time} onChange={e => setTime(e.target.value)}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input><label>Female</label>
      </div>

      <div>
        <output>Alcohol blood level: {result.toFixed(2)}</output>
      </div>

      <button type="button" onClick={handleSubmit}>Calculate</button>
    </form>

  )
}

export default Alcometer;
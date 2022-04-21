import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import flowers from '../data/flowers.js';
import apiAccess from '../communication/APIAccess';

const Flowers = (props) => {
  const [flowerName, setFlowerName] = useState('');
  const [flowers, setFlowers] = useState([]);
  
  let navigate = useNavigate();

  useEffect(() => {
    apiAccess.getFlowers()
    .then(x => setFlowers(x))
    .catch(e => {
      console.log(e);
      alert('Something went wrong getting flowers');
    })
  })

  let handleClick = (name) => {
    props.selectedFlower(name);
    setFlowerName(name);
    navigate('/quiz/');
  }

  let keyCount = 0; //for making unique keys to avoid non-fatal errors
  let flowerLinks = flowers.map(flower => {
    keyCount++;
    return (
      <div className="col-md mb-2" key={flower + String(keyCount)}>
        <div className="card">
          <img className="card-img-top" src={flower.picture} onClick={e => handleClick(flower.name)}  />
          <h3 className="card-title" id='title'>
            {flower.name}
          </h3>
        </div>
      </div>
    )
  });
  return (
    <form>
      <div className="row align-items-end m-2">{flowerLinks.slice(0, 3)}</div>
      <div className="row align-items-end m-2">{flowerLinks.slice(3, 6)}</div>
      <div className="row align-items-end m-2">{flowerLinks.slice(6, 9)}</div>
      <div className="row align-items-end m-2">{flowerLinks.slice(9, 12)}</div>
      <div className="row align-items-end m-2">{flowerLinks.slice(12, 15)}</div>
      <div className="row align-items-end m-2">{flowerLinks.slice(15, 18)}</div>
      <div className="row align-items-end m-2">{flowerLinks.slice(18, 21)}</div>
      <div className="row align-items-end m-2">{flowerLinks.slice(21, 24)}</div>
      <div className="row align-items-end m-2">{flowerLinks.slice(24)}</div>
    </form>
  );
}

export default Flowers;
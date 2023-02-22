import { useState } from "react";
function Muokkaaunta() {

  const [uni, setValues] = useState({
    maara: '8',
    pvm: '12.34.2000',
    laatu: 'Hyvä',
    lisatietoja: 'ei ole',
  });


  const [viesti, setViesti] = useState('');

  // Funktio, jolla muutetaan tilaa
  const muuta = (e) => {
    setViesti('Muokattu');
    setValues(
      {
        ...uni,
        [e.target.name]: e.target.value
      }
    );
  };

  return (
    <div>
      <form>
        <label htmlFor='maara'>Unenmäärä </label>
        <input type='text' name='maara' value={uni.maara} onChange={(e) => muuta(e)} /><br />

        <label htmlFor='pvm'>Päivämäärä: </label>
        <input type='text' name='pvm' value={uni.pvm} onChange={(e) => muuta(e)} /><br />

        <label htmlFor='laatu'>Laatu: </label>
        <select value={uni.laatu} onChange={(e) => muuta(e)} name="laatu" id="laatu">
          <option value="Erinomainen">Erinomainen</option>
          <option value="Hyvä">Hyvä</option>
          <option value="Huono">Huono</option>
          <option value="Muu(lisätietoja)">Muu(lisätietoja)</option>
        </select>
        <br />

        <label htmlFor='lisatietoja'>Lisätietoja: </label>
        <input type='text' name='lisatietoja' value={uni.lisatietoja} onChange={(e) => muuta(e)} /><br />
      </form>
      <input type='button' value='Palaa etusivulle' />
      <p>{viesti}</p>
    </div>
  );
}
export default Muokkaaunta;
import { useState } from "react";
function Muokkaaruokaa() {

  const [ruoka, setValues] = useState({
    nimi: 'ruoka',
    pvm: '11.22.3003',
    aika: '12.34',
    lisatietoja: 'ei ole',
  });


  const [viesti, setViesti] = useState('');

  // Funktio, jolla muutetaan tilaa
  const muuta = (e) => {
    setViesti('Muokattu');
    setValues(
      {
        ...ruoka,
        [e.target.name]: e.target.value
      }
    );
  };


  return (
    <div>
      <form>
        <label htmlFor='nimi'>Ruoan nimi: </label>
        <input type='text' name='nimi' value={ruoka.nimi} onChange={(e) => muuta(e)} /><br />

        <label htmlFor='pvm'>Päivämäärä: </label>
        <input type='text' name='pvm' value={ruoka.pvm} onChange={(e) => muuta(e)} /><br />

        <label htmlFor='aika'>Aika: </label>
        <input type='text' name='aika' value={ruoka.aika} onChange={(e) => muuta(e)} /><br />

        <label htmlFor='lisatietoja'>Lisätietoja: </label>
        <input type='text' name='lisatietoja' value={ruoka.lisatietoja} onChange={(e) => muuta(e)} /><br />
      </form>
      <input type='button' value='Palaa etusivulle' />
      <p>{viesti}</p>
    </div>
  );
}
export default Muokkaaruokaa;
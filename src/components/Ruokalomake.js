import { useState } from "react";

function Ruokalomake() {

  const [setValues] = useState({
    nimi: '',
    pvm: '',
    aika: '',
    lisatietoja: '',
  });

  const [viesti, setViesti] = useState('');

  // Funktio painikkeen painallukselle
  const lisaaRuoka = (e) => {
    //e.preventDefault();
    setViesti('Ruoka lisätty tietokantaan');
    setValues({
      nimi: '',
      pvm: '',
      aika: '',
      lisatietoja: '',
    });
  }
  return (
    <div>
      <form>
        <label htmlFor='nimi'>Ruoan nimi: </label>
        <input type='text' name='nimi' /><br />

        <label htmlFor='pvm'>Päivämäärä: </label>
        <input type='text' name='pvm' /><br />

        <label htmlFor='aika'>Aika: </label>
        <input type='text' name='aika' /><br />

        <label htmlFor='lisatietoja'>Lisätietoja: </label>
        <input type='text' name='lisatietoja' /><br />


        <input class='buttonAdd' type='button' value='Lisää' onClick={(e) => lisaaRuoka(e)} />
      </form>
      <p>{viesti}</p>
    </div>
  );
}
export default Ruokalomake;
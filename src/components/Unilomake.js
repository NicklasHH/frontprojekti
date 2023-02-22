import { useState } from "react";
function Unilomake() {

  // tilamuuttujat ja niiden muuttamiskutsu
  const [setValues] = useState({
    maara: '',
    pvm: '',
    laatu: '',
    lisatietoja: '',
  });

  const [viesti, setViesti] = useState('');



  // Funktio painikkeen painallukselle
  const lisaaUni = (e) => {
    //e.preventDefault();
    setViesti('Uni lisätty');
    setValues({
      maara: '',
      pvm: '',
      laatu: '',
      lisatietoja: '',
    });
  }

  return (
    <div>
      <form>
      <label htmlFor='maara'>Unen määrä </label>
      <input type='text' name='maara' /><br />

        <label htmlFor='pvm'>Päivämäärä: </label>
        <input type='text' name='pvm'  /><br />

        <label htmlFor='laatu'>Unenluniaatu: </label>
        <select name="laatu" id="laatu">
          <option value="Erinomainen">Erinomainen</option>
          <option value="Hyvä">Hyvä</option>
          <option value="Huono">Huono</option>
          <option value="Muu(lisätietoja)">Muu(lisätietoja)</option>
        </select>
<br />
        <label htmlFor='lisatietoja'>Lisätietoja: </label>
        <input type='text' name='lisatietoja' /><br />

        <input class='buttonAdd' type='button' value='Lisää' onClick={(e) => lisaaUni(e)} />
      </form>
      <p>{viesti}</p>
    </div>
  );
}

export default Unilomake;

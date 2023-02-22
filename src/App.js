import Muokkaaruokaa from './components/Muokkaaruokaa';
import Muokkaaunta from './components/Muokkaaunta';
import Ruokalista from './components/Ruokalista';
import Ruokalomake from './components/Ruokalomake';
import Unilista from './components/Unilista';
import Unilomake from './components/Unilomake';
import MenuMUI from './navigationMUI/MenuMUI';


const unet = [
  {
    id: 1,
    maara: '7h 30min',
    pvm: '26.5.2022',
    laatu: 'Hyvä',
    lisatiedot: 'heräsin yöllä kerran',
  },
  {
    id: 2,
    maara: '8h 30min',
    pvm: '27.5.2022',
    laatu: 'Muu(lisätietoja)',
    lisatiedot: 'Heräsin todella pirteänä',
  },
]
const ruoat = [
  {
    id: 1,
    nimi: 'maksalaatikko',
    pvm: '26.5.2022',
    kellonaika: '16.00',
    lisatiedot: 'Päivällinen'
  },
  {
    id: 2,
    nimi: 'Riisipuuro',
    pvm: '27.5.2022',
    kellonaika: '8.00',
    lisatiedot: 'Aamupala'
  },
]


function App() {
  return (
    <div>
      <MenuMUI />
      <h2>Ruokalista</h2>
      <input class='buttonAdd' type='button' value='Lisää ruoka' />
      <Ruokalista ruoat={ruoat} /> <br />
      
      <h2>Unilista</h2>
      <input class='buttonAdd' type='button' value='Lisää uni' />
      <Unilista unet={unet} /> <br />


      <h2>Lomakkeet</h2>
      <p>Ruokalomake</p>
      <Ruokalomake />
      <p>Unilomake</p>
      <Unilomake /> <br />

      <h2>Muokkaukset</h2>
      <p>Muokkaa unta</p>
      <Muokkaaunta />
      <p>Muokkaa ruokaa</p>
      <Muokkaaruokaa />
    </div>
  );
}

export default App;
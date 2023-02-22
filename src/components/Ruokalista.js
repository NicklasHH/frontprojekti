function Ruokalista(props) {

    return (
        <div>
            {
                props.ruoat.map(ruoka => {
                    return (
                        <p key={ruoka.id}>
                            Ruoan nimi: {ruoka.nimi}<br />
                            Päivämäärä: {ruoka.pvm}<br />
                            Kellonaika: {ruoka.kellonaika}<br />
                            Lisätietoja: {ruoka.lisatiedot}<br />
                            <input class='buttonEdit' type='button' value='Muokkaa' />
                            <input class='buttonDelete' type='button' value='Poista' />
                        </p>
                        
                    ) // return
                }) // map
            }
        </div>
    )
}
export default Ruokalista;
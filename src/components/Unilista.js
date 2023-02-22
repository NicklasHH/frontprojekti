import * as React from 'react';
import Box from '@mui/material/Box';

function Unilista(props) {
    
    return (
        <Box sx={{}}>
            {
                props.unet.map(uni => {
                    return (
                        <p key={uni.id}>
                            Unenmäärä: {uni.maara}<br />
                            Päivämäärä: {uni.pvm}<br />
                            Unenlaatu: {uni.laatu}<br />
                            Lisätietoja: {uni.lisatiedot}<br />
                            <input class='buttonEdit' type='button' value='Muokkaa' />
                            <input class='buttonDelete'type='button' value='Poista' />
                        </p>
                    ) // return
                }) // map
            }
        </Box>
    )
}
export default Unilista;
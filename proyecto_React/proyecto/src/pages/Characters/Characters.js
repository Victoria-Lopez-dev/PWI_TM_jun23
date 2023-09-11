import {useState} from 'react';

import Nav from '../../components/Nav/navegation'
import Card from '../../components/Card/card'


export default function Character() {
    let [itemMenu]=useState("Characters");

    return(
        <div>
            <Nav itemMenu={itemMenu}/>
            <h2>Filters</h2>
            <p>aca irian los filtros..</p>

            <section>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </section>
        </div>
    )
}
import React from 'react';
import Section from './sections/Section'

let Sections = props => {
    const secName = ['Gay Videos', 'Cat Videos', 'Porn Videos']

    const ListItems = secName.map(item => {
        return <Section SecTitle={item} />

    })

    return(
        <div>
            {ListItems}
        </div>
    )
}

export default Sections  
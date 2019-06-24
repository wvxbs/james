import React from 'react';
import Section from './sections/Section'

const Sections = props => {
    const secName = [
                        'Minecraft',
                        'Israelenses ',
                        'Venom Extreme',
                        'Bolos'
                    ]

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
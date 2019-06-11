import React from 'react';
import List from './List';

const Section = props => {
    const secItems = ['OOF', 'NOOF', 'WOFF','JOOJ']

    const listItems = secItems.map((item, i) => <List key={i} title={item} nav={i} />)

    return(
        <div>
            <h1 className="title">
                {props.SecTitle} Videos
            </h1>
            <div>
                {listItems}
            </div>
        </div>
    )
}

export default Section 

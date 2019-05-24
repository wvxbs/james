import React from 'react'

let Select = props =>{
    var selected = props.selected
    switch(selected){
        case 1:
            return <div></div>
        break
        case 2:
            return <div></div>
        break
    }
}

let Form = props =>{
    return(
        <div className="container">
            <Select />
        </div>
    )
}

export default Form
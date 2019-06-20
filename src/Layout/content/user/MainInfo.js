import React, {useState, useEffect} from 'react'
import Edit from './maininfo/Edit'
import Show from './maininfo/Show'

const MainInfo = props => {
    const [name, setName] = useState(null)
    const [id, setId] = useState(null)
    const [edit, setEdit] = useState(false)

    useEffect(() =>{   
        //get
        var NAME = 'fake'
        var ID = 1
        setId(ID)
        setName(NAME)

    })

    const toggleState = () => {
        var _edit = edit

        if(_edit) {
            setEdit(false)
        } else {
            setEdit(true)
        }

        alert(_edit)
    } 

    const showInfo = () => {
        if(edit) {
            return (
                <Edit id={id}/>
            )
    
        } else {
            return (
                <Show id={id}/>
            )
        }
    }

    return (
        <div>
            <div className="is-primary">
                {showInfo}
            </div>
            <button className="button is-white" onClick={toggleState()}>
                editar
            </button>
        </div>
    )
}

export default MainInfo
import React, {useState, useEffect} from 'react'


const MainInfo = props => {
    const [name, setName] = useState(null)
    const [id, setId] = useState(null)
    const [img, setImg] = useState(false)
    const [description, setDescription] = useState(false)
    const [edit, setEdit] = useState(false) 

    useEffect(() =>{   
        //get

    })

    const Edit = props => {
        var _img, _name, _id

        const updateProfileData = (simg, sname, sid) => {
            setImg(simg)
            setName(sname)
            setId(sid)
        }

        return (
            <div className="card">
                <div className="card-content">
                    <div className="field">
                        <label className="label"><p className="subtitle">{img}</p></label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder="" 
                                onChange={img => _img = img.target.value} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label"><h1 className="title">{name}</h1></label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder="" 
                                onChange={name => _name = name.target.value} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label"><p className="subtitle">{id}</p></label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder="" 
                                onChange={id => _id = id.target.value} 
                            />
                        </div>
                    </div>
                    <button 
                    className="button is-link"
                    onClick={() => updateProfileData(_img, _name, _id)}   
                >Save</button>
                </div>
                <div>
                    <h1 className="subtitle">{description}</h1>
                </div>
            </div>
        )
    }
    
    const Show = props => {
        return (
            <div className="tile">
                <div>
                    <p className="subtitle">{img}</p>
                </div>
                <div>
                    <h1 className="title">{name}</h1>
                    <p className="subtitle">{id}</p>
                </div>
                <div>
                    <h1 className="subtitle">{description}</h1>
                </div>
            </div>
        )
    }

    const toggleState = (_edit) => {
        var toggler 

        if(_edit) {
            toggler = false
        } else {
            toggler = true
        }

        setEdit(toggler)
    }

    const ShowInfo = () => {
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
            <div>
                <ShowInfo />
            </div>
            <button 
                className="button is-white"
                onClick={() => toggleState(edit)}    
            >
                <i className="fas fa-pen" aria-hiddne="true"></i>
            </button>
        </div>
    )
}

export default MainInfo
import React, {useState, useEffect} from 'react'

const Show = props => {
    const [id, setId] = useState(null)
    const [name, setName] = useState(null)
    const [img, setImg] = useState(null)
    const [description, setDescription] = useState(null)

    useEffect(() =>{
        //get

        var _id = props.id
        var _name = 'maia'
        var _img = ''
        var _description = 'eu odeio israel'

        setId(_id)
        setName(_name)
        setImg(_img)
        setDescription(_description)

    })

    return (
        <div>
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

export default Show
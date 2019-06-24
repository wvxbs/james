import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'


const MainInfo = props => {
    const [userName, setUserName] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [fullName, setFullName] = useState(null)
    const [email, setEmail]= useState(null)
    const [id, setId] = useState(null)
    const [img, setImg] = useState(null)
    const [type, setType] = useState(null)
    const [activate, setActivate] = useState(null)
    const [edit, setEdit] = useState(null) 
    const [cookies, useCookie, removeCookie] = useCookies()

    var cUserName
    var cFirstName
    var cLastName
    var cFullName
    var cEmail
    var cId
    var cProfilePhoto
    var cType
    var cActivate

    useEffect(() =>{   
        if (cookies.usr == null) {
            cId = 0
        } else {
            cId = cookies.usr.id
        }
        
        var url = "http://james/api/user/readOne.php?id=" + cId
        axios.get(url).then(res => {
            cUserName  = res.data.username
            cFirstName = res.data.firstname
            cLastName = res.data.lastname
            cFullName = "" + res.data.firstname + " " + res.data.lastname + ""
            cEmail = res.data.email
            cId = res.data.id
            cProfilePhoto = res.data.profilePhoto
            cType = res.data.type
            cActivate = res.data.activate
            setUserName(cUserName)
            setFirstName(cFirstName)
            setLastName(cLastName)
            setFullName(cFullName)
            setEmail(cEmail)
            setId(cId)
            setImg(cProfilePhoto)
            setType(cType)
            setActivate(cActivate)
        })

    })

    const Edit = props => {
        var _img, _UserName, _id

        const updateProfileData = (_UserName,_FirstName, _LastName,_FullName, _Email, _Id, _ProfilePhoto, _Type, _Activate ) => {

            setUserName(_UserName)
            setFirstName(_FirstName)
            setLastName(_LastName)
            setFullName(_FullName)
            setEmail(_Email)
            setId(_Id)
            setImg(_ProfilePhoto)
            setType(_Type)
            setActivate(_Activate)

            var request = JSON.stringify({
                "id": id,
                "username": userName,
                "firstname": firstName,
                "lastname": lastName,
                "email": email,
                "profilePhoto": img,
                "type": type,
                "activate": activate
            })

            axios({
                type : 'PUT',
                url : 'http://james/api/user/update.php',
                data : request
            }).then(() => {
                alert('updated')
            })
        }

        return (
            <div className="card">
                <div className="card-content">
                    <div className="field">
                        <label className="label"><p className="subtitle">{userName}</p></label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder={userName} 
                                onChange={input => cUserName= input.target.value} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label"><h1 className="title">{firstName}</h1></label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder={firstName} 
                                onChange={input => cFirstName = input.target.value} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label"><h1 className="title">{lastName}</h1></label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder={lastName} 
                                onChange={input => cLastName = input.target.value} 
                            />
                        </div>
                    </div>
                    <button 
                    className="button is-white"
                    onClick={() => updateProfileData(_img, _UserName, _id)}   
                >Save</button>
                </div>
                <div>
                    <h1 className="subtitle">{lastName}</h1>
                </div>
            </div>
        )
    }
    
    const Show = props => {
        return (
            <div className="tile">
                <div>
                    <img src={img} />
                </div>
                <div>
                    <h1 className="title">{userName}</h1>
                    <p className="subtitle">{fullName }</p>
                </div>
                <div>
                    <h1 className="subtitle">{lastName}</h1>
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
            <button 
                className="button is-danger"
                onClick={() => {
                    removeCookie('usr')
                }}
            >
                Exit
            </button>
        </div>
    )
}

export default MainInfo
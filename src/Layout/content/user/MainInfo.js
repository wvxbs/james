import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {useCookies} from 'react-cookie'


const MainInfo = props => {
    const [fullName, setFullName] = useState(null)
    const [edit, setEdit] = useState(null)
    const [cookies, useCookie, removeCookie] = useCookies(null)
    const [user, setUser] = useState({})
    const [userName, setUserName] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [profilePhoto, setProfilePhoto] = useState(null)
    const [request, setRequest] = useState()
    const [form, setForm] = useState(null)
    const [id, setId] = useState(null)

    useEffect(() =>{   
        if (cookies.usr == null) {
            setId(0)
        } else {
            setId(cookies.usr.id)
            var url = 'http://james/api/user/readOne.php?id=' + id + ''
            axios({
                method : 'GET',
                url : url
            }).then(res => {
                setUser(res.data)
                var fname = "" + user.firstname + " " + user.lastname + ""
                setFullName(fname)
                console.log(user) 
            })  
        }
    })

    const Edit = props => {

        const submitFile = (event) => {
            setProfilePhoto(event.target.files[0])
            const fd = new FormData();
            fd.append('id', id)
            fd.append('profilePhoto', profilePhoto)
            setForm(fd)
        } 

        const updateProfileData = (Photo, UserName, FirstName ,LastName) => {
            var rUserName = user.username
            var rFirstName = user.firstname
            var rLastName = user.lastname
            var rPhoto = user.profilePhoto

            setUser({
                'id' : user.id,
                'username': UserName || rUserName,
                'firstname': FirstName || rFirstName,
                'lastname': LastName || rLastName,
                'email': user.email,
                'profilePhoto': Photo || rPhoto,
                'type': user.type,
                'activate': user.activate
            })

            
            axios({
                type : 'PUT',
                url : 'http://james/api/user/update.php',
                data : form
            }).then((res) => {
                console.log(res.statusText)
                useCookie('usr', JSON.stringify(user))
                alert('updated')
            }).catch(() =>alert('error while updating'))
        }

        var cUserName
        var cFirstName
        var cLastName   
        var cPhoto

        return (
            <div className="card">
                <div className="card-content">
                    <div className="file has-name is-boxed">
                        <label className="file-label">
                            <input 
                                className="file-input" 
                                type="file"            
                                name="resume" 
                                onChange={input => {
                                    var cPhoto = input.target.files[0]
                                    setProfilePhoto(cPhoto)
                                }}
                            />
                            <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                            </span>
                        </label>
                    </div>
                    <div className="field">
                        <img src={setProfilePhoto} />
                    </div>
                    <div className="field">
                        <label className="label"><h1 className="title">{user.firstname}</h1></label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                onChange={input => cFirstName = input.target.value} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label"><h1 className="title">{user.lastname}</h1></label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                onChange={input => cLastName = input.target.value} 
                            />
                            
                        </div>
                    </div>
                    <button 
                    className="button is-white"
                    onClick={() => updateProfileData(cPhoto, cUserName, cFirstName, cLastName)}   
                >Save</button>
                </div>
                <div>
                    <h1 className="subtitle">{user.lastname}</h1>
                </div>
            </div>
        )
    }
    
    const Show = props => {
        var pic = "http://james/" + user.profilePhoto
        return (
            <div className="columns">
                <div className="column">
                    <img src={pic} />
                </div>
                <br></br>
                <div className="column">
                    <h1 className="title">{user.username}</h1>
                    <p className="subtitle">{fullName}</p>
                    <h1 className="subtitle">{user.lastname}</h1>
                </div>
                <div>
                    
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
                <Edit id={() =>{
                    if(!!id) {

                    } else {
                        return id
                    }
                }}
                />
            )
    
        } else {
            return (
                <Show 
                    id={() =>{
                        if(!!id) {

                        } else {
                            return id
                        }
                    }}
                />
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
                <i className="fas fa-pen" aria-hidden="true"></i>
            </button>
            <button 
                className="button is-danger"
                onClick={() => {
                    axios.get('http://james/api/user/logout.php')
                        .then(({ data }) => {
                            alert(data.message)
                            removeCookie('usr')
                        })
                        .catch(console.error)
                }}
            >
                Sair
            </button>
        </div>
    )}

export default MainInfo
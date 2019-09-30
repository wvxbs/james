import React, { useEffect, useState } from 'react'
import Video from '../../../components/videos/Video';
import axios from 'axios'

const Upload = props => {
    //useEffect()
    const [title, setTitle ] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile ] = useState(null)
    const [thumb, setThumb ] = useState("https://www.ehotelsasia.com/wp-content/uploads/2018/10/Black-Background-DX58.jpg")
    const [form, setForm] = useState(null)

    const submitVideo = (video, thumb) => {
        const tb = new FormData();
        const vd = new FormData();
        tb.append('thumbnailPhoto', thumb)
        vd.append('videoData', video)
        axios({
            method : 'POST',
            url : 'http://james/api/video/saveVideoThumbnail.php',
            data : tb
        }).then(res =>{
            console.log('thumb')
        }).catch(err => {
            console.log('error')
        })
        axios({
            method : 'POST',
            url : 'http://james/api/video/saveVideoData.php',
            data : vd
        }).then(res =>{
            console.log('thumb')
        }).catch(err => {
            console.log('error')
        })
    }

    const fileState = (file, index) => {
        switch(index){
            case 1 :
                    setThumb(file)
            break
            case 2 :
                
            break
            case 3 :
                setFile()
            break
            default:
                console.log('error')
            break
        }
    }

    const Create = props => {
        var title, desc, thumbnail, file

        return(
            <div>
                <div className="upload-container">
                    <div className="card-content">
                        <div className="field">
                            <label className="label">Título</label>
                            <div className="control">
                                <input 
                                    className="input is-rounded" 
                                    type="text" 
                                    placeholder="" 
                                    onChange={input =>{
                                        title = input.target.value
                                    }}
                                    value={title}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Descrição</label>
                            <div className="control">
                                <input 
                                    className="input is-rounded" 
                                    type="text" 
                                    placeholder="" 
                                    onChange={input =>{
                                        desc = input.target.value
                                    }}
                                    value={desc}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Thumbnail</label>
                            <div className="file is-dark">
                                <label className="file-label">
                                    <input 
                                        className="file-input" 
                                        type="file" 
                                        name="resume" 
                                        onChange={input =>  {
                                                thumbnail = input.target.files[0]
                                            }}
                                        />
                                    <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Escolha uma imagem
                                    </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Arquivo de Vídeo</label>
                            <div className="control">
                                <div className="file is-dark">
                                    <label className="file-label">
                                        <input 
                                            className="file-input" 
                                            type="file" 
                                            name="resume" 
                                            onChange={input => {
                                                file = input.target.files[0]
                                            }
                                        }
                                        />
                                        <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Escolha um video
                                        </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className="button is-white" onClick={() => {
                            if(title != '' && title != undefined ){
                                setTitle(title) 
                            }
                            if(desc != '' && desc != undefined ) {
                                setDesc(desc)
                            }   
                            if(thumbnail != '' && thumbnail != undefined ) {
                                setThumb(URL.createObjectURL(thumbnail))
                            }   
                        }}
                        >
                            Preview
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const ShowVideo = props => {
        /*                id={id} 
                title={title} 
                thumb={thumbnailPhoto}
                video={path}
                likes={likes}
                dislikes={dislikes}
                views={views}
                user={user.username} */
        return (
            <Video 
                key={title} 
                thumb={thumb}
                title={title}
                desc={desc}
            />
        )
    }

    return(
        <div>
            <div>
                <h1 className="title">Enviar</h1>
            </div>
            <div className="columns">
                <div className="column">
                    <ShowVideo />
                </div>
                <div className="column is-three-quarters">
                    <div id="wrapper">
                    <Create />
                    </div>
                    <button className="button is-link">Criar</button>
                </div>
            </div>
        </div>
    )

}

export default Upload
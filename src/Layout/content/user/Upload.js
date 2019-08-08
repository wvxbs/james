import React, { useEffect, useState } from 'react'
import Video from '../../../components/videos/Video';
import axios from 'axios'

const Upload = props => {
    //useEffect()
    const [title, setTitle ] = useState(null)
    const [file, setFile ] = useState(null)
    const [thumb, setThumb ] = useState(null)
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

    const Create = props => {
        var title
        var thumb
        var video

        return(
            <div>
                <div className="upload-container">
                    <div className="card-content">
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input className="input is-rounded" type="text" placeholder="" onChange={input =>  title = input.target.value} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Thumbnail</label>
                            <div className="file">
                                <label className="file-label">
                                    <input className="file-input" type="file" name="resume" onChange={input => thumb = input.target.files[0]}/>
                                    <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Choose a file…
                                    </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Video File</label>
                            <div className="control">
                                <div className="file">
                                    <label className="file-label">
                                        <input className="file-input" type="file" name="resume" onChange={input => video = input.target.files[0]}/>
                                        <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Choose a file…
                                        </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className="button is-white" onClick={() => {
                            setTitle(title)
                            submitVideo(thumb,video)
                        }}>
                            Preview
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const _Video = () => {
        var video = {
            key : '', 
            id : '',
            title : '' ,
            thumb : '',
            video : '',
            likes : '',
            dislikes : '',
            views : '',
            user : ''
            
        }

        return (
            <Video 
                key={video.id} 
                id={video.id} 
                title={video.title} 
                thumb={video.thumbnailPhoto}
                video={video.path}
                likes={video.likes}
                dislikes={video.dislikes}
                views={video.views}
                user={video.user.username}
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
                    {_Video}
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
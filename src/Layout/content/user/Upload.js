import React, { useEffect, useState } from 'react'
import Video from '../../../components/Video';

const Upload = props => {
    //useEffect()
    const [title, setTitle ] = useState(null)
    const [file, setFile ] = useState(null)
    const [thumb, setThumb ] = useState(null)

    const submitData = (aa,aaa) => {

    } 

    const Create = props => {
        var title

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
                                    <input className="file-input" type="file" name="resume" />
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
                                        <input className="file-input" type="file" name="resume" />
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
                        }}>
                            Preview
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <div>
                <h1 className="title">Enviar</h1>
            </div>
            <div className="columns">
                <div className="column">
                    <Video title={title} />
                </div>
                <div className="column is-three-quarters">
                    <div id="wrapper">
                    <Create />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Upload
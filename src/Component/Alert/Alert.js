import React from 'react';
import '../Alert/Alert.css'

function Alert({ closeAlert }) {
    return (
        <div>
            <div id="alertbox" className="alertbox">
                <p className='alert-box-close' onClick={closeAlert} >&times;</p>
                <div className="alert-container">
                    <form className="alert-card">
                        <h2 className="alert-heading">Alert</h2>
                        <p className="heading">Title:</p>
                        <p className="title_alert">Null</p>

                        <p className="heading">Description:</p>
                        <p className="description_alert">Null</p>

                        <p className="heading">Severity:</p>
                        <p className="severity">Null</p>

                        <p className="heading">Effective UTC:</p>
                        <p className="effective_utc">Null</p>

                        <p className="heading">Effective Local:</p>
                        <p className="effective_local">Null</p>

                        <p className="heading">Expires Local:</p>
                        <p className="expires_local">Null</p>

                        <p className="heading">Expires UTC:</p>
                        <p className="expires_utc">Null</p>

                        <p className="heading">URL:</p>
                        <p className="url">Null</p>

                        <p className="heading">Regions:</p>
                        <p className="regions">Null</p>
                    </form>
                </div><br></br><br></br>
            </div>
        </div>
    )
}

export default Alert

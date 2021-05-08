import { useState } from 'react';
import PopUp from './PopUp';

const Project = params => {
    const [isShown, setShown] = useState(false);

    return (
    <>
        {isShown && <PopUp onClick={() => setShown(false)}  {...params} />}
        <div className="project-display" onClick={() => setShown(true)}>
            <div className="project-title">
                <h1>{params.title}</h1>
            </div>
            <hr className="project-separator" />
            <div className="project-description">
                <p>{params.description}</p>
            </div>
        </div>
    </>)
}

export default Project
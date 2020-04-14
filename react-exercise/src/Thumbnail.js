import React from 'react';

import {Link} from 'react-router-dom';

function Thumbnail(props){

    return(
        <div>
            <Link to={`/ResultPage/${props.id}`}>
              <img class="preview" src={props.source} alt={props.description}/>
              </Link>
        </div>
        
    );
}

export default Thumbnail;
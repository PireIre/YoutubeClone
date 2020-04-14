import React from 'react';

function ChannelImage(props){

    return(
        <div>   
            <img class = "channel-thumb" src={props.source} alt="Channel thumbnail"/>
        </div>
        
    );
}

export default ChannelImage;
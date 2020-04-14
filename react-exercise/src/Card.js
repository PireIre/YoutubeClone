import React from 'react';
import Thumbnail from './Thumbnail.js';
import ChannelImage from './ChannelImage.js';

function Card(props){

    return(
        <article class="Card">
                <Thumbnail
                    source = {require("./images/" + props.media + ".jpg")}
                    description = {props.description}
                    id = {props.id}/>
                    
            <div class="meta-data">
                <div class="left">
                  <ChannelImage
                    source = {require("./images/channels/" + props.channelThumb + ".jpg")}
                    />   
                </div>
                <div class="right">
                         <h1 class = "title">{props.title}</h1>
                <p class = "description">{props.channelName}</p>
                <p class = "description"> {props.views}</p>
                </div>          
            </div>
        </article>
    )
}

export default Card;
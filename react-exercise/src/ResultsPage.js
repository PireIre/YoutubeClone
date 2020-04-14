import React from 'react';

import './App.css';

function ResultsPage({match}) {
  const information = require('./information.json');
  const item = information[match.params.id-1];

  console.log(item);

  return(
    <body>
        <div id="root">
            <main class="App">
               <div class ="VideoPage">
                   <div class="video-container">
                   <video autoplay controls>
                       <source src ={require("./videos/" + item.media + ".mp4")} type="video/mp4"/>
                   </video>
                   </div>
                   
                    <div class ="body-container">
                        <h1 class="title" >{item.title}</h1>
                        <p class ="description">
                            {item.views} views • {item.uploadDate}
                        <hr></hr>
                        </p>
                               <div class="meta-data">
                                    <div class="left">
                                    <img class = "channel-thumb" src={require("./images/channels/" + item.channelThumb + ".jpg")} alt="Channel thumbnail"/>
                                    </div>
                                    <div class="right"> 
                                        <h1 class="title">{item.channelName}</h1>
                                        <p class ="description">{item.suscribers} subscribers </p>
                                        <p class ="description">{item.description}</p>
                                    </div>
                                </div>
                                <hr></hr>
                    
                        <a class="button" href="/">Back to home</a>
                    </div>
               </div>
            </main>
        </div>
    </body>
);
  }
  
  export default ResultsPage;
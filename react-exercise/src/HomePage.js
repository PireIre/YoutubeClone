import React from 'react';
import './App.css';

import Card from './Card.js';

function HomePage() {

    //data
    const information = require('./information.json');
    const cards = information.map((item) => 
      <Card id={item.id} title={item.title} channelName = {item.channelName} views = {item.views} channelThumb = {item.channelThumb} media = {item.media} description={item.description}/>
      ) 
     
  //render
    return (
 <body>
    <div id="root">
        <div className="HomePage">
        <header className="HomePage-header">Home Page
        </header>
             <div class="container">
                <section className="grid">
                    {cards}
                </section>
            </div>
        </div>
    </div>
</body>
    );
  }
  
  export default HomePage;
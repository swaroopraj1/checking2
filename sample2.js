import React from 'react';
           function Clock() {     
            return (
              <div>
                <h2>Current time is {new Date().toLocaleTimeString()}.</h2>
                <a href="https://google.com">Click here to Google yourself!</a>
                <h3> Page is loading.... </h3>
                <a href="http://www.addictinggames.com/">Meanwhile click here for Ultimate Fun ;) </a>
              </div>
            );   
    }
export default Clock ;
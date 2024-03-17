import './rehab.css';
import React from 'react';

function changeLink(data,num)
{
    for(var i = 0;i<data.length;i++)
    {
        if(num==data[i]['id']) {
            document.getElementById("rehab_event_info").innerHTML = data[i]['data'];
        }
    }
}

function RehabEvent() {
  return (
    <div id="rehab_event">
      <div id="home-button-main">
        <a href="home"><div id="home-button-internal"><p>Home</p></div></a>
      </div>
      <h1 id="heading" align="center">EVENTS NEAR YOU</h1>
      <div id="flexbox-container-div" class="flexbox-container">
        <div id="event_list">
            <button onClick = {() => changeLink(1)}>EVENT 1</button>
            <button onClick={() => changeLink(2)}>EVENT 2</button>
            <button onClick={() => changeLink(2)}>EVENT 3</button>
            <button onClick={() => changeLink(2)}>EVENT 4</button>
            <button onClick={() => changeLink(2)}>EVENT 5</button>
            <button onClick={() => changeLink(2)}>EVENT 6</button>
        </div>
        <div>
          <iframe id="rehab_iframe" src="https://example.com" title="example" width="750" height="460"></iframe>
        </div>
      </div>
    </div>
  );
}


export default RehabEvent;

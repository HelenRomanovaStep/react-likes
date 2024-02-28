import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './Counter.css';


function Button(props) {
   const {text, bgColor, handler} = props;   
   
  return (
     
    
    <button 
         className="button"
         style={{backgroundColor: bgColor}}
         onClick={handler}>          
      {text}  
    </button>
      
  );
}

function Counter(){
let [number,setNumber] = useState(0);

function handlerLike(event){ 
    // у event есть свойство ctrlKey=true - если зажата ctrl
    //если зажата ctrl изменения будут на 10 иначе на 1
    let delta = event.ctrlKey ? 10 : 1;
    console.log(event);
    console.log(delta);
 setNumber(number + delta)
} 
function handlerDesLike(event){ 
    //если зажата ctrl изменения будут на 10 иначе на 1
    let delta = event.ctrlKey ? 10 : 1;
    setNumber(number - delta)
}
    return(
        <div id="container">
            <div id="counter"><p style={{
                backgroundColor: number > 0 ? '#77eb9b': '#eb77cd'
            }}>{number}</p></div>
            <div id="group-buttons">
                <Button 
                    text={"Like"} 
                    bgColor={'#77eb9b'}
                    handler={(event)=>handlerLike(event)}
                />
                <Button 
                    text={"DisLike"} 
                    bgColor={'#eb77cd'}
                    handler={(event)=>handlerDesLike(event)}
                />
            </div>
        </div>
    )
}

export default Counter;

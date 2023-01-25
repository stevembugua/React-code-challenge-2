import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([])
  const [selected, setSelected] = useState([])
  useEffect(()=>{
    fetch(" https://stevembugua.github.io/stevebots.github.io/db.json")
    .then(res=>res.json())
    .then(response=>{
      setData(response)
    })
  },[])

  //delete a bot

  const deleteFromFile  = (id)=>{
    fetch("https://stevembugua.github.io/stevebots.github.io/db.json/" + id, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
         setData((prev)=> prev.filter((item)=>item.id !== id));
        // console.log(data)
      });
  }
  


  return (
    <>
    <div className="div"  onClick={() => {
             
          }}>
      <h1 style={{textAlign:"center",marginBottom:"1rem"}}>Add to your bot collection...</h1> 
      
      <div  style={{display:'flex', flexWrap:'wrap',gap:"1rem"}}>

      {
        [...new Set(selected)].map((item, index)=>(
          
          <>
          <div className="big">
            <div className="hello" key={index} onClick={()=>{
            setSelected(selected.filter((clicked)=> item.id !== clicked.id))
            }} style={{cursor:'pointer'}} >
              <div className="image">
               <img src={item.avatar_url} alt="" />
              </div>
                <h4>id :{item.id}</h4>
                <h4>NAME : {item.name}</h4>
                <h4>HEALTH : {item.health}</h4>
                <h4>ARMOR : {item.armor}</h4>
                <h4>DAMAGE : {item.damage}</h4>
                <h4>BOT-CLASS : {item.bot_class}</h4>
                {/* <h4>CATAPHRASE : {item.catchphrase}</h4> */}
                <h4>CREATED-AT : {item.created_at.split("T",1)}</h4>
                <h4>UPDATAED-AT : {item.updated_at.split("T",1)}</h4>
            </div>
            <button className='deleteBtn' onClick={()=>deleteFromFile(item.id)}>Delete</button>
            </div>
            
          </>

        ))
      }
      </div>
      <div className="bottom">Above is your bot collection army</div>
    </div>
    <div className="App">
   
      {data.map((item,key)=>(
        <>
        <div className="big">
          <div className="hello" key={key} onClick={()=>{
          setSelected((prev)=>[...prev,item])
          }} style={{cursor:'pointer'}} >
            <div className="image">
             <img src={item.avatar_url} alt="" />
            </div>
              <h4>id :{item.id}</h4>
              <h4>NAME : {item.name}</h4>
              <h4>HEALTH : {item.health}</h4>
              <h4>ARMOR : {item.armor}</h4>
              <h4>DAMAGE : {item.damage}</h4>
              <h4>BOT-CLASS : {item.bot_class}</h4>
              {/* <h4>CATAPHRASE : {item.catchphrase}</h4> */}
              <h4>CREATED-AT : {item.created_at.split("T",1)}</h4>
              <h4>UPDATAED-AT : {item.updated_at.split("T",1)}</h4>
          </div>
          <button className='deleteBtn' onClick={()=>deleteFromFile(item.id)}>Delete</button>
          </div>
          
        </>
      ))}
    </div>
    </>
  )
}


export default App;

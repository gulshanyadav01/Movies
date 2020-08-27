import  React from "react"
import  ReactDom from "react-dom";
import  Card from "./Cards"
import './index.css'

import sdata from './Sdata'
// console.log(sdata[1].sname);
import App from "./App"

// function Card(props){
//   return (
//     <>
//   <div className="cards">
//     <div className="card">
//       <img src={props.imgsrc} alt="mypic"/>
//       <div className="card_info">
//         <span className="card_title">{props.title}</span>
//         <h3>{props.sname}</h3>
//         <a 
//         href={props.link}
//         target="_blank">
//         <button>Watch Now</button>
//         </a>

//       </div>
//     </div>
//   </div>
//   </>

//   )
// }

// function ncard(val){
//   console.log(val);
//   return (
//     <Card
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
//   />

//   )

// }

ReactDom.render(
  <>

 <h1> list of top five Netflix Movies</h1>
   {/* <Card
    // imgsrc="././image/secred.jpeg"
    // title="A Netflix Original Series"
    // sname="Secred Games"
    // link="https://www.netflix.com/in/title/80125627"
    imgsrc={sdata[0].imgsrc}
    title={sdata[0].title}
    sname={sdata[0].sname}
    link={sdata[0].link}
  />
  <Card
    imgsrc={sdata[1].imgsrc}
    title={sdata[1].title}
    sname={sdata[1].sname}
    link={sdata[1].link}
  />
  <Card
    imgsrc={sdata[2].imgsrc}
    title={sdata[2].title}
    sname={sdata[2].sname}
    link={sdata[2].link}
  />
   <Card
    imgsrc={sdata[3].imgsrc}
    title={sdata[3].title}
    sname={sdata[3].sname}
    link={sdata[3].link}
  />
  <Card
    imgsrc={sdata[3].imgsrc}
    title={sdata[3].title}
    sname={sdata[3].sname}
    link={sdata[3].link}
  />  */}
  {/* {sdata.map(ncard)}; */}
  {/* {sdata.map(function ncard(val){
    return (
    <Card
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
    );

  })}; */}
  {sdata.map((val)=>{
    return (
      <Card
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />

    );
  })}
  </>,
  
  document.getElementById("root")
);
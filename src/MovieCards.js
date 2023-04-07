// import React, { useContext } from 'react';
// import {
//     Select,
//   } from "antd";
//   const { Option } = Select;

// function MovieCards() {
// //   const myContext = useContext(MyContext);
//   const data = {
//     title: "THOR",
//     desc: "Falling in love with scientist Jane Foster (Natalie Portman) teaches Thor much-needed lessons, and his new-found strength comes into play as a villain from his homeland sends dark forces toward Earth.",
//     img: "https://as2.ftcdn.net/v2/jpg/05/62/12/87/1000_F_562128745_Pt2bgKtkf0L5zbabWDeji6sGoszjFyfL.jpg",
//     isVisible: "TRUE",
//     isShortlisted: "FALSE",
//     label: "TOP 10",
//     rating: [
//       {
//         score: "7/10",
//       },
//       {
//         score: "60%",
//       },
//       {
//         score: "3/5",
//       },
//     ],
//   };
//   const changeHandler=()=>{

//   }
//   return(
//     <div>
//     <div>
//     <Select
//             placeholder="Select Option who pays"
//             labelInValue
//             style={{
//               width: 120,
//             }}
//             onChange={changeHandler}
//           >
//             <Option key="dashing" value="dashing">
//               Dashing
//             </Option>
//             <Option key="client" value="client">
//               Client
//             </Option>
//           </Select>
//     </div>
//     <div style={{border:"2px solid black"}}>
//       <div><b>Label  : {data?.label}</b></div>
//       <div>{data?.isVisible}</div>
//       <div>{data?.isShortlisted}</div>
//       <div style={{backgroundColor :"blue"}}>
//         <img src={data?.img} style={{width:"300px",height:"200px",backgroundColor :"Orange"}} alt="img"></img>
//       </div>
//       <div>{data?.title}</div>
//       <div>{data?.desc}</div>
//       {data?.rating?.map((rate) => {
//         return <div>{rate?.score}</div>;
//       })}
//       <button>Click me!</button>
//     </div>
//     </div>
//   )
//   // Rest of your component
// }
// export default MovieCards;

import PropTypes from 'prop-types';
import "../statistics/statistic.css"



import data from "../statistics/data.json";

const Statistic = () => (
  <section className="statistics">
    <h2 className="title">Upload stats</h2>

    <ul className="stat-list">
      {data.map((item) => (
        <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistic;


Statistic.propTypes = {
    item:PropTypes.string,
    id:PropTypes.string,
    label:PropTypes.string,
    percentage:PropTypes.string,
     
  }




// import data from "../statistics/data.json"

//  const Statistic = () =>{
//  return data.map((items) => {
//     return(
//      <section class="statistics"> 
//  <h2 class="title">Upload stats</h2>
//  <ul class="stat-list" key={items.id}>
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
//  </section>
//     ) 
//  }

//  )    
//  }

//  export default Statistic

















//  import data from "./statistics/data.json"

// const Statistic = () =>{
// return data.map((items) => {
//    return(
//     <section class="statistics">
// <h2 class="title">Upload stats</h2>

// <ul class="stat-list"
// key={items.id}>
//   <li class="item">
//     <span class="label">{items.label}</span>
//     <span class="percentage">4%</span>
//   </li>
//   <li class="item">
//     <span class="label">{items.label}</span>
//     <span class="percentage">14%</span>
//   </li>
//   <li class="item">
//     <span class="label">{items.label}</span>
//     <span class="percentage">41%</span>
//   </li>
//   <li class="item">
//     <span class="label">{items.label}</span>
//     <span class="percentage">12%</span>
//   </li>
// </ul>
// </section>
//    ) 
// }

// )    
// }

// export default Statistic









    

    
    
    

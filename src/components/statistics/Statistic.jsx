// import PropTypes from 'prop-types';
import Stcss from "../statistics/statistic.module.css"
import data from "../statistics/data.json";






const Statistic = ({title}) => (
  <section className={Stcss.statistics}>
    {title && <h2 className={Stcss.title}>{title}</h2>}

    <ul className={Stcss.statlist}>
      {data.map((item) => (
        <li key={item.id} className={Stcss.item}>
          <span className={Stcss.label}>{item.label}</span>
          <span className={Stcss.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistic;


// Statistic.propTypes = {
//     item:PropTypes.string,
//     id:PropTypes.string,
//     label:PropTypes.string,
//     percentage:PropTypes.string,
     
//   }





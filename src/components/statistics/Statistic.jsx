// import PropTypes from 'prop-types';
import "../statistics/statistic.css"
import data from "../statistics/data.json";






const Statistic = ({title}) => (
  <section className="statistics">
    {title && <h2 className={title}>{title}</h2>}

    <ul className="stat-list">
      {data.map((item) => (
        <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
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





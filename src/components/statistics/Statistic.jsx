import PropTypes from 'prop-types';
import stcss from "../statistics/statistic.module.css"
// import data from "../statistics/data.json";






const Statistic = ({title, stats}) => (
  <section className={stcss.statistics}>
    {title && <h2 className={stcss.title}>{title}</h2>}

    <ul className={stcss.statlist}>
      {stats.map((item) => (
        <li key={item.id} className={stcss.item}>
          <span className={stcss.label}>{item.label}</span>
          <span className={stcss.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistic;


Statistic.propTypes = {
    title:PropTypes.string,
    item:PropTypes.string,
    id:PropTypes.string,
    label:PropTypes.string,
    percentage:PropTypes.string,
     
  }





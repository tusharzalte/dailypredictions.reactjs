import { LineChart, Line, Tooltip } from "recharts";

import { data } from "./ChartData";
import styles from "./HeroChart.module.css";

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className={styles.custom_tooltip}>
        <div className={styles.flow}>
          <span className={styles.label}>average</span>
          <span className={styles.value}>{`${payload[0].value}`}</span>
        </div>
        <div className={styles.flow}>
          <span className={styles.label}>today</span>
          <span className={`${styles.value} ${styles.bold}`}>{`${payload[1].value}`}</span>
        </div>
      </div>
    );
  }

  return null;
}

const HeroChart = () => {
  return (
    <LineChart
      width={500}
      height={200}
      data={data}
      margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
    >
      <Tooltip content={<CustomTooltip />} />
      <Line type="monotone" dataKey="pv" stroke="#e11d48" />
      <Line type="monotone" dataKey="uv" stroke="#fda4af" />
    </LineChart>
  );
};

export { HeroChart };

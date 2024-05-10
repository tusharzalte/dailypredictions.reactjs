import { Link } from "react-router-dom";

import { HeroChart } from "../index";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <article className={styles.content}>
        <h1>
          Empowering Tomorrow's Decisions: Forecasting the Future of Energy Load
        </h1>

        <p>
          Trust us to illuminate the path forward in the ever-evolving landscape
          of energy consumption. Step into a brighter, sustainable energy future
          with our forecasting services.
        </p>

        <Link
          to="/dashboard"
          className={`button btn-solid-primary ${styles.btnHero}`}
        >
          Cast Now
        </Link>
      </article>

      <div class="pt-3 sm:col-span-2 xl:pt-3">
        <div class="rounded-xl border bg-card text-card-foreground shadow">
          <div class="flex flex-col space-y-1.5 p-6">
            <h2 class="text-xl font-semibold leading-none tracking-tight">
              Load Forecast
            </h2>
            <HeroChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };

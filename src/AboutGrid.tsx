import styles from "./AboutGrid.module.sass";
import SurisSplashScreen from "./assets/Suris_splash_screen.png";

export default function AboutGrid() {
  return (
    <div className={styles.parent}>
      <div className={styles.aboutgraphic}>
        <img src={SurisSplashScreen} />
      </div>
      <div className={styles.abouttext}>
        <h1>About Me</h1>
        <p>
          Heya! My name is Suris. I cover politics, philosophy, and gaming
          stuff!
        </p>
        <p>
          I know it sounds like an eclectic mix, but one night I'll be at a
          protest, another night I'll be playing Magic the Gathering! I do a lot
          on this wierd world wide web we've found ourselves on, so consider
          supporting my work, or at least checking out the channel!
        </p>
      </div>
    </div>
  );
}

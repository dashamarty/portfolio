import { CameraFrameVideo } from "../cameraFrameVideo/cameraFrameVideo";
import { Pattern } from "../pattern/pattern";
import styles from "./greetingBlock.module.scss";

export const GreetingBlock = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <CameraFrameVideo />
        <Pattern />
      </div>

      <div className={styles.text}>
        <h1 className={styles.title}>Nice to Meet YOU</h1>
        <p className={styles.description}>
          I’m a graphic designer based in Copenhagen, Denmark. I specialize in
          full-cycle design, focusing on brand identity and marketing materials,
          including content for social media.My goal is to create designs that
          not only solve immediate challenges but also build a strong foundation
          for a company’s future style and positioning. Let’s connect and
          discuss your project!
        </p>
      </div>
    </section>
  );
};

import Image from "next/image";
import styles from "./hero-shield.module.css";

export function HeroShield() {
  return (
    <div aria-hidden="true" className={styles.stage}>
      <div className={styles.halo} />
      <Image
        src="/hero-shield.webp"
        alt=""
        width={760}
        height={946}
        sizes="(max-width: 767px) 220px, 310px"
        className={styles.shield}
      />
    </div>
  );
}

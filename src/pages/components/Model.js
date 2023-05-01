import styles from "@/styles/Model.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Model() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    document
      .querySelector(".popup-btn")
      .addEventListener("click", () => [setIsModelOpen(!isModelOpen)]);
  }, [isModelOpen]);

  return (
    <div className={`${styles.model} ${isModelOpen ? styles.show : ""}`}>
      <div className={styles.content}>
        <h1>Create A New Meeting</h1>
        <p>This is the content of the model.</p>
        <form>
          <input type="text" placeholder="Enter Your User Name..." />
          <input type="text" placeholder="Enter Room ID To Join..." />
          <button type="submit">Join Room</button>
          <p className={styles.or}>OR</p>
          <button type="submit">Create New Room</button>
        </form>
      </div>

      <div className={styles.bg}>
      <Image
          className={styles.plants}
          src="/createMeet.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </div>
  );
}

import styles from "@/styles/Model.module.css";
import { useEffect, useState } from "react";

export default function Model() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    document.querySelector(".popup-btn").addEventListener("click", () => [
      setIsModelOpen(!isModelOpen)
    ])
  }, [isModelOpen])

  return (
    <div className={`${styles.model} ${isModelOpen ? styles.show : ""}`}>
      <div className={styles.content}>
        <h1>Create A New Meeting</h1>
        <p>This is the content of the model.</p>
      </div>
    </div>
  );
}
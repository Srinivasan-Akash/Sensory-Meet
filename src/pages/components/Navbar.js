import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <h2>LOGO</h2>
        <div className={styles.btns}>
          <button className="popup-btn">Create/Join Room</button>
        </div>
    </nav>
  )
}

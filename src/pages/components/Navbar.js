import styles from "@/styles/Navbar.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <h2>LOGO</h2>
        <ul>
            <li>Feedback</li>
            <li>Settings</li>
            <li>Support</li>
            <li>Developers</li>
        </ul>
    </nav>
  )
}

import { useState } from "react"
import EnvVariables from "../components/EnvVariables"
import reactLogo from "../assets/react.svg"
import viteLogo from "/vite.svg"
import styles from "./home.module.scss"

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles.logoReact}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React + TypeScript</h1>
      <br />
      <EnvVariables />
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home
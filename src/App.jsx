import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Plus } from 'react-feather'
import styles from './styles/pages/home.modules.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className={styles.container}>
        <header className={styles.header}> Minhas tarefas</header>
        <button className={styles.addTaskButton}>Adicionar uma nova tarefa <Plus/></button>
      </section>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import { Plus } from 'react-feather'
import styles from './styles/pages/home.module.css'
import { Task } from './components/Task/index';
import { CreateTaskModal } from './components/CreateTaskModal/index';
import Modal from "react-modal"

Modal.setAppElement("#root");


function App() {
  const isCreateTaskModalOpen = false;

  return (
    <div className="App">
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>Minhas tarefas</h1> 
        <button className={styles.addTaskButton}>Adicionar uma nova tarefa 
        <Plus/>
        </button>
        </header>
        <div className={styles.tasks}>
        <Task />
        </div>
      </section>

      <CreateTaskModal isOpen={isCreateTaskModalOpen}/>
    </div>
  )
}

export default App



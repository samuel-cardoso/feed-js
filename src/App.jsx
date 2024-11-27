import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Samuel Cardoso da Silva"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, libero eget ultricies elementum, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, libero eget ultricies elementum."
          />
          <Post 
            author="Samuel Cardoso da Silva"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, libero eget ultricies elementum, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, libero eget ultricies elementum."
          />
        </main>
      </div>
    </div>
  )
}

export default App

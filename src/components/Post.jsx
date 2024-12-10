import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'; 

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/samuel-cardoso.png" />
                    <div className={styles.authorInfo}>
                        <strong>Samuel Cardoso da Silva</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="26 de Novembro às 21:30h" dateTime='2024-11-26 21:31:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p><a href='#'>jane.design/doctorcare</a></p>
                    <p>
                        <a href='#'>#novoprojeto</a>{' '}
                        <a href="">#nlw</a>{' '}
                        <a href="">#rocketseat</a>
                    </p>
                </p>
            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea 
                    placeholder="Deixe um comentário"    
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}
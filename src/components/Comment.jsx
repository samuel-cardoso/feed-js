import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/samuel-cardoso.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>        
                        <div className={styles.authorAndTime}>
                            <strong>Samuel Cardoso da Silva </strong>
                            <time title="26 de Novembro às 21:30h" dateTime='2024-11-26 21:31:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        Muito bom Devon, parabéns!! 👏👏
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp /> 
                        Apladir <span>20</span>
                    </button>
                </footer>

            </div>

         </div>
    )
}

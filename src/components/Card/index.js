import styles from "./Card.module.css";

function Card({ id }) {
    return(
        <section className={styles.card}>
            <a 
                href={`https://youtu.be/${id}?si=iuqriztlpHPHe1Gz`}
                rel="noopener noreferrer"
                target="_blank">
                <img 
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt="Thumbnail of the video" />
            </a>
        </section>
    )
}

export default Card;
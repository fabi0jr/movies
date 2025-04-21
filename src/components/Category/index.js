import styles from './Category.module.css'; // Ensure the file exists and is correctly named
import videos from '../../json/db.json'; // Ensure the path is correct and the file exists

export const categories = [
    "Ação",
    "Aventura",
    "Comédia",
    "Drama",
    "Ficção Científica",
    "Terror",
    "Romance",
    "Animação",
    "Documentário",
    "Fantasia",
    "Mistério",
]

export function filterCategory(id){
  return videos.filter( video => video.category === categories[id])
}

function Category({ category, children }) {
    return(
        <section className={styles.category}> {/* Ensure 'category' is defined in Category.module.css */}
            <h2>{category}</h2>
            <div>
                {children}
            </div>
        </section>

    )
}

export default Category;
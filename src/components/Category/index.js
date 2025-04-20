import styles from './Category.module.css'; // Ensure the file exists and is correctly named

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
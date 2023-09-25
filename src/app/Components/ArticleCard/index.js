"use client";

import styles from "./ArticleCard.module.css";
const ArticleCard = ({date, description, title, imageSrc, imageAlt, link}) => {
    return (
        <div className={styles.ArticleCard}>
             <div className={styles.ArticleCardImage}>
        <img src={imageSrc} alt={imageAlt}/>
        </div>
        <div className={styles.ArticleCardCont}>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
        </div>
        </div>

    );
};

export default ArticleCard;
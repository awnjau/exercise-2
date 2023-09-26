"use client";

import Link from "next/link";
import styles from "./ArticleCard.module.css";
const ArticleCard = ({date, description, id, title, imageSrc, imageAlt, link}) => {
    return (
        <div className={styles.ArticleCard}>
             <div className={styles.ArticleCardImage}>
        <img src={imageSrc} alt={imageAlt}/>
        </div>
        <div className={styles.ArticleCardCont}>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
            <p><Link href={`article/${id}`}>Read More</Link></p>
        </div>
        </div>

    );
};

export default ArticleCard;
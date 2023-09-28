import { useRouter } from "next/router";
import Data from "../../app/Components/data";
import styles from "../../app/page.module.css"; 
import  "../../app/globals.css"

export default function Article () {
    const router = useRouter ();
    const slug = router.query.slug;

    const articleData = Data.find((val) => val.id === slug);

    if(!articleData) return null;

    return (
        <main className={styles.page}>

            <div className={styles.articleHeader} style={ {backgroundImage:`url('${articleData.image.url}')`} }>
            <h1>Article</h1>
            <p>{articleData.title}</p>
            <p>{new Date (articleData.publishedDate).toDateString()}</p>
            <p>{articleData.blurb}</p>
            </div>

            <div className = {styles.inner}>
              {articleData.articleText.map(
                
                (textChunk) => {
                    switch(textChunk.type){
                        case 'p': 
                            return <p>{textChunk.data}</p>
                        case 'h2':
                            return <h2>{textChunk.data}</h2>
                        case 'h3':
                            return <h3>{textChunk.data}</h3>
                        default:
                            return <p>{textChunk.data}</p>
                    }
                 })}
            </div>
        </main>
    );
} 



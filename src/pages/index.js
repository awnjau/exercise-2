import styles from '../app/page.module.css';
import Data from '../app/Components/data';
import ArticleCard from '../app/Components/ArticleCard'; 

export default function Home() {
  const projectName = "Exercise Two: Articles"

  console.log(Data)
  return (
    <main className = {styles.main} >
        <h1>{projectName}</h1>
        {Data.map((article) => (
        <ArticleCard
          key={article.id}
          date={new Date (article.publishedDate).toDateString()}
          description={article.blurb}
          id={article.id}
          imageAlt={article.image.alt}
          imageSrc={article.image.url}
          title={article.title}
          />
  ))}
    </main>
);
 }

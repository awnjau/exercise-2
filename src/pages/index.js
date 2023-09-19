import styles from '../app/page.module.css';
import Data from '../app/Components/data';
import ArticleCard from '../app/Components/ArticleCard'; 

export default function Home() {
  const projectName = "Exercise Two"

  console.log(Data)
  return (
    <main>
        <h1>{projectName}</h1>
        <ArticleCard title="cool title" description='cool description'/>
        <ArticleCard title="another title"/>
        <ArticleCard/>
    </main>
  )
}

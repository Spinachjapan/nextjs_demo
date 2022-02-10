import Template from "../components/Template"
import { server } from "../config";
import ArticleTemplate from "../components/ArticleTemplate";




export async function getServerSideProps(context) {
 
    const articleId = context.query.article_id;

    const response = await fetch (server + '/api/select article_id,  content, username, articles.account_id from articles inner join accounts on articles.account_id = accounts.account_id where article_id = ' + articleId + ';')
  


    return {
      props: {
        article_info: await response.json(),
        
      }
    }
  }



export default function Article(props) {

    




    return <Template>{ArticleTemplate(props.article_info[0])}</Template>

   

}
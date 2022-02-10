import Link from "next/link";
import { server } from "../config";



const each_article_style = {
  borderTop: "solid",
  borderWidth: "1px",
  borderColor: "darkgray",
  padding: 15,
  fontSize: 18,
  width: "85%"

}


const each_article = (article) =>
{
  return (<Link href={{ pathname: '/article', query: { article_id: article.article_id } }}>
  
  <table align="center" style={each_article_style}>
<tbody>
<tr align="right">{article.username}</tr>
<tr align="left" style={{wordBreak: "break-word"}}>{article.content}</tr>
</tbody>
  </table></Link>)

}










export default async function ListUpArticles() {


  


  const res = await fetch(server + '/api/SELECT content, article_id, username  FROM articles inner join accounts on articles.account_id = accounts.account_id;')

  const info = await res.json()



  


 



  
 








  
  return <div style={{marginTop: 50, marginBottom: 50}} className="center" >{info.map((value, index) => (
    <div key={index}>
   {each_article(value)}


 </div>
  ))
  }
  
  </div>

  
 

  
  
  }
  
  
  
  
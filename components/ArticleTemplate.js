import { useSession} from "next-auth/react"
import { server } from "../config";
import { useRouter } from 'next/router';




const ArticleTemplate = (article) =>
{
  const { data: session } = useSession()


  const router = useRouter();

  let delete_button = null



  const  delete_article = async () =>
  {

  
    
      const res = await fetch(server + '/api/delete from articles where article_id = "' + article.article_id + '";')
      
      router.push('/');

      


  }






  if (session && session.user.email === article.account_id)
  {
    delete_button = <button onClick={delete_article} style={{fontSize: 20, backgroundColor: "red", color: "white"}}>delete</button>
  }





















  return (<table align="center" style={{width: "50%", marginTop: 20, padding: 15, wordBreak: "break-word"}}>

<tbody>
    <tr align="right">{article.username}</tr>
    <div style={{marginTop: 20}}>
    <tr align="left">{article.content}</tr>
    </div>
<tr align="center">
<div style={{marginTop: 30}}>
{delete_button}
</div>
</tr>
</tbody>
  </table>)

}

export default ArticleTemplate



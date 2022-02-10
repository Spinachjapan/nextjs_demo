import Template from "../components/Template"
import { useSession} from "next-auth/react"
import { server } from "../config";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import styles from "../styles/PostPage.module.css"


function file_get_contents(filename) {
  fetch(filename).then((resp) => resp.text()).then(function(data) {
      return data;
  });
}


export default function PostArticle() {

    const [content, setContent] = useState(null)




const router = useRouter();
const { data: session } = useSession()

    const  post_article = async () =>
    {

   
    
      
        const res = await fetch(server + '/api/INSERT INTO articles (content, account_id) VALUES ("' + content + '", "' + session.user.email + '")')
        
        router.push('/');

        


    }


    useEffect(() => {

  
        if (!session)
        {
        
          router.push('/');
        }
         }, [])


     

         const post_button = <input className={styles.post_button} onClick={()=> post_article()} type="button" value="POST"/>


          

      
           
     



     



        const main = <table align="center"><tbody>
        <tr align = "left" style={{fontSize: 25}}><td colSpan="2">Input something:</td></tr><tr align="left"><td colSpan="2"><textarea className={styles.intro} onChange={(event)=>setContent(event.target.value)} rows="8"></textarea></td></tr></tbody></table>

       

         








      const output = (<div className="center" style={{marginTop: 30}}>{main}{post_button}</div>)




  
    
    return (
      <Template>{output}</Template>
    )



  

}
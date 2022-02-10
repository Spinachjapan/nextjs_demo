import Template from "../components/Template"
import { useSession, signIn, signOut } from "next-auth/react"
import { useState, useEffect } from "react";
import Post from "../components/PostButton";
import CheckEmail from "../functions/CheckEmail";
import ListUpArticles from "../functions/ListUpArticles";




export default function Component() {



  const { data: session } = useSession()

  const [articles, setArticles] = useState([])





     if(session) {

      CheckEmail(session.user.email)

     }


   
      
    
  

      useEffect(() => { 
    
        ListUpArticles().then(result=>{
          
      
          setArticles(result)
          
          }
            
          )
        
           }, [])
          












  


    return <Template>{articles}{Post()}</Template>

   

}
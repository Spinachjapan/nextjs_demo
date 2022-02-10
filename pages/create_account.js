import Template from "../components/Template"
import { useSession} from "next-auth/react"
import { server } from "../config";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';







export default function CreateAccount() {




    const [newUsername, setNewUsername] = useState(null)

    const [usernameError, setUsernameError] = useState(null)

    const { data: session } = useSession()

    const check_username_query = async (username) => {

      const res = await fetch(server + '/api/SELECT account_id FROM accounts WHERE username="' + username + '" LIMIT 1;')
    
      const info = await res.json()

      const router = useRouter();
      
      if (info.length === 1)
      {

        setUsernameError("This username has been used already.")
        setNewUsername(null)
        
 
      }
      else
      {
         
        setUsernameError(null)
        setNewUsername(username)
      }
    
    }


    const insert_new_account = async () =>
    {

      const res = await fetch(server + '/api/INSERT INTO accounts (username, account_id) VALUES ("' + newUsername + '", "' + session.user.email + '")')
   
      router.push('/');
    }







    const  check_username = async (event) => {



         
        let new_username = event.target.value;     
        
        if (new_username.length < 7)
        {
          
            setUsernameError("User name must be more than 7 letters.");
            setNewUsername(null)
            
        }
        else if (new_username.match(/\W/))
        {

          setUsernameError("You can use a ~ z, 0 ~ 9 and Underscore(_).");
          setNewUsername(null)


        }
        else
        {

          check_username_query(new_username)
           

    }
      

      }


      let finalUsername = null

      if (usernameError == null && newUsername != null)
      {
        finalUsername = <input type="button" value="create" onClick={()=> insert_new_account()}/>


      }










      const output = (<div className="center" style={{marginTop: 30}}>create username:<br/>
      <input onChange={check_username} maxLength={20} type="text" style={{marginTop: 30}} /><br/>{usernameError}{finalUsername}</div>)





  const router = useRouter();

useEffect(() => {

  
if (!session)
{

  router.push('/');
}
 }, [])




  
    
    return (
      <Template>{output}</Template>
    )



  

}
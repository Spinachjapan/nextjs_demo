import { server } from "../config";
import { useRouter } from 'next/router';



export default async function CheckEmail(email) {


  const router = useRouter();



  const res = await fetch(server + '/api/SELECT account_id FROM accounts WHERE account_id="' + email + '" LIMIT 1;')     
  
  const info = await res.json()


 if (info.length === 0)
    {
       
  router.push('/create_account');
   
    }

  
  
  }
  
  
  
  
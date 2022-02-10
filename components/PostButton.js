import Link from 'next/link';
import { useSession} from "next-auth/react"









const PostButton = () => {

    const { data: session } = useSession()

    if (session)
    {
      return (<div className="right" style={{paddingRight: "50px"}}><Link style = {{textDecoration: "none"}} href="/post_article">POST ARTICLE</Link></div>)  
    }
    
 

}

export default PostButton
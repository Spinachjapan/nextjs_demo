import styles from "../styles/Template.module.css"
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"








const Template = ({children}) => {
    const { data: session } = useSession()





    
    let login_state = <a onClick={() => signIn()} className={styles.a}> LOG IN</a>

              if(session) {
                
        
             login_state = <a onClick={() => signOut()} className={styles.a}> LOG OUT</a>
            }



  



  return (
    <div>


      <body className={styles.body}>


    <header className={styles.header}>



      <div className={styles.logo}>
      <Link href="/"><a href="#" className = {styles.a} >Next.js Demo</a></Link>
      </div>




      <div className={styles.hamburger}>
          <div className={styles.icon}>
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>



    



      <nav className={styles.nav}> 
        <ul className={styles.ul}>
  
          <li><Link href="#">{login_state}</Link></li>
          <li><Link href="/"><a href="#" className = {styles.a} >HOME</a></Link></li>
          
        </ul>
      </nav>



    </header>

    <div className={styles.content}>
{children}
    </div>


<div className="center">
<button onClick={() => scrollTo(0, 0)} className={styles.topButton}>
▲TOP
</button>
</div>



    

  </body>
      

      
    


    </div>
  )
}

export default Template
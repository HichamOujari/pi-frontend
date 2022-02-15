import Head from 'next/head'
import styles from '../../styles/Auth.module.css'
import Link from "next/link";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Authentification - SignIn</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.png" />
        
      </Head>

      <div className={styles.SignIncontent}>
        <div className={styles.leftSide}>
            <img className={styles.logo} src="/logo.png" alt=""/>
            <p className={styles.title}>Sign in to your account</p>
            <div className={styles.usingGoogle}>
                <p className={styles.soustitle}>Sign in with</p>
                <div className={styles.loginGoogle}>
                    <i className="bi bi-google"></i>
                    <p>Sign in with Google</p>
                </div>
            </div>
            <div className={styles.otherr}>
                <div className={styles.first}></div>
                <div className={styles.second}>Or continue with</div>
                <div className={styles.third}></div>
            </div>
            <form action="/admin/" className={styles.form_}>
                <div className={styles.groupInput}>
                    <p>Email address :</p>
                    <input type="text" />
                </div>
                <div className={styles.groupInput}>
                    <p>Password :</p>
                    <input type="password" />
                </div>
                <div className={styles.forgetPassword}>
                    <Link href="/authentification/forget">Forget your password?</Link>
                </div>
                <div className={styles.btnsubmit}>
                    <button>Sign In</button>
                </div>
            </form>
            <div className={styles.dontHaveAccount}>
                <p>You do not have any account?</p>
                <Link href="/authentification/sign-up">Sign Up</Link>
            </div>
        </div>
        <img className={styles.rightSide} src="/images/background.png" alt="" />
      </div>


    </div>
  )
}

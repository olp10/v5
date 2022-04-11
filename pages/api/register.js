import Link from 'next/link';
import styles from '../src/login/Login.module.scss';

export default function Login() {
  return (
    <>
      <main className={styles.link}>
        <h1>Innskráning</h1>

        <form action="/api/register" method="post" className={styles.form}>
          <label htmlFor="username">Notendanafn</label>
          <input type="text" id="username" name="username"></input>
          <label htmlFor="password">Lykilorð</label>
          <input type="password" id="password" name="password"></input>
          <button className={styles.registerButton} type="submit">Innskrá</button>
        </form>

        <hr/>
        <Link href="/">Forsíða</Link><br/>
        <Link href="/login">Innskráning</Link><br />
        <Link href="/register">Nýskráning</Link>
      </main>
      {console.log('testing >> ')}
    </>
  )
}
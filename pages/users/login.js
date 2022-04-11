import Link from 'next/link';
import styles from '../../src/login/Login.module.scss';

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }


    const JSONdata = JSON.stringify(data);

    const endpoint = 'https://vef2-20222-v3-synilausn.herokuapp.com/users/login';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options);

    const result = await response.json();
    console.log('result :>> ', result.user.name);

    return (
      '/'
    )
  }

  return (
    <>
      <main className={styles.link}>
        <h1>Innskráning</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="username">Notendanafn</label>
          <input type="text" id="username" name="username"></input>
          <label htmlFor="password">Lykilorð</label>
          <input type="password" id="password" name="password"></input>
          <button className={styles.registerButton} type="submit">Innskrá</button>
        </form>

        <hr/>
        <Link href="/">Forsíða</Link><br/>
        <Link href="/users/login">Innskráning</Link><br />
        <Link href="/users/register">Nýskráning</Link>
      </main>
    </>
  )
}
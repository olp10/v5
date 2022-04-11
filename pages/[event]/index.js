import Head from 'next/head';
import Link from 'next/link';
import styles from '../../src/event/Event.module.scss';

export default function Event(props) {
  console.log('props.data :>> ', props.name);
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      

      <main className={styles.event}>
        <h1>{props.name}</h1>
        <h3>{props.description}</h3>
        <h3>Skráningar:</h3>
        {props.registrations.map((item, i) => {
          const username = item?.name;
          const comment = item?.comment;

          return (
            <li key={i}>
              <p><strong>{username}</strong></p>
              <p><i>{comment}</i></p>
            </li>
          )
        })}
       <h3>Skráðu þig inn til að skrá þig á viðburðinn</h3> 

      <Link href="/">Til baka</Link>
      <hr />
      <Link href="/">Forsíða</Link><br/>
      <Link href="/login">Innskráning</Link><br />
      <Link href="/register">Nýskráning</Link>
      </main>

      
    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.event;
  
  const response = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/${id}`);
  const data = await response.json();

  
  if (!response) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
      name: data.name,
      description: data.description,
      registrations: data.registrations,
    },
  }
}

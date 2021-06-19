import Head from 'next/head'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Posts( props ) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Users</h1>
      <ul>
          {props.users.map((user) => {
              return(
                <li>
                      <Link href={`/users/${user.id}`}>
                          <a>{user.id} {user.name}</a>
                      </Link>
                </li>
              )
          })}
      </ul>

      <Link href={`/`}>
          <a>Back</a>
    </Link>

      
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json();
    return { props: { users } };
}

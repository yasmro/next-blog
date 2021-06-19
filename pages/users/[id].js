import Head from 'next/head'
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostDetail( props ) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>User #{props.user.id}</h1>
      <h2>{props.user.name}</h2>

      <h3>Related Posts</h3>
      <ul>
          {props.posts.map((post) => {
              return(
                <li>
                      <Link href={`/posts/${post.id}`}>
                          <a>{post.id} {post.title}</a>
                      </Link>
                </li>
              )
          })}
      </ul>

      <Link href={`/users`}>
        <a>To Users</a>
      </Link>
      
    </div>
  )
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    const res2 = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`);
    const posts = await res2.json();

    return { props: { user:user, posts: posts  } };
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  const paths = users.map((user) => `/users/${user.id}`);
  return {
    paths,
    fallback: false,
  };
}
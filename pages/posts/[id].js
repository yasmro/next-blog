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

      <p>Post #{props.post.id}</p>
      <h1 className="text-3xl md:text-6xl">{props.post.title}</h1>
      <p>{props.post.body}</p>
      <div className="flex justify-start ">
      <div>1</div>
      <div>2</div>
      <div>3</div>
</div>

      <h2>Comments</h2>
      <div>
        {
          props.comments.map((comment) => {
            return(
              <div>
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
              </div>
            )
          })
        }
      </div>

      ​<Link href={`/posts`}>
          <div class="mt-2">
              <a href="#" class="no-underline mr-4 text-blue-500 hover:text-blue-400">Back to Posts</a>
          </div>
      </Link>
      
    </div>
  )
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();

    const res2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
    const comments = await res2.json();

    // const res3 = await fetch(`/api/hello`);
    // const hello = await res3.json();

    return { props: { post:post, comments:comments, } };
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const paths = posts.map((post) => `/posts/${post.id}`);
  return {
    paths,
    fallback: false,
  };
}
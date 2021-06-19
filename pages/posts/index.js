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

      <h1 className="text-6xl">Posts</h1>
      <div className="grid grid-flow-row md:grid-cols-3 gap-4">
          {props.posts.map((post) => {
              return(
                    
                          <div class="p-4 bg-white">
                            <div class="text-left">
                                <h3 class="mb-2 text-gray-700">{post.id} {post.title}</h3>
                                <p class="text-grey-600 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                            </div>
                            ​<Link href={`/posts/${post.id}`}>
                                <div class="mt-2">
                                    <a href="#" class="no-underline mr-4 text-blue-500 hover:text-blue-400">Detail</a>
                                </div>
                            </Link>
                        </div>
                    
              )
          })}
      </div>

      <Link href={`/`}>
          <a>Back</a>
    </Link>

      
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    return { props: { posts } };
}

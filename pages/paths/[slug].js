// pages/[slug].js

import { useRouter } from "next/router";

// Render the component with the fetched data
export default function Post({ post }) {
  const router = useRouter();

  // Display a loading state if the data is not yet available
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <br />
        <p>{post.body}</p>
      </div>
    </>
  );
}

// Define the paths for the dynamic routes
export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map((post) => ({
    params: {
      slug: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  // Fetch data from an API or database using the slug parameter
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const post = await data.json();

  // Pass the data as props to the component
  return {
    props: { post },
  };
}

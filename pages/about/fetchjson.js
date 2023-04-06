// import React, { useState, useEffect } from "react";

// import { GetStaticProps } from "next";
export default function MyComponent({ post }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const data = await response.json();
  //     setData(data);
  //     console.log(data);
  //   }
  //   fetchData();
  // }, []);
  console.log(post);

  return (
    <div>
      <h1>fetching data</h1>
      {/* <div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <br />
            <p>{item.id}</p>
          </div>
        ))}
      </div> */}
      <div>
        <h1>Data:</h1>
        <div>
          {post.map((item) => (
            <div key={item.id}>
              <h2>{item.id}</h2>
              <h3>{item.title}</h3>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from an API or database

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  // Pass the data to the page component as props
  return {
    props: {
      post: data,
    },
  };
}

import client from "../../util/utils";

export async function getStaticProps() {
  const entries = await client.getEntries({
    content_type: "signUp",
  });
  console.log("entries", entries);
  console.log("items", JSON.stringify(entries.items, null, 2));

  return {
    props: {
      items: entries.items,
    },
    revalidate: 3600,
  };
}

const Contentfull = ({ items }) => {
  return (
    <div>
      <h1> entries</h1>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <h2>{item.fields.shortMessage}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contentfull;

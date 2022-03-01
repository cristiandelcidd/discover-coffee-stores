import Head from "next/head";
import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>{id}</title>
      </Head>
      <h1>Page {id}</h1>;
    </div>
  );
};

export default DynamicRoute;

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div>
      <Head>
        <title>{id}</title>
      </Head>
      Coffee Store Page ID: {id}
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;

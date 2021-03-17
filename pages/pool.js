import Layout from "../components/layout";
import Link from "next/link";

const PoolLink = () => {
  return (
    <>
      <Layout>
        <Link href="/wallet">
          <button>Back</button>
        </Link>

        <h1>Link Wallet to PoolTogether</h1>

        <p>
          We'll purchase some USDC soon so that we can join a PoolTogether Pool,
          but first we need a way to store the USDC and get it to the pool.
          That's where the wallet comes in.
        </p>

        <p>
          Once we have a wallet, we can purchase USDC with a credit/debit card
          or Apple/Google pay.
        </p>

        <p>
          The wallet will live on your smart phone, and stores your Crypto
          Currency in a secure manner.
        </p>

        <ol>
          <li>Download the Argent Wallet app on your phone.</li>

          <li>
            Buy some USDC (throw some screenshots in here what that looks like)
          </li>
        </ol>

        <h3>Great Job! 🤜🤛</h3>

        <p>
          Now that we have some USDC in our wallet, lets link up to PoolTogether
          and get some tickets!
        </p>

        <Link href="/pool">
          <button>Transfer to Pool</button>
        </Link>
      </Layout>

      <style jsx global>{`
      `}</style>
    </>
  );
};

export default PoolLink;

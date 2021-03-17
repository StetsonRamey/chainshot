import Layout from "../components/layout";
import Link from "next/link";

const Wallet = () => {
  return (
    <>
      <Layout>
        <Link href="/">
          <button>Back</button>
        </Link>

        <h1>Download the Argent Wallet</h1>

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

          <div className="badge_container">
            <a href="https://apps.apple.com/us/app/argent/id1358741926">
              <div className="apple_badge">
                <img
                  src="/app_store_badge.svg"
                  alt="Download on the App Store"
                />
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=im.argent.contractwalletclient&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <div className="google_badge">
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </div>
            </a>
          </div>

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
        .badge_container {
          margin: 2rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .apple_badge {
          width: 130px;
          height: 61px;
        }

        .google_badge {
          width: 210px;
          height: 61px;
        }

        img {
          object-fit: contain;
          height: 61px;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Wallet;

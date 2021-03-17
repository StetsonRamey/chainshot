import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Link from 'next/link'

const Home = () => {
  const user = useUser()

  return (
    <Layout>
      <h1>Welcome! 👋</h1>

      <p>This short tutorial will guide your through:</p>

      <ol>
        <li>Getting a wallet and buying some USDC</li>
        <li>Connecting that wallet to Pool Together</li>
        <li>Buying tickets in the Pool Tegther USDC pool so you can win awesome prizes 🥇</li>
      </ol>

      <h2>Lets get to it</h2>

      <p>Step 1. get a wallet and buy USDC</p>
      <Link href="/wallet">
        <button>Let's Go</button>
      </Link>


{/* stuff from nextJS / magic to show the user */}
      {/* {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )} */}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </Layout>
  )
}

export default Home

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>✨ pongdang의 프로젝트</title>
        <meta name='description' content='pongdang의 프로젝트 모음 사이트 입니다' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href='/blog'>
              <a>/blog</a>
            </Link>
          </li>
          <li>
            <Link href='/diary'>
              <a>/diary</a>
            </Link>
          </li>
        </ul>
        <style jsx>{`
          nav {
            max-width: 1200px;
            margin: 0 auto;
          }

          ul {
            list-style: none;
            padding: 0;
          }

          li {
            border: 1px solid;
            border-radius: 5px;
            text-align: center;
          }

          li + li {
            margin-top: 1rem;
          }

          a {
            display: block;
            color: #000;
            padding: 20px;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Home;

/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>✨ pongdang의 프로젝트</title>
        <meta name='description' content='pongdang의 프로젝트 모음 사이트 입니다' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Section>
        <h1
          css={css`
            word-break: keep-all;
          `}
        >
          ✨ 안녕하세요!
        </h1>
        <p
          css={css`
            margin-bottom: 50px;
            font-weight: 500;
            word-break: keep-all;
          `}
        >
          저의 개인 프로젝트들을 확인해보세요!
        </p>
        <Nav>
          <ul>
            <li>
              <Link href='/blog'>
                <a>
                  <LinkTitle>/blog</LinkTitle>
                  <LinkContent>React로 구현한 블로그 입니다.</LinkContent>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/diary'>
                <a>
                  <LinkTitle>/diary</LinkTitle>
                  <LinkContent>Next.js로 구현한 다이어리 입니다.</LinkContent>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/vanilla-blog'>
                <a>
                  <LinkTitle>/vanilla-blog</LinkTitle>
                  <LinkContent>Vanilla Javascript로 구현한 블로그 입니다.</LinkContent>
                </a>
              </Link>
            </li>
          </ul>
        </Nav>
      </Section>
    </>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  letter-spacing: 0.3px;
  padding: 20px;
`;

const Nav = styled.nav`
  @media screen and (max-width: 300px) {
    a {
      padding: 20px;
    }
  }

  ul {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    gap: 26px;
  }

  li {
    border-radius: 5px;
    text-align: center;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 14%), 0px 1px 2px rgb(0 0 0 / 24%);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;

    &:hover {
      box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

      p:first-of-type {
        color: #0071ff;
      }
    }
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    width: 100%;
    height: 100%;
    color: #000;
    word-break: keep-all;
    text-align: start;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      background-color: #f4f4f4;
    }
  }
`;

const LinkTitle = styled.p`
  font-size: 1.3rem;
  &::after {
    content: "→";
    margin-left: 10px;
  }
`;

const LinkContent = styled.p`
  font-weight: 500;
`;

export default Home;

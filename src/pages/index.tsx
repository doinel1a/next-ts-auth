/* eslint-disable unicorn/no-nested-ternary */
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

import Button from '@/components/button';
import Counter from '@/components/counter';
import GithubCorner from '@/components/github-corner';
import MetaHead from '@/components/meta-head';
import Nav from '@/components/nav';

export default function Home() {
  const { data, status } = useSession();

  return (
    <>
      <MetaHead
        title='NextTS — Starter'
        description='Start a NextJS Web App, SPA, website or landing page using TypeScript, Tailwind CSS, ESLint, Husky, Vercel and much more, in JUST 30 seconds, without the hassle of setting up your dev environment.'
        keywords='typescript, ts, react-typescript, react-ts, react, template, boilerplate, next-js, nextjs, vercel, tailwind, tailwindcss, sass, scss, css, github'
      />

      <Nav />
      <main className='flex h-screen flex-col items-center justify-center bg-primary text-color'>
        <GithubCorner
          title='Get started on GitHub'
          url='https://github.com/doinel1a/next-ts-starter'
        />
        {status === 'loading' ? (
          <h1 className='text-2xl'>Loading . . . </h1>
        ) : status === 'unauthenticated' ? (
          <Button text='Login' onClick={() => signIn()} />
        ) : (
          <div className='flex flex-col gap-y-4'>
            <h1 className='text-center text-2xl'>
              Logged in as: {data?.user?.name}
            </h1>

            <Counter />
            <Button text='Logout' onClick={() => signOut()} />
          </div>
        )}
      </main>
    </>
  );
}

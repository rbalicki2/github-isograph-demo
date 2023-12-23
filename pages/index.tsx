import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={`${styles.main} ${inter.className}`}> */}
      <Main />
      {/* </main> */}
    </>
  );
}

import { useSession, signIn, signOut } from "next-auth/react";

function Main() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Github OAuth Demo</h1>

      {session == undefined ? (
        <>
          <button onClick={() => signIn("github")}>Sign in with Github</button>
        </>
      ) : (
        <>
          <p>
            Not {session.user.name || session.user.email}? Then Logout and login
            again
          </p>
          <button onClick={signOut}>Logout</button> <br />
        </>
      )}
    </div>
  );
}

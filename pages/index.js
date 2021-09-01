import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Form</h1>

        <p className={styles.description}>Please be a human!</p>

        <div className={styles.grid}>
          <style jsx>{`
            label {
              display: block;
              margin-bottom: 0.2em;
            }

            button {
              color: white;
              background-color: blueviolet;
              padding: 0.8em 1em;
              border: 0;
              border-radius: 0.2em;
            }
          `}</style>
          <form method="post">
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea name="message" />
            </p>
            <button>Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}

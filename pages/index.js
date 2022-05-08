import Head from "next/head";
import Image from "next/image";
import { Button } from "../components";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Vintra - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
        <meta name="descripiton" content="Guild de Albion Online" />
      </Head>
      <header className={styles.homeHeader}>
        <Image
          src="/logo.svg"
          width="145"
          height="45"
          alt="logo tipo da social vintra"
        />
        <div>
          <Button
            href="#"
            value="singUP"
            text="Sing up"
            className="singUpButton"
            background="#E7E7E7"
            color="#343633e6"
          />
          <Button
            href="#"
            value="singIn"
            text="Sing in"
            className="singInButton"
          />
        </div>
      </header>
      <main className={styles.homeMain}>
        <div>
          <h1>The new social network of developers</h1>
        </div>
        <div>
          <Image
            src="/planeta.svg"
            width="470"
            height="350"
            alt="imagen de um planeta azul com um anel preto"
          />
        </div>
      </main>
      <footer className={styles.homeFooter}>
        <h4>copyright © {new Date().getFullYear()} - Social Vintra </h4>
      </footer>
    </div>
  );
}

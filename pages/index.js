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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            className={styles.homePlaneteSVG}
          />
        </div>
      </main>
      <footer className={styles.homeFooter}>
        <div className={styles.homeFooterSVG}>
          <Image
            src="/footerVector.svg"
            width="1440"
            height="350"
            alt="svg do footer"
          />
        </div>
        <div className={styles.homeFooterContent}>
          <div className={styles.homeFooterContentSobre}>
            <div>
              <Image
                src="/posts.svg"
                width="470"
                height="350"
                alt="imagen de um planeta azul com um anel preto"
                className={styles.homePlaneteSVG}
              />
            </div>
            <div className={styles.homeFooterContentSobreText}>
              <h2>Sobre a Vintra</h2>
              <p>
                A Vintra é uma rede social online de compartilhamento de fotos e
                vídeos entre desenvolvedores, e uma variedade de serviços de
                redes sociais, como Facebook, Twitter, Instagram.
              </p>
            </div>
          </div>
          <h4>copyright © {new Date().getFullYear()} - Social Vintra </h4>
        </div>
      </footer>
    </div>
  );
}

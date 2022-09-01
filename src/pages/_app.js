import Head from 'next/head'
import '../styles/base.css'
import '../styles/game.css'
import '@fontsource/luckiest-guy'

export default function App({ Component, props }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./images/monster.gif" type="image/x-icon" />
        <link rel="manifest" href="./manifest.webmanifest" />
        <title>Popping Monsters</title>
        <meta name="theme-color" content="#156E09" />
        <meta name="msapplication-navbutton-color" content="#156E09" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#156E09" />
      </Head>
      <Component {...props} />
    </>
  )
}

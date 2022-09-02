import { useEffect, useState } from "react"
import { isMobile } from 'react-device-detect'
import Head from 'next/head'
import '../styles/base.css'
import '@fontsource/luckiest-guy'

export default function App({ Component, props }) {
  const [installApp, setInstallApp] = useState(false)

  useEffect(() => {
    (async () => {
      if ('getInstalledRelatedApps' in navigator && isMobile) {
        const relatedApps = await navigator.getInstalledRelatedApps();
        if (!relatedApps.length) setInstallApp(true)
      }
    })()
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./images/favicon.png" type="image/png" />
        <link rel="manifest" href="./manifest.webmanifest" />
        <title>Popping Monsters</title>
        <meta name="theme-color" content="#156E09" />
        <meta name="msapplication-navbutton-color" content="#156E09" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#156E09" />
      </Head>
      { installApp ? (
        <div className="install-app">
          <img src="./images/icons/icon-192.png" />
          <p>Adicione o app a tela inicial para jogar.</p>
        </div>
      ) : (
        <Component {...props} />
      ) }
    </>
  )
}

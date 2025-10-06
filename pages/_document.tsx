import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        {/* Minimal theming to avoid flash of incorrect theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const stored = localStorage.getItem('theme'); const preference = stored ?? 'dark'; const root = document.documentElement; root.classList.remove('dark','light'); root.classList.add(preference); document.body?.classList.remove('dark','light'); document.body?.classList.add(preference); } catch (_) {} })();`,
          }}
        />
        <meta name="theme-color" content="#0a0a0a" />
      </Head>
      <body className="antialiased bg-background text-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Minimal theming to avoid flash of incorrect theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const stored = localStorage.getItem('theme'); const mql = window.matchMedia('(prefers-color-scheme: dark)'); const preference = stored ?? (mql.matches ? 'dark' : 'light'); const root = document.documentElement; root.classList.remove('dark','light'); root.classList.add(preference); document.body?.classList.remove('dark','light'); document.body?.classList.add(preference); } catch (_) {} })();`,
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

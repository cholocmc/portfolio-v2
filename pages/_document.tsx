import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Minimal theming to avoid flash of incorrect theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const stored = localStorage.getItem('theme'); const mql = window.matchMedia('(prefers-color-scheme: dark)'); const shouldDark = stored ? stored === 'dark' : mql.matches; const root = document.documentElement; root.classList.toggle('dark', shouldDark); document.body?.classList.toggle('dark', shouldDark); } catch (_) {} })();`,
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

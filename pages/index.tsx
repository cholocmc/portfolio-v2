import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeroScene } from "@/components/hero-scene";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Music,
  Music2,
  AtSign,
} from "lucide-react";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LINKS = [
  { href: "https://www.tiktok.com/@cholocmc", label: "TikTok", icon: Music2 },
  {
    href: "https://www.linkedin.com/in/cholocmc",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "https://www.github.com/cholocmc", label: "GitHub", icon: Github },
  {
    href: "https://www.facebook.com/cholocmc",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.instagram.com/cholocmc",
    label: "Instagram",
    icon: Instagram,
  },
  { href: "https://www.threads.com/@cholocmc", label: "Threads", icon: AtSign },
  {
    href: "https://open.spotify.com/artist/4LAtQG3Q0uA6CkD1gHo6ia",
    label: "Spotify",
    icon: Music,
  },
];

export default function Home() {
  const title = "CholoCMC";
  const description = "CholoCMC's Portfolio";
  const url = "https://www.cholocmc.com";

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} relative min-h-dvh overflow-hidden`}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="canonical" href={url} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Carlos Miguel (Cholo) Canonizado",
              url,
              alternateName: "CholoCMC",
              sameAs: [
                "https://www.tiktok.com/@cholocmc",
                "https://www.linkedin.com/in/cholocmc",
                "https://www.github.com/cholocmc",
                "https://www.facebook.com/cholocmc",
                "https://www.instagram.com/cholocmc",
                "https://www.threads.com/@cholocmc",
                "https://open.spotify.com/artist/4LAtQG3Q0uA6CkD1gHo6ia",
              ],
            }),
          }}
        />
      </Head>

      <HeroScene />

      <header className="fixed right-3 top-3 z-10">
        <ThemeToggle />
      </header>

      <main className="relative z-0 flex min-h-dvh flex-col items-center justify-center px-5 pb-24 pt-24">
        <div className="mx-auto w-full max-w-md text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border px-4 py-1 text-xs tracking-wider backdrop-blur">
            <span className="opacity-80">/CholoCMC</span>
          </div>
          <h1 className="text-balance bg-gradient-to-br from-cyan-400 via-sky-300 to-emerald-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl">
            Carlos Miguel (Cholo) Canonizado
          </h1>
          <p className="mt-3 text-pretty text-sm opacity-80">
            Building immersive web experiences and futuristic user interfaces.
          </p>

          <nav className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-7">
            {LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group rounded-xl border p-3 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-white/5 hover:shadow-[0_0_20px_-6px_rgba(34,211,238,.6)] dark:hover:bg-black/20"
              >
                <Icon className="mx-auto h-6 w-6 opacity-90 transition group-hover:text-cyan-300" />
              </Link>
            ))}
          </nav>
        </div>
      </main>

      <footer className="pointer-events-none fixed inset-x-0 bottom-3 z-10 flex items-center justify-center px-4">
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs backdrop-blur">
          <span className="opacity-70">Old Tech Portfolio:</span>
          <Link
            href="https://www.carloscanonizado.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 underline underline-offset-2"
          >
            www.carloscanonizado.com
          </Link>
        </div>
      </footer>
    </div>
  );
}

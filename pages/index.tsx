import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
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

      {/* Decorative, theme-aware background layers (no WebGL) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Top-right blob: larger blur; light mode more opaque, dark mode subtle */}
        <div className="absolute right-[-20%] top-[-22%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(ellipse_at_center,theme(colors.sky.700/.5),transparent_62%)] blur-[140px] dark:bg-[radial-gradient(ellipse_at_center,theme(colors.cyan.500/.25),transparent_62%)] dark:blur-[120px] blob-drift-a" />
        {/* Top-right inner glow */}
        <div className="absolute right-[-12%] top-[-14%] h-[46vh] w-[46vh] rounded-full bg-[radial-gradient(ellipse_at_center,theme(colors.sky.600/.28),transparent_70%)] blur-[80px] dark:bg-[radial-gradient(ellipse_at_center,theme(colors.cyan.400/.22),transparent_70%)] blob-drift-a2" />
        {/* Bottom-left blob: larger blur; light mode more opaque, dark mode subtle */}
        <div className="absolute left-[-28%] bottom-[-28%] h-[80vh] w-[80vh] rounded-full bg-[radial-gradient(ellipse_at_center,theme(colors.emerald.700/.46),transparent_62%)] blur-[160px] dark:bg-[radial-gradient(ellipse_at_center,theme(colors.fuchsia.500/.20),transparent_62%)] dark:blur-[130px] blob-drift-b" />
        {/* Bottom-left inner glow */}
        <div className="absolute left-[-18%] bottom-[-18%] h-[54vh] w-[54vh] rounded-full bg-[radial-gradient(ellipse_at_center,theme(colors.emerald.700/.30),transparent_72%)] blur-[90px] dark:bg-[radial-gradient(ellipse_at_center,theme(colors.fuchsia.400/.18),transparent_72%)] blob-drift-b2" />
        {/* Subtle grid that adapts to theme */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[.06] dark:bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] dark:opacity-[.10]" />
      </div>

      <header className="fixed right-3 top-3 z-10">
        <ThemeToggle />
      </header>

      <main className="relative z-0 flex min-h-dvh flex-col items-center justify-center px-5 pb-24 pt-24">
        <div className="mx-auto w-full max-w-md text-center">
          <Link
            href="https://www.tiktok.com/@cholocmc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit TikTok profile @cholocmc"
            className="mb-6 inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm tracking-wider backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-600/60 hover:bg-white/40 dark:hover:border-cyan-400/60 dark:hover:bg-white/5"
          >
            <span className="opacity-80">/CholoCMC</span>
          </Link>
          <h1 className="text-balance bg-gradient-to-br from-sky-700 via-blue-600 to-emerald-700 bg-clip-text text-5xl font-semibold leading-tight text-transparent dark:from-cyan-400 dark:via-sky-300 dark:to-emerald-300 sm:text-6xl">
            Carlos Miguel (Cholo) Canonizado
          </h1>
          <p className="mt-3 text-pretty text-sm opacity-80">
            Senior Software Engineer turned Content Creator / Musician /
            Freediving Coach
          </p>

          <nav className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-7">
            {LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group rounded-xl border p-3 backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-600/60 hover:bg-white/5 hover:shadow-[0_0_20px_-6px_rgba(14,165,233,.6)] dark:hover:border-cyan-400/60 dark:hover:bg-black/20 dark:hover:shadow-[0_0_20px_-6px_rgba(34,211,238,.6)]"
              >
                <Icon className="mx-auto h-6 w-6 opacity-90 transition group-hover:text-sky-700 dark:group-hover:text-cyan-300" />
              </Link>
            ))}
          </nav>
        </div>
      </main>

      <footer className="pointer-events-none fixed inset-x-0 bottom-3 z-10 flex items-center justify-center px-4">
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[13px] backdrop-blur">
          <span className="opacity-70">Old Tech Portfolio:</span>
          <Link
            href="https://www.carloscanonizado.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 underline underline-offset-2 dark:text-cyan-300"
          >
            www.carloscanonizado.com
          </Link>
        </div>
      </footer>
    </div>
  );
}

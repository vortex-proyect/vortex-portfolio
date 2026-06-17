"use client";

import Image from "next/image";
import { useState } from "react";
import { translations, Language } from "../lib/translations";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/swirl-original.png" alt="" aria-hidden="true" className="swirl-bg" />
      <div className="relative z-[1] min-h-screen w-full overflow-hidden">
        {/* Fondo de grid decorativo */}
        <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />

        {/* NAV */}
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-white.png"
              alt="VortexStudios"
              width={40}
              height={40}
              preload
              className="float-slow"
            />
            <span className="text-lg font-semibold tracking-tight">
              Vortex<span className="text-[var(--accent)]">Studios</span>
            </span>
          </div>
          <nav className="hidden gap-8 text-sm text-[var(--muted)] md:flex items-center">
            <a href="#servicios" className="hover:text-white transition-colors">
              {t.nav.services}
            </a>
            <a href="#porque" className="hover:text-white transition-colors">
              {t.nav.whyUs}
            </a>
            <a href="#proyectos" className="hover:text-white transition-colors">
              {t.nav.projects}
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              {t.nav.contact}
            </a>
            <button
              onClick={toggleLang}
              className="ml-4 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[10px] font-mono text-white transition hover:border-[var(--accent)] uppercase"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </nav>
          <a
            href={`mailto:${t.contact.email}`}
            className="hidden rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-white transition hover:border-[var(--accent)] hover:text-[var(--accent-2)] md:inline-block"
          >
            {t.nav.cta}
          </a>
        </header>

        {/* HERO */}
        <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-20 text-center md:py-32">
          <div className="mb-8 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-4 py-1.5 text-xs text-[var(--muted)] backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            {t.hero.badge}
          </div>

          <h1 className="gradient-text mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            {t.hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="glow inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-black transition hover:brightness-110"
            >
              {t.hero.ctaMain}
            </a>
            <a
              href="#servicios"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 text-sm font-medium text-white transition hover:border-[var(--accent)]"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Slogans tira */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
            {t.slogans.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-3 py-1 text-xs text-[var(--muted)] backdrop-blur font-mono"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* SERVICIOS - Bento Layout */}
        <section
          id="servicios"
          className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28"
        >
          <div className="mb-12 text-left">
            <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-mono">
              {t.services.subtitle}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.services.title}
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              {t.services.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 lg:grid-cols-12">
            {t.services.list.map((s, idx) => (
              <article
                key={s.title}
                className={`group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all duration-300 hover:border-[var(--accent)]/50 hover:bg-[var(--surface-2)] light-leak ${
                  idx === 0 ? "col-span-1 sm:col-span-3 lg:col-span-5" :
                  idx === 1 ? "col-span-1 sm:col-span-3 lg:col-span-3" :
                  idx === 2 ? "col-span-1 sm:col-span-3 lg:col-span-4" :
                  "col-span-1 sm:col-span-3 lg:col-span-4"
                }`}
              >
                <div className="font-mono text-xs tracking-widest text-[var(--accent)]">
                  {s.number}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {s.description}
                </p>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </section>

        {/* POR QUÉ NOSOTROS - Bento/Modular */}
        <section
          id="porque"
          className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/60 p-8 backdrop-blur md:p-14 relative overflow-hidden group light-leak">
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-mono">
                  {t.whyUs.standardTitle}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.whyUs.standardHeading}
                </h2>
                <p className="mt-4 text-[var(--muted)] max-w-lg">
                  {t.whyUs.standardDesc}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {t.whyUs.audiences.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-white bg-white/5"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[var(--accent)]/10 blur-3xl rounded-full transition-transform group-hover:scale-150" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {t.whyUs.metrics.map(({k, v}) => (
                <div
                  key={k}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--accent)]/50 group"
                >
                  <div className="text-2xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                    {k}
                  </div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section
          id="proyectos"
          className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28"
        >
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-widest text-[var(--accent-2)]">
              {t.projects.title}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.projects.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
              {t.projects.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {t.projects.list.map((p) => {
              const Card = (
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition hover:border-[var(--accent)]/60 hover:bg-[var(--surface-2)]">
                  <div className={`relative h-44 w-full bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                    <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <div className="mx-auto flex h-5 w-40 items-center justify-center rounded bg-white/5 px-2">
                        <span className="truncate font-mono text-[9px] text-white/30">
                          {p.url ?? "in-development.vortex.dev"}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-black tracking-tighter text-white/5 select-none">
                        {p.title}
                      </span>
                    </div>
                    {p.live && (
                      <div className="absolute right-4 top-3 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        {t.projects.live}
                      </div>
                    )}
                    {!p.live && (
                      <div className="absolute right-4 top-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-2.5 py-1 text-[10px] text-[var(--muted)]">
                        {t.projects.dev}
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--surface)] to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs tracking-widest text-[var(--accent-2)]">
                        {p.number}
                      </span
                      <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[10px] text-[var(--muted)]">
                        {p.category}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white transition-colors group-hover:text-[var(--accent-2)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((tTag) => (
                        <span
                          key={tTag}
                          className="rounded-full bg-[var(--surface-2)] px-2.5 py-0.5 text-[10px] text-[var(--muted)]"
                        >
                          {tTag}
                        </span>
                      ))}
                    </div>
                    {p.live && (
                      <div className="mt-5 flex items-center gap-1 text-xs font-medium text-[var(--accent-2)]">
                        {t.projects.viewProject}
                        <span className="transition-transform group-hover:translate-x-1">{" → "}</span>
                      </div>
                    )}
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              );

              return p.url ? (
                <a
                  key={p.number}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full"
                >
                  {Card}
                </a>
              ) : (
                <div key={p.number} className="flex h-full cursor-default opacity-60">
                  {Card}
                </div>
              );
            })}
          </div>
        </section>

        {/* PROCESO */}
        <section className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-widest text-[var(--accent-2)]">
              {t.process.title}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.process.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
              {t.process.description}
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute inset-x-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent lg:block" />
            {t.process.steps.map((p) => (
              <div
                key={p.step}
                className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10">
                  <span className="font-mono text-xs font-bold text-[var(--accent)]">
                    {p.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA / CONTACTO */}
        <section
          id="contacto"
          className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28"
        >
          <div className="glow relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface-2)] via-[var(--surface)] to-[var(--surface-2)] p-10 text-center md:p-16">
            <Image
              src="/logo-white.png"
              alt=""
              width={64}
              height={64}
              className="mx-auto mb-6 opacity-90"
            />
            <h2 className="gradient-text mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
              {t.contact.description}
            </p>
            <a
              href={`mailto:${t.contact.email}?subject=New%20project%20-%20VortexStudios`}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-8 text-sm font-medium text-white transition hover:brightness-110"
            >
              {t.contact.email}
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mx-auto w-full max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)] md:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-white.png"
                alt="VortexStudios"
                width={24}
                height={24}
              />
              <span>
                {t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
              </span>
            </div>
            <a
              href={`mailto:${t.contact.email}`}
              className="hover:text-white"
            >
              {t.contact.email}
            </a>
          </div>
        </footer}
      </div>
    </>
  );
}


import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Users,
} from 'lucide-react';

const skills = [
  { title: 'Languages', items: ['C++', 'JavaScript', 'C', 'Python'] },
  { title: 'Frameworks', items: ['React.js', 'Node.js'] },
  { title: 'Data & Tools', items: ['MySQL', 'SQL', 'Git', 'Jira', 'PostgreSQL'] },
  { title: 'Core', items: ['Algorithms', 'OOP', 'Problem Solving', 'System Design'] },
];

const awards = [
  ['Sep 2025', 'APICTA 2025 — National Nominee', 'Bangladesh'],
  ['Aug 2025', 'ICT & Innovation Awards — 2nd Runner-Up', 'Ranked 3rd among 300+ participants'],
  ['Jun 2025', 'SISE Autumn 2025 — 2nd Runner-Up', 'IEEE, UITS'],
  ['Jul 2025', 'Telecom & Digital Innovation Fair — Top 32', '300+ teams nationwide'],
  ['Jan 2025', 'GP Accelerator Bootcamp', 'Selected among 450+ teams'],
];

export default function HomePage() {
  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-[65%] top-8 h-72 w-72 rounded-full bg-lime-400/10 blur-[100px]" />
        <div className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
              <span className="h-2 w-2 rounded-full bg-lime-400" />
              Available for opportunities
            </div>
            <p className="mb-4 text-lg font-medium text-zinc-400">Hello, I'm</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Safin Ahamed <span className="text-lime-400">Sajid.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Computer Science graduate, competitive programmer, and full-stack
              developer turning complex problems into practical digital products.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-lime-300">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a href="mailto:sajidsardar3206@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold transition hover:border-lime-400/50 hover:text-lime-300">
                <Mail size={17} /> Get in touch
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> Dhaka, Bangladesh</span>
              <span className="inline-flex items-center gap-2"><Phone size={15} /> (+880) 1922979622</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] border border-lime-400/25" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 p-8 shadow-2xl">
              <Code2 className="h-12 w-12 text-lime-400" />
              <p className="mt-14 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">Focus</p>
              <p className="mt-3 text-3xl font-bold leading-tight">Software Engineering & Artificial Intelligence</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/[0.04] p-4">
                  <p className="text-2xl font-bold text-lime-400">3.32</p>
                  <p className="mt-1 text-xs text-zinc-500">B.Sc. CGPA</p>
                </div>
                <div className="rounded-2xl bg-white/[0.04] p-4">
                  <p className="text-2xl font-bold text-lime-400">6.5</p>
                  <p className="mt-1 text-xs text-zinc-500">IELTS Band</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-400">01 / About</p>
            <h2 className="mt-4 text-4xl font-bold">Problem solver at heart.</h2>
          </div>
          <div className="text-lg leading-8 text-zinc-400">
            <p>I am a Computer Science and Engineering graduate with a strong foundation in competitive programming and algorithmic problem-solving. I build full-stack applications with C++, JavaScript, React.js, Node.js, MySQL, and relational databases.</p>
            <p className="mt-5">I am passionate about software engineering, artificial intelligence, technical coordination, and creating technology that solves real-world problems.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-400">02 / Skills</p>
        <h2 className="mt-4 text-4xl font-bold">Technical toolkit</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.title} className="bg-zinc-950 p-6">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-zinc-500">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-300">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-400">03 / Education</p>
          <h2 className="mt-4 text-4xl font-bold">Academic foundation</h2>
          <div className="mt-10 grid gap-4">
            <article className="grid gap-5 rounded-3xl border border-white/10 p-6 md:grid-cols-[150px_1fr]">
              <GraduationCap className="h-9 w-9 text-lime-400" />
              <div>
                <p className="text-sm text-zinc-500">2021 — 2025</p>
                <h3 className="mt-2 text-xl font-bold">B.Sc. in Computer Science and Engineering</h3>
                <p className="mt-1 text-lime-300">University of Information Technology and Sciences (UITS)</p>
                <p className="mt-4 text-sm leading-7 text-zinc-400">DSA, Software Engineering, Database Systems, Operating Systems, Computer Networks, OOP, Web Development, Distributed Systems, System Design, API Development, Full-Stack Development, AI Fundamentals · CGPA 3.32/4.00</p>
              </div>
            </article>
            <article className="grid gap-5 rounded-3xl border border-white/10 p-6 md:grid-cols-[150px_1fr]">
              <BookOpen className="h-9 w-9 text-lime-400" />
              <div>
                <p className="text-sm text-zinc-500">2017 — 2018 · Uttara High School and College</p>
                <h3 className="mt-2 text-xl font-bold">Higher Secondary Certificate — Science</h3>
                <p className="mt-2 text-sm text-zinc-400">GPA 3.83/5.00</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-400">04 / Featured project</p>
        <div className="mt-4 grid overflow-hidden rounded-[2rem] border border-white/10 lg:grid-cols-[1.1fr_.9fr]">
          <div className="flex min-h-[420px] items-center justify-center bg-[radial-gradient(circle_at_top_right,_rgba(163,230,53,.18),transparent_45%),linear-gradient(135deg,#18181b,#09090b)] p-8">
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950 p-5 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div><p className="text-xs text-zinc-500">DOKAAN</p><p className="mt-1 font-bold">Retail dashboard</p></div>
                <BriefcaseBusiness className="text-lime-400" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['Inventory', 'Sales', 'Customers'].map((label, index) => (
                  <div key={label} className="rounded-xl bg-white/[0.05] p-3">
                    <p className="text-[10px] text-zinc-500">{label}</p>
                    <p className="mt-3 text-lg font-bold">{['1.2k', '86%', '340'][index]}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-32 rounded-2xl border border-white/5 bg-gradient-to-t from-lime-400/10 to-transparent p-4">
                <div className="flex h-full items-end gap-2">
                  {[35, 52, 43, 68, 58, 82, 74].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t bg-lime-400/60" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 sm:p-10">
            <p className="text-sm text-zinc-500">Feb 2024 — Oct 2025</p>
            <h2 className="mt-3 text-4xl font-bold">Dokaan</h2>
            <p className="mt-2 font-medium text-lime-300">Mobile-based ERP & POS system</p>
            <p className="mt-6 leading-7 text-zinc-400">A full-stack, mobile-first ERP for SMEs covering inventory, sales, customer records, and employee management.</p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-300">
              <li>• Barcode and QR code checkout with automated stock syncing</li>
              <li>• RESTful Node.js APIs and normalized PostgreSQL schemas</li>
              <li>• JWT authentication and role-based access control</li>
              <li>• Reduced manual administrative workload by ~40%</li>
            </ul>
            <a href="https://dokaan.vercel.app/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-lime-400">
              View live project <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="awards" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
            <div>
              <Award className="h-10 w-10 text-lime-400" />
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-lime-400">05 / Recognition</p>
              <h2 className="mt-4 text-4xl font-bold">Selected achievements</h2>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {awards.map(([date, title, detail]) => (
                <article key={title} className="grid gap-2 py-5 sm:grid-cols-[100px_1fr]">
                  <p className="text-sm text-zinc-500">{date}</p>
                  <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm text-zinc-500">{detail}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Users className="mx-auto h-10 w-10 text-lime-400" />
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-lime-400">Let’s connect</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">Have a project or opportunity in mind?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:sajidsardar3206@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-zinc-950"><Mail size={17} /> Email me</a>
          <a href="https://linkedin.com/in/safin-ahamed-sajid09" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold"><ExternalLink size={17} /> LinkedIn</a>
        </div>
      </section>
    </>
  );
}

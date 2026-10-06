import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

        <div className="hero min-h-[75vh]">
          <div className="hero-content relative text-center">
            <div className="max-w-4xl">
              <div className="badge badge-primary badge-lg mb-6">
                🚀 Built for Developers
              </div>

              <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
                Build Better.
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Manage Smarter.
                </span>
              </h1>

              <p className="mx-auto max-w-2xl py-6 text-lg text-base-content/70 md:text-xl">
                DevBoard helps developers organize projects, manage
                tasks, track progress, and turn ideas into reality.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/register"
                  className="btn btn-primary btn-lg shadow-lg"
                >
                  Start Building 🚀
                </Link>

                <Link
                  href="/login"
                  className="btn btn-secondary btn-lg"
                >
                  Login
                </Link>
              </div>

              {/* Mini Stats */}
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <div className="stat rounded-box bg-base-100/80 shadow-sm">
                  <div className="stat-title">Projects</div>
                  <div className="stat-value text-primary">∞</div>
                </div>

                <div className="stat rounded-box bg-base-100/80 shadow-sm">
                  <div className="stat-title">Tasks</div>
                  <div className="stat-value text-secondary">∞</div>
                </div>

                <div className="stat rounded-box bg-base-100/80 shadow-sm">
                  <div className="stat-title">Productivity</div>
                  <div className="stat-value text-accent">↑</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <div className="badge badge-secondary mb-3">
            Powerful Features
          </div>

          <h2 className="text-4xl font-bold">
            Everything in One Place
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
            Simple tools to help you plan, build, and finish your
            projects without the chaos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Projects */}
          <div className="card border border-primary/20 bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="card-body">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-3xl">
                📁
              </div>

              <h3 className="card-title text-xl">
                Project Management
              </h3>

              <p className="text-base-content/70">
                Create projects and keep everything organized in one
                place.
              </p>

              <div className="card-actions mt-4">
                <div className="badge badge-primary">
                  Organized
                </div>
              </div>
            </div>
          </div>

          {/* Tasks */}
          <div className="card border border-secondary/20 bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="card-body">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-3xl">
                ✅
              </div>

              <h3 className="card-title text-xl">
                Task Management
              </h3>

              <p className="text-base-content/70">
                Create tasks, set priorities, track status, and never
                lose focus.
              </p>

              <div className="card-actions mt-4">
                <div className="badge badge-secondary">
                  Productive
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="card border border-accent/20 bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="card-body">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-3xl">
                📊
              </div>

              <h3 className="card-title text-xl">
                Track Progress
              </h3>

              <p className="text-base-content/70">
                See what is pending, in progress, and completed at a
                glance.
              </p>

              <div className="card-actions mt-4">
                <div className="badge badge-accent">
                  Progress
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-1 shadow-xl">
          <div className="rounded-[1.4rem] bg-base-100 px-6 py-12 text-center md:px-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to organize your work?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-base-content/60">
              Create your first project and start managing your
              development workflow with DevBoard.
            </p>

            <Link
              href="/register"
              className="btn btn-primary btn-lg mt-6"
            >
              Create Free Account →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
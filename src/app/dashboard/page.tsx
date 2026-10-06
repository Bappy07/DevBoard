export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-base-200 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2 text-base-content/70">
            Welcome back! Here is an overview of your work.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">
                Projects
              </h2>

              <p className="text-3xl font-bold">
                0
              </p>

              <p className="text-sm text-base-content/60">
                Total projects
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">
                Tasks
              </h2>

              <p className="text-3xl font-bold">
                0
              </p>

              <p className="text-sm text-base-content/60">
                Total tasks
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">
                Completed
              </h2>

              <p className="text-3xl font-bold">
                0
              </p>

              <p className="text-sm text-base-content/60">
                Completed tasks
              </p>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="mt-8 card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">
              Recent Projects
            </h2>

            <p className="text-base-content/60">
              No projects yet. Create your first project.
            </p>

            <div className="card-actions justify-end">
              <a
                href="/projects/new"
                className="btn btn-primary"
              >
                Create Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
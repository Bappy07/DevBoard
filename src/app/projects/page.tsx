import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-base-200 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              My Projects
            </h1>

            <p className="mt-2 text-base-content/70">
              Manage all your projects from here.
            </p>
          </div>

          <Link
            href="/projects/new"
            className="btn btn-primary"
          >
            + New Project
          </Link>
        </div>

        {/* Empty State */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center py-16">
            <h2 className="text-2xl font-bold">
              No projects yet
            </h2>

            <p className="max-w-md text-base-content/60">
              You haven't created any projects yet.
              Start by creating your first project.
            </p>

            <Link
              href="/projects/new"
              className="btn btn-primary mt-4"
            >
              Create Your First Project
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
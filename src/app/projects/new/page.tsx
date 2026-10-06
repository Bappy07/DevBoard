import Link from "next/link";
import ProjectForm from "@/components/ProjectForm";

export default function NewProjectPage() {
  return (
    <main className="min-h-screen bg-base-200 p-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Create New Project
          </h1>

          <p className="mt-2 text-base-content/70">
            Create a project to organize your tasks and work.
          </p>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <ProjectForm />

            <div className="mt-2">
              <Link
                href="/projects"
                className="btn btn-ghost"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
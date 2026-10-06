"use client";

import { useState } from "react";

export default function ProjectForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (!name.trim()) {
    setError("Project name is required");
    return;
  }

  if (!description.trim()) {
    setError("Project description is required");
    return;
  }

  const response = await fetch("/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.trim(),
      description: description.trim(),
    }),
  });

  const data = await response.json();

  console.log(data);

  setError("");
}

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Project Name */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">
            Project Name
          </span>
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
          placeholder="Enter project name"
          className="input input-bordered w-full"
        />
      </div>

      {/* Description */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">
            Description
          </span>
        </label>

        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setError("");
          }}
          placeholder="Describe your project..."
          className="textarea textarea-bordered h-32 w-full"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary"
      >
        Create Project
      </button>
    </form>
  );
}
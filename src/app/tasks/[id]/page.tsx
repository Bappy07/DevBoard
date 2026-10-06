export default async function TaskPage({
    params,
}:{params: Promise<{id: string}>;}) {
    const { id } = await params;
    return (
        <main>
            <h1>Task Details</h1>
            <p>Task ID: {id}</p>
        </main>
    );
}
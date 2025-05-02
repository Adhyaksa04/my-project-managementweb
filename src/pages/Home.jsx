import { Link } from "react-router-dom";
import useAuthStore from "../stores/authStore";
import { useEffect } from "react";
import useProjectStore from "../stores/projectStore";

export default function Home() {
    const { fetchProjects, projects, loading, error } = useProjectStore();
    console.log({ projects, loading, error });

    useEffect(() => {
        fetchProjects();
    }, [])
    if (loading) return <div className="p-6">Loading...</div>;
    if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Active Projects</h1>
            {projects.length === 0 ? (<p>No projects found</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => {
                        console.log(project);
                        return (
                            <Link key={project.id}
                                to={`/projects/${project.id}`}
                                className="p-4 bg-white rounded shadow hover:shadow-md transition"
                            >
                                <h2 className="text-lg font-semibold">{project.name}</h2>
                                <p className="text-gray-500">{project.description}</p>
                                <div className="mt-2 text-sm text-gray-400">
                                    {new Date().toLocaleDateString()}-{""}
                                    {new Date().toLocaleDateString()}
                                </div>
                            </Link>
                        )

                    }
                    )}
                </div>
            )}
        </div>
    )
}
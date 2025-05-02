import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useProjectStore from "../stores/projectStore";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const { projectDetail, fetchProjectDetail, loading, error } =
        useProjectStore();

    console.log({ projectDetail, loading, error });

    useEffect(() => {
        if (projectId) {
            fetchProjectDetail(projectId);
        }
    }, []);

    if (loading) return <div className="p-6">Loading project...</div>;
    if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
    if (!projectDetail) return <div className="p-6">No project found.</div>;

    return (
        <div className="p-6 bg-white rounded shadow space-y-8">
            {/* Project Info */}
            <div>
                <h1 className="text-2xl font-bold mb-4">{projectDetail.name}</h1>

                <div className="text-gray-600 mb-2">
                    <strong>Status:</strong> {projectDetail.status}
                </div>

                <div className="text-gray-600 mb-2">
                    <strong>Duration:</strong>{" "}
                    {new Date().toLocaleDateString()} -{" "}
                    {new Date().toLocaleDateString()}
                </div>

                <div className="text-gray-600 mb-2">
                    <strong>Description</strong> {projectDetail.description}
                </div>

                <div className="text-gray-600">
                    <strong>Created by:</strong>{" "}
                    {projectDetail.createdBy?.name}
                </div>
            </div>
            {/* <div className="p-6 bg-white rounded shadow space-y-8"> */}
            {/* Project Info */}
            {/* <div>
        <h1 className="text-2xl font-bold mb-4">Project Name</h1>

        <div className="text-gray-600 mb-2">
          <strong>Status:</strong> Project Status
        </div>

        <div className="text-gray-600 mb-2">
          <strong>Duration:</strong> 
          {new Date().toLocaleDateString()} - {new Date().toLocaleDateString()}
        </div>

        <div className="text-gray-600 mb-2">
          <strong>Description:</strong> Project Description
        </div>

        <div className="text-gray-600">
          <strong>Created by:</strong> Owner Project
        </div>
      </div> */}
            {/* </div> */}
        </div>
    );
}
import { useState } from "react";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import { IndividualProject } from "./IndividualProject";

export const Projects = ({ activeValue = true }) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects &&
        projects.map(project => (
            <li
                key={project.projectId}
                data-doc-id={project.docId}
                data-test-id="project-action"
                className={
                    active === project.projectId ? 'active sidebar__project' : 'sidebar__project'
                }
                onClick={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
            >
                <IndividualProject project={project} />
            </li>
        ))
    )
}
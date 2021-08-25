import { useTasks } from "../hooks";
import { Checkbox } from "./Checkbox";

export const Tasks = () => {
    const { tasks } = useTasks("1");

    let projectName = '';

    console.log('!!!!!!!!!!!!!!!!', tasks);
    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
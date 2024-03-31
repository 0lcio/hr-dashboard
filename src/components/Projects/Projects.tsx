import styles from './Projects.module.css'; 
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';

// Mock data
const initialData = {
  todo: [{ id: '1', name: 'Project 1' }, { id: '2', name: 'Project 2' }, { id: '3', name: 'Project 3' }],
  inProgress: [{ id: '4', name: 'Project 4' }],
  completed: [{ id: '5', name: 'Project 5' }, { id: '6', name: 'Project 6' }],
};

function useLocalStorageState<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

function Projects() {
  const [data, setData] = useLocalStorageState('projectsData', initialData);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // Ignore the result if the item was dropped outside of any column
    if (!destination) {
      return;
    }

    // Ignore the result if the item was dropped back into the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Create a new copy of the data state variable
    const newData: { [key: string]: { id: string; name: string; }[] } = { ...data };

    // Remove the project from the source column
    const [removed] = newData[source.droppableId as keyof typeof newData].splice(source.index, 1);

    // Add the project to the destination column
    newData[destination.droppableId as keyof typeof newData].splice(destination.index, 0, removed);

    // Update the data state variable
    setData(newData as { todo: { id: string; name: string; }[]; inProgress: { id: string; name: string; }[]; completed: { id: string; name: string; }[] });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
      {Object.entries(data).map(([columnId, projects], index) => (
        <Droppable droppableId={columnId} key={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={styles.column}
            >
              <h2>{columnId}</h2>
              {projects.map((project, index) => (
                <Draggable draggableId={project.id.toString()} index={index} key={project.id}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={styles.project}
                    >
                      {project.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
      </div>
    </DragDropContext>
  );
}

export default Projects;
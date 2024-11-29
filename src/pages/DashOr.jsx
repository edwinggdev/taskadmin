import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DashOr = () => {

  const initialData = {
    lists: [
      {'list-1': { id: 'list-1', title: 'To Do', todos: ['todo-1', 'todo-2'] }},
      {'list-2': { id: 'list-2', title: 'In Progress', todos: [] }},
      {'list-3': { id: 'list-3', title: 'Done', todos: [] }},
    ],
    todos: {
      'todo-1': { id: 'todo-1', content: 'Learn React' },
      'todo-2': { id: 'todo-2', content: 'Build a Trello clone' },
    },
    listOrder: ['list-1', 'list-2', 'list-3'],
  };
  
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return; // If dropped outside a droppable area

    // Moving within the same list
    if (source.droppableId === destination.droppableId) {
      const list = data.lists[source.droppableId];
      const newTodos = Array.from(list.todos);
      const [movedTodo] = newTodos.splice(source.index, 1);
      newTodos.splice(destination.index, 0, movedTodo);

      const newList = {
        ...list,
        todos: newTodos,
      };

      setData({
        ...data,
        lists: {
          ...data.lists,
          [newList.id]: newList,
        },
      });
      return;
    }

    // Moving between different lists
    // const sourceList = data.lists[source.droppableId];
    // const destList = data.lists[destination.droppableId];
    // const sourceTodos = Array.from(sourceList.todos);
    // const destTodos = Array.from(destList.todos);
    // const [movedTodo] = sourceTodos.splice(source.index, 1);
    // destTodos.splice(destination.index, 0, movedTodo);

    // const newSourceList = {
    //   ...sourceList,
    //   todos: sourceTodos,
    // };

    // const newDestList = {
    //   ...destList,
    //   todos: destTodos,
    // };

    // setData({
    //   ...data,
    //   lists: {
    //     ...data.lists,
    //     [newSourceList.id]: newSourceList,
    //     [newDestList.id]: newDestList,
    //   },
    // });

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const startListWrapper = data.lists.find(
      (list) => Object.keys(list)[0] === source.droppableId
    );
    const endListWrapper = data.lists.find(
      (list) => Object.keys(list)[0] === destination.droppableId
    );

    const startList = startListWrapper[source.droppableId];
    const endList = endListWrapper[destination.droppableId];

    const todoIds = Array.from(startList.todos);
    const [removed] = todoIds.splice(source.index, 1);
    startList.todos = todoIds;

    if (source.droppableId === destination.droppableId) {
      todoIds.splice(destination.index, 0, removed);
      startList.todos = todoIds;
    } else {
      const endTodoIds = Array.from(endList.todos);
      endTodoIds.splice(destination.index, 0, removed);
      endList.todos = endTodoIds;
    }

    setData({ ...data });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', gap: '16px' }}>
        {data.lists.map((listWrapper) => {
        // Extract the inner list object
        const listKey = Object.keys(listWrapper)[0];
        const list = listWrapper[listKey];
        const todos = list.todos.map((todoId) => data.todos[todoId]);
          return (
            <Droppable key={list.id} droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    background: '#f4f4f4',
                    padding: '8px',
                    width: '300px',
                    borderRadius: '4px',
                  }}
                >
                  <h3>{list.title}</h3>
                  {todos.map((todo, index) => (
                    <Draggable key={todo.id} draggableId={todo.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            padding: '8px',
                            marginBottom: '8px',
                            background: '#fff',
                            borderRadius: '4px',
                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                            ...provided.draggableProps.style,
                          }}
                        >
                          {todo.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default DashOr;

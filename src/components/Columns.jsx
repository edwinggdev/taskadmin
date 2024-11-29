export default function Columns(list){

  // const list = data.lists[listId];
              // const todos = list.todos.map((todoId) => data.todos[todoId]);
    console.log("list",list)
    return ( <Fragment key={list.id} >
      <h3>Columns</h3>
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
                      <div>contenido</div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        </Fragment>)
}
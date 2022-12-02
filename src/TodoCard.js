function TodoCard({ todo }) {
  return (
    <div>
      {todo.map((item) => (
        <div
          className="todo-card"
          key={item.id}
          onClick={() => alert(`todo dengan id ${item.id} telah di clicked`)}
        >
          <h2>{item.title}</h2>
          <p>{item.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoCard;
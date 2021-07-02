import Todo from './components/Todo'


function App() {
  return (
    <div>
      <h1>Todos</h1>
        <Todo text='Learn React'/>
        <Todo text='Learn .Net 5 Web'/>
        <Todo text='Learn Data Analytics'/>
        <Todo text='Learn Django and Flask'/>
        <Todo text='Learn Postgres'/>
        <Todo text='Learn Some Java'/>
    </div>
  );
}

export default App;

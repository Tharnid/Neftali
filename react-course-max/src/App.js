import Todo from './components/Todo'
import Modal from './components/Modal'
import Backdrop from './components/Backdrop'

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
        <Modal />
        <Backdrop />
    </div>
  );
}

export default App;

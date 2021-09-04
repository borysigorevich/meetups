import Todo from "./Todo";

function App() {
    return (
        <div className="App">
            <h1>My Todos</h1>
            <Todo text={'Learn React'}/>
            <Todo text={'Master React'}/>
            <Todo text={'some text'}/>
        </div>
    );
}

export default App;
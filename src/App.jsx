import './App.css';
import StudentForm from './components/from'
import StudentList from './components/display';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Student Management</h1>
      </header>
      <main className="App-main">
        <StudentForm />
        <StudentList />
      </main>
    </div>
  );
}

export default App;

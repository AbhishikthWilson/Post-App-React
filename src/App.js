import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import DeletePost from './components/DeletePost';

function App() {
  return (
    <div >
      <AddPost/>
      <SearchPost/>
      <DeletePost/>
    </div>
  );
}

export default App;

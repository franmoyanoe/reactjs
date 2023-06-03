import NavBar from './component/navbar';
import ItemListContainer from './component/itemlistcontainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;

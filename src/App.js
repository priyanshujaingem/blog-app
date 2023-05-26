import './App.css';
import Card from './components/Card';

function App() {
  let title = 'Card Title';
  let cardBody =
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla eveniet nihil officiis fugiat nisi impedit debitis necessitatibus!';
  return (
    <div className="App">
      <div className="card-container">
        <Card id="1" title={title} body={cardBody} />
        <Card id="2" title={title} body={cardBody} />
        <Card id="3" title={title} body={cardBody} />
        <Card id="4" title={title} body={cardBody} />
        <Card id="5" title={title} body={cardBody} />
      </div>
      <button className="read-more">Read More</button>
    </div>
  );
}

export default App;

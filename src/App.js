import './App.css';
import data from './data.json';
import { Card } from 'react-bootstrap';


function App() {

  const color = ['#B7e1ec', '#7ac7dc', '#B9c2c5', '#Ecb15f', '#Ad7933'];

  const getChildren = (data, bgColor) => {
    return (
      data.map(obj => {
        return (
          <Card style={{
            display: 'inline-flex', flexDirection: 'column', border: '5px solid #518534',
            borderRadius: '10px', margin: '10px', padding: '10px', backgroundColor: color[bgColor]
          }}
            id="check" key={obj.id} >
            <p>Id: {obj.id}</p>
            <p>Site Name: {obj.name}</p>
            <a href={`https://${obj.url}`}>Site Url: {obj.name}</a>
            {obj.subData && getChildren(obj.subData, bgColor + 1)}
          </Card>
        )
      })
    )
  }

  return (
    <div className="App">
      {getChildren(data, 0)}
    </div>
  );
}
export default App;

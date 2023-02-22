import './App.css';
import Header from "./Components/Header.js";
import Tasks from "./Components/Tasks.js"
import tasks from './tasks.json'

function App() {
  const bgColor = ['red', 'maroon', 'blue'];

  return (
    <div className="App">
      <Header />
      <div className="main">
        {
          tasks.map((element,index) => {
            return(
              <Tasks
                // key={index} 
                Name={element.Name}
                Description={element.Description}
                Course={element.Course} 
                background={bgColor[index]}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

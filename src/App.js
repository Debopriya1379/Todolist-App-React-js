import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks"
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let inittask;

  if (localStorage.getItem("tasks") === null) {
    inittask = [];
  } else {
    inittask = JSON.parse(localStorage.getItem("tasks"));
  }

  const onDelete = (Task) => {
    console.log("I am onDelete of", Task);

    setTasks(tasks.filter((e) => {
      return e !== Task;
    }));
    localStorage.setItem('tasks', JSON.stringify(tasks))
  };

  const addTasks = (title, desc) => {
    console.log("i am adding this task", title, desc);
    let sNo;
    if (tasks.length === 0) {
      sNo = 0;
    } else {
      sNo = (tasks[(tasks.length) - 1].sno) + 1;
    }
    const mytask = {
      sno: sNo,
      title: title,
      desc: desc,
    }
    setTasks([...tasks, mytask]);
    console.log(mytask);

    // if(localStorage.getItem('tasks')){
    //   localStorage.setItem('tasks',JSON.stringify(tasks));
    // }
  };

  const [tasks, setTasks] = useState(inittask);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  return (
    <Router>
      <div className="container"> 
        <Header title="TodaysList" />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTasks addTasks={addTasks} />
                <Tasks Tasks={tasks} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}
export default App;

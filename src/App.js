import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./components/NavBarComponent";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import LessonTimetable from "./pages/LessonTimetable";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import StudentPage from "./pages/StudentPage";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBarComponent></NavBarComponent>
            <Switch>
                <Route path='/welcome' component={Welcome}/>
                <Route path='/homepage' component={Homepage}/>
                <Route path='/lessonTimetable' component={LessonTimetable}/>
                <Route path='/students' component={StudentPage}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </BrowserRouter>


    </div>
  );
}

export default App;

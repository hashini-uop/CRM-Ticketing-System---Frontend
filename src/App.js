import "./App.css";
import Layout from "./layout/layout";
import Next from "./layout/partials/Next";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Router>
      <Routes>
      <Layout>
        <Route path='/'><Dashboard /></Route>
        <Route path='/'><AddTicket /></Route>
        <Route path='/'><Ticketlist /></Route>
        <Route path='/'><Ticket /></Route>

      </Layout>
      <Route path='/'><Entry /></Route>
      </Routes>
    </Router>

      <Forget />  */}
      <Router>
        <Layout>
          <Next />
        </Layout>
      </Router>
    </div>
  );
}

export default App;

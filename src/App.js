import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import ContactEdit from './components/ContactEdit';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/contact">Add a Contact</Link>
      </div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/contact" component={ContactForm} exact={true} />
        {/* <Route path="/contact-edit/:contact" component={ContactEdit} exact={true} /> */}
      </Switch>
    </BrowserRouter>

  );
}

export default App;

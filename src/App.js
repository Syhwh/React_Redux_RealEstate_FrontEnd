import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';
import { PrivateRoute } from './components/NavigationComponent/PrivateRoute';
import { NavigationComponent } from './components/NavigationComponent';
import Home from './components/HomeComponent'
import { CreateAccount } from './components/CreateAccount';
import { NewProperty } from './components/CreateProperty';
import { LoginComponent } from './components/LoginComponent';
import { AgencyDashboard } from './components/AgencyDashBoard';
import Profile from './components/UserProfileComponent';
import EditProfile from './components/UserProfileComponent/EditProfileComponent';
import SearchResult from './components/SearchResults';
import PropertyDetails from './components/PropertyDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import './assets/styles/coreStyles.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavigationComponent />
        <Switch>
          <PrivateRoute exact path='/property' component={NewProperty} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <PrivateRoute exact path='/profile/edit' component={EditProfile} />
          <PrivateRoute exact path='/dashboard' component={AgencyDashboard} />
          <Route exact path='/search' component={SearchResult} />
          <Route exact path='/details' component={PropertyDetails} />
          <Route exact path='/signup' component={CreateAccount} />
          <Route exact path='/login' component={LoginComponent} />
          <Route exact path='/' component={Home} />
        </Switch>
      </AuthProvider>
    </Router>

  );
}

export default App;

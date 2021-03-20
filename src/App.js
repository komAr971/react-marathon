import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';
import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFound from './routes/NotFound';

import s from './style.module.css';

const App = () => {
  const match = useRouteMatch('/');
  const matchHome = useRouteMatch('/home');
  return (
    <Switch>
      <Route path='/404' component={NotFound} />
      <Route>
        <MenuHeader bgActive={!match.isExact && !matchHome?.isExact}/>
        <div className={cn(s.wrap, {
          [s.isHomePage]: match.isExact || matchHome?.isExact
        })}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/game" component={GamePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route>
              <Redirect to='/404'/>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Route>
    </Switch>
  )
};

export default App;

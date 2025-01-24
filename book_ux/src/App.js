import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { FormProvider } from './context/FormContext';
import UserInfo from './components/UserInfo';
import Title from './components/Title';
import Carousel from './components/Carousel';
import Genres from './components/Genres';
import Recommendations from './components/Recommendations';  
import FinalRecommendations from './components/FinalRecommendations'; 
import ChooseRecMethod from './components/ChooseRecMethod';  
import DescriptionInput from './components/DescriptionInput';

function App() {
  return (
    <FormProvider>
      <Router>
          <div className="container">
              <div className="main-body">
                  <div className="top">
                      <Carousel />  
                  </div>
                  <Switch>
                      <Route exact path="/">
                          <Title />
                      </Route>
                      <Route exact path="/userInfo">
                          <UserInfo />
                      </Route>
                      <Route exact path="/choose-genres">
                          <Genres />
                      </Route>
                      <Route exact path="/final-recommendations">
                          <FinalRecommendations />
                      </Route>
                      <Route exact path="/choose-rec-method">
                          <ChooseRecMethod />  
                      </Route>
                      <Route exact path="/description-input">  
                          <DescriptionInput />
                      </Route>
                      <Route exact path="/recommendations">
                          <Recommendations />
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>
    </FormProvider> 
  );
}

export default App;

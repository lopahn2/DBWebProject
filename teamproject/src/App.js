import React from 'react';
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom';
import {Switch, withRouter} from 'react-router';
import './App.css';

import Start from './Start';
import ContentsBase from './ContentsBase';



import {connect} from 'react-redux';
import {loadTest} from './redux/module/data';



  

const mapStateTopProps = (state) => ({
  
  });
  
const mapDispatchToProps = (dispatch) => ({
  load: () => {
  dispatch(loadTest());
  },
  
});

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  };

  render(){
    
    return(
      <div className="App">
        
        <Switch>
          <Route path="/" exact render={(props) => (
              <Start
              history={this.props.history}
              />
              )}/>
              
          <Route path="/contentsbase"  component={ContentsBase}/>
        
        </Switch>
        
      </div>
      
    );
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
// export default withRouter(App);
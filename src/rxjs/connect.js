import React from 'react';
import {map} from 'rxjs/operators';

const connect = (observable$) => {
  return (Wrapped) => {
  	return class Connect extends React.Component {
    	constructor(props) {
      	super(props)
        this.state = {
        	phase: "LOADING"
        }
      }
      
      componentDidMount() {
      	this.subscription = observable$.pipe(
            map((items) => Object.assign({}, this.state, {data: items, phase: "READY"}))
        ).subscribe((v) => this.setState(v));
      }
      
      componentWillUnmount() {
      	this.subscription.unsubscribe();
      }
      
      render() {
      	if(this.state.phase === "LOADING") {
          return (
          	<div>Loading...</div>
          );
        }
      	return <Wrapped {...this.state} {...this.props} />;
      }
    };
  };
};

export default connect;
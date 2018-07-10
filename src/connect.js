import React from 'react';

const connect = (option) => {
    return (Wrapped) => {
        return class Connect extends React.Component {
            constructor(props) {
                super(props)
                this.state = {
                    phase: "LOADING"
                }
            }
    
            componentDidMount() {
                let path = "api/nonblocking";
                switch(option) {
                    case "fechamentoMaximo":
                    path = "api/nonblocking/fechamentoMaximo";
                    break;
                    case "fechamentoMinimo":
                    path = "api/nonblocking/fechamentoMinimo";
                    break;
                    case "retornoMaximo":
                    path = "api/nonblocking/retornoMaximo";
                    break;
                    case "retornoMinimo":
                    path = "api/nonblocking/retornoMinimo";
                    break;
                    case "volumeMedio":
                    path = "api/nonblocking/volumeMedio";
                }
    
                fetch(path)
                    .then( reponse => reponse.json() )
                    .then( results => {
                    let newState = Object.assign({}, this.state, {phase: "COMPLETE", items: results});
                    console.log(newState);
                    this.setState(newState);
                    });
            }
    
            render() {
                let {phase, items} = this.state;
                if(phase === "LOADING") {
                    return (
                    <div>Loading....</div>
                    );
                }
                return (<Wrapped {...this.state} />);
            };
        };
    };
};

export default connect;
import React, {Component} from 'react';

class App extends Component{

    //se necesitó instalar este pugin @babel/plugin-proposal-class-properties para que babel pudiera interpretar las propiedades de la clase, como lo tenemos escrito aquí, sin ocupar el constructor
    state = {
        task: {
            title:'my first task',
            done: true
        }
    }

    handleClick = ()=> {
        const task = this.state.task;
              task.done = !task.done;
              this.setState({task})
    }
    render() {
        return (
            <div>
                <h3>{this.state.task.title}</h3>
                <h1>{this.state.task.done.toString()}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
export default App
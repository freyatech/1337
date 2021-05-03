import  React  from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Layout from './components/layout';
import { render } from '@testing-library/react';
import { getEmployees } from './utils/api';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      profiles2: []
    }
  }

  componentDidMount() {
    this.getEmp()
  }
  getEmp = async () => {
    let data = await getEmployees();
        this.setState({profiles2:data})
        console.log(data)
    }

  render() {
  return (
    <div className="App">
      <Header></Header>
      <Layout profiles={this.state.profiles2}></Layout>
    </div>
  );
}
  
}

export default App;

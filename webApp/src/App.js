import  React  from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Layout from './components/layout';
import { render } from '@testing-library/react';
import { getEmployees, getInitialData, checkProgres } from './utils/api';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      profiles2: [],
      apiKey: "",
      interval: 0,
      total: 0,
      done: 0,
      APIvisible: true,
      downloadVisible: false,
    }
  }

  componentDidMount() {
    this.getEmp()
  }
  getEmp = async () => {
    let data = await getEmployees();
    console.log(data);
    this.setState({ profiles2: data });
  }
  handleChange = (e) => {
    this.setState({ apiKey: e.target.value });
  }
  handleSubmit = async () => {
    console.log(this.state.apiKey)
    let response = await getInitialData(this.state.apiKey)
    response == 1 ? this.getEmp() : console.log(response)
    this.setState({interval:setInterval(() => {
      this.checkProgress()
    }, 1000)})
  }
  checkProgress = async () => {
    let response = await checkProgres()
    console.log(response)
    console.log(response.done)
    this.setState({total:response.total,done:response.done})
    if (response.done >= response.total) {
      console.log(response.done > response.total)
      clearInterval(this.state.interval)
    }
  }


  render() {
  return (
    <div className="App">
      <Header></Header>
      <div><label>Please provide API key:<input value={this.state.apiKey} onChange={(e) => { this.handleChange(e) }}></input></label><button onClick={() => this.handleSubmit()}>submit</button><label> Downloaded {this.state.done} out of {this.state.total} images</label></div>
      <Layout profiles={this.state.profiles2}></Layout>
    </div>
  );
}
  
}

export default App;

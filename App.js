import { StatusBar } from 'expo-status-bar';
import React, {Component, Fragment } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Api from "./components/Api";
import Filmes from "./components/Filmes";

class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			filmes: [],
			s: ""
		}
	}

	componentDidMount(){
		if(this.state.s.length > 0){
			const response = Api.get("?apikey=469f29c0&s=" + this.state.s.replace(" ", "+")).then(resp =>{
				this.setState({ filmes: resp.data.Search});
			});
		}
	}

	generateData = () => {
		return ( 
			<Fragment>
			 { this.state.filmes.map((item, key) => { return ( <Filmes data={item}/> );})} 
			</Fragment>
		);
	}

	searchFull = () => {
		if(this.state.s.length > 0){
			console.log(this.state.s.replace(" ", "+"));
			const response = Api.get("?apikey=469f29c0&s=" + this.state.s.replace(" ", "+")).then(resp =>{
				this.setState({ filmes: resp.data.Search});
				console.log(this.state.filmes.length > 0);
			});
		}
		else this.setState({filmes: []});
	}

	stateHandler = (text) =>{ 
		this.setState({s: text}); 
	}


	render(){
		console.log(this.state.filmes);
		return (
		    <View style={styles.container}>
			<TextInput label="Pesquisar" onChange={(text) => this.stateHandler(text.target.value)} style={styles.inpute} placeholder="Pesquise"/>
			<Button title="Pesquisar" onPress={this.searchFull}/>
			{this.state.filmes.length > 0 ? this.generateData() : ""}
		   </View>
		);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inpute: {
    borderWidth: 1
  }
});



export default App;

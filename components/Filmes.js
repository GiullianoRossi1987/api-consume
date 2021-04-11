import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


class Filmes extends Component{
	
	constructor(props){
		super(props);
	}

	render(){
		const content = this.props.data;
		return(
			<View style={cards.movieCard}>
				<Text>Título: {content.Title} <br/>Ano: {content.Year} <br/>Tipo (série/Filme): {content.Type}<br/></Text>
				<Image source={content.Poster}/>
			</ View>
		);
	}
}

const cards = StyleSheet.create({
	movieCard: {
		display: "inline-flex",
		backgroundColor: "#ccc",
		alignItems: "left",
		justifyContent: "left",
		borderWidth: 3,
		marginBottom: 10,
		width: 400,
		height: 200
	}
});

export default Filmes;

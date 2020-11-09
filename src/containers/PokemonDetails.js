import React, { useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';

import Styles from '../theme/Styles';
import PokemonDetailsStyles from './styles/PokemonDetailsStyles';

import { connect } from 'react-redux';
import { getPokemonDetails } from '../redux/actions/pokemondetails';

function PokemonDetails(props) {
  const { getPokemonDetails, pokemonDetails, isGetPokemonDetailsLoading } = props;

  useEffect(() => {
    const { params } = props.route;
    const { url } = params;
    getPokemonDetails(url);
  }, []);

  return (
    <View style={[Styles.mainContainer, Styles.backWhite]}>
      {
        isGetPokemonDetailsLoading ?
        <ActivityIndicator size="large" color="#000"></ActivityIndicator>
        :
        null
      }
      <>
        <View style={[PokemonDetailsStyles.pokemonMainDetailsContainer]}>
          <Text style={[PokemonDetailsStyles.pokemonNameText]}>{pokemonDetails ? pokemonDetails.name : ''}</Text>
          <Text style={[PokemonDetailsStyles.pokemonMainAttributeText]}>exp: {pokemonDetails ? pokemonDetails.base_experience : '0'}</Text>
          <Text style={[PokemonDetailsStyles.pokemonMainAttributeText]}>h: {pokemonDetails ? pokemonDetails.height : '0'}m</Text>
          <Text style={[PokemonDetailsStyles.pokemonMainAttributeText]}>w: {pokemonDetails ? pokemonDetails.weight: '0'}kg</Text>
        </View>
        <ScrollView style={[PokemonDetailsStyles.pokemonOtherDetailsContainer]} showsVerticalScrollIndicator={false}>
          <Text style={[PokemonDetailsStyles.pokemonOtherDetailsContainerTitle]}>Other Attributes</Text>
          <View style={[PokemonDetailsStyles.pokemonOtherAttribute]}>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeTitle]}>Species</Text>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeValue]}>{pokemonDetails && pokemonDetails.species ? pokemonDetails.species.name : ''}</Text>
          </View>
          <View style={[PokemonDetailsStyles.pokemonOtherAttribute]}>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeTitle]}>Abilities</Text>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeValue]}>{pokemonDetails ? pokemonDetails.abilities.map((ability) => { return ability.ability.name }).join(', ') : ''}</Text>
          </View>
          <View style={[PokemonDetailsStyles.pokemonOtherAttribute]}>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeTitle]}>Forms</Text>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeValue]}>{pokemonDetails ? pokemonDetails.forms.map((form) => { return form.name }).join(', ') : ''}</Text>
          </View>
          <View style={[PokemonDetailsStyles.pokemonOtherAttribute]}>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeTitle]}>Game Indices</Text>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeValue]}>{pokemonDetails ? pokemonDetails.game_indices.map((indices) => { return `${indices.game_index} - ${indices.version.name}` }).join(', ') : ''}</Text>
          </View>
          <View style={[PokemonDetailsStyles.pokemonOtherAttribute]}>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeTitle]}>Game Indices</Text>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeValue]}>{pokemonDetails ? pokemonDetails.game_indices.map((indices) => { return `${indices.game_index} - ${indices.version.name}` }).join(', ') : ''}</Text>
          </View>
          <View style={[PokemonDetailsStyles.pokemonOtherAttribute]}>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeTitle]}>Moves</Text>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeValue]}>{pokemonDetails ? pokemonDetails.moves.map((move) => { return move.move.name }).join(', ') : ''}</Text>
          </View>
          <View style={[PokemonDetailsStyles.pokemonOtherAttribute]}>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeTitle]}>Stats</Text>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeValue]}>{pokemonDetails ? pokemonDetails.stats.map((stat) => { return `${stat.stat.name} - ${stat.base_stat}` }).join(', ') : ''}</Text>
          </View>
          <View style={[PokemonDetailsStyles.pokemonOtherAttribute, PokemonDetailsStyles.pokemonOtherAttributeLast]}>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeTitle]}>Types</Text>
            <Text style={[PokemonDetailsStyles.pokemonOtherAttributeValue]}>{pokemonDetails ? pokemonDetails.types.map((type) => { return type.type.name }).join(', ') : ''}</Text>
          </View>
        </ScrollView>
      </>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemonDetails: state.pokemondetails.pokemonDetails,
    isGetPokemonDetailsLoading: state.pokemondetails.isGetPokemonDetailsLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonDetails: (url) => dispatch(getPokemonDetails(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
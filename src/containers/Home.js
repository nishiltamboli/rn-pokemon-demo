import React, { useCallback, useEffect, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Styles from '../theme/Styles';
import Colors from '../theme/Colors';
import HomeStyles from './styles/HomeStyles';
import NavigationService from '../services/NavigationService';
import Icon from '../components/Icon';

import { connect } from 'react-redux';
import { getAllPokemons } from '../redux/actions/home';

function Home(props) {
  const { getAllPokemons, allPokemons, isGetAllPokemonLoading, nextUrl } = props;
  
  useEffect(() => {
    getAllPokemons(null, true);
  }, []);

  openPokemonDetails = (url) => {
    NavigationService.goToRoute('PokemonDetails', { url });
  }

  const renderItem = useCallback(
    ({ item }) => <TouchableOpacity style={HomeStyles.pokemonItem} onPress={() => openPokemonDetails(item.url)}>
      <Text style={HomeStyles.pokemonItemText}>
        {item.name}
      </Text>
      <Icon family="MaterialIcons" name="chevron-right" color={Colors.textDark} size={18} />
    </TouchableOpacity>,
    []
  );

  const keyExtractor = useCallback((item, index) => index.toString(), []);

  return (
    <View style={[HomeStyles.mainContainer, Styles.backWhite]}>
      <FlatList
        onEndReached={() => getAllPokemons(nextUrl, false)}
        onEndReachedThreshold={0.8}
        refreshing={isGetAllPokemonLoading}
        data={allPokemons}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    allPokemons: state.home.allPokemons,
    nextUrl: state.home.nextUrl,
    isGetAllPokemonLoading: state.home.isGetAllPokemonLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllPokemons: (nextUrl, reset) => dispatch(getAllPokemons(nextUrl, reset)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
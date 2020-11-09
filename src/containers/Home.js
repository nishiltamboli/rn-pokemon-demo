import React, { useCallback, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
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

  const openPokemonDetails = (url) => {
    NavigationService.goToRoute('PokemonDetails', { url });
  };

  const renderItem = useCallback(
    ({ item }) => <TouchableOpacity activeOpacity={0.8} style={HomeStyles.pokemonItem} onPress={() => openPokemonDetails(item.url)}>
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
      {
        isGetAllPokemonLoading && nextUrl==='FIRST' ?
          <ActivityIndicator size="large" color="#000"></ActivityIndicator>
          :
          null
      }
      <FlatList
        onEndReached={() => getAllPokemons(nextUrl, false)}
        onEndReachedThreshold={1}
        refreshing={isGetAllPokemonLoading}
        data={allPokemons}
        contentContainerStyle={[Styles.flexGrow1]}
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
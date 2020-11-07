import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Styles from '../theme/Styles';

import { connect } from 'react-redux';
import { getAllPokemons } from '../redux/actions/home';

function Home(props) {
  const { getAllPokemons, allPokemons } = props;
  
  useEffect(() => {
    getAllPokemons(1, 10);
  }, []);

  return (
    <View style={[Styles.mainContainer]}>
      <Text>This is home screen</Text>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    allPokemons: state.home.allPokemons,
    page: state.home.page,
    limit: state.home.limit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllPokemons: (page, limit) => dispatch(getAllPokemons(page, limit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
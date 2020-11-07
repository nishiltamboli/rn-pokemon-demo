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
    offset: state.home.offset,
    limit: state.home.limit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllPokemons: (offset, limit) => dispatch(getAllPokemons(offset, limit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React from 'react';
import { View } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Icon(props) {

  const getIcon = () => {
    let iconElement =  <View />;
    switch( props.family ) {
    case 'AntDesign':
      iconElement = <AntDesign name={props.name} color={props.color} size={props.size} style={props.style} />;
      break;
    case 'Fontisto':
      iconElement = <Fontisto name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    case 'Entypo':
      iconElement = <Entypo name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    case 'EvilIcons':
      iconElement = <EvilIcons name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    case 'FontAwesome':
      iconElement = <FontAwesome name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    case 'Foundation':
      iconElement = <Foundation name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    case 'Ionicons':
      iconElement = <Ionicons name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    case 'MaterialIcons':
      iconElement = <MaterialIcons name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    case 'MaterialCommunityIcons':
      iconElement = <MaterialCommunityIcons name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    case 'Feather':
      iconElement = <Feather name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    case 'Octicons':
      iconElement = <Octicons name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    case 'Zocial':
      iconElement = <Zocial name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    case 'SimpleLineIcons':
      iconElement = <SimpleLineIcons name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    default:
      iconElement = <MaterialIcons name={props.name} size={props.size} style={props.style} color={props.color} />;
      break;
    }
    return iconElement;
  };

  return (
    getIcon()
  );
}

export default Icon;
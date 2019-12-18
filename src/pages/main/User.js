import React, {Component} from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import assets from '../../assets';
import styles from '../../styles'


export default class User extends Component {
    
    static navigationOptions = {
        title: 'Usuário',
        tabBarIcon: ({ tintColor }) => (<Icon name={'user'} size={30} color={tintColor} />)
    };

    state = {
    }


    render(){
        return(
            <ImageBackground 
            source={assets.bg}
            style={styles.default.bg}
            >

                
            </ImageBackground>
        );
    }

}

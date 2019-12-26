import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            style={styles.welcomeImage}
            source={require('/Users/Darshin/Documents/CODING/Grace-Hopper-Program/SENIOR PHASE/Stackathon/Hydro-Bud/assets/images/HydroBudHome-15.png')}
          />
        </View>
        <Text style={styles.introText}>Hydro Bud</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.button}> Login </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Signup')}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.button}> Signup </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.disclaimerText}>
          ** Disclaimer: This app is not intended to provide an accurate medical
          hydration assessment. Please consult your physician regarding any
          water intake recommendations. The designer/engineer is not responsible
          for any medical complications. Please drink responsibly.
        </Text>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    marginBottom: 30,
  },
  introText: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 100,
    justifyContent: 'center',
    fontSize: 50,
    color: '#ff4760',
  },
  buttonContainer: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    overflow: 'hidden',
    textAlign: 'center',
  },
  button: {
    color: '#86afb5',
    fontSize: 25,
    fontWeight: '400',
    overflow: 'hidden',
    textAlign: 'center',
  },
  welcomeContainer: {
    flex: 1,
  },
  welcomeImage: {
    width: 410,
    height: 720,
  },

  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  disclaimerText: {
    fontSize: 12,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'justify',
    justifyContent: 'flex-end',
    marginTop: 370,
    marginRight: -15,
    marginLeft: -15,
    backgroundColor: 'white',
    padding: 5,
  },
  navigationFilename: {
    marginTop: 5,
  },
});

import React, { Component } from 'react';
import _ from 'lodash';

import { View, Text, Image, StyleSheet, Animated, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Four from '../components/Four';
import Five from '../components/Five';
import Six from '../components/Six';
import Seven from '../components/Seven';
import Eight from '../components/Eight';
import Nine from '../components/Nine';
import Ten from '../components/Ten';
import Eleven from '../components/Eleven';
import Twelve from '../components/Twelve';
import Thirteen from '../components/Thirteen';

const BLINK_TIME = 150;
const images = [
  require('../assets/images/Grow_13A.png'),
  require('../assets/images/Grow_13B.png'),
  require('../assets/images/Grow_13C.png'),
];

export default class CounterScreen extends Component {
  constructor(props) {
    super(props);

    let stateReceived = props.navigation.state.params;

    this.state = {
      total: stateReceived.totalCups,
      remaining: stateReceived.totalCups,
      eyes: true,
      index: 0,
    };

    this.updateState = this.updateState.bind(this);
    this.blink = this.blink.bind(this);
    this.next = this.next.bind(this);
    setTimeout(this.blink, 1000);
  }

  componentDidMount() {
    // console.log('STATE', this.state);

    this.next();
  }

  onComponentWillUnmount() {
    clearTimeout(this._blinkTimer);
  }

  next() {
    setTimeout(() => {
      this.setState({ index: (this.state.index + 1) % 3 });
      this.next();
    }, 300);
  }

  blink = () => {
    this.setState({ eyes: false });
    setTimeout(() => this.setState({ eyes: true }), BLINK_TIME);
    this._blinkTimer = setTimeout(this.blink, _.random(1000, 2000));
  };

  updateState() {
    if (this.state.remaining > 0) {
      this.setState({
        remaining: this.state.remaining - 1,
      });
    } else {
      Alert.alert('You have had enough water for the day! Come back tomorrow!');
    }
  }
  render() {
    // console.log('THIS.STATE ', this.state);
    // console.log('THIS.TOTAL', this.state.total.totalCups);
    // console.log('PROPSINCOUNTER', this.props.navigation.state.params);
    // console.log('THIS.REMAINING', this.state.remaining);

    const { eyes } = this.state;

    return (
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={() => console.log('logged out')}>
          <View style={styles.logOutContainer}>
            <Text style={styles.logOutText}>Log out</Text>
          </View>
        </TouchableOpacity> */}
        {this.state.remaining > 1 ? (
          <Text style={styles.introText}>
            Keep track below to help me grow!{'\n'}
            <Text style={styles.funText}>{this.state.remaining}</Text>
            {'\n'} more cups to go!
          </Text>
        ) : this.state.remaining === 1 ? (
          <Text style={styles.introText}>
            Keep track below to help me grow!{'\n'}
            <Text style={styles.funText}>{this.state.remaining} </Text>
            {'\n'}more cup to go!
          </Text>
        ) : (
          <Text style={styles.introText}>
            Thanks for hydrating me! {'\n'}
            Time to dance the night away! {'\n'}
            {'\n'}
            See you tomorrow morning!{'\n'}
          </Text>
        )}
        <TouchableOpacity onPress={this.updateState}>
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>+</Text>
          </View>
        </TouchableOpacity>

        {this.state.total === '13' ? (
          this.state.remaining === '13' ? (
            <One eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 12 ? (
            <Two eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 11 ? (
            <Three eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 10 ? (
            <Four eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 9 ? (
            <Five eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 8 ? (
            <Six eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 7 ? (
            <Seven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 6 ? (
            <Eight eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 5 ? (
            <Nine eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 4 ? (
            <Ten eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 3 ? (
            <Eleven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 2 ? (
            <Twelve eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 1 ? (
            <Thirteen eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 0 ? (
            <Image source={images[this.state.index]} style={styles.image} />
          ) : null
        ) : this.state.total === '12' ? (
          this.state.remaining === '12' ? (
            <One eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 11 ? (
            <Two eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 10 ? (
            <Three eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 9 ? (
            <Four eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 8 ? (
            <Five eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 7 ? (
            <Six eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 6 ? (
            <Seven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 5 ? (
            <Eight eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 4 ? (
            <Nine eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 3 ? (
            <Ten eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 2 ? (
            <Eleven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 1 ? (
            <Twelve eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 0 ? (
            <Image source={images[this.state.index]} style={styles.image} />
          ) : null
        ) : this.state.total === '11' ? (
          this.state.remaining === '11' ? (
            <One eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 10 ? (
            <Three eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 9 ? (
            <Four eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 8 ? (
            <Five eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 7 ? (
            <Six eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 6 ? (
            <Seven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 5 ? (
            <Eight eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 4 ? (
            <Nine eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 3 ? (
            <Ten eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 2 ? (
            <Eleven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 1 ? (
            <Twelve eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 0 ? (
            <Image source={images[this.state.index]} style={styles.image} />
          ) : null
        ) : this.state.total === '10' ? (
          this.state.remaining === '10' ? (
            <One eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 9 ? (
            <Two eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 8 ? (
            <Three eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 7 ? (
            <Four eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 6 ? (
            <Six eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 5 ? (
            <Eight eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 4 ? (
            <Nine eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 3 ? (
            <Ten eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 2 ? (
            <Eleven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 1 ? (
            <Twelve eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 0 ? (
            <Image source={images[this.state.index]} style={styles.image} />
          ) : null
        ) : this.state.total === '9' ? (
          this.state.remaining === '9' ? (
            <One eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 8 ? (
            <Three eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 7 ? (
            <Four eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 6 ? (
            <Six eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 5 ? (
            <Seven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 4 ? (
            <Eight eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 3 ? (
            <Nine eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 2 ? (
            <Eleven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 1 ? (
            <Twelve eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 0 ? (
            <Image source={images[this.state.index]} style={styles.image} />
          ) : null
        ) : this.state.total === '8' ? (
          this.state.remaining === '8' ? (
            <One eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 7 ? (
            <Two eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 6 ? (
            <Four eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 5 ? (
            <Six eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 4 ? (
            <Eight eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 3 ? (
            <Ten eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 2 ? (
            <Eleven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 1 ? (
            <Twelve eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 0 ? (
            <Image source={images[this.state.index]} style={styles.image} />
          ) : null
        ) : this.state.total === '7' ? (
          this.state.remaining === '7' ? (
            <One eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 6 ? (
            <Three eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 5 ? (
            <Five eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 4 ? (
            <Seven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 3 ? (
            <Nine eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 2 ? (
            <Eleven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 1 ? (
            <Twelve eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 0 ? (
            <Image source={images[this.state.index]} style={styles.image} />
          ) : null
        ) : this.state.total === '6' ? (
          this.state.remaining === '6' ? (
            <One eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 5 ? (
            <Three eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 4 ? (
            <Six eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 3 ? (
            <Seven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 2 ? (
            <Nine eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 1 ? (
            <Eleven eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 0 ? (
            <Image source={images[this.state.index]} style={styles.image} />
          ) : null
        ) : this.state.total === '5' ? (
          this.state.remaining === '5' ? (
            <One eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 4 ? (
            <Three eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 3 ? (
            <Six eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 2 ? (
            <Nine eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 1 ? (
            <Twelve eyes={eyes ? 'open' : 'closed'} />
          ) : this.state.remaining === 0 ? (
            <Image source={images[this.state.index]} style={styles.image} />
          ) : null
        ) : null}
      </View>
    );
  }
}

CounterScreen.navigationOptions = {
  title: 'Tracker',
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  logOutContainer: {
    backgroundColor: '#4cd0f5',
    borderColor: 'white',
    marginLeft: 50,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 100,
    borderRadius: 5,
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
  logOutText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 270,
    justifyContent: 'center',
    marginLeft: 80,
    marginTop: 40,
    // transform: [{ rotate: '30deg' }],
  },

  buttonContainer: {
    backgroundColor: '#4cd0f5',
    borderColor: 'white',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
  button: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    overflow: 'hidden',
    textAlign: 'center',
  },
  introText: {
    marginTop: 40,
    marginLeft: 50,
    marginRight: 50,
    // alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: '#ff4760',
    textAlign: 'center',
  },
  funText: {
    fontSize: 36,
    color: '#ff4760',
    fontWeight: '700',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  welcomeImage: {
    width: 5,
    height: 5,
    resizeMode: 'contain',
  },
});

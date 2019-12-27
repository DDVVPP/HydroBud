import React, { Component } from 'react';
import * as firebase from 'firebase';
// import { firebaseConfig } from './firebase/config';

import {
  View,
  Text,
  TextInput,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { FirebaseWrapper } from '../firebase/firebase';

export default class SignupScreen extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      height: 0,
      weight: 0,
      age: 0,
      totalCups: 0,
      // remaining: 0,
    };
    this.createUser = this.createUser.bind(this);
    this.calculateCups = this.calculateCups.bind(this);
  }

  calculateCups() {
    let firstCalc = this.state.weight / 2.2;
    let calcInCups = 0;
    if (this.state.age < 30 && this.state.age > 0) {
      let secondCalc = firstCalc * 40;
      let calcInOunces = secondCalc / 28.3;
      calcInCups = calcInOunces / 8;
    } else if (this.state.age <= 55) {
      let secondCalc = firstCalc * 35;
      let calcInOunces = secondCalc / 28.3;
      calcInCups = calcInOunces / 8;
    } else if (this.state.age > 55) {
      let secondCalc = firstCalc * 30;
      let calcInOunces = secondCalc / 28.3;
      calcInCups = calcInOunces / 8;
    }
    return Math.ceil(calcInCups).toFixed(0);
  }

  async createUser() {
    try {
      if (this.state.firstName === '') {
        Alert.alert('Please fill First Name');
      } else if (this.state.lastName === '') {
        Alert.alert('Please fill in Last Name');
      } else if (
        !this.state.email.includes('@') ||
        !this.state.email.includes('.')
      ) {
        Alert.alert('Please enter valid email address');
      } else if (this.state.password.length < 6) {
        Alert.alert('Password must be six characters long');
      } else if (
        Number(this.state.height) <= 0 ||
        Number(this.state.height) >= 100
      ) {
        Alert.alert('Please enter valid height in inches');
      } else if (
        Number(this.state.weight) <= 0 ||
        Number(this.state.weight) >= 1000
      ) {
        Alert.alert('Please enter valid weight in inches');
      } else if (this.state.age < 13 || this.state.age > 120) {
        Alert.alert('Please enter valid age');
      } else {
        this.setState({
          totalCups: this.calculateCups(),
        });

        await firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
          );
        await FirebaseWrapper.GetInstance().CreateNewDocument('users', {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          height: Number(this.state.height),
          weight: Number(this.state.weight),
          age: Number(this.state.age),
          totalCups: Number(this.calculateCups()),
          // remaining: Number(this.calculateCups()),
        });
        this.props.navigation.navigate('Confirmation', this.state);
      }
    } catch (error) {
      console.log('createUser not working ', error);
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              width: 155,
              height: 100,
              color: 'powderblue',
            }}
          >
            <Text style={styles.inputTitle}>First Name</Text>
          </View>
          <View
            style={{
              width: 205,
              height: 100,
              color: 'powderblue',
            }}
          >
            <TextInput
              onChangeText={text => this.setState({ firstName: text })}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              value={this.firstName}
              style={styles.inputFields}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View
            style={{
              width: 155,
              height: 100,
              color: 'powderblue',
            }}
          >
            <Text style={styles.inputTitle}>Last Name</Text>
          </View>
          <View
            style={{
              width: 205,
              height: 100,
              color: 'powderblue',
            }}
          >
            <TextInput
              onChangeText={text => this.setState({ lastName: text })}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              value={this.lastName}
              style={styles.inputFields}
            />
          </View>
        </View>

        <View style={styles.container}>
          <View
            style={{
              width: 155,
              height: 100,
              color: 'powderblue',
            }}
          >
            <Text style={styles.inputTitle}>Email</Text>
          </View>
          <View
            style={{
              width: 205,
              height: 100,
              color: 'powderblue',
            }}
          >
            <TextInput
              onChangeText={text => this.setState({ email: text })}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCompleteType="email"
              autoCorrect={false}
              value={this.email}
              style={styles.inputFields}
            />
          </View>
        </View>

        <View style={styles.container}>
          <View
            style={{
              width: 155,
              height: 100,
              color: 'powderblue',
            }}
          >
            <Text style={styles.inputTitle}>Password</Text>
          </View>
          <View
            style={{
              width: 205,
              height: 100,
              color: 'powderblue',
            }}
          >
            <TextInput
              onChangeText={text => this.setState({ password: text })}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              value={this.password}
              style={styles.inputFields}
            />
          </View>
        </View>

        <View style={styles.container}>
          <View
            style={{
              width: 155,
              height: 100,
              color: 'powderblue',
            }}
          >
            <Text style={styles.inputTitle}>Height in inches</Text>
          </View>
          <View
            style={{
              width: 205,
              height: 100,
              color: 'powderblue',
            }}
          >
            <TextInput
              onChangeText={text => this.setState({ height: text })}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              value={this.height}
              keyboardType="numeric"
              style={styles.inputFields}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View
            style={{
              width: 155,
              height: 100,
              color: 'powderblue',
            }}
          >
            <Text style={styles.inputTitle}>Weight in lbs</Text>
          </View>
          <View
            style={{
              width: 205,
              height: 100,
              color: 'powderblue',
            }}
          >
            <TextInput
              onChangeText={text => this.setState({ weight: text })}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              value={this.weight}
              keyboardType="numeric"
              style={styles.inputFields}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View
            style={{
              width: 155,
              height: 100,
              color: 'powderblue',
            }}
          >
            <Text style={styles.inputTitle}>Age</Text>
          </View>
          <View
            style={{
              width: 205,
              height: 100,
              color: 'powderblue',
            }}
          >
            <TextInput
              onChangeText={text => this.setState({ age: text })}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              value={this.age}
              keyboardType="numeric"
              style={styles.inputFields}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={this.createUser}>
            <View style={styles.buttonContainer}>
              <Text style={styles.button}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SignupScreen.navigationOptions = {
  title: 'Sign Up',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  inputTitle: {
    marginTop: 10,
    marginLeft: 5,
    padding: 8,
    fontSize: 18,
    color: '#545454',
  },
  inputFields: {
    fontSize: 18,
    backgroundColor: 'rgba(255, 69, 102, 0.05)',
    padding: 13,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 69, 102, 0.5)',
  },
  buttonContainer: {
    backgroundColor: '#4cd0f5',
    borderColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 15,
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
  button: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    textAlign: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
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
  navigationFilename: {
    marginTop: 5,
  },
});

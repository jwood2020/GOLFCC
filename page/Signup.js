/* import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { app } from '../src/firebase';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
 
const Signup = () => {
    const navigation = useNavigation();
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
        app.auth();
        try {
            createUserWithEmailAndPassword(email, password);
          } 

        catch (error) {
            alert(error);
          }

        finally {
            navigation.nagivate("Home");
        }
    }

    return (
        <View style={styles.container}>
          <Text style={styles.header}>Signup</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
    );
};
 
export default Signup; */

import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default function RegistrationScreen({navigation}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        
        firebase.app().auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("hello world1");
                const user = userCredential.user;
                navigation.navigate('Home');
            })

            .catch(error => {console.log(error); alert(error);})
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    header: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: 'blue',
      width: '80%',
      height: 40,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
});





/* import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TextInput
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  getDatabase,
  ref,
  onValue,
  push,
  update,
  remove
} from 'firebase/database';
import { app } from '../src/firebase.js';

const App = () => {
  const [todos, setTodos] = useState({});
  const [presentTodo, setPresentTodo] = useState('');
  const todosKeys = Object.keys(todos);

  const db = getDatabase(app);

  useEffect(() => {
    return onValue(ref(db, '/todos'), querySnapShot => {
      let data = querySnapShot.val() || {};
      let todoItems = {...data};
      setTodos(todoItems);
    });
  }, []);

  function addNewTodo() {
    push(ref(db, '/todos'), {
      done: false,
      title: presentTodo,
    });
    setPresentTodo('');
  }

  function clearTodos() {
    remove(ref(db, '/todos'));
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <View>
        {todosKeys.length > 0 ? (
          todosKeys.map(key => (
            <ToDoItem
              key={key}
              id={key}
              todoItem={todos[key]}
            />
          ))
        ) : (
          <Text>No todo item</Text>
        )}
      </View>

      <TextInput
        placeholder="New todo"
        value={presentTodo}
        style={styles.textInput}
        onChangeText={text => {
          setPresentTodo(text);
        }}
        onSubmitEditing={addNewTodo}
      />

      <View>
        <View style={{marginTop: 20}}>
          <Button
            title="Add new todo"
            onPress={addNewTodo}
            color="green"
            disabled={presentTodo == ''}
            />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="Clear the todo list"
            onPress={clearTodos}
            color="red"
            style={{marginTop: 20}}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const ToDoItem = ({todoItem: {title, done}, id}) => {
  const [doneState, setDone] = useState(done);

  const onCheck = (isChecked) => {
    setDone(isChecked);
    update(ref(db, '/todos'), {
      [id]: {
        title,
        done: !doneState,
      },
    });
  };
  return (
    <View style={styles.todoItem}>
      <Text style={[styles.todoText, {opacity: doneState ? 0.2 : 1}]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12
  },
  contentContainerStyle: {
    padding: 24
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#afafaf',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    fontSize: 20,
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center'
  },
  todoText: {
    paddingHorizontal: 5,
    fontSize: 16
  },
});

export default App; */
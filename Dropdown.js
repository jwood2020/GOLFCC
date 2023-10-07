/* A file used to store dropdown, not actually used for anything */

import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const DropDown = () => {

    const data = [
        { label: 'Fox Run Golf Club', value: '1' },
        { label: 'Fox Run Golf Club', value: '2' },
        { label: 'Fox Run Golf Club', value: '3' },
        { label: 'Fox Run Golf Club', value: '4' },
        { label: 'Fox Run Golf Club', value: '5' },
        { label: 'Fox Run Golf Club', value: '6' },
        { label: 'Fox Run Golf Club', value: '7' },
        { label: 'Fox Run Golf Club', value: '8' },
    ];

    const [value, setValue] = useState(null);

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            placeholder='Select a Golf Course'
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            itemTextStyle={styles.itemText}
            /* inputContainerStyle={styles.dropmenu} */
            containerStyle={styles.dropmenu}
            data={data}
            labelField="label"
            valueField="value"
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
        />
    )
}

export default DropDown;

const styles = StyleSheet.create({

  dropdown: {
    width: 300,
    height: 40,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  placeholderStyle: {
    fontSize: 14,
    color: 'white',
  },

  selectedTextStyle: {
    fontSize: 14,
    color: 'white',
  },

  iconStyle: {
    width: 20,
    height: 20,
  },

  dropmenu: {
    backgroundColor: 'transparent',
  },

  itemText: {
    color: 'white',
  }

});
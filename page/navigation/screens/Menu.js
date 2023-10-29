import React from "react";
import { View, Text } from 'react-native';
import { SelectList } from "react-native-dropdown-select-list";
import RNPickerSelect from 'react-native-picker-select';

const Menu = () => {

    const [selected, setSelected, ] = React.useState("");

    const data = [
      {key:"1",value:"Bucsh Light"},
      {key:"2",value:"Coors Light"},
      {key:"3",value:"Bud Light"},
      {key:"4",value:"Michelob Ultra"},
    ];

    const contentToShow = {
      1: item1(), 
      2: 'Content for Item 2',
      3: 'Content for Item 3',
    };

    function item1() {
      return (
        <View>
          <Text>Busch Light</Text>
        </View>
      )
    }

    const handleItemChange = (value) => {
      setSelected(value);
    };

    return(
      <View style={{paddingHorizontal: 20, paddingVertical:50, flex:1}}>
        <SelectList 
          data={data} 
          setSelected={setSelected} 
          dropdownItemStyles={{marginHorizontal: 10}}
          dropdownTextStyles={{color:'black'}}
          placeholder="Select Item"
          maxHeight={1000}
          onValueChange={handleItemChange}
          items={data}
        />
        {selected && (
          <Text>{contentToShow[selected]}</Text>
        )}  

        
      </View>
    )
}

export default Menu;
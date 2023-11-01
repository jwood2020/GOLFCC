import React, { useState} from "react";
import { View, Text, StyleSheet, Button, Image, Span, ImageBackground } from 'react-native';
import { SelectList } from "react-native-dropdown-select-list";
import RNPickerSelect from 'react-native-picker-select';



const Menu = () => {

    const [selected, setSelected, ] = React.useState("");

    // A key defines the number of what value is called.
    const data = [
      {key:"1",value:"Busch Light"},
      {key:"2",value:"Coors Light"},
      {key:"3",value:"Bud Light"},
      {key:"4",value:"Michelob Ultra"},
      {key:"5",value:"Chips"},
      {key:"6",value:"Candy"},
      {key:"7",value:"Burgers"},
      {key:"8",value:"Hot Dogs"},
      {key:"9",value:"Budweiser"},
      {key:"10",value:"Draft - Pitchers"},
      {key:"11",value:"White Claw"},
      {key:"12",value:"Water"},
      {key:"13",value:"Soda"},
      {key:"14",value:"Energy Drinks"},
      {key:"15",value:"Powerade"},
      {key:"16",value:"Highnoon"},
      {key:"17",value:"Miller Lite"},
      {key:"18",value:"Twisted Tea"},
      {key:"19",value:"Sandwhiches"},
      {key:"20",value:"French Fries"},
    ];

    // Sort the items array based on the label property.
    data.sort((a, b) => a.value.localeCompare(b.value));

    const contentToShow = {
      1: item1(), 
      2: 'Content for Item 2',
      3: 'Content for Item 3',
    };

    //Counts the quantity of the product the users selects.
    const handleItemChange = (value) => {
      setSelected(value);
    };

    // Busch Light product display.
    function item1() {

      const [quantity, setQuantity] = useState(1);
      const [price, setPrice] = useState(4 );

      // Increments the quantity by 1 when the button is pressed.
      function handleIncrement() {
        setQuantity(quantity + 1);
        handlePrice()
      };
    
      // Decrement the quantity by 1 when the button is pressed.
      function handleDecrement() {
        if (quantity > 0) {
          setQuantity(quantity - 1);
          handlePrice()
        }
      }

      // TODO 
      // Handles the price based off of what the quantity. Code isn't in sync with the view. View will always display the previous value of product.
      function handlePrice() {
        setPrice(quantity *  4)
      }

      return (
        <View>
          <Text style={styles.heading}>Busch Light:</Text>
          <Image style={styles.image} source={require('./photos/buschlightcan.webp')} />
          <Text style={styles.subheading}>Description:</Text>
          <Text style={styles.text}>Busch Light Beer is a light bodied American beer that delivers fewer calories and a classic taste.</Text>
          <View style={styles.container}>
            <View style={styles.buttonBox}>
              <Button onPress={handleDecrement} title='-' />
            </View>
            <View style={styles.view1}>
              <Text> {quantity.toString()} </Text>
            </View>
            <View style={styles.buttonBox}>
              <Button onPress={handleIncrement} title='+' />
            </View>
            <View style={styles.addToOrderButton}>
              <Button title="Add to Order" />
            </View>
          </View>
          <Text>Price: ${price}</Text>
        </View>
      )
    }

    return(
      <View style={{paddingHorizontal: 20, paddingVertical:50, flex:1}}>
          <Text style={styles.heading}>Menu:</Text>
          <SelectList 
            data={data} 
            setSelected={setSelected} 
            dropdownItemStyles={{marginHorizontal: 10}}
            dropdownTextStyles={{color:'black'}}
            placeholder="Select Item"
            searchPlaceholder="Search"
            maxHeight={200}
            onValueChange={handleItemChange}
            items={data}
          />
          <View style={styles.divider} />

          {selected && (
            <Text>{contentToShow[selected]}</Text>
          )}  
      </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  view1: {
    padding: 10,
    margin: 5,
  },
  heading: {
    marginVertical: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheading: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  text: {
    marginVertical: 5,
  },
  buttonBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5, 
    padding: 1, 
    width: 30,
  },
  addToOrderButton: {
    borderWidth: 1, 
    borderColor: 'black',
    borderRadius: 5,
    padding: 1, 
    marginLeft: 'auto',
  },  
  divider: {
    borderBottomWidth: 1,
    borderColor: 'gray', 
    marginVertical: 15,
  },
  image: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
  },

});
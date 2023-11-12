import React, { useState} from "react";
import { View, Text, StyleSheet, Button, Image, Span, ImageBackground } from 'react-native';
import { SelectList } from "react-native-dropdown-select-list";
import RNPickerSelect from 'react-native-picker-select';
import background from '../../../backgroundimage.jpeg';

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
      {key:"16",value:"High Noon"},
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
      4: item2(),
      5: 'Content for Item 5',
      6: 'Content for Item 6',
      7: 'Content for Item 7',
      8: 'Content for Item 8',
      9: 'Content for Item 9',
      10: 'Content for Item 10',
      11: 'Content for Item 11',
      12: 'Content for Item 12',
      13: 'Content for Item 13',
      14: 'Content for Item 14',
      15: 'Content for Item 15',
      16: item3(),
      17: 'Content for Item 17',
      18: 'Content for Item 18',
      19: 'Content for Item 19',
      20: 'Content for Item 20',

    };

    //Counts the quantity of the product the users selects.
    const handleItemChange = (value) => {
      setSelected(value);
    };

    // Busch Light product display.
    function item1() {

      const [quantity, setQuantity] = useState(1);
      const [price, setPrice] = useState(4 );

      // The quantity and the price was not synced together so we had to write the code like this to get it to work.
      // Increments the quantity by 1 when the button is pressed.
      function handleIncrement() {
        setPrice((quantity + 1) *  4);
        setQuantity(quantity + 1);
      };
    
      // Decrement the quantity by 1 when the button is pressed.
      function handleDecrement() {
        if (quantity > 0) {
          setPrice((quantity - 1) *  4);
          setQuantity(quantity - 1);
        }
      }

      return (
        <View>
          <Text style={styles.productHeading}>Busch Light:</Text>
          <Image style={styles.image} source={require('./photos/buschlightcan.webp')} />
          <Text style={styles.subheading}>Description:</Text>
          <Text style={styles.text}>Busch Light Beer is a light bodied American beer that delivers fewer calories and a classic taste.</Text>
          <View style={styles.container}>
            <View style={styles.buttonBox}>
              <Button color="white" onPress={handleDecrement} title='-' />
            </View>
            <View style={styles.view1}>
              <Text style={styles.text}> {quantity.toString()} </Text>
            </View>
            <View style={styles.buttonBox}>
              <Button color="white" onPress={handleIncrement} title='+' />
            </View>
            <View style={styles.addToOrderButton}>
              <Button color="white" title="Add to Order" />
            </View>
          </View>
          <Text style={styles.text}>Price: ${price}</Text>
        </View>
      )
    }

    // Michelob Ultra product display.
    function item2() {

      const [quantity, setQuantity] = useState(1);
      const [price, setPrice] = useState(4);

      // The quantity and the price was not synced together so we had to write the code like this to get it to work.
      // Increments the quantity by 1 when the button is pressed.
      function handleIncrement() {
        setPrice((quantity + 1) *  4);
        setQuantity(quantity + 1);
      };
    
      // Decrement the quantity by 1 when the button is pressed.
      function handleDecrement() {
        if (quantity > 0) {
          setPrice((quantity - 1) *  4);
          setQuantity(quantity - 1);
        }
      }

      return (
        <View>
          <Text style={styles.productHeading}>Michelob Ultra:</Text>
          <Image style={styles.image} source={require('./photos/ultra.webp')} />
          <Text style={styles.subheading}>Description:</Text>
          <Text style={styles.text}>Enjoy the crisp, clean taste of Michelob ULTRA, the superior light beer with only 2.6 carbs and 95 calories per bottle.</Text>
          <View style={styles.container}>
            <View style={styles.buttonBox}>
              <Button color="white" onPress={handleDecrement} title='-' />
            </View>
            <View style={styles.view1}>
              <Text style={styles.text}> {quantity.toString()} </Text>
            </View>
            <View style={styles.buttonBox}>
              <Button color="white" onPress={handleIncrement} title='+' />
            </View>
            <View style={styles.addToOrderButton}>
              <Button color="white" title="Add to Order" />
            </View>
          </View>
          <Text style={styles.text}>Price: ${price}</Text>
        </View>
      )
    }

    // Highnoon product display.
    function item3() {

      const [quantity, setQuantity] = useState(1);
      const [price, setPrice] = useState(5);

      // The quantity and the price was not synced together so we had to write the code like this to get it to work.
      // Increments the quantity by 1 when the button is pressed.
      function handleIncrement() {
        setPrice((quantity + 1) *  5);
        setQuantity(quantity + 1);
      };
    
      // Decrement the quantity by 1 when the button is pressed.
      function handleDecrement() {
        if (quantity > 0) {
          setPrice((quantity - 1) *  5);
          setQuantity(quantity - 1);
        }
      }

      return (
        <View>
          <Text style={styles.productHeading}>High Noon:</Text>
          <Image style={styles.image} source={require('./photos/highnoon.webp')} />
          <Text style={styles.subheading}>Description:</Text>
          <Text style={styles.text}>Made with real vodka, real juice and sparkling water. Only 100 calories, no sugar added and gluten free.</Text>
          <View style={styles.container}>
            <View style={styles.buttonBox}>
              <Button color="white" onPress={handleDecrement} title='-' />
            </View>
            <View style={styles.view1}>
              <Text style={styles.text}> {quantity.toString()} </Text>
            </View>
            <View style={styles.buttonBox}>
              <Button color="white" onPress={handleIncrement} title='+' />
            </View>
            <View style={styles.addToOrderButton}>
              <Button color="white" title="Add to Order" />
            </View>
          </View>
          <Text style={styles.text}>Price: ${price}</Text>
        </View>
      )
    }

    return(
      <View style={styles.viewContainer}>
        <ImageBackground
              style={styles.backgroundContainer}
              imageStyle={styles.backgroundImage}
              source={background}
            >
        
          <Text style={styles.heading}>Fox Run Golf Club</Text>
            
            <View style={styles.divider} />

            <SelectList 
              data={data} 
              setSelected={setSelected} 
              dropdownItemStyles={{marginHorizontal: 10}}
              dropdownTextStyles={{color:'white'}}
              borderColor={{color:'white'}}
              placeholder="Select Item"
              searchPlaceholder="Search"
              maxHeight={200}
              onValueChange={handleItemChange}
              items={data}
            />

            {selected && (
              <Text>{contentToShow[selected]}</Text>
            )}  
        </ImageBackground>
      </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
  backgroundContainer: {
    flex: 1,  
    paddingHorizontal: 20, 
    paddingVertical: 50,
    backgroundColor: 'black',
  },
  view1: {
    padding: 10,
    margin: 5,

  },
  heading: {
    fontSize: 26,
    paddingLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  productHeading: {
    fontSize: 26,
    paddingLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  subheading: {
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
  },
  text: {
    marginVertical: 5,
    color: 'white',
  },
  buttonBox: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5, 
    padding: 1, 
    width: 30,
  },
  addToOrderButton: {
    borderWidth: 1, 
    borderColor: 'white',
    borderRadius: 5,
    padding: 1, 
    marginLeft: 'auto',
    color: 'white',
  },  
  divider: {
    borderBottomWidth: 1,
    borderColor: 'gray', 
    marginVertical: 10,
  },
  image: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
  },
});
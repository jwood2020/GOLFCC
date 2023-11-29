/* page/navigation/screens/Menu.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file displays all the items on the menu and lets the user
   order from the menu.
*/

import { React, useState } from "react";

import { View, 
         Text, 
         Image, 
         ImageBackground, 
         TouchableOpacity } 
from 'react-native';

import { SelectList } from "react-native-dropdown-select-list";

import background from '../../../backgroundimage.jpeg';
import styles from './TabPagesStyling';

function Menu() {

    const [selected, setSelected] = useState("");

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
        1: item(4,
                "Busch Light:",
                "Busch Light Beer is a light bodied American beer " +
                "that delivers fewer calories and a classic taste.",
                require("./photos/buschlightcan.webp")
                ), 

        2: item(0,
                "Content for Item 2",
                "",
                require("./photos/buschlightcan.webp")
                ),

        3: item(0,
                "Content for Item 3",
                "",
                require("./photos/buschlightcan.webp")
                ),

        4: item(4,
                "Michelob Ultra:",
                "Enjoy the crisp, clean taste of Michelob ULTRA, the " +
                "superior light beer with only 2.6 carbs and 95 " +
                "calories per bottle.",
                require('./photos/ultra.webp')
                ), 

        5: item(0,
                "Content for Item 4",
                "",
                require("./photos/buschlightcan.webp")
                ),

        6: item(0,
                "Content for Item 6",
                "",
                require("./photos/buschlightcan.webp")
                ),

        7: item(0,
                "Content for Item 7",
                "",
                require("./photos/buschlightcan.webp")
                ),

        8: item(0,
                "Content for Item 8",
                "",
                require("./photos/buschlightcan.webp")
                ),

        9: item(0,
                "Content for Item 9",
                "",
                require("./photos/buschlightcan.webp")
                ),

        10: item(0,
                "Content for Item 10",
                "",
                require("./photos/buschlightcan.webp")
                ),

        11: item(0,
                "Content for Item 11",
                "",
                require("./photos/buschlightcan.webp")
                ),

        12: item(0,
                "Content for Item 12",
                "",
                require("./photos/buschlightcan.webp")
                ),

        13: item(0,
                "Content for Item 13",
                "",
                require("./photos/buschlightcan.webp")
                ),

        14: item(0,
                "Content for Item 14",
                "",
                require("./photos/buschlightcan.webp")
                ),

        15: item(0,
                "Content for Item 15",
                "",
                require("./photos/buschlightcan.webp")
                ),

        16: item(5,
                 "High Noon:",
                 "Made with real vodka, real juice and sparkling " +
                 "water. Only 100 calories, no sugar added and gluten " +
                 "free.",
                 require('./photos/highnoon.webp')
                 ), 

        17: item(0,
                "Content for Item 17",
                "",
                require("./photos/buschlightcan.webp")
                ),

        18: item(0,
                "Content for Item 18",
                "",
                require("./photos/buschlightcan.webp")
                ),

        19: item(0,
                "Content for Item 19",
                "",
                require("./photos/buschlightcan.webp")
                ),

        20: item(0,
                "Content for Item 20",
                "",
                require("./photos/buschlightcan.webp")
                ),
    };

    // Counts the quantity of the product the users selects.
    const handleItemChange = (value) => {
        setSelected(value);
    };

    function item(price_factor, item_name, item_desc, image_path) {

      const [quantity, setQuantity] = useState(1);
      const [price, setPrice] = useState(price_factor);

      // The quantity and the price were not synced together so we had to write
      // the code like this to get it to work.
      // Increments the quantity by 1 when the button is pressed.
      function handleIncrement() {
        setPrice((quantity + 1) *  price_factor);
        setQuantity(quantity + 1);
      };
    
      // Decrement the quantity by 1 when the button is pressed.
      function handleDecrement() {
        if (quantity > 0) {
          setPrice((quantity - 1) *  price_factor);
          setQuantity(quantity - 1);
        }
      }

      return (
        <View>
          <Text style={styles.productHeading}>{item_name}</Text>

          <Image style={styles.image} source={image_path} />

          <Text style={styles.subheading}>Description:</Text>
          <Text style={styles.text}>{item_desc}</Text>

          <View style={styles.menuContainer}>

            <TouchableOpacity style={styles.buttonBox} 
                                      onPress={handleDecrement}>
                                        
                  <Text style={styles.centeredText}>{'-'}</Text>
            </TouchableOpacity>

            <View style={styles.view1}>
              <Text style={styles.text}> {quantity.toString()} </Text>
            </View>

            <TouchableOpacity style={styles.buttonBox} 
                                      onPress={handleIncrement}>
                                        
                <Text style={styles.centeredText}>{'+'}</Text>
            </TouchableOpacity>

            <View style={styles.addToOrderButton} >
              <TouchableOpacity>
                                          
                  <Text style={styles.centeredText}>{'Add to Order'}</Text>
              </TouchableOpacity>
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
        
          <Text style={styles.headingText}>Fox Run Golf Club</Text>
            
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
              <View>{contentToShow[selected]}</View>
            )}  
        </ImageBackground>
      </View>
    )
}

export default Menu;
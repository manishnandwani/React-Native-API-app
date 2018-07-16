import React from 'react';
import { StyleSheet,FlatList,Button,TouchableOpacity, Text, View,Image,Dimensions, Alert } from 'react-native';

// import {  createStackNavigator} from 'react-navigation';

// const App = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// });

// export default App;


export default class App extends React.Component {

  state = {
    data : [],
    
  };

 isGreeting = true


 

  componentWillMount()
  {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('http://hacksociety.tech/api/public/hackathons')
      // .then((response) => response.json())
      // // .then((responseJson) => {
      // //     Alert.alert("Author name at 0th index:  " + responseJson[0].name);
      // // })
      // .catch((error) => {
      //   console.error(error);
      // });
    const json = await response.json();
    this.setState({data : json.data});
  }


  onPressButton = () => {
    this.isGreeting = !this.isGreeting 
    {console.log(this.isGreeting);
    }
    this.render()

    this.setState({
     
    })
    
  }

  render() {
    {console.log("render");
    }
    const A =<TouchableOpacity onPress={this.onPressButton}>
       <Text>
        Welcome to the description page
      </Text>

      <FlatList 
     
     data = {this.state.data}
     keyExtractor = {(x, i) => i } 
     renderItem =
     {
       ({ item }) => 
    
       <Text style={styles.upper}>

         <Image
           style={styles.image}
           source={{uri:item.image}}
           resizeMode="cover"
         />
         
         {'\n'}
         
         <Text style={styles.name}>{item.name}
           {'\n'}{item.Starting_Date } - {item.Ending_date}
           {'\n'}{item.venue}
         </Text>
     
         <Text numberOfLines={1} ellipsizeMode ={'tail'} style = {styles.texts}>   
           {'\n'}{item.description}
         </Text>

       </Text>
     }
   />   
</TouchableOpacity>

    const B = <TouchableOpacity onPress={this.onPressButton}>
    <FlatList 
     
      data = {this.state.data}
      keyExtractor = {(x, i) => i } 
      renderItem =
      {
        ({ item }) => 
     
        <Text style={styles.upper}>

          <Image
            style={styles.image}
            source={{uri:item.image}}
            resizeMode="cover"
          />
          
          {'\n'}
          
          <Text style={styles.name}>{item.name}
            {'\n'}{item.Starting_Date } - {item.Ending_date}
            {'\n'}{item.venue}
          </Text>
      
          <Text numberOfLines={1} ellipsizeMode ={'tail'} style = {styles.texts}>   
            {'\n'}{item.description}
          </Text>

        </Text>
      }
    />   
    </TouchableOpacity>
    
    if (this.isGreeting) {
      message = A
      
  } else {
      message = B
  }


    return (
      <View style={styles.container}>
        {message}    
        {/* { this.state.count !== 0 ? this.state.count: null} */}
      </View>

    );
  }
}
var width = Dimensions.get('window'); //full width
var height = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    margin:10,
    
    backgroundColor: '#fff',
justifyContent:"center"
   
    
  },

  image :{
   flex:1,
   height:700,
   width:1100    
  },

  upper:{
   height:500   
  },

  texts :{
 
  },

  name :{
    fontWeight:"bold" 
  }
});

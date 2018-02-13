import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,Button
  } from 'react-native';
  import {StackNavigator} from  'react-navigation';
  import Ziggeo from 'react-native-ziggeo-library';
import React, { Component } from 'react';
import { List, ListItem, SearchBar } from "react-native-elements";
  
  export default class SeeChallenges extends Component {

    

    static navigationOptions = ({
      navigation})=>({
      title: 'My Challenges'
     
  
    });

    GetItem (item) {
    //  var appToken = "r15ae15300147833b83403406cc336ca";
    //  Ziggeo.setAppToken(appToken);
    //  Ziggeo.play(item.ziggeo_id);


 //     global.selectedviewmessage = item.sender;

  global.z= item.ziggeo_id;
  global.description = item.description;
alert('descri' + global.description);

  this.props.navigation.navigate('View_Request');
     }

     cso=(id)=>{
     
        this.props.navigation.navigate('Choose_Friend',{id:id});
     }




    componentDidMount() {
      
       return fetch('https://lit-falls-96282.herokuapp.com/challenges/get_challenges',
       {method: "POST",
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
      id:global.id
    
      })
     })
       .then((response) => response.json())
       .then((res) => {
         this.setState({ dataSource: res,isLoading: false });
         
           })
          .done();
         }
             
   
         constructor(props) {
          super(props);
        
        this.state = {
            isLoading: true,
            dataSource: [],
          }
        }
    render() {
      return (
       
     

      
      <View style={styles.container}>
      
          
     <View style={styles.content}>
       <View style={styles.inputContainer}>
     
       <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
   
       <FlatList
      data={this.state.dataSource}
    
      KeyExtractor={(x,i)=>i}
      renderItem={({item}) =>
 
            <ListItem
    roundAvatar
    onPress={() =>  this.GetItem(item)}
    title={`${item.description} `}
    subtitle={item.description}
   
    >
      
     
          </ListItem>

        }
        
        />
      </List>
         </View>
    </View>
</View>

      );
    }
  }
  
  const styles = StyleSheet.create({
   
  });
  
import {
    Image,
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
    import { List, ListItem, SearchBar } from "react-native-elements";
    
  import React, { Component } from 'react';
    
    
    export default class Choose_Friend extends Component {
  
  
      static navigationOptions = ({
        navigation})=>({
        title: 'Choose Friend',
       
     
      });
  


      constructor(props) {
        super(props);
      
      this.state = {
          isLoading: true,
          dataSource: [],
          challenge:''
        }
      }



      componentDidMount() {
        const {state} = this.props.navigation;
        var name = state.params ? state.params.id : "<undefined>";
    alert('name' + name);
    this.state.challenge =name;
return fetch('https://lit-falls-96282.herokuapp.com/friend/get_friends',
{method: "POST",
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  user: global.user
})
})
.then((response) => response.json())
.then((res) => {
 // just setState here e.g.
  if(res.message=="undefined"){
    alert("Something went wrong. Please try again.");
  }else
  {
    this.setState({ dataSource: res,isLoading: false });
  }

   })
   .done();
  }

      user_config=()=>{
        this.props.navigation.navigate('UserSetup');
      }
      search=()=>{
        this.props.navigation.navigate('Search');
      }
  
      challenge=()=>{
        this.props.navigation.navigate('ChallengeSO');
      }
      challenges=()=>{
        this.props.navigation.navigate('SeeChallenges');
      }
  
      userPage=()=>{
        this.props.navigation.navigate('UserPage');
      }
  
  
      render() {
        return (
      
    
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          
          <FlatList
          data={this.state.dataSource}
          onPress={(item)=>{
            alert('item' + item)
            this.GetItem(item)
          }}
          KeyExtractor={(x,i)=>i}
          renderItem={({item}) =>
     
            <ListItem
    roundAvatar
    onPress={() =>  this.cso(item._id)}
    title={`${item.sender} `}
    subtitle={item.sendee}
   
    >
      
     
          </ListItem>

        
             }
            
            />
            </List>
        );
      }
    }
    const styles = StyleSheet.create({
      container:{
        justifyContent:'space-between',
        flexDirection:'column'
      },
      content2:{
        height:20,
        alignItems:'center'
      },
     content1:{
       justifyContent:'space-between',
       flexDirection:'row'
     }
    });
    
import {
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
      Platform,
      StyleSheet,
      Text,
      View,
      FlatList
    } from 'react-native';
    import {StackNavigator} from  'react-navigation';
    
  import React, { Component } from 'react';
    
    
    export default class Messages extends Component {
  
  
      static navigationOptions = ({
        navigation})=>({
        title: 'Messages ' +global.user,
       
     
      });
  
      constructor(props) {
        super(props);
      
      this.state = {
          isLoading: true,
          dataSource: [],
        }
      }

      componentDidMount() {
     
      return fetch('https://lit-falls-96282.herokuapp.com/friend/get_request/',
      {method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sendee: global.user, 
     
      })
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({ dataSource: res,isLoading: false });
        
          })
         .done();
        }
            
    
  GetItem (item) {
 global.selecteduser=item.sender;
 this.props.navigation.navigate('View_Request');
}
  



      render() {
        return (
      
    

      <FlatList
      data={this.state.dataSource}
      onPress={(item)=>{
        alert('item' + item)
        this.GetItem(item)
      }}
      KeyExtractor={(x,i)=>i}
      renderItem={({item}) =>
      <TouchableOpacity onPress={() => this.GetItem(item)}>      
      <Text>
        {item.sender} is requesting to be your friend
        </Text>
        </TouchableOpacity>
        
        }
        
        />
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
    
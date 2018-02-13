import {
    ImageBackground,
    TextInput,
    TouchableOpacity,
      Platform,
      StyleSheet,
      Text,
      View,Button,FlatList
    } from 'react-native';
    import {StackNavigator} from  'react-navigation';
    import Ziggeo from 'react-native-ziggeo-library';
  import React, { Component } from 'react';
    
  import { List, ListItem, SearchBar } from "react-native-elements";
    export default class View_Open_Challenge extends Component {
        static navigationOptions = ({
            navigation})=>({
            title:'View Open Challenge.'
           
        
          });
          constructor(props) {
            super(props);
          
          this.state = {
              isLoading: true,
          description:'',
              challenge:'',
              dataSource:[],
              ziggeo_id:''
            }
          }



          
    accept()
    {
        alert('challengeid' + global.ci);
      return fetch('https://lit-falls-96282.herokuapp.com/cs/update_challenge',
      {method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: global.ci,
        state: "2",
    
      })
      })
      .then((response) => response.json())
      .then((res) => {
      
       // just setState here e.g.
       
    
       
        
          })
         .done();



    }
    complete(){
        alert('challengeid' + global.ci);
        return fetch('https://lit-falls-96282.herokuapp.com/cs/update_challenge',
        {method: "PATCH",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: global.ci,
          state: "4",
      
        })
        })
        .then((response) => response.json())
        .then((res) => {
        
         // just setState here e.g.
         
      
         
          
            })
           .done();
    
    
    }
    back(){
    
    }
    
    
          componentDidMount() {
       //     const ziggeo = this.props.navigation;
     //       this.state.challenge = ziggeo.params ? ziggeo.params.id : "<undefined>";
         //   alert('challenge' +this.state.challenge);
        //    this.state.description = ziggeo.params ? ziggeo.params.description : "<undefined>";
        //     alert('description' + this.state.description);
     
         fetch('https://lit-falls-96282.herokuapp.com/cs/cs',
         {method: "POST",
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           id: global.ci
         })
         })
         .then((response) => response.json())
         .then((res) => {
          // just setState here e.g.
           if(res.message=="undefined"){
             alert("Something went wrong. Please try again.");
           }else
           {
          alert('res'+ global.cc);
           this.state.ziggeo_id=global.cc;
           
             this.setState({ dataSource: res,isLoading: false });
           }
         
            })
           .done();
   




             }


           

          view=()=>{
                var appToken = "r15ae15300147833b83403406cc336ca";
     Ziggeo.setAppToken(appToken);
    alert('zi'+ this.state.ziggeo_id);
     Ziggeo.play(this.state.ziggeo_id);
          }



     
        
        decline=()=>{
            alert('challengeid' + global.ci);
            return fetch('https://lit-falls-96282.herokuapp.com/cs/update_challenge',
            {method: "PATCH",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: global.ci,
              state: "3",
          
            })
            })
            .then((response) => response.json())
            .then((res) => {
            
             // just setState here e.g.
             
          
             
              
                })
               .done();
        
        
        }
    


      render() {
      
        return (
         
      //    <ImageBackground source={require('./home.png')}
    //      style={{flex:1,width:null,height:null}}> 
    
  
  
        
        <View style={styles.container}>
        <View><Text>{this.state.description}</Text></View>
            
       <View style={styles.content}>
         <View style={styles.inputContainer}>
       
      
          
           <Button  title="View" onPress={() => this.view()}/>
          
    
           <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
          data={this.state.dataSource}
          KeyExtractor={(x,i)=>i}
          renderItem={({item}) =>
         
<ListItem
    roundAvatar
    onPress={() =>  this.GetItem(item)}
    title={`${item.challenge} `}
    subtitle={`${item.challenger} `}
    >
  
      </ListItem>     
            }
            
            />
 </List>
        
           </View>
      </View>
      <Button  title="Accept" onPress={() => this.accept()}>
      
        </Button>
        <Button  title="Decline" onPress={() => this.decline()}>
      
        </Button>

        <Button  title="Complete" onPress={() => this.complete()}>
      
        </Button>
        <Button  title="Back" onPress={() => this.back()}>
      
        </Button>

  </View>


 // </ImageBackground>
        );
      }
    }
    
    const styles = StyleSheet.create({
     
    });
    
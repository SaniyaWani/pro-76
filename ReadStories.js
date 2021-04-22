import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    ScrollView, 
    KeyboardAvoidingView,
    Alert,
    TextInput, 
    Modal,
    FlatList,
} from 'react-native';
import {SearchBar, ListItem} from 'react-native-elements';
import db from './config';
export default class ReadStories extends React.Component {

  constructor(){
    super();
    this.state ={
      allStories:[],
      dataSource:[],
      search : ''
    }
  }


getAllStories =()=>{
  try {
    var allStories= []
    var stories = db.collection("stories")
      .get().then((querySnapshot)=> {
        querySnapshot.forEach((doc)=> {
            // doc.data() is never undefined for query doc snapshots
            
            allStories.push(doc.data())
            console.log('this are the stories',allStories)
        })
        this.setState({allStories})
      })
  }
  catch (error) {
    console.log(error);
  }
};

updateSearch = search => {
  this.setState({ search });
};

  componentDidMount(){
    this.getAllStories()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString()


  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.allStories.filter((item)=> {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }
  

  renderItem =({item,i}) =>{
    return(
  
      <View style ={{flex:1,paddingTop:30}}>
  
      <ListItem bottomDivider>
        <ListItem.Content>
    
      <ListItem.Title style ={{color : 'black' , fontWeight:'bold'}}>{item.title}
      </ListItem.Title>
      <ListItem.Subtitle >{item.author}</ListItem.Subtitle>       
      </ListItem.Content>
      
  
    
  
      </ListItem>
      </View>
    )
  }


    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <View styles ={{height:20,width:'100%'}}>
              <SearchBar
              placeholder="Type Here..."
              onChangeText={text => this.SearchFilterFunction(text)}
              onClear={text => this.SearchFilterFunction('')}
              value={this.state.search}
            />
          </View>
              
                    <View>
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.allStories}
                    renderItem={this.renderItem}
                  />
                  </View>
              
        </View>
      );
    }
  }
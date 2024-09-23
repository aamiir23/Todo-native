import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'Poppins',
  },
  container: {
    backgroundColor: '#f1faee',
    paddingVertical: 50,
    paddingTop:70,
    paddingBottom:0,
    width:'90%',
    margin:'auto',
    flex: 1,
//     justifyContent: 'center', // Centers items vertically
//   alignItems: 'center', // Centers items horizontally
  
  },
  container2: {
    backgroundColor: '#f1faee',
    width:'100%',
    flex:1,
//     justifyContent: 'center', // Centers items vertically
//   alignItems: 'center', // Centers items horizontally
  
  },
  groupName: {
    backgroundColor: '#a8dadc',
    // fontSize: 24,
    color: '#1d3557',
    flex: 2,
    width: '90%', // Adjust width as needed
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal:'auto',
    borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    textAlign:'center'
  },
  todoList: {
    fontSize: 20,
    // padding: 20,
    flex: 1,
    width: '100%', // Adjust width as needed
    color: 'red',
    margin:"auto",
    marginVertical:10,
    // backgroundColor:'purple'
  },
  groupList: {
    fontSize: 24,
    paddingHorizontal: 10,
    flex: 2,
    width: '90%',
    color: 'red',
    margin:'auto',
    marginTop:20,
//     justifyContent: 'center', // Centers items vertically within groupList
//   alignItems: 'center',
    
  },
  todoItem: {
    flex: 1,
  fontSize: 16,
  fontWeight: 800,
  color: '#000000',
  marginVertical: 1,
  backgroundColor: '#a8dadc',
  borderRadius: 10,
  paddingHorizontal: 20,
  paddingVertical: 10,
  flexDirection: 'row',
  justifyContent:'space-between',
  alignItems: 'center',
  marginHorizontal: 5, // Add horizontal space between items
  },
  title: {
    text: 'My App Title',
    fontSize: 36,
    fontWeight: '800',
    color: '#1d3557',
    paddingBottom: 10,
    textAlign:'center'
},
backButton: {
    backgroundColor: '#f08080', // Change the background color to a lighter red
    borderRadius: 50,
    padding: 5,
    width: 80, // Adjust the width as needed
    margin:'auto',
    textAlign:'center',
},
createGroupInput:{
    // backgroundColor:'red',
    flexDirection:'row',
    alignItems:'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius:10,
    width:'90%',
    margin:'auto',
    padding:0,
    justifyContent:'space-between'
    
},
createGroupTextInput:{
    fontSize: 16,
    textAlign: 'center',
    paddingLeft:10,
    //    border: '2px dashed blue', 
    // backgroundColor:'yellow',
    // marginVertical:5,
    
    
},
createGroupButtonText:{
    backgroundColor:'#a8dadc',
    padding:10,
    borderRadius:10,
    color: '#1d3557',

  },
  deleteButton: {
    marginLeft:10,
  }
});

export default styles;
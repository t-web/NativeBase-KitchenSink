const React = require("react-native");

const { StyleSheet } = React;

export default {
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 24
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#353535'
  },
  loremBody: {
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  loremText: {
    color: '#353535',
    paddingBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

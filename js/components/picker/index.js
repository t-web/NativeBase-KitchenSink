
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Text,Right,Body,Left,Picker } from 'native-base/Advanced';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const Item = Picker.Item;

class NHPicker extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'key1',
      results: {
        items: [],
      },
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value,
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={this.props.openDrawer}>
          <Icon name="ios-menu" />
          </Button>
          </Left>
          <Body>
          <Title>Picker</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Select your Payment Mode</Text>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}>
            <Item label="Wallet" value="key0" />
            <Item label="ATM Card" value="key1" />
            <Item label="Debit Card" value="key2" />
            <Item label="Credit Card" value="key3" />
            <Item label="Net Banking" value="key4" />
          </Picker>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHPicker);

import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text

} from "native-base";

import styles from "./styles";


const launchscreenBg = require("../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../img/logo-kitchen-sink.png");


class PageLogin_FloatingLabel extends Component {
  render() {
    return (
      <Container >


        <Image source={launchscreenBg} style={styles.imageContainer}>

          <Content>
            <View style={styles.logoContainer}>
              <Image source={launchscreenLogo} style={styles.logo} />
            </View>
            <Form style={{ margin: 15, marginTop: 70 }}>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel >
                <Label>Password</Label>
                <Input />
              </Item>
            </Form>
            <Button block style={{ margin: 15, marginTop: 50 }}>
              <Text>Sign In</Text>
            </Button>
            <Button block style={{ backgroundColor: "#6FAF98", margin: 15, }}>
              <Text>register</Text>
            </Button>
          </Content>

        </Image>
      </Container>
    );
  }
}

export default PageLogin_FloatingLabel;

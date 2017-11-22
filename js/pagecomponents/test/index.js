import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  H1,
  H2,
  H3,
  Text,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class PageTest extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>测试页面</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <H1 style={styles.mb10}>这是有个测试页</H1>

          <Text>默认</Text>
        </Content>
      </Container>
    );
  }
}

export default PageTest;

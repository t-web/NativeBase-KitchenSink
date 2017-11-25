import React, { Component } from "react";
import { WebView } from 'react-native';
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

class PageYoutube extends Component {
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
            <Title>视频调用WebView页面</Title>
          </Body>
          <Right />

        </Header>
        <WebView
          source={{ uri: 'http://player.youku.com/embed/XMzE4MTg4MjI0OA==' }}
          style={{ height: 320, width: 360 }}
        />
        <Content padder>




          <H1 style={styles.mb10}>这是有个测试页</H1>
          <Text>默认</Text>
        </Content>
      </Container>
    );
  }
}

export default PageYoutube;

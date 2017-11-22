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
import YouTube from 'react-native-youtube'
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
            <Title>测试页面</Title>
          </Body>
          <Right />

        </Header>
        <YouTube
          apiKey="AIzaSyDp0KN7GjKJYwf2GABAB4SL9XgSGsSrcMo"
          videoId="KVZ-P-ZI6W4"   // The YouTube video ID
          play={true}             // control playback of video with true/false
          fullscreen={true}       // control whether the video should play in fullscreen or inline
          loop={true}             // control whether the video should loop when ended

          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}

          style={{ alignSelf: 'stretch', height: 300 }}
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

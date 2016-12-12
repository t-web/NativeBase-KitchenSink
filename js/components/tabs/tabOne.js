
import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, View, Body } from 'native-base/Advanced';

import styles from './styles';

export default class TabOne extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                NativeBase is open source and free.
              </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Platform specific codebase for components
              </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Any native third-party libraries can be included along with NativeBase.
              </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Single file to theme your app and NativeBase components.
              </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Gives an ease to include different font types in your app.
              </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

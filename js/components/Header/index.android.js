import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  ListItem,
  List
} from "native-base";

import styles from "./styles";

const datas = [
  {
    route: "Header1",
    text: "只有标题"
  },
  {
    route: "Header2",
    text: "图标按钮"
  },
  {
    route: "Header3",
    text: "文字按钮"
  },
  {
    route: "Header4",
    text: "图标文字混用"
  },
  {
    route: "Header6",
    text: "多个按钮"
  },
  {
    route: "Header7",
    text: "主副标题"
  },
  {
    route: "Header8",
    text: "定制背景颜色"
  }
];

class HeaderNB extends Component {
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
            <Title>Headers</Title>
          </Body>
          <Right />

        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Text>{data.text}</Text>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>}
          />

        </Content>
      </Container>
    );
  }
}

export default HeaderNB;

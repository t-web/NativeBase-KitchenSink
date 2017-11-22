import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

import styles from "./styles";

const datas = [
  // {
  //   route: "FixedLabel",
  //   text: "Fixed Label"
  // },
  // {
  //   route: "InlineLabel",
  //   text: "Inline Label"
  // },
  {
    route: "PageLogin_FloatingLabel",
    text: "登录页面"
  },
  // {
  //   route: "PlaceholderLabel",
  //   text: "Placeholder Label"
  // },
  // {
  //   route: "StackedLabel",
  //   text: "Stacked Label"
  // },
  // {
  //   route: "RegularInput",
  //   text: "Regular Textbox"
  // },
  // {
  //   route: "UnderlineInput",
  //   text: "Underlined Textbox"
  // },
  // {
  //   route: "RoundedInput",
  //   text: "Rounded Textbox"
  // },
  // {
  //   route: "IconInput",
  //   text: "Icon Textbox"
  // },
  // {
  //   route: "SuccessInput",
  //   text: "Success Input Textbox"
  // },
  // {
  //   route: "ErrorInput",
  //   text: "Error Input Textbox"
  // },
  // {
  //   route: "DisabledInput",
  //   text: "Disabled Textbox"
  // }
];

class PageLogin extends Component {
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
            <Title>登录页面列表</Title>
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

export default PageLogin;

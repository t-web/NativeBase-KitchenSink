import React, { Component } from "react";

import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	List,
	ListItem,
	Text,
	Thumbnail,
	Left,
	Body,
	Right
} from "native-base";

import styles from "./styles";

const sankhadeep = require("../../../img/contacts/sankhadeep.png");
const supriya = require("../../../img/contacts/supriya.png");
const himanshu = require("../../../img/contacts/himanshu.png");
const shweta = require("../../../img/contacts/shweta.png");
const shruti = require("../../../img/contacts/shruti.png");
const test = require("../../../img/screenshots/test.jpg");
const webviewvideo = require("../../../img/screenshots/webviewvideo.jpg");

// const shivraj = require("../../../img/screenshots/shivraj.jpg");
const datas = [
	{
		img: test,
		route: 'PageTest',
		text: "测试页",
		note: "基本内容测试demo. ."
	},
	{
		img: test,
		route: 'PageLogin',
		text: "登录页面",
		note: "基本内容测试demo. ."
	},
	{
		img: webviewvideo,
		route: 'PageYoutube',
		text: "Page Youtube",
		note: "基本内容测试demo. ."
	},
	{
		img: test,
		route: 'PageAjax',
		text: "ajax请求",
		note: "fetch请求测试 基本内容测试demo. ."
	},
	{
		img: test,
		route: 'ScrollView',
		text: "ScrollView",
		note: "下拉刷新. ."
	},
	{
		img: test,
		route: 'maps',
		text: "google maps",
		note: "https://github.com/airbnb/react-native-maps."
	},
	{
		img: test,
		route: 'parallax',
		text: "parallax",
		note: "可以自定义头部，带弹性当打效果的竖向ScrollView https://github.com/lelandrichardson/react-native-parallax-view"
	},
	// {
	// 	img: himanshu,
	// 	route: 'NHListThumbnail',
	// 	text: "Himanshu",
	// 	note: "Live a life style that matchs your vision"
	// },
	// {
	// 	img: shweta,
	// 	route: 'NHListThumbnail',
	// 	text: "Shweta",
	// 	note: "Failure is temporary, giving up makes it permanent"
	// },
	// {
	// 	img: shruti,
	// 	route: 'NHListThumbnail',
	// 	text: "Shruti",
	// 	note: "The biggest risk is a missed opportunity !!"

	// },
	// {
	// 	img: shivraj,
	// 	route: 'NHListThumbnail',
	// 	text: "Shivraj",
	// 	note: "Time changes everything . ."
	// }
];

class Dev extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>

					<Body>
						<Title>开发测试页面</Title>
					</Body>
					<Right />
				</Header>

				<Content>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem thumbnail button onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Thumbnail square size={55} source={data.img} />
								</Left>
								<Body>
									<Text>{data.text}</Text>
									<Text numberOfLines={1} note>{data.note}</Text>
								</Body>
								<Right>
									{/* <Button transparent>
										<Text>View</Text>
									</Button> */}
								</Right>
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default Dev;

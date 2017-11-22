import React, { Component } from "react";
import { Image } from "react-native";

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import styles from "./style";

const drawerCover = require("../../../img/drawer-cover.png");

const drawerImage = require("../../../img/logo-kitchen-sink.png");

const datas = [
	{
		name: "开发",
		route: "Dev",
		icon: "paper",
		bg: "#48525D",
	},
	{
		name: "Anatomy",
		route: "Anatomy",
		icon: "phone-portrait",
		bg: "#C5F442",
	},
	{
		name: "操作",
		route: "Actionsheet",
		icon: "easel",
		bg: "#C5F442",
	},
	{
		name: "标题栏",
		route: "Header",
		icon: "phone-portrait",
		bg: "#477EEA",
		types: "8",
	},
	{
		name: "底部栏",
		route: "Footer",
		icon: "phone-portrait",
		bg: "#DA4437",
		types: "4",
	},
	{
		name: "标记",
		route: "NHBadge",
		icon: "notifications",
		bg: "#4DCAE0",
	},
	{
		name: "按钮",
		route: "NHButton",
		icon: "radio-button-off",
		bg: "#1EBC7C",
		types: "9",
	},
	{
		name: "卡片",
		route: "NHCard",
		icon: "keypad",
		bg: "#B89EF5",
		types: "5",
	},
	{
		name: "复选框",
		route: "NHCheckbox",
		icon: "checkmark-circle",
		bg: "#EB6B23",
	},
	{
		name: "滑动卡片",
		route: "NHDeckSwiper",
		icon: "swap",
		bg: "#3591FA",
		types: "2",
	},
	{
		name: "FAB按钮菜单",
		route: "NHFab",
		icon: "help-buoy",
		bg: "#EF6092",
		types: "2",
	},
	{
		name: "表单 & 输入框",
		route: "NHForm",
		icon: "call",
		bg: "#EFB406",
		types: "12",
	},
	{
		name: "图标",
		route: "NHIcon",
		icon: "information-circle",
		bg: "#EF6092",
	},
	{
		name: "布局",
		route: "NHLayout",
		icon: "grid",
		bg: "#9F897C",
		types: "5",
	},
	{
		name: "列表",
		route: "NHList",
		icon: "lock",
		bg: "#5DCEE2",
		types: "7",
	},
	{
		name: "ListSwipe",
		route: "ListSwipe",
		icon: "swap",
		bg: "#C5F442",
		types: "2",
	},
	{
		name: "选择器",
		route: "NHPicker",
		icon: "arrow-dropdown",
		bg: "#F50C75",
	},
	{
		name: "单选按钮",
		route: "NHRadio",
		icon: "radio-button-on",
		bg: "#6FEA90",
	},
	{
		name: "搜索栏",
		route: "NHSearchbar",
		icon: "search",
		bg: "#29783B",
	},
	{
		name: "Segment(tab切换)",
		route: "Segment",
		icon: "menu",
		bg: "#0A2C6B",
		types: "2",
	},
	{
		name: "加载动画",
		route: "NHSpinner",
		icon: "navigate",
		bg: "#BE6F50",
	},
	{
		name: "标签",
		route: "NHTab",
		icon: "home",
		bg: "#AB6AED",
		types: "3",
	},
	{
		name: "缩略图",
		route: "NHThumbnail",
		icon: "image",
		bg: "#cc0000",
		types: "2",
	},
	{
		name: "Toast(提示)",
		route: "Toast",
		icon: "albums",
		bg: "#C5F442",
	},
	{
		name: "排版",
		route: "NHTypography",
		icon: "paper",
		bg: "#48525D",
	},
	{
		name: "测试",
		route: "Test",
		icon: "paper",
		bg: "#48525D",
	},

];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Image source={drawerCover} style={styles.drawerCover}>
						<Image square style={styles.drawerImage} source={drawerImage} />
					</Image>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default SideBar;

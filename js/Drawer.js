/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
import Header from "./components/Header/";
import Anatomy from "./components/anatomy/";
import Footer from "./components/footer/";
import NHBadge from "./components/badge/";
import NHButton from "./components/button/";
import NHCard from "./components/card/";
import NHCheckbox from "./components/checkbox/";
import NHDeckSwiper from "./components/deckswiper/";
import NHFab from "./components/fab/";
import NHForm from "./components/form/";
import TextArea from "./components/form/textArea";
import NHIcon from "./components/icon/";
import ListSwipe from "./components/listSwipe/";
import BasicIcon from "./components/icon/basic";
import IconState from "./components/icon/state";
import SpecificIcon from "./components/icon/specific";
import NHInputGroup from "./components/inputgroup/";
import NHLayout from "./components/layout/";
import NHList from "./components/list/";
import NHRadio from "./components/radio/";
import NHSearchbar from "./components/searchbar/";
import NHSpinner from "./components/spinner/";
import NHPicker from "./components/picker/";
import NHTab from "./components/tab/";
import NHThumbnail from "./components/thumbnail/";
import NHTypography from "./components/typography/";
import SplashPage from "./components/splashscreen/";
import SideBar from "./components/sidebar";
import Segment from "./components/segment";
import Toast from "./components/toast";
import Actionsheet from "./components/actionsheet";
//自定义输入
import Test from "./components/test";
import Dev from "./pagecomponents/dev";
import PageTest from "./pagecomponents/test";
import PageLogin from "./pagecomponents/login";
import PageLogin_FloatingLabel from "./pagecomponents/login/floatingLabel";

import PageYoutube from "./pagecomponents/youtube";
import PageAjax from "./pagecomponents/ajax";
import ScrollView from "./pagecomponents/ScrollView";
import swRefresh from "./pagecomponents/ScrollView/react-native-swRefresh";
import PageScrollView from "./pagecomponents/ScrollView/ScrollView";
// import maps from "./pagecomponents/maps";
import parallax from "./pagecomponents/react-native-parallax-view";

const DrawerExample = DrawerNavigator(
  {
    Home: { screen: Home },
    Anatomy: { screen: Anatomy },
    Header: { screen: Header },
    Footer: { screen: Footer },
    NHBadge: { screen: NHBadge },
    NHButton: { screen: NHButton },
    NHCard: { screen: NHCard },
    NHCheckbox: { screen: NHCheckbox },
    NHDeckSwiper: { screen: NHDeckSwiper },
    NHFab: { screen: NHFab },
    NHForm: { screen: NHForm },
    TextArea: { screen: TextArea },
    NHIcon: { screen: NHIcon },
    BasicIcon: { screen: BasicIcon },
    IconState: { screen: IconState },
    SpecificIcon: { screen: SpecificIcon },
    NHInputGroup: { screen: NHInputGroup },
    NHLayout: { screen: NHLayout },
    NHList: { screen: NHList },
    ListSwipe: { screen: ListSwipe },
    NHRadio: { screen: NHRadio },
    NHSearchbar: { screen: NHSearchbar },
    NHSpinner: { screen: NHSpinner },
    NHPicker: { screen: NHPicker },
    NHTab: { screen: NHTab },
    NHThumbnail: { screen: NHThumbnail },
    NHTypography: { screen: NHTypography },
    Segment: { screen: Segment },
    Toast: { screen: Toast },
    Actionsheet: { screen: Actionsheet },
    Test: { screen: Test },
    Dev: { screen: Dev },
    PageTest: { screen: PageTest },
    PageLogin: { screen: PageLogin },
    PageLogin_FloatingLabel: { screen: PageLogin_FloatingLabel },
    PageYoutube: { screen: PageYoutube },
    PageAjax: { screen: PageAjax },
    ScrollView: { screen: ScrollView },
    swRefresh: { screen: swRefresh },
    PageScrollView: { screen: PageScrollView },
    // maps: { screen: maps },
    parallax: { screen: parallax },

  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;

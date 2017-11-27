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
    Body,
    View
} from "native-base";
import ParallaxView from "react-native-parallax-view";
import styles from "./styles";

class parallax extends Component {
    // eslint-disable-line

    render() {
        return (
            <ParallaxView
                backgroundSource={require('../../../img/launchscreen-bg.png')}
                windowHeight={300}
                header={(
                    <Text style={styles.header}>
                        Header Content
                       </Text>
                )}
                scrollableViewStyle={{ }}
            >
                <View>

                    <Text >
                        In mea menandri sapientem, quo gloriatur adolescens voluptatibus ei
                    </Text>
                    <Text >
                        In mea menandri sapientem, quo gloriatur adolescens voluptatibus ei
                    </Text>
                    <Text >
                        In mea menandri sapientem, quo gloriatur adolescens voluptatibus ei
                    </Text>
                    <Text >
                        In mea menandri sapientem, quo gloriatur adolescens voluptatibus ei
                    </Text>

                </View>
            </ParallaxView>
        );
    }
}

export default parallax;

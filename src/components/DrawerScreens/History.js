import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    Header,
    Thumbnail,
    Left,
    Body,
    Item,
    Input,
    Image,
    Container,
    Content
} from 'native-base';

import { TouchableOpacity } from 'react-native-gesture-handler';
import profileImage from '../../../assets/img/profile.png';
import { styles } from '../../styles/styles.js';

class History extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs style={{ backgroundColor: '#ffdb58' }} >
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                            <Thumbnail style={{ marginLeft: 8 }} small source={profileImage} />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Item style={{ height: 40, width: 200, backgroundColor: '#ffffff' }} rounded>
                            <Input placeholder='Searching' />
                        </Item>
                    </Body>
                </Header>
                <View style={styles.center}>
                    <Text style={styles.title}>History</Text>
                </View>
            </Container>
        );
    }
}

export default History;
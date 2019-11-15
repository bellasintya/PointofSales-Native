import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './Product';
import Tab2 from './Category';
import {
  Card,
  CardItem,
  Thumbnail,
  Button,
  Left,
  Body,
  Right,
  Title,
  Item,
  Input,
  Image
} from 'native-base';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from '../../styles/styles.js';
import { getCategory } from '../../Redux/Action/category';
import profileImage from '../../../assets/img/profile.png';

export default class Management extends Component {
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
        <Tabs tabBarPosition="bottom">
          <Tab activeTabStyle={{backgroundColor: '#ffdb58'}} tabStyle={{ backgroundColor: '#ffdb58'}}  heading="Product Management">
            <Tab1 />
          </Tab>
          <Tab activeTabStyle={{backgroundColor: '#ffdb58'}} tabStyle={{ backgroundColor: '#ffdb58'}} heading="Category Management">
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
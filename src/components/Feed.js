import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Left,
  Body,
  Right,
  Title,
  Item,
  Input
} from 'native-base';
import { getProduct } from '../Redux/Action/product';
import { getCategory } from '../Redux/Action/category';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import profileImage from '../../assets/img/profile.png'
import cart from "../../assets/img/cart.png";

//const numColumns = 3;

const Feed = ({ navigation }) => {

  const formState = {
    id_product: "",
    name: "",
    quantity: "",
    price: "",
    description: "",
    image: "",
    id_category: ""
  };

  const [input, setInput] = useState(formState);

  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const data = await dispatch(getProduct());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  const result = useSelector(data => data.product.productList);

  // const formatData = (data, numColumns) => {
  //   const numberOfFullRows = Math.floor(data.length / numColumns);
  //   let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  //   while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
  //     data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
  //     numberOfElementsLastRow++;
  //   }
  //   return data;
  // };

  // const renderItem = ({ item, index }) => {
  //   if (item.empty === true) {
  //     return <View style={[styles.item, styles.itemInvisible]} />;
  //   }
  //   return (
  //     <View style={styles.item}>
  //       <Text style={styles.itemText}>{item.key}</Text>

  //     </View>
  //   );
  // };

  return (
    <Content>
      <Header style={{ backgroundColor: '#ffdb58'}}  >
        <Left>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Thumbnail style={{ marginLeft: 8 }} small source={profileImage} />
          </TouchableOpacity>
        </Left>
        <Body>
          <Item style={{ height: 40, width: 200, backgroundColor: '#ffffff' }} rounded>
            <Input placeholder='Searching' />
          </Item>
        </Body>
        <Right>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Thumbnail style={{ marginRight: 8 }} small source={cart} />
            </TouchableOpacity>
        </Right>
      </Header>
      {result !== undefined ? result.map((item, index) => {
        return (
          <Card key={index}>
            <CardItem cardBody >
              <Image source={{ uri: item.image }} style={{ height: 150, width: 150, margin: 2, flex: 1 }} />
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Button transparent>
                <Text style={{ alignContent: 'center' }}>{item.name}</Text>
                  <Text>Rp.{item.price}</Text>
                  {/* <Text>Quantity :{item.quantity}</Text> */}
                </Button>
              </Body>
            </CardItem>
          </Card>
        )
      }
      )
        :
        <Image source={{ uri: "https://thumbs.gfycat.com/BitterEarnestBeardeddragon-small.gif" }} align="center" width="200px" height="200px" />
      }
    </Content>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    // height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});

export default (Feed);
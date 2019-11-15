import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import {
    Content, Card, CardItem, Thumbnail, Button, Left, Body,
    Right, Title, Input, Image
} from 'native-base';
import { getProduct, deleteProduct } from '../../Redux/Action/product';
import editIcon from '../../../assets/img/edit.png';
import deleteIcon from '../../../assets/img/delete.png';

import { NavigationContext } from 'react-navigation';

const Product = () => {
    const navigation = useContext (NavigationContext);
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

    const onShow = (item) => {
        Alert.alert(
            `Delete Product`,
            `Are you sure want to delete ${item.name}?`,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {   text: 'OK', 
                    onPress: () => handleDelete (item.id_product)},
            ],
            { cancelable: false },
        );
    }

    const handleDelete = async (id) => {
        try {
            await dispatch (deleteProduct(id))
        } catch (error) {
            console.log (error)
        }
    };

    return (
        <Content>
            {result !== undefined ? result.map((item, index) => {
                return (
                    <Card key={index} button onPress={() => alert("This is Card Body")}>
                        <CardItem>
                            <Left>
                                <Thumbnail square large source={{ uri: item.image }} />
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Text style={{ alignContent: 'center' }}>{item.name}</Text>
                                </Button>
                            </Body>
                            <Right>
                                <TouchableOpacity onPress = {() => navigation.navigate ('EditProduct', {
                                    list: item,
                                })}>
                                    <Thumbnail style={{ width: 30, height: 30, margin: 5 }} square source={editIcon}></Thumbnail>
                                </TouchableOpacity>
                            </Right>
                            <Right>
                                <TouchableOpacity onPress={() => { onShow(item) }}>
                                    <Thumbnail style={{ width: 30, height: 30, margin: 5 }} square source={deleteIcon}></Thumbnail>
                                </TouchableOpacity>
                            </Right>
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

export default (Product);
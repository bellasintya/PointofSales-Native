import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
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
    Input, 
    Image
  } from 'native-base';

import { getCategory } from '../../Redux/Action/category';

const Category = ({ navigation }) => {
    const dispatch = useDispatch();
    const fetchCategory = async () => {
        try {
            const data = await dispatch(getCategory());
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    const result = useSelector(data => data.category.categoryList);

    return (
        <Content>
            {result !== undefined ? result.map((item, index) => {
                return (
                    <Card  key={index}>
                        <CardItem button onPress={() => alert("This is Card Body")}>
                            <Body>
                                <Button transparent>
                                    <Text style={{ alignContent: 'center' }}>{item.name}</Text>
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

export default (Category);
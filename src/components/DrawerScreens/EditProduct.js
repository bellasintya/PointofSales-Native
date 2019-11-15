import React, { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContext, NavigationEvents } from 'react-navigation';
import { useSelector,useDispatch  } from 'react-redux';
import {
    Header, Thumbnail, Left, Body, Item, Input, Image, Container,
    Content, Button, Form, Picker, Icon, Textarea
} from 'native-base';
import { patchProduct } from '../../Redux/Action/product';

import { TouchableOpacity } from 'react-native-gesture-handler';
import profileImage from '../../../assets/img/profile.png';

const EditProduct = (props) => {
    const formState = {
        name: '',
        quantity: '',
        price: '',
        description: '',
        image: '',
        id_category: '',
    }

    const dispatch = useDispatch ();
    const category = useSelector (state => state.category.categoryList);
    const [input, setInput] = useState(formState);

    const handleSubmit = async (e) => {
        dispatch (patchProduct (input))
        .then (response => {
            console.log (response.value)
        })
        .catch (error => alert(error));
    }

    useEffect (() => {
        setInput (navigation.state.params.list);
    }, []);

    const [selected2, setSelected] = useState('');

    const onValueChange2 = (value) => {
        setSelected({
            selected2: value
        });
    };

    const navigation = useContext(NavigationContext);

    return (
        <Container>
            <Header hasTabs style={{ backgroundColor: '#ffdb58' }} >
                <Left>
                    <TouchableOpacity onPress={() => navigation.navigation.togleDrawer()}>
                        <Thumbnail style={{ marginLeft: 8 }} small source={profileImage} />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Item style={{ height: 40, width: 200, backgroundColor: '#ffffff' }} rounded>
                        <Input placeholder='Searching' />
                    </Item>
                </Body>
            </Header>

            <View>
                <Form>
                    <Item rounded>
                        <Input placeholder='Product Name' 
                        onChangeText = {(name => setInput ({...input, name:name}))}
                        value={input.name}
                        />
                    </Item>
                    <Item rounded>
                        <Input placeholder='Product Price' 
                        onChangeText = {(price => setInput ({...input, price:price}))}
                        value={JSON.stringify (input.price)}/>
                    </Item>
                    <Item rounded>
                        <Input placeholder='Product Quantity' />
                    </Item>
                    <Item rounded>
                        <Input placeholder='Product Image'
                        onChangeText = {(image) => setInput ({...input, image:image})}
                        value={input.image}
                        />
                    </Item>
                    <Item rounded>
                        <Textarea placeholder='Description' 
                        onChangeText 
                        />
                    </Item>

                    <Item picker rounded>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={selected2}
                            onValueChange={onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                    </Item>

                    <TouchableOpacity>
                        <Button rounded><Text>Submit</Text></Button>
                    </TouchableOpacity>
                </Form>


            </View>
        </Container>
    );
}


export default EditProduct;
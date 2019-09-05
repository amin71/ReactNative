import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/forgetpasswordstyle'
import MyHeader from './component/Header'
import { Container, Content, Item, Icon, Label, Input, Button } from 'native-base';
class Forgetpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: ""
    };
  }

  render() {
    return (
      <Container>
        <MyHeader title="صفحه فراموشی رمز عبور" />
        <Content>
          <View style={styles.formview}>

            <Item floatingLabel style={{ flexDirection: "row-reverse", marginTop: 15 }}>
              <Label style={styles.label}>شماره موبایل</Label>
              <Input style={styles.label}
                keyboardType='numeric'
                value={this.state.phonenumber}
                onChangeText={(txt) => {
                  this.setState({
                    phonenumber: txt
                  })
                }}
              />
              <Icon name="call" />
            </Item>

            <Button full style={styles.btnsignin}>
              <Text style={[styles.label, { color: "#E1F5FE", fontSize: 15 }]}>دریافت رمز موقت</Text>
            </Button>
            <Button transparent full style={styles.btn}
              onPress={() => this.props.navigation.goBack()}>
              <Text style={[styles.label, { color: "#000a", fontSize: 12 }]}>
                برگشت به صفحه قبل</Text>
            </Button>

          </View>
        </Content>
      </Container>
    );
  }
}

export default Forgetpassword;

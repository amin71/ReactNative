import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/signupstyles'
import MyHeader from './component/Header'
import { Container, Content, Item, Icon, Label, Input, Button } from 'native-base';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: "",
      name: "",
      password: "",
      repeatpassword: ""
    };
  }

  render() {
    return (
      <Container>
        <MyHeader title="صفحه ثبت نام" />
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
            <Item floatingLabel style={{ flexDirection: "row-reverse", marginTop: 15 }}>
              <Label style={styles.label}>نام</Label>
              <Input style={styles.label}
                value={this.state.name}
                onChangeText={(txt) => {
                  this.setState({
                    name: txt
                  })
                }}
              />
              <Icon name="person" />
            </Item>
            <Item floatingLabel style={{ flexDirection: "row-reverse", marginTop: 15 }}>
              <Label style={styles.label}>رمز عبور</Label>
              <Input secureTextEntry={true} style={styles.label}
                value={this.state.password}
                onChangeText={(txt) => {
                  this.setState({
                    password: txt
                  })
                }}
              />
              <Icon name="lock" />
            </Item>
            <Item floatingLabel style={{ flexDirection: "row-reverse", marginTop: 15 }}>
              <Label style={styles.label}>تکرار رمز عبور</Label>
              <Input secureTextEntry={true} style={styles.label}
                value={this.state.repeatpassword}
                onChangeText={(txt) => {
                  this.setState({
                    repeatpassword: txt
                  })
                }}
              />
              <Icon name="lock" />
            </Item>
            <Button full style={styles.btnsignin}>
              <Text style={[styles.label, { color: "#E1F5FE", fontSize: 15 }]}>ثبت نام</Text>
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

export default SignUp;

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles/signinstyles'
import MyHeader from './component/Header'
import { Container, Content, Item, Icon, Label, Input, Button, Toast, Root } from 'native-base';
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: "",
      password: "",
      errorphonenumber: false,
      errorpassword: false
    };
  }

  render() {
    return (
      <Root>
        <Container>
          <MyHeader title="صفحه ورود " />
          <Content style={styles.Content}>
            <View style={styles.formview}>
              <Image resizeMode='center' source={require('../images/b.jpg')} style={styles.logo} />
              <View style={styles.line} />
              <Item floatingLabel style={{ flexDirection: "row-reverse", marginTop: 15 }}>
                <Label style={styles.label}>شماره موبایل</Label>
                <Input style={styles.label}
                  keyboardType='numeric'
                  value={this.state.phonenumber}
                  onChangeText={(txt) => {
                    this.setState({
                      phonenumber: txt,
                      errorphonenumber: false
                    })
                  }}
                />
                <Icon name="call" />
              </Item>
              {this.state.errorphonenumber ? (
                <Text style={{ color: "#f00", fontSize: 12, fontFamily: "IRANSansMobile", marginTop: 5 }}>
                  فرمت شماره موبایل درست نیست

            </Text>) : (null)}

              <Item floatingLabel style={{ flexDirection: "row-reverse", marginTop: 15 }}>
                <Label style={styles.label}>رمز عبور</Label>
                <Input secureTextEntry={true} style={styles.label}
                  value={this.state.password}
                  onChangeText={(txt) => {
                    this.setState({
                      password: txt,
                      errorpassword: false
                    })
                  }}
                />
                <Icon name="lock" />
              </Item>
              {this.state.errorpassword ? (
                <Text style={{ color: "#f00", fontSize: 12, fontFamily: "IRANSansMobile", marginTop: 5 }}>
                  رمز عبور باید حداقل 5 کاراکتر باشد

            </Text>) : (null)}
              <Button full style={styles.btnsignin}
                onPress={this.Signin.bind(this)
                }>
                <Text style={[styles.label, { color: "#E1F5FE", fontSize: 15 }]}>ورود</Text>
              </Button>
              <Button transparent full style={styles.btn}
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={[styles.label, { color: "#000a", fontSize: 12 }]}>
                  ثبت نام نکرده اید!</Text>
              </Button>
              <Button transparent full style={styles.btn}
                onPress={() => this.props.navigation.navigate('Forgetpassword')}>
                <Text style={[styles.label, { color: "#000a", fontSize: 12 }]}>
                  رمز عبور خود را فراموش کرده ام؟</Text>
              </Button>
            </View>
          </Content>
        </Container>
      </Root>
    );
  }
  Signin() {
    var phone = this.state.phonenumber;
    var pass = this.state.password;
    if (phone.length != 11 || pass.length < 5) {
      if (phone.length != 11) {
        this.setState({
          errorphonenumber: true
        })
      }
      if (pass.length < 5) {
        this.setState({
          errorpassword: true
        })
      }
    } else {

      if (phone == "09393555351" && pass == "Soltan") {
        Toast.show({
          text: "اطلاعات وارد شده صحیح می باشد",
          type: "success",
          textStyle: { fontFamily: 'IRANSansMobile', fontSize: 12 },
          duration: 3000
        })
      } else {
        Toast.show({
          text: " اطلاعات وارد شده صحیح نمی باشد ",
          type: "danger",
          textStyle: { fontFamily: 'IRANSansMobile', fontSize: 12 },
          duration: 3000
        })
      }
    }

  }
}

export default SignIn;

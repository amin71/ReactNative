import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/lockprofile'
import { Container, Content, Item, Icon, Label, Input, Button, Thumbnail } from 'native-base';
import MyHeader from './component/Header'
class Lockprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <MyHeader title="صفحه قفل پروفایل" />
        <Content>
          <View style={styles.formview}>
            <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
              <Thumbnail style={{ borderColor: "#aaa7", borderWidth: 1 }} source={require('../images/a.jpg')} large />
            </View>

            <Button full style={styles.btnsignin}>
              <Text style={[styles.label, { color: "#E1F5FE", fontSize: 15 }]}>ورود با فرادرس</Text>
            </Button>
            <Button transparent full style={styles.btn}
              onPress={() => this.props.navigation.replace('SignIn')}>
              <Text style={[styles.label, { color: "#000a", fontSize: 12 }]}>
                ورود با اکانت دیگر</Text>
            </Button>
            <Button transparent full style={styles.btn}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={[styles.label, { color: "#000a", fontSize: 12 }]}>
                ثبت نام نکرده اید!</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Lockprofile;

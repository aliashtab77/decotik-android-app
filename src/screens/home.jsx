import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Ripple from 'react-native-material-ripple';
import {DataTable} from 'react-native-paper';
import {handel1} from '../helper_functions/d112a1';
import {handel2} from '../helper_functions/d112a2';
import {handel3} from '../helper_functions/d112b1';
import {handel4} from '../helper_functions/d112b2';
import {handel5} from '../helper_functions/D127';

const data = [
  {label: '(A)D112' + 'سقف کاذب یکپارچه(آویز ترکیبی)', value: '1'},
  {label: '(A)D112' + 'سقف کاذب یکپارچه(آویز نانیوس)', value: '2'},
  {label: '(B)D112' + 'سقف کاذب یکپارچه(آویز ترکیبی)', value: '3'},
  {label: '(B)D112' + 'سقف کاذب یکپارچه(با آویز نانیوس)', value: '4'},
  {
    label:
      'D127 Panel Acoustic Design Ceiling' + 'سقف کاذب آکوستیک(آویز نانیوس)',
    value: '5',
  },
];

const Home = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [tablets, setTablets] = useState(null);
  const [v, setV] = useState(null);
  // @ts-ignore

  const handelshow = () => {
    if (v == null) {
      ToastAndroid.show('لطفا مقدار را وارد نمایید', ToastAndroid.SHORT);
      return;
    }
    switch (value) {
      case '1':
        setTablets(handel1(v));
        break;
      case '2':
        setTablets(handel2(v));
        break;
      case '3':
        setTablets(handel3(v));
        break;
      case '4':
        setTablets(handel4(v));
        break;
      case '5':
        setTablets(handel5(v));
        break;
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'نوع سقف را انتخاب نمایید' : '...'}
          searchPlaceholder="جست و جو"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        {value != null ? (
          <>
            <TextInput
              placeholder={'متراژ نهایی را وارد نمایید'}
              onChangeText={item => {
                setV(item);
              }}
              keyboardType={'numeric'}
              style={styles.dropdown}
            />
            <Ripple style={styles.btn} onPress={() => handelshow()}>
              <Text>انجام محاسبه</Text>
            </Ripple>
          </>
        ) : (
          <Text />
        )}
        {tablets != null ? (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={styles.center}>مصالح</DataTable.Title>
                <DataTable.Title style={styles.center} numeric>
                  متراژ مصرفی
                </DataTable.Title>
              </DataTable.Header>
              {tablets.map((item, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell style={styles.center}>
                    {item.name}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.center} numeric>
                    {item.meghdar}
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        ) : (
          <Text />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    margin: 5,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  btn: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87e16d',
  },
  center: {
    justifyContent: 'center',
  },
});

export default React.memo(Home);

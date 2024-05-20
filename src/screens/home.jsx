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
import {handel6} from '../helper_functions/W111-NF-7.5cm';
import {handel7} from '../helper_functions/W111-DIN-7.5cm';
import {handel8} from '../helper_functions/W11-NF-9.5cm';
import {handel9} from '../helper_functions/W11-DIN-9.5cm';
import {handel10} from '../helper_functions/W111-NF-12.5cm';
import {handel11} from '../helper_functions/W111-DIN-12.5cm';
import {handel12} from '../helper_functions/W112-NF-10cm';
import {handel13} from '../helper_functions/W112-DIN-10cm';
import {handel14} from '../helper_functions/W112-NF-12cm';
import {handel15} from '../helper_functions/W112-DIN-12cm';
import {handel16} from '../helper_functions/W112-NF-15cm';
import {handel17} from '../helper_functions/W112-DIN-15cm';
import {handel18} from '../helper_functions/W115-NF-15.5cm';
import {handel19} from '../helper_functions/W115-DIN-15.5cm';
import {handel20} from '../helper_functions/W115-NF-19.5cm';
import {handel21} from '../helper_functions/W115-DIN-19.5cm';
import {handel22} from '../helper_functions/W115-NF-25.5sm';
import {handel23} from '../helper_functions/W115-DIN-25.5cm';
import {handel24} from '../helper_functions/W116-NF-22sm';
import {handel25} from '../helper_functions/W116-DIN-22cm';
import {handel26} from '../helper_functions/W116-NF-26sm';
import {handel27} from '../helper_functions/W116-26cm';
import {handel28} from '../helper_functions/W116-NF-32sm';
import {handel29} from '../helper_functions/W116-DIN-32cm';
import {handel30} from '../helper_functions/W611-Lining';
import {handel31} from '../helper_functions/W623-Lining';

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
const divar = [
  {
    label:
      'W111(7.5cm)NF' +
      'دیوار جداکننده با یک ردیف سازه و یک لایه صفحه گچی در هر طرف',
    value: '6',
  },
  {
    label:
      'W111(7.5cm)DIN' +
      'دیوار جداکننده با یک ردیف سازه و یک لایه صفحه گچی در هر طرف',
    value: '7',
  },
  {
    label:
      'W111(9.5cm)NF' +
      'دیوار جداکننده با یک ردیف سازه و یک لایه صفحه گچی در هر طرف',
    value: '8',
  },
  {
    label:
      'W111(9.5cm)DIN' +
      'دیوار جداکننده با یک ردیف سازه و یک لایه صفحه گچی در هر طرف',
    value: '9',
  },
  {
    label:
      'W111(12.5cm)NF' +
      'دیوار جداکننده با یک ردیف سازه و یک لایه صفحه گچی در هر طرف',
    value: '10',
  },
  {
    label:
      'W111(12.5cm)DIN' +
      'دیوار جداکننده با یک ردیف سازه و یک لایه صفحه گچی در هر طرف',
    value: '11',
  },
  {
    label:
      'W112(10cm)NF' +
      'دیوار جداکننده با یک ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '12',
  },
  {
    label:
      'W112(10cm)DIN' +
      'دیوار جداکننده با یک ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '13',
  },
  {
    label:
      'W112(12cm)NF' +
      'دیوار جداکننده با یک ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '14',
  },
  {
    label:
      'W112(12cm)DIN' +
      'دیوار جداکننده با یک ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '15',
  },
  {
    label:
      'W112(15cm)NF' +
      'دیوار جداکننده با یک ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '16',
  },
  {
    label:
      'W112(15cm)DIN' +
      'دیوار جداکننده با یک ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '17',
  },
  {
    label:
      'W115(15.5cm)NF' +
      'دیوار جداکننده با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '18',
  },
  {
    label:
      'W115(15.5cm)DIN' +
      'دیوار جداکننده با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '19',
  },
  {
    label:
      'W115(19.5cm)NF' +
      'دیوار جداکننده با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '20',
  },
  {
    label:
      'W115(19.5cm)DIN' +
      'دیوار جداکننده با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '21',
  },
  {
    label:
      'W115(25.5cm)NF' +
      'دیوار جداکننده با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '22',
  },
  {
    label:
      'W115(25.5cm)DIN' +
      'دیوار جداکننده با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '23',
  },
  {
    label:
      'W116(22cm)NF' +
      'دیوار تاسیساتی با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '24',
  },
  {
    label:
      'W116(22cm)DIN' +
      'دیوار تاسیساتی با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '25',
  },
  {
    label:
      'W116(26cm)NF' +
      'دیوار تاسیساتی با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '26',
  },
  {
    label:
      'W116(26cm)' +
      'دیوار تاسیساتی با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '27',
  },
  {
    label:
      'W116(32cm)NF' +
      'دیوار تاسیساتی با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '28',
  },
  {
    label:
      'W116(32cm)DIN' +
      'دیوار تاسیساتی با دو ردیف سازه و دو لایه صفحه گچی در هر طرف',
    value: '29',
  },
  {label: 'W611(Lining)' + 'دیوار پوششی بدون سازه', value: '30'},
  {label: 'W623(Lining)' + 'دیوار پوششی با سازه', value: '31'},
];

const data2 = [
  {label: 'سقف', value: 'saghf'},
  {label: 'دیوار', value: 'divar'},
];

const Home = () => {
  const [saze, setSaze] = useState(null);
  const [isFocusS, setIsFocusS] = useState(false);
  const [value, setValue] = useState(null);
  const [valued, setValued] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusd, setIsFocusd] = useState(false);
  const [tablets, setTablets] = useState(null);
  const [tabletsd, setTabletsd] = useState(null);
  const [v, setV] = useState(null);
  const [d, setD] = useState(null);
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

  const handeldivar = () => {
    if (d == null) {
      ToastAndroid.show('لطفا مقدار را وارد نمایید', ToastAndroid.SHORT);
      return;
    }
    switch (valued) {
      case '6':
        setTabletsd(handel6(d));
        break;
      case '7':
        setTabletsd(handel7(d));
        break;
      case '8':
        setTabletsd(handel8(d));
        break;
      case '9':
        setTabletsd(handel9(d));
        break;
      case '10':
        setTabletsd(handel10(d));
        break;
      case '11':
        setTabletsd(handel11(d));
        break;
      case '12':
        setTabletsd(handel12(d));
        break;
      case '13':
        setTabletsd(handel13(d));
        break;
      case '14':
        setTabletsd(handel14(d));
        break;
      case '15':
        setTabletsd(handel15(d));
        break;
      case '16':
        setTabletsd(handel16(d));
        break;
      case '17':
        setTabletsd(handel17(d));
        break;
      case '18':
        setTabletsd(handel18(d));
        break;
      case '19':
        setTabletsd(handel19(d));
        break;
      case '20':
        setTabletsd(handel20(d));
        break;
      case '21':
        setTabletsd(handel21(d));
        break;
      case '22':
        setTabletsd(handel22(d));
        break;
      case '23':
        setTabletsd(handel23(d));
        break;
      case '24':
        setTabletsd(handel24(d));
        break;
      case '25':
        setTabletsd(handel25(d));
        break;
      case '26':
        setTabletsd(handel26(d));
        break;
      case '27':
        setTabletsd(handel27(d));
        break;
      case '28':
        setTabletsd(handel28(d));
        break;
      case '29':
        setTabletsd(handel29(d));
        break;
      case '30':
        setTabletsd(handel30(d));
        break;
      case '31':
        setTabletsd(handel31(d));
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
          data={data2}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusS ? 'نوع سازه را انتخاب نمایید' : '...'}
          searchPlaceholder="جست و جو"
          value={saze}
          onFocus={() => setIsFocusS(true)}
          onBlur={() => setIsFocusS(false)}
          onChange={item => {
            setSaze(item.value);
            setIsFocusS(false);
          }}
        />

        {saze == 'saghf' ? (
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
            placeholder={!isFocusS ? 'نوع سقف را انتخاب نمایید' : '...'}
            searchPlaceholder="جست و جو"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        ) : (
          <></>
        )}

        {saze == 'divar' ? (
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={divar}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocusS ? 'نوع دیوار را انتخاب نمایید' : '...'}
            searchPlaceholder="جست و جو"
            value={valued}
            onFocus={() => setIsFocusd(true)}
            onBlur={() => setIsFocusd(false)}
            onChange={item => {
              setValued(item.value);
              setIsFocusd(false);
            }}
          />
        ) : (
          <></>
        )}
        {value != null && saze == 'saghf' ? (
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
        {valued != null && saze == 'divar' ? (
          <>
            <TextInput
              placeholder={'متراژ نهایی را وارد نمایید'}
              onChangeText={item => {
                setD(item);
              }}
              keyboardType={'numeric'}
              style={styles.dropdown}
            />
            <Ripple style={styles.btn} onPress={() => handeldivar()}>
              <Text>انجام محاسبه</Text>
            </Ripple>
          </>
        ) : (
          <Text />
        )}
        {tablets != null && saze == 'saghf' ? (
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
        {tabletsd != null && saze == 'divar' ? (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={styles.center}>مصالح</DataTable.Title>
                <DataTable.Title style={styles.center} numeric>
                  متراژ مصرفی
                </DataTable.Title>
              </DataTable.Header>
              {tabletsd.map((item, index) => (
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

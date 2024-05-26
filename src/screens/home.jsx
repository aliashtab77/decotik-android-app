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

const data3 = [
  {label: 'کی پلاس', value: 'kplus'},
  {label: 'متفرقه با ضخامت 0.42', value: '042'},
  {label: 'متفرقه با ضخامت 0.46', value: '046'},
  {label: 'متفرقه با ضخامت 0.48', value: '048'},
  {label: 'متفرقه با ضخامت 0.55', value: '055'},
  {label: 'متفرقه با ضخامت 0.58', value: '058'},
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
  const [o, setO] = useState(null);
  const [ofocous, setOfocous] = useState(false);
  const [b, setB] = useState(null);
  const [bfocus, setBfocus] = useState(false);
  // @ts-ignore

  const handelshow = () => {
    if (v == null) {
      ToastAndroid.show('لطفا مقدار را وارد نمایید', ToastAndroid.SHORT);
      return;
    }
    switch (value) {
      case '1':
        handel1(v, b).then(res => {
          setTablets(res);
        });
        break;
      case '2':
        handel2(v, b).then(res => {
          setTablets(res);
        });
        break;
      case '3':
        handel3(v, b).then(res => {
          setTablets(res);
        });
        break;
      case '4':
        handel4(v, b).then(res => {
          setTablets(res);
        });
        break;
      case '5':
        handel5(v, b).then(res => {
          setTablets(res);
        });
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
        handel6(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '7':
        handel7(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '8':
        handel8(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '9':
        handel9(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '10':
        handel10(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '11':
        handel11(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '12':
        handel12(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '13':
        handel13(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '14':
        handel14(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '15':
        handel15(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '16':
        handel16(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '17':
        handel17(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '18':
        handel18(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '19':
        handel19(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '20':
        handel20(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '21':
        handel21(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '22':
        handel22(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '23':
        handel23(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '24':
        handel24(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '25':
        handel25(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '26':
        handel26(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '27':
        handel27(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '28':
        handel28(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '29':
        handel29(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '30':
        handel30(d, o).then(res => {
          setTabletsd(res);
        });
        break;
      case '31':
        handel31(d, o).then(res => {
          setTabletsd(res);
        });
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
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data3}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={
              !bfocus ? 'نوع اجناس مورد نظر را انتخاب نمایید' : '...'
            }
            searchPlaceholder="جست و جو"
            value={valued}
            onFocus={() => setBfocus(true)}
            onBlur={() => setBfocus(false)}
            onChange={item => {
              setB(item.value);
              setBfocus(false);
            }}
          />
        ) : (
          <></>
        )}

        {value != null && saze == 'saghf' && b != null ? (
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
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data3}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={
              !bfocus ? 'نوع اجناس مورد نظر را انتخاب نمایید' : '...'
            }
            searchPlaceholder="جست و جو"
            value={valued}
            onFocus={() => setOfocous(true)}
            onBlur={() => setOfocous(false)}
            onChange={item => {
              setO(item.value);
              setOfocous(false);
            }}
          />
        ) : (
          <></>
        )}

        {valued != null && saze == 'divar' && o != null ? (
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
                <DataTable.Title style={styles.center} numeric>
                  قیمت {b}
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
                  <DataTable.Cell style={styles.center} numeric>
                    {item.price}
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
                <DataTable.Title style={styles.center} numeric>
                  قیمت {o}
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
                  <DataTable.Cell style={styles.center} numeric>
                    {item.price}
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

//دیوار جدا کننده با یک ردیف سازه و دو لایه صفحه گچی
//استاندارد DIN
// 12 cm
import {
  givePrices,
  givePrices042,
  givePrices046,
  givePrices048,
  givePrices055,
  givePrices058,
} from './price';
function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const data = [
  {n: 'سازه استاد CW75', z: 2},
  {n: 'سازه رانر UW75', z: 0.7},
  {n: 'نوار عایق پشت چسبدار 4*15', z: 2.4},
  {n: 'میخ مهاری فولادی سقفی m6*40mm', z: 0.7},
  {n: 'پیچ رولپلاگ m6*60mm', z: 1.8},
  {n: 'RG 12.5', z: 4},
  {n: 'TN25', z: 12},
  {n: 'TN35', z: 24},
  {n: 'بتونه درزگیر', z: 1.2},
  {n: 'پودر ماستیک(1)', z: 1},
  {n: 'نوار درزگیر', z: 1.5},
];

export async function handel15(v, o) {
  const price = [];

  const x = Number(v);
  switch (o) {
    case 'kplus':
      await givePrices().then(res => {
        price.push(res);
      });
      break;
    case '042':
      await givePrices042().then(res => {
        price.push(res);
      });
      break;
    case '046':
      await givePrices046().then(res => {
        price.push(res);
      });
      break;
    case '048':
      await givePrices048().then(res => {
        price.push(res);
      });
      break;
    case '055':
      await givePrices055().then(res => {
        price.push(res);
      });
      break;
    case '058':
      await givePrices058().then(res => {
        price.push(res);
      });
      break;
  }
  let fi = 0;

  const result = [];
  data.forEach(item => {
    const zz = round(item.z * x);
    let mablagh = round((price[0][item.n] * zz * 112) / 100);
    fi += mablagh;

    result.push({name: item.n, meghdar: zz, price: mablagh});
  });
  return { result:result, fi:round(fi) }
}

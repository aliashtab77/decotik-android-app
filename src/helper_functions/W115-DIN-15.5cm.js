//دیوار جدا کننده با دو ردیف سازه و دو لایه صفحه گچی
//استاندارد DIN
// 15.5 cm
import {givePrices} from './price';
function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const data = [
  {n: 'سازه استاد CW50', z: 4},
  {n: 'سازه رانر UW50', z: 1.4},
  {n: 'نوار عایق پشت چسبدار 4*15', z: 5.4},
  {n: 'میخ مهاری فولادی سقفی m6*40mm', z: 1.4},
  {n: 'پیچ رولپلاگ m6*60mm', z: 3.6},
  {n: 'RG 12.5', z: 4},
  {n: 'TN25', z: 12},
  {n: 'TN35', z: 24},
  {n: 'بتونه درزگیر', z: 1.2},
  {n: 'پودر ماستیک(1)', z: 1},
  {n: 'نوار درزگیر', z: 1.5},
];
const price = [];

export async function handel19(v) {
  const x = Number(v);
  await givePrices().then(res => {
    price.push(res);
  });
  const result = [];
  data.forEach(item => {
    const zz = round(item.z * x);
    let mablagh = round((price[0][item.n] * zz * 112) / 100);

    result.push({name: item.n, meghdar: zz, price: mablagh});
  });
  return result;
}

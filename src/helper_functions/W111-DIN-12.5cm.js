//دیوار جدا کننده با یک ردیف سازه و یک صفحه گچی
//استاندارد DIN
// 12.5 cm
import {givePrices} from './price';
function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const data = [
  {n: 'سازه استاد CW100', z: 2},
  {n: 'سازه رانر UW100', z: 0.7},
  {n: 'نوار عایق پشت چسبدار 4*15', z: 2.4},
  {n: 'میخ مهاری فولادی سقفی m6*40mm', z: 0.7},
  {n: 'پیچ رولپلاگ m6*60mm', z: 1.8},
  {n: 'RG 12.5', z: 2},
  {n: 'TN25', z: 24},
  {n: 'بتونه درزگیر', z: 0.65},
  {n: 'پودر ماستیک(1)', z: 1},
  {n: 'نوار درزگیر', z: 1.5},
];

const price = [];

export async function handel11(v) {
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

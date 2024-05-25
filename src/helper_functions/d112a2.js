//سقف کاذب یکپارچه (آویز نانیوس) d112a2
import {givePrices} from './price';
function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const data = [
  {n: 'سازه CD60', z: 3.2},
  {n: 'سازه تراز UD28', z: 0.8},
  {n: 'اتصال کامل CD60', z: 2.2},
  {n: 'بست اتصال طولی CD60', z: 0.7},
  {n: 'آویز نانیوس *', z: 1.2},
  {n: 'نوار ترن فیکس', z: 0.8},
  {n: 'LN11', z: 3.8},
  {n: 'میخ مهاری فولادی سقفی m6*40mm', z: 1.2},
  {n: 'پیچ رولپلاگ m6*60mm', z: 1.5},
  {n: 'RG 12.5', z: 1},
  {n: 'TN25', z: 17},
  {n: 'بتونه درزگیر', z: 0.35},
  {n: 'پودر ماستیک(1)', z: 0.5},
  {n: 'نوار درزگیر', z: 1.1},
];

const price = [];

export async function handel2(v) {
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

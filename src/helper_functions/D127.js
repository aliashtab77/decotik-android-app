//D127 Panel Acoustic Design Ceiling سقف کاذب آکوستیک(آویز نانیوس)
import {givePrices} from './price';

function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const data = [
  {n: 'سازه CD60', z: 4.6},
  {n: 'سازه تراز UD28', z: 0.8},
  {n: 'اتصال کامل CD60', z: 4},
  {n: 'بست اتصال طولی CD60', z: 0.9},
  {n: 'آویز نانیوس *', z: 1.3},
  {n: 'نوار ترن فیکس', z: 0.8},
  {n: 'LN11', z: 2.8},
  {n: 'میخ مهاری فولادی سقفی m6*40mm', z: 1.3},
  {n: 'پیچ رولپلاگ m6*60mm', z: 1.5},
  {n: 'پنل آکوستیک پانچ دایره ای نامنظم 12/20/35', z: 1},
  {n: 'TN25/ SN30', z: 25},
  {n: 'بتونه TRIAS', z: 0.1},
];
const price = [];

export async function handel5(v) {
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

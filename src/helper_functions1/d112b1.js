//سقف کاذب یکپارچه (اویز ترکیبی)D112B
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
  {n: 'سازه F47', z: 2.2},
  {n: 'سازه L25', z: 0.8},
  {n: 'سازه رانر U50', z: 1.08},
  {n: 'اتصال سقفی HT90', z: 2.7},
  {n: 'LN11', z: 11},
  {n: 'میخ مهاری فولادی سقفی m6*40mm', z: 2.7},
  {n: 'پیچ رولپلاگ m6*60mm', z: 1.4},
  {n: 'RG 12.5', z: 1},
  {n: 'TN25', z: 17},

];
export async function handel3(v, o) {
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

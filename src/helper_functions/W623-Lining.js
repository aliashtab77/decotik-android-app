//انالیز مصالح یک متر مربع دیوار پوششی با سازه W623
//Lining-W623
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
  {n: 'سازه F47', z: 2},
  {n: 'سازه L25', z: 0.7},
  {n: 'اتصال مستقیم CT205', z: 2.9},
  {n: 'LN11', z: 5.8},
  {n: 'نوار عایق پشت چسبدار 4*15', z: 2.8},
  {n: 'میخ مهاری فولادی سقفی m6*40mm', z: 0.7},
  {n: 'پیچ رولپلاگ m6*60mm', z: 3.6},
  {n: 'RG 12.5', z: 1},
  {n: 'TN25', z: 12},
  {n: 'بتونه درزگیر', z: 0.35},
  {n: 'پودر ماستیک(1)', z: 0.5},
  {n: 'نوار درزگیر', z: 0.75},
];
export async function handel31(v, o) {
  const x = Number(v);
  const price = [];

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

//انالیز مصالح یک متر مربع دیوار پوششی بدون سازه
//Lining-W611
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
  {n: 'RG 12.5', z: 1},
  {n: 'بوردفیکس کی پلاس', z: 3.5},
  {n: 'بتونه درزگیر', z: 0.35},
  {n: 'پودر ماستیک(1)', z: 0.5},
  {n: 'نوار درزگیر', z: 0.75},
];

export async function handel30(v, o) {
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

//انالیز مصالح یک متر مربع دیوار پوششی بدون سازه
//Lining-W611
import {givePrices} from './price';

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
const price = [];

export async function handel30(v) {
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

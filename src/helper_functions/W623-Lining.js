//انالیز مصالح یک متر مربع دیوار پوششی با سازه W623
//Lining-W623

function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const data =[
  {n:'سازه F47',z:2},
  {n:'سازه L25',z:0.7},
  {n:'اتصال مستقیم CT205',z:2.9},
  {n:'LN 11',z:5.8},
  {n:'نوار عایق پشت چسبدار 4*15',z:2.8},
  {n:'میخ مهاری فولادی سقفی m6*40mm',z:0.7},
  {n:'پیچ رولپلاگ m6*60mm',z:3.6},
  {n:'RG 12.5',z:1},
  {n:'TN25',z:12},
  {n:'بتونه درزگیر',z:0.35},
  {n:'پودر ماستیک(1)',z:0.5},
  {n:'نوار درزگیر',z:0.75},
]
export function handel31(v){
  const x = Number(v);
  const result = []
  data.forEach(item => {
    const zz = round(item.z * x);
    result.push({name:item.n, meghdar:zz});
  })
  return result;
}
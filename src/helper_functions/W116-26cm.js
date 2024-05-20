//دیوار تاسیساتی با دو ردیف سازه و دو لایه صفحه گچی در هر طرف
// 26 cm

function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const data =[
  {n:'سازه استاد CW75',z:4},
  {n:'سازه رانر UW75',z:1.4},
  {n:'نوار عایق پشت چسبدار 4*15',z:4.9},
  {n:'میخ مهاری فولادی سقفی m6*40mm',z:1.4},
  {n:'پیچ رولپلاگ m6*60mm',z:3.6},
  {n:'RG 12.5',z:4.1},
  {n:'TN25',z:25},
  {n:'TN35',z:24},
  {n:'بتونه درزگیر',z:1.2},
  {n:'پودر ماستیک(1)',z:1},
  {n:'نوار درزگیر',z:1.5},
]

export function handel27(v){
  const x = Number(v);
  const result = []
  data.forEach(item => {
    const zz = round(item.z * x);
    result.push({name:item.n, meghdar:zz});
  })
  return result;
}

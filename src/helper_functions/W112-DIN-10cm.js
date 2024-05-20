//دیوار جدا کننده با یک ردیف سازه و دو لایه صفحه گچی
//استاندارد DIN
// 10 cm

function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const data =[
  {n:'سازه استاد CW50',z:2},
  {n:'سازه رانر UW50',z:0.7},
  {n:'نوار عایق پشت چسبدار 4*15',z:2.4},
  {n:'میخ مهاری فولادی سقفی m6*40mm',z:0.7},
  {n:'پیچ رولپلاگ m6*60mm',z:1.8},
  {n:'RG 12.5',z:4},
  {n:'TN25',z:12},
  {n:'TN35',z:24},
  {n:'بتونه درزگیر',z:1.2},
  {n:'پودر ماستیک(1)',z:1},
  {n:'نوار درزگیر',z:1.5},
]
export function handel13(v){
  const x = Number(v);
  const result = []
  data.forEach(item => {
    const zz = round(item.z * x);
    result.push({name:item.n, meghdar:zz});
  })
  return result;
}

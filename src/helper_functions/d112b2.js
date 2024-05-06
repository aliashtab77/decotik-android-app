//سقف کاذب یکپارچه (با آویز نانیوس) d112b2
function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}


const data =[
  {n:'سازه CD60', z:2.2},
  {n:'سازه تراز UD28', z:0.8},
  {n:'آویز نانیوس *', z:2.7},
  {n:'نوار ترن فیکس', z:0.8},
  {n:'LN 11', z:5},
  {n:'میخ مهاری فولادی سقفی m6*40mm', z:2.7},
  {n:'پیچ رولپلاگ m6*60mm', z:1.4},
  {n:'RG 12.5', z:1},
  {n:'TN25', z:17},
  {n:'بتونه درزگیر', z:0.35},
  {n:'پودر ماستیک(1)', z:0.5},
  {n:'نوار درزگیر', z:1.1},
]


export function handel4(v){
  const x = Number(v);
  const result = []
  data.forEach(item => {
    const zz = round(item.z * x);
    result.push({name:item.n, meghdar:zz});
  })
  return result;
}

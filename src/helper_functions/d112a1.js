// سقف یک پارچه ترکیبی d112A آویز ترکیبی

function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const data = [
  {n:'سازه F47', z:3.4},
  {n:'سازه L25', z:0.8},
  {n:'اتصال کامل F47',z:2.6},
  {n:'اتصال مستقیم CT205',z:1.9},
  {n:'بست اتصال طولی F47',z:0.7},
  {n:'پروفیل UH36',z:0.76},
  {n:'اتصال سقفی HT90',z:1.9},
  {n:'نوار ترن فیکس',z:0.8},
  {n:'LN11',z:12},
  {n:'میخ مهاری فولادی سقفی m6*40mm',z:1.9},
  {n:'پیچ رولپلاگ m6*60mm',z:1.5},
  {n:'RG 12.5',z:1},
  {n:'TN25',z:17},
  {n:'بتونه درزگیر',z:0.35},
  {n:'پودر ماستیک(1)',z:0.5},
  {n:'نوار درزگیر',z:1.1},
]

export function handel1(v){
  const x = Number(v);
  const result = []
  data.forEach(item => {
    const zz = round(item.z * x);
    result.push({name:item.n, meghdar:zz});
  })
  return result;
}

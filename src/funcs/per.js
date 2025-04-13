import {PermissionsAndroid} from 'react-native';

export function givePermissionsFromUser(permissions) {
  return new Promise(async (resolve, reject) => {
    try {
      await PermissionsAndroid.requestMultiple(permissions).then(result => {
        for (let p of permissions) {
          let status = false;
          if (result[p] === 'granted') {
            status = true;
          } else {
            status = false;
          }
          if (status) {
            resolve();
          } else {
            reject();
          }
        }
      });
    } catch (e) {
      reject();
    }
  });
}

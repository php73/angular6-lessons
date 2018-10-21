import {forEach} from '@angular/router/src/utils/collection';
import {Type} from '@angular/core/src/type';

export class ObjectHelper {
  public static forEach<T>(
    obj: T,
    callback: (item: any, key: string | number, object: T, ...params: any[]) => void | null,
    ...params: any[]
  ) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && callback(obj[key], key, obj, ...params) === null) {
        return;
      }
    }
  }

  public static merge(...objects: { [k: string]: any }[]) {
    const resultObject = objects.shift();
    objects.forEach((value: { [k: string]: any }) => {
      ObjectHelper.forEach(value, (item: any, key: string | number) => {
        if (resultObject.hasOwnProperty(key)) {
          resultObject[key] = item;
        }
      });
    });
    return resultObject;
  }

  public static createFromObject(type: Type<any>, parameterList: { [p: string]: any }) {
    const res = new type;
    ObjectHelper.forEach(parameterList, (item: any, key: string) => {
      res[key] = item;
    });
    return res;
  }
}

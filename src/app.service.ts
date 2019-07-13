import {
  Injectable,
} from '@nestjs/common';
import { DataViewModel } from './DataViewModel';

import dataFile from './data.json';
const dataObj = (dataFile as DataViewModel[]);

@Injectable()
export class AppService {

  getData(search: string, filters: number[]): DataViewModel[] {

    search = search.toLowerCase();

    const results = new Array<DataViewModel>();
    dataObj.forEach(data => {
      const result = new DataViewModel();
      result.name = data.name;
      result.address = data.address;
      result.image = data.image;
      result.price = data.price;
      result.reviews = data.reviews;
      let add = true;
      if (!(result.name.includes(search))) {
        add = false;
      }
      data.type.forEach(type => {
        type = type.toLowerCase();
        if (type.includes(search)) {
          add = true;
        }
      });
      filters.forEach(filter => {
        if (!(data.filters.includes(filter))) {
          add = false;
        }
      });
      if (add) {
        results.push(result);
      }
    });

    return results;
  }

}

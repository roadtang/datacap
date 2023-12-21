import {BaseService} from "@/services/BaseService";
import {ResponseModel} from "@/model/ResponseModel";
import {HttpCommon} from "@/common/HttpCommon";

const baseUrl = '/api/v1/dataset';

class DatasetService
  extends BaseService<any>
{
  constructor()
  {
    super(baseUrl);
  }

  saveOrUpdate<T>(configure: T): Promise<ResponseModel>
  {
    const url = `${baseUrl}/create`
    if (configure['id'] > 0) {
      return new HttpCommon().put(url, configure);
    }
    else {
      return new HttpCommon().post(url, configure);
    }
  }

  getByName<T>(name: string): Promise<ResponseModel>
  {
    return Promise.resolve(undefined);
  }
}

export default new DatasetService();

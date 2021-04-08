import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { ApiGetFileList, ApiGetFileByPass } from './API'

export function getFileList ():AxiosPromise {
  return request({
    url: ApiGetFileList.url,
    method: ApiGetFileList.method
  })
}

export function getFileByPass ():AxiosPromise {
  return request({
    url: ApiGetFileByPass.url,
    method: ApiGetFileByPass.method
  })
}

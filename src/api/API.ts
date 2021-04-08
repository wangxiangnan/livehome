enum EnumMethod {
  Post = 'post',
  Get = 'get',
  Delete = 'delete',
  Put = 'put',
}

export const ApiUpload = {
  url: '/upload',
  method: EnumMethod.Post
}
export const ApiGetFileList = {
  url: '/upload/list',
  method: EnumMethod.Get
}

export const ApiGetFileByPass = {
  url: '/upload/getFilePathByPass',
  method: EnumMethod.Get
}

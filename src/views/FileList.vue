<template>
  <ul class="fileList">
    <template v-for="item in fileList" :key="item.id">
      <li class="card">
        <el-row>
          <el-col :sm="8">
            <div class="thumbnail">
              <template v-if="!item.has_pass">
                <template v-if="/image/.test(item.type)">
                  <el-image :src="$BASE_URL + '/upload/' + item.name" fit="contain"></el-image>
                </template>
                <template v-else-if="item.isVideo">
                  <p>video</p>
                </template>
                <template v-else>
                  <p>{{ item.origin_name.slice(item.origin_name.lastIndexOf('.') + 1).toUpperCase() }}</p>
                </template>
              </template>
              <template v-else>
                <p class="el-icon-lock"></p>
              </template>
            </div>
          </el-col>
          <el-col :sm="16">
            <div class="card-body">
              <h3 class="card-text">{{ item.origin_name }}</h3>
              <p class="card-text">{{ item.descs }}</p>
              <p class="card-text"><small class="text-muted">{{ item.pub_time }}</small></p>
              <el-button size="small" class="btn btn-light text-secondary el-icon-download hover-scale" @click="downFile(item.id, item.name, item.has_pass)" circle></el-button>
              <el-button type="primary" size="small" class="el-icon-view hover-scale" @click="handlePreview(item._name, item.id,item.origin_name)" circle></el-button>
              <!-- <button type="button" class="btn btn-light " @click="app.delFileById('<%= item.id %>')"></button> -->
            </div>
          </el-col>
        </el-row>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { getFileList } from '@/api/upload'
// import { triggerDownLoad } from '@/utils/index'

export default {
  setup () {
    // #1 获取列表相关
    const fileList = ref([])
    const getList = async () => {
      const res: any = await getFileList()
      fileList.value = res.list
    }
    onMounted(getList)

    /*     // #2 下载文件
    const downFile = async function (id: string, name: string, hasPass: number) {
      // console.log(id, hasPass)
      // let fileName = name
      if (hasPass) {
        let pass = this.$prompt('请输入密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\w+/,
          inputErrorMessage: '邮箱格式不正确'
        })
        let data = await getFileByPass()
      }
      // triggerDownLoad(`${this.$BASE_URL}/public/${fileName}`, fileName)
    } */

    // #3 删除文件

    // output
    return { fileList }
  }
}
</script>

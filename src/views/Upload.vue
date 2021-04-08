<template>
  <el-form :model="fileData" :rules="rules" ref="fileForm" label-width="80px" class="upload-form">
    <el-form-item label="文件上传">
      <el-upload
        class="upload-demo"
        :action="uploadAction"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-success="onSuccess"
        :data="fileData"
        multiple
        ref="upload"
        :file-list="fileList"
        :auto-upload="false"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <template #tip>
          <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
        </template>
      </el-upload>
    </el-form-item>
    <el-form-item label="是否密码" prop="has_pass">
      <el-radio-group v-model="fileData.has_pass">
        <el-radio :label="0">无</el-radio>
        <el-radio :label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="fileData.has_pass" label="密码" prop="pass">
      <el-input v-model="fileData.pass"></el-input>
    </el-form-item>
    <el-form-item label="文件描述" prop="descs">
      <el-input type="textarea" v-model="fileData.descs" :rows="6"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('fileForm')">立即创建</el-button>
      <el-button @click="resetForm('fileForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ApiUpload } from '@/api/API'
interface FileType {
  name: string;
}
interface Res {
  errcode: number
}
@Options({
  data () {
    return {
      uploadAction: `${process.env.VUE_APP_BASE_URL}${ApiUpload.url}`,
      fileData: {
        pass: '',
        has_pass: 0,
        descs: ''
      },
      fileList: [],
      rules: {
        pass: [
          { required: true, message: '密码必填', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        has_pass: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName: string) {
      this.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          this.$refs.upload.submit()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName: string) {
      this.$refs[formName].resetFields()
    },
    handleRemove (file:FileType, fileList:FileType[]) {
      console.log(file, fileList)
    },
    handlePreview (file:FileType) {
      console.log(file)
    },
    beforeRemove (file:FileType) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    onSuccess (res: Res) {
      if (res.errcode === 0) {
        // this.resetForm('fileForm')
        // this.$refs.upload.clearFiles()
        this.$router.push({ name: 'FileList' })
      }
    }
  }
})
export default class Upload extends Vue {
}
</script>

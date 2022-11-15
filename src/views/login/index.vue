<template>
  <div class="login-wrapper">
    <ElForm
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="0"
      class="login-ruleForm"
      @keyup.enter="submitForm(ruleFormRef)"
    >
      <ElFormItem prop="username">
        <ElInput
          v-model="ruleForm.username"
          placeholder="请输入用户名 admin or user"
          size="large"
          autocomplete="off"
        />
      </ElFormItem>
      <ElFormItem prop="password">
        <ElInput
          v-model.number="ruleForm.password"
          type="password"
          size="large"
          placeholder="请输入密码 123456"
        />
      </ElFormItem>
      <ElButton
        size="large"
        type="warning"
        style="width: 100%"
        @click="submitForm(ruleFormRef)"
      >
        登 录
      </ElButton>
    </ElForm>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { login_acctoken } from '@/api/login'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'

const router = useRouter()

interface LoginForm {
  username: string
  password: string
}

const ruleFormRef = ref<FormInstance>()

const ruleForm: LoginForm = reactive({
  username: 'admin',
  password: '123456'
})

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const loginFetch = async (params: LoginForm) => {
  const { data, msg } = await login_acctoken(params)
  if (!data.token) {
    ElMessage({
      message: msg,
      type: 'error'
    })
  } else {
    Cookies.set('token', data.token as unknown as string)
    router.push('/')
  }
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      loginFetch(ruleForm)
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style scoped lang="scss">
.login-wrapper {
  background: url(../../assets/images/login-bj-large.jpg);
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;

  .login-ruleForm {
    width: 350px;
    background-color: #ddd;
    padding: 60px 40px 50px 40px;
    position: absolute;
    top: 30%;
    left: 15%;
  }
}
</style>

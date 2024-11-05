<template>
  <div class="contact">
    <el-container>
      <el-header>
        <h2>联系我们</h2>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <!-- 在线留言 -->
          <el-col :span="12">
            <h3>在线留言</h3>
            <el-form :model="form" :rules="rules" ref="contactForm" label-width="80px" @submit.native.prevent="onSubmit">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" placeholder="请输入您的邮箱"></el-input>
              </el-form-item>
              <el-form-item label="留言" prop="message">
                <el-input type="textarea" v-model="form.message" placeholder="请输入您的留言"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">发送</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入您的邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur', 'change'] },
        ],
        message: [
          { required: true, message: '请输入您的留言', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.contactForm.validate((valid) => {
        if (valid) {
          // 处理表单提交，例如发送到后台服务器
          console.log('表单数据：', this.form);
          this.$message.success('感谢您的留言，我们会尽快与您联系。');
          this.resetForm();
        } else {
          console.log('表单验证失败');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.contactForm.resetFields();
    },
  },
};
</script>

<style>
.contact {
  padding: 40px 20px;
}
.contact h3 {
  color: #409EFF;
  margin-bottom: 20px;
}
.contact p {
  line-height: 1.6;
}
.contact .el-link {
  margin-right: 10px;
}
</style>
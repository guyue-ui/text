<template>
  <div class="pricing">
    <el-container>
      <el-header>
        <h2>定价方案</h2>
      </el-header>
      <el-main>
        <el-row :gutter="20" justify="center">
          <el-col :span="6" v-for="(plan, index) in plans" :key="index">
            <el-card class="pricing-card">
              <h3>{{ plan.name }}</h3>
              <h4>{{ plan.price }}</h4>
              <ul>
                <li v-for="(feature, idx) in plan.features" :key="idx">{{ feature }}</li>
              </ul>
              <el-button type="primary" @click="goToContact">立即订购</el-button>
            </el-card>
          </el-col>
        </el-row>
        <p class="pricing-note">如需定制化方案，请 <router-link to="/contact">联系我们</router-link>。</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plans: [
        {
          name: '基础版',
          price: '¥99/月',
          features: ['库存管理', '订单处理', '基本销售分析'],
        },
        {
          name: '专业版',
          price: '¥199/月',
          features: ['包含基础版所有功能', '高级销售分析', '多渠道整合'],
        },
        {
          name: '企业版',
          price: '¥299/月',
          features: ['包含专业版所有功能', '定制化解决方案', '专属客户支持'],
        },
      ],
    };
  },
  methods: {
    goToContact() {
      this.$router.push('/contact');
    },
  },
};
</script>

<style>
.pricing {
  padding: 40px 20px;
}
.pricing-card {
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: box-shadow 0.3s;
}
.pricing-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.pricing-card h3 {
  color: #409EFF;
  margin-bottom: 10px;
}
.pricing-card h4 {
  color: #333;
  margin-bottom: 20px;
}
.pricing-card ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}
.pricing-card li {
  margin: 10px 0;
  color: #666;
}
.pricing-note {
  text-align: center;
  margin-top: 20px;
  color: #666;
}
</style>
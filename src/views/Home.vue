<template>
  <div class="home">

    <!-- 主内容区域 -->
    <div class="hero-section">
      <el-row type="flex" justify="center" align="middle" class="content-wrapper">
        <el-col :span="10" class="text-content">
          <h2>专注于为跨境电商提供创新的ERP解决方案</h2>
          <h1>高效、智能、可靠的ERP系统</h1>
          <p>帮助跨境卖家优化运营流程，提升销售效率，赋能全球化业务拓展</p>
        </el-col>
        <el-col :span="12" class="video-demo">
          <video autoplay muted loop playsinline class="dashboard-video" style="width: 100%; max-width: 600px; height: auto;">
            <source src="../assets/videos/首页.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </el-col>
      </el-row>
    </div>

    <!-- 核心功能区域 -->
    <div class="core-features alternate-bg">
      <div class="centered-content">
      <h2 class="core-title">核心功能</h2>
      <p class="core-subtitle">打通跨境电商业务全流程，闭环管理业务，实现业绩增长</p>
      </div>
      <el-row :gutter="20" justify="center">
        <el-col :span="6" v-for="(feature, index) in features" :key="index">
          <el-card class="feature-card">
            <div class="icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 进销存一体管理区域 -->
    <div class="inventory-management">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="12" class="diagram-section">
          <img src="../assets/images/进销存示意图.png" alt="进销存图示" class="diagram-image" />
        </el-col>
        <el-col :span="12" class="description-section" style="margin-left: 300px;">
          <h2>进销存一体管理</h2>
          <p>打通采购、发货、物流等环节，1688一键下单，智能提供补货建议</p>
          <ul>
            <li>采购业务多场景全覆盖</li>
            <p>支持1688下单/委外加工/退换货等采购方式，可多维度管理</p>
            <li>智能补货建议</li>
            <p>自动追踪全球销售库存状况，提供补货方案</p>
            <li>物流全链条追踪管理</li>
            <p>全链条追踪物流动态，优化物流成本</p>
            <li>一站式管库存</li>
            <p>集成海外仓等多渠道，统一管理海内外库存</p>
          </ul>
        </el-col>
      </el-row>
    </div>

    <!-- 财务精准管理 -->
    <div class="financial-management alternate-bg">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="12" class="description-section" style="max-width: 480px;">
          <h2>财务精准管理</h2>
          <p>每日实时利润统计，订单级回款跟踪，自动提现，业财一体化管理</p>
          <ul>
            <li>实时看利润</li>
            <p>精准核算利润，实时整合提供利润报表，反哺销售决策调整</p>
            <li>成本严控制</li>
            <p>业务成本一目了然，隐形费用自动识别，精准统计所有成本</p>
            <li>资金流追踪</li>
            <p>打通订单-付款-发货-结算-回款全链路，自动追踪每一笔订单的回款</p>
          </ul>
        </el-col>
        <el-col :span="12" class="diagram-section" style="max-width: 480px; margin-left: 300px;">
          <img src="../assets/images/财务精准管理.png" alt="财务管理图示" class="diagram-image" />
        </el-col>
      </el-row>
    </div>

    <!-- 多维度数据报表 -->
    <div class="data-reports">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="12" class="diagram-section">
          <img src="../assets/images/多维度数据报表.png" alt="数据报表图示" class="diagram-image" />
        </el-col>
        <el-col :span="12" class="description-section" style="max-width: 480px; margin-left: 300px;">
          <h2>多维度数据报表</h2>
          <p>自动形成利润报表、采购报表、库存报表、业绩报表等，数据可视化</p>
          <ul>
            <li>利润报表</li>
            <p>实时整合平台运营数据，精准核算利润</p>
            <li>产品表现报表</li>
            <p>整合Listing所有运营数据，支持出入库</p>
            <li>BI自定义数据分析</li>
            <p>自定义经营数据驱动器，实时监测业务数据</p>
          </ul>
        </el-col>
      </el-row>
    </div>

    <!-- 全流程广告管理 -->
    <div class="ad-management alternate-bg">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="12" class="description-section" style="max-width: 480px;">
          <h2>全流程广告管理</h2>
          <p>投放前挖掘优质词，投中使用自动规则提效，投后溯源，分析广告转化率</p>
          <ul>
            <li>投放前：挖优质词定策略</li>
            <li>投放中：自动规则提效</li>
            <li>投放后：精准透视分析</li>
          </ul>
        </el-col>
        <el-col :span="12" class="diagram-section" style="max-width: 480px; margin-left: 300px; ">
          <img src="../assets/images/全流程广告管理.png" alt="广告管理图示" class="diagram-image" />
        </el-col>
      </el-row>
    </div>

    <!-- 为什么选择纳仓 -->
    <div class="why-choose">
      <h2>为什么选择纳仓</h2>
      <p>选择纳仓即选择了精细化管理的模式，全面赋能实现业务增长</p>
      <el-row :gutter="20" justify="center">
        <el-col :span="8">
          <el-card class="why-card">
            <h3>全生态产品</h3>
            <p>贴合跨境卖家核心使用场景，SaaS软件对接支付、物流等系统</p>
            <div class="why-stats">10+ 跨境产品模块</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="why-card">
            <h3>全方位保障</h3>
            <p>深度开发能力与数据安全护航，亚马逊SPN服务商</p>
            <div class="why-stats">0.1s 快速响应</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="why-card">
            <h3>全周期服务</h3>
            <p>全程专业服务，满足卖家需求，提供软件使用负责任的售后支持</p>
            <div class="why-stats">20+ 服务中心</div>
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const features = ref([
  { icon: '📦', title: '进销存一体管理', description: '打通采购、发货、物流等环节，1688一键下单，智能提供补货建议' },
  { icon: '💰', title: '财务精准管理', description: '每日实时利润统计，订单级回款跟踪，自动提现，业财一体化管理' },
  { icon: '📊', title: '多维度数据报表', description: '自动形成利润报表、采购报表、库存报表、业绩报表等，数据可视化' },
  { icon: '📈', title: '全流程广告管理', description: '投放前关键词优质词，投中使用自动规则提效，投后溯源，转化率分析' },
  { icon: '🔧', title: '高效运营工具', description: '实时监控关键词排名，竞品监控，ChatGPT文案等工具，辅助运营决策' },
  { icon: '💬', title: '售后客服管理', description: '同步站内信与邮件，自动分类分析，提高客户满意度' },
  { icon: '⚠️', title: '风险全维管理', description: '支持库容/库存/Listing/店铺等多维度管理，设置数据权限' },
  { icon: '📱', title: '手机端随时用', description: '支持APP端随时查看运营数据，消息通知及时推送' },
]);
</script>

<style scoped>
.home {
  background-color: #f9fafe;
}

.hero-section, .core-features, .inventory-management, .financial-management, .data-reports, .ad-management, .why-choose {
  padding: 40px 20px;
  margin-top: 10px;
}

.alternate-bg {
  background-color: #f5f7fa;
}

.text-content h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #409EFF;
}

.centered-content {
  text-align: center;
  margin-bottom: 20px;
}

.diagram-section {
  max-width: 480px;
}

.diagram-section img {
  width: 100%;
  height: auto;
}

.description-section {
  max-width: 480px;
}

.feature-card, .why-card {
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.why-choose {
  text-align: center;
}

.why-stats {
  margin-top: 10px;
  font-size: 24px;
  color: #409EFF;
  font-weight: bold;
}

.description-section ul {
  list-style-type: none;
  padding-left: 0;
}

.description-section li {
  font-weight: bold;
  color: #333;
  margin-top: 10px;
}

.description-section p {
  font-size: 16px;
  color: #666;
}

.description-section .el-button {
  margin-top: 20px;
}
</style>

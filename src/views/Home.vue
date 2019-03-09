<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!-- 左边导航 -->
    <a-layout-sider :trigger="null" collapsible v-model="collapsed" theme="dark">
      <div class="logo">
        <a-icon type="gitlab" v-if="collapsed"/>
        <span v-else>狐小具</span>
      </div>

      <a-menu
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="[menuList[0].key]"
        @click="swithRouter"
      >
        <template v-for="item in menuList">
          <a-menu-item v-if="!item.children" :key="item.key">
            <a-icon :type="item.icon" v-if="item.icon"/>
            <span>{{item.title}}</span>
          </a-menu-item>

          <sub-menu v-else :menu-info="item" :key="item.key"/>
        </template>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <!-- 头部导航 -->
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>

      <!-- 内容区域 -->
      <a-layout-content
        :style="{ margin: '24px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Menu from "../components/Menu";
export default {
  components: {
    "sub-menu": Menu
  },
  data() {
    return {
      urlMap: new Map(),
      collapsed: false,
      menuList: [
        {
          key: "HOME",
          title: "首页",
          icon: "solution",
          url: "/about"
        },
        {
          key: "HOME2",
          title: "首页2",
          icon: "solution",
          url: "/about2"
        },
        {
          key: "SM01",
          title: "系统",
          icon: "code",
          children: [
            {
              key: "SM01_01",
              title: "系统属性配置",
              children: [
                {
                  key: "SM01_01_01",
                  title: "数据1",
                  url: "/about"
                },
                {
                  key: "SM01_01_02",
                  title: "数据2",
                  url: "/about2"
                }
              ]
            },
            {
              key: "SM01_02",
              title: "系统基础数据",
              url: "/about2"
            },
            {
              key: "SM01_03",
              title: "机构基础数据",
              url: "/about"
            }
          ]
        },
        {
          key: "SM02",
          title: "订单",
          icon: "picture",
          children: [
            {
              key: "SM02_01",
              title: "接单管理",
              url: "/about"
            },
            {
              key: "SM02_02",
              title: "派单管理",
              url: "/about2"
            }
          ]
        },
        {
          key: "SM03",
          title: "销售管理",
          icon: "tag",
          children: [
            {
              key: "SM03_01",
              title: "合同管理",
              url: "/about"
            },
            {
              key: "SM03_02",
              title: "报价单管理",
              url: "/about2"
            },
            {
              key: "SM03_03",
              title: "往来单位管理",
              url: "/about"
            }
          ]
        }
      ]
    };
  },
  methods: {
    // 跳转页面
    swithRouter({ key }) {
      let url = this.urlMap.get(key);
      url && this.$router.push(url);
    },
    // 初始化urlMap对象
    initUrlMap(menuList) {
      let self = this;
      menuList.forEach(menu => {
        if (menu.children) {
          self.initUrlMap(menu.children);
        } else if (menu.url) {
          this.urlMap.set(menu.key, menu.url);
        }
      });
    }
  },
  mounted() {
    this.initUrlMap(this.menuList);
  }
};
</script>

<style>
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 40px;
  line-height: 40px;
  margin: 16px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
}
</style>
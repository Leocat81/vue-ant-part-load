<template>
  <div class="alita-flex">
    <a-divider class="alita-flex-header">
      <b>
        <a-icon type="coffee"/> SQL赋值神器
      </b>
    </a-divider>
    <div class="alita-flex-body alita-container">
      <div class="alita-sider">
        <div class="alita-full">
          <a-form>
            <a-form-item label="SQL">
              <a-textarea></a-textarea>
            </a-form-item>
            <a-form-item label="参数">
              <a-textarea></a-textarea>
            </a-form-item>
            <a-form-item class="alita-button-group">
              <a-button type="primary" block icon="thunderbolt" size="large">提交</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
      <div class="alita-middle"></div>
      <div class="alita-content">
        <div class="alita-full">
          <a-form>
            <a-form-item label="Result">
              <a-textarea></a-textarea>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style>
.alita-flex {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
}
.alita-flex-header {
  flex: 0 0 auto;
}
.alita-flex-header .anticon {
  color: red;
}
.alita-flex-body {
  flex: 1 1 auto;
  margin-bottom: 20px;
}
.alita-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
  align-content: space-around;
}
.alita-right {
  text-align: right;
}
.alita-center {
  text-align: center;
}
.alita-sider {
  flex: 0 1 50%;
}
.alita-middle {
  flex: 0 0 4px;
  margin: 0 10px;
}
.alita-content {
  flex: 1 1 auto;
}
.alita-full {
  height: 100%;
  width: 100%;
}
.alita-full .ant-form {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.alita-full .ant-form-item {
  height: 100%;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.alita-full .ant-form .alita-button-group {
  height: auto;
  margin: 8px 0;
  flex: 0 0 auto;
}
.alita-full .ant-form-item textarea.ant-input {
  resize: none;
  height: 100%;
}
.alita-full .ant-form-item-label {
  flex: 0 0 auto;
  text-align: left;
}
.alita-full .ant-form-item-control-wrapper,
.alita-full .ant-form-item-control {
  height: 100%;
}
</style>

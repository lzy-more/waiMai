<!--
 * @Author: your name
 * @Date: 2020-06-12 10:41:01
 * @LastEditTime: 2020-06-16 09:47:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\pages\Login\Login.vue
-->
<template>
  <div>
    <i
      style="width:100%;line-height:30px;color:pink"
      @click="backHistory"
    >返 回</i>
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">峡谷外卖</h2>
          <div class="login_header_title">
            <a
              href="javascript:;"
              :class="{on:loginWay}"
              @click="loginWay=true"
            >短信登录</a>
            <a
              href="javascript:;"
              :class="{on:!loginWay}"
              @click="loginWay=false"
            >密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form @submit.prevent="login">
            <div :class="{on:loginWay}">
              <section class="login_message">
                <input
                  type="tel"
                  maxlength="11"
                  placeholder="手机号"
                  v-model="phone"
                >
                <button
                  :disabled="!rightPhone"
                  class="get_verification"
                  :class="{right_phone:rightPhone}"
                  @click.prevent="getCode"
                >{{computeTime>0?`已发送${computeTime}秒`:'获取验证码'}}</button>
              </section>
              <section class="login_verification">
                <input
                  type="tel"
                  maxlength="8"
                  placeholder="验证码"
                  v-model="code"
                >
              </section>
              <section class="login_hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div :class="{on:!loginWay}">

              <section>
                <section class="login_message">
                  <input
                    type="text"
                    maxlength="11"
                    placeholder="手机/邮箱/用户名"
                    v-model="name"
                  >
                </section>
                <section class="login_verification">
                  <input
                    type="password"
                    maxlength="8"
                    placeholder="密码"
                    v-if="!showPwd"
                    v-model="pwd"
                  >
                  <input
                    type="text"
                    maxlength="8"
                    placeholder="密码"
                    v-model="pwd"
                    v-else
                  >
                  <div
                    class="switch_button"
                    :class="showPwd?'on':'off'"
                    @click="showPwd=!showPwd"
                  >
                    <div
                      class="switch_circle"
                      :class="{right:showPwd}"
                    ></div>
                    <span class="switch_text">{{showPwd?'abc':''}}</span>
                  </div>
                </section>
                <section class="login_message">
                  <input
                    type="text"
                    maxlength="11"
                    placeholder="验证码"
                    v-model="captcha"
                  >
                  <img
                    class="get_verification"
                    src="http://localhost:4000/captcha"
                    alt="captcha"
                    ref="captcha"
                    @click="getCaptcha"
                  >
                </section>
              </section>

            </div>
            <button class="login_submit">登录</button>
          </form>
          <a
            href="javascript:;"
            class="about_us"
          >关于我们</a>
        </div>
        <!-- <a href="javascript:" class="go_back">
          <i class="iconfont icon-jiantou2"></i>
        </a> -->
      </div>
    </section>
  </div>
</template>
<script>
import { reqPwdLogin, reqSendCode, reqSmsLogin } from '../../api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      loginWay: true, // true代表短信登录
      phone: '', // 手机号
      pwd: '', // 密码
      code: '', // 短信验证码
      name: '', // 用户名
      captcha: '', // 图形验证码
      showPwd: false, // 是否显示密码
      computeTime: 0 // 计时
    }
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  created () {
    // this.getCaptcha()
  },
  methods: {
    // 获取图形验证码
    getCaptcha () {
      // 实时更新 Date.now()
      this.$refs.captcha.src =
        'http://localhost:4000/captcha?time=' + Date.now()
    },

    // 异步登录
    async login () {
      let result
      // 前台表单验证
      if (this.loginWay) {
        // 短信登录
        const { rightPhone, phone, code } = this
        if (!rightPhone) {
          Toast({
            message: '手机号不能为空',
            position: 'middle',
            iconClass: 'icon icon-warning',
            duration: 3000
          })
          return
        } else if (!this.code) {
          Toast({
            message: '短信验证码不能为空',
            position: 'middle',
            iconClass: 'icon icon-warning',
            duration: 3000
          })
          return
        }

        // 手机号短信登录
        result = await reqSmsLogin(this.phone, this.code)
      } else {
        const { name, pwd, captcha } = this

        if (!name) {
          Toast({
            message: '用户名不能为空',
            position: 'middle',
            iconClass: 'icon icon-warning',
            duration: 3000
          })
        } else if (!this.pwd) {
          Toast({
            message: '密码不能为空',
            position: 'middle',
            iconClass: 'icon icon-warning',
            duration: 3000
          })
        } else if (!this.captcha) {
          Toast({
            message: '图形验证码不能为空',
            position: 'middle',
            iconClass: 'icon icon-warning',
            duration: 3000
          })
        }

        // 密码登录

        // 用户名登录
        result = await reqPwdLogin(this.name, this.pwd, this.captcha)
      }
      // 停止倒计时

      if (result.code === 0) {
        this.userInfo = result.data
 // 存储到vuex
 this.$store.dispatch('recordUser', this.userInfo)
 // 跳转到个人中心
 this.$router.replace('/profile')

      } else {
        this.userInfo = { msg: result.msg }
        Toast({
          message: result.msg,
          position: 'middle',
          iconClass: 'icon icon-warning',
          duration: 3000
        })
        this.getCaptcha()
      }
    },
    async getCode () {
      console.log('1111111')
      if (!this.computeTime) {
        // 如果没有计时 就停止
        this.computeTime = 30
        let intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime <= 0) {
            clearInterval(intervalId)
          }
        }, 1000)

        // 发送 ajax 请求(请求后台向指定手机号发验证码短信)
        // 发送短信验证码
        let result = await reqSendCode(this.phone)
        console.log(result)
        if (result.code === 1) {
          Toast({
            message: result.msg,
            position: 'middle',
            iconClass: 'icon icon-warning',
            duration: 3000
          })
          // 停止倒计时
          if (this.computeTime) {
            this.computeTime = 0
            clearInterval(intervalId)
            intervalId = undefined
          }
        }
      }
    },
    backHistory () {
      //   console.log(111111111)
      this.$router.back(-1)
    }
  }
}
</script>
<style lang="less">
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
}
.loginContainer .loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
.loginContainer .loginInner .login_header .login_logo {
  font-size: 40px;
  font-weight: bold;
  color: #02a774;
  text-align: center;
}
.loginContainer .loginInner .login_header .login_header_title {
  padding-top: 40px;
  text-align: center;
}
.loginContainer .loginInner .login_header .login_header_title > a {
  color: #333;
  font-size: 14px;
  padding-bottom: 4px;
}
.loginContainer .loginInner .login_header .login_header_title > a:first-child {
  margin-right: 40px;
}
.loginContainer .loginInner .login_header .login_header_title > a.on {
  color: #02a774;
  font-weight: 700;
  border-bottom: 2px solid #02a774;
}
.loginContainer .loginInner .login_content > form > div {
  display: none;
}
.loginContainer .loginInner .login_content > form > div.on {
  display: block;
}
.loginContainer .loginInner .login_content > form > div input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.loginContainer .loginInner .login_content > form > div input:focus {
  border: 1px solid #02a774;
}
.loginContainer .loginInner .login_content > form > div .login_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_message
  .get_verification {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: 0;
  color: #ccc;
  font-size: 14px;
  background: transparent;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_message
  .get_verification.right_phone {
  color: black;
}
.loginContainer .loginInner .login_content > form > div .login_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button {
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0 6px;
  width: 30px;
  height: 16px;
  line-height: 16px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button.off {
  background: #fff;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button.off
  .switch_text {
  float: right;
  color: #ddd;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button.on {
  background: #02a774;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button
  > .switch_circle {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button
  > .switch_circle.right {
  transform: translateX(30px);
}
.loginContainer .loginInner .login_content > form > div .login_hint {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
.loginContainer .loginInner .login_content > form > div .login_hint > a {
  color: #02a774;
}
.loginContainer .loginInner .login_content > form .login_submit {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #4cd96f;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  border: 0;
}
.loginContainer .loginInner .login_content .about_us {
  display: block;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: #999;
}
.loginContainer .loginInner .go_back {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
}
.loginContainer .loginInner .go_back > .iconfont {
  font-size: 20px;
  color: #999;
}
</style>

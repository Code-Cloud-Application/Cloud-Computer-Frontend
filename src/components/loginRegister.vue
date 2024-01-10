<template>
	<div class="whole">
	<div class="left">
  <header class="title">
    <img alt="Vue logo" class="logo" src="../assets/logo.png" width="400" height="400" />
	<div class="greetings">
    <h1 class="blue">Welcome to cloud!</h1>
    <h3>
      Create your own cloud computer
      
    </h3>
  </div>
  </header>
	</div>
	<div class="login-register">
		<div class="contain">
			<div class="big-box" :class="{active:isLogin}">
				<div class="big-contain" key="bigContainLogin" v-if="isLogin">
					<div class="btitle">登录</div>
					<div class="bform">
						<input type="text" placeholder="用户名" v-model="form.username">
						<input type="password" placeholder="密码" v-model="form.userpwd">
<!--						<span class="errTips" v-if="error">{{ error_msg }}</span>-->
					</div>
					<button class="bbutton" @click="login">登录</button>
				</div>
				<div class="big-contain" key="bigContainRegister" v-else>
					<div class="btitle">创建账户</div>
					<div class="bform">
						<input type="text" placeholder="用户名" v-model="form.username">
						<span class="errTips" v-if="error">{{ error_msg }}</span>
						
						<input type="password" placeholder="密码" v-model="form.userpwd">
					</div>
					<button class="bbutton" @click="register">注册</button>
				</div>
			</div>
			<div class="small-box" :class="{active:isLogin}">
				<div class="small-contain" key="smallContainRegister" v-if="isLogin">
					<div class="stitle">欢迎来到Cloud</div>
					<p class="scontent">开始注册，开启自己的云电脑！</p>
					<button class="sbutton" @click="changeType">注册</button>
				</div>
				<div class="small-contain" key="smallContainLogin" v-else>
					<div class="stitle">欢迎回来!</div>
					<p class="scontent">使用云电脑，请登录你的账户</p>
					<button class="sbutton" @click="changeType">登录</button>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>

import router from "@/router/router.js";
import {ElMessage} from "element-plus";

export default{
	name:"login-register",
    
    data() {
        return {
            isLogin: false,
            passwordError: false,
            error: false,
            error_msg: undefined,
            form: {
                username: '',
                userpwd: ''
            },
        };
    },
    methods: {
        changeType() {
            this.isLogin = !this.isLogin;
            this.form.username = '';
            this.form.userpwd = '';
        },
        login() {
            const self = this;
            if (self.form.username !== "" && self.form.userpwd !== "") {
                self.$axios({
                    method: 'post',
                    url: self.$base + '/login',
                    data: {
                        username: self.form.username,
                        password: self.form.userpwd
                    }
                })
                    .then(res => {
                    switch (res.data.code) {
                        case 1:
                            ElMessage({
                              message: '登录成功！',
                              grouping: true,
                              type: 'success',
                            })
                            localStorage.setItem("username", self.form.username)
							              router.push('/main');
                            break;
                        case 0:
                          ElMessage({
                            message: res.data.message,
                            grouping: true,
                            type: 'error',
                          })
                            // this.error = true
                            // this.error_msg = res.data.message
                    }
                })
                    .catch(err => {
                    console.log(err);
                });
            }
            else {
                alert("填写不能为空！");
            }
        },
        register() {
            const self = this;
            if (self.form.username !== "" && self.form.userpwd !== "") {
                self.$axios({
                    method: 'post',
                    url: self.$base + '/register',
                    data: {
                        username: self.form.username,
                        password: self.form.userpwd
                    }
                })
                    .then(res => {
                    switch (res.data.code) {
                        case 1:
                            ElMessage({
                              message: "注册成功！",
                              grouping: true,
                              type: 'success',
                            })
                            this.login();
                            break;
                        case 0:
                            ElMessage({
                              message: res.data.message,
                              grouping: true,
                              type: 'error',
                            })
                            // this.error = true;
                            // this.error_msg = res.data.message
                            break;
                    }
                })
                    .catch(err => {
                    console.log(err);
                });
            }
            else {
                alert("填写不能为空！");
            }
        }
    },

}
</script>

<style scoped="scoped">



	.login-register{
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
    margin-left: -200px
	}
	.contain{
		width: 50%;
		height: 60%;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #fff;
		border-radius: 20px;
		box-shadow: 0 0 3px #f0f0f0,
					0 0 6px #f0f0f0;
	}
	.big-box{
		width: 70%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 30%;
		transform: translateX(0%);
		transition: all 1s;
	}
	.big-contain{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.btitle{
		font-size: 1.5em;
		font-weight: bold;
		color: rgb(39, 58, 203);
	}
	.bform{
		width: 100%;
		height: 40%;
		padding: 2em 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.bform .errTips{
		display: block;
		width: 50%;
		text-align: left;
		color: red;
		font-size: 0.7em;
		margin-left: 1em;
	}
	.bform input{
		width: 70%;
		height: 30px;
		border: none;
		outline: none;
		border-radius: 10px;
		padding-left: 2em;
		background-color: #f0f0f0;
	}
	.bbutton{
		width: 20%;
		height: 40px;
		border-radius: 24px;
		border: none;
		outline: none;
		background-color: rgb(5, 54, 138);
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
	}
	.small-box{
		width: 35%;
		height: 100%;
		background: linear-gradient(135deg,rgb(57, 144, 176),rgb(39, 58, 203));
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(0%);
		transition: all 1s;
		border-top-left-radius: inherit;
		border-bottom-left-radius: inherit;
	}
	.small-contain{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.stitle{
		font-size: 1.5em;
		font-weight: bold;
		color: #fff;
	}
	.scontent{
		font-size: 0.8em;
		color: #fff;
		text-align: center;
		padding: 2em 4em;
		line-height: 1.7em;
	}
	.sbutton{
		width: 60%;
		height: 40px;
		border-radius: 24px;
		border: 1px solid #fff;
		outline: none;
		background-color: transparent;
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
	}
	
	.big-box.active{
		left: 0;
		transition: all 0.5s;
	}
	.small-box.active{
		left: 100%;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: inherit;
		border-bottom-right-radius: inherit;
		transform: translateX(-100%);
		transition: all 1s;
	}
	.greetings{
		margin-left: 80px;

	}

	.blue{
		text-decoration: none;
  		color: rgb(16, 73, 178);
  		transition: 0.4s;
  	padding: 3px;
	}

	.title {
        max-width: 1280px;
  		margin: 0 auto;
  		padding: 2rem;
  		font-weight: normal;
	}
	.whole{
		display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 0rem;

	}





</style>




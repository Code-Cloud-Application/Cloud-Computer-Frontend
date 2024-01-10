<template>
    <el-aside width="200px" >
        <el-menu class="el-menu"
        background-color="lightsteelblue"
        >
      <el-menu-item
          :index="item.path"
          v-for="item in noChildren()"
          :key="item.path"
          @click="clickMenu(item)">
          <el-icon><icon-menu /></el-icon>
          <component class="icons"  :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </el-menu-item>
        <el-sub-menu  :index="item.label" v-for="item in hasChildren()"  :key="item.path">

          <template #title>
            <component class="icons"  :is="item.icon"></component>
          <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group >
            <el-menu-item  :index="subItem.path"
                           v-for="(subItem,subIndex) in item.children"
                           :key="subIndex"
                           @click="clickMenu(subItem)"
            >
                <component class="icons"  :is="subItem.icon"></component>
                <span>{{ subItem.label }}</span> 
            </el-menu-item>
            
          </el-menu-item-group>

        </el-sub-menu>


      </el-menu>
    </el-aside>
</template>
<script>
import {useRouter} from "vue-router";


export default{
    setup(){
      const router =useRouter()
        const list =[
            {path:'/main/user',
            name:'user',
            label:'用户',
            icon:'user',
            url: 'UserManage/UserManage'
        },
        {
            label:'基本配置',
            icon: 'grid',
            path: '/main/other',
            children:[
                {
                    path: ' /main/manage',
                    name: 'manage',
                    label: '管理',
                    icon: 'SwitchButton',
                    url: 'Other/PageOne'

                },
                {
                    path: ' /main/setting',
                    name: 'setting',
                    label: '云电脑设置',
                    url: 'Other/PageTwo',
                    icon: 'setting'

                },
            ]
        }
        ];

        const noChildren = () =>{
            return list.filter((item) => !item.children);
        };

        const hasChildren =() =>{
            return list.filter((item) => item.children);
        };
    const clickMenu =(item) =>{
      router.push({
        name: item.name,
      });

    }
    return{
        noChildren,
        hasChildren,
        clickMenu,
    }
    },
};
</script>

<style  scoped>
.icons{
    width: 18px;
    height: 18px;
  color: black;
}
.el-menu{
  height: 720px;
  border-right: none;
}
</style>
import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Header from './header'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

//注册
Vue.component('f-button', Button)
Vue.component('f-icon', Icon)
Vue.component('f-button-group', ButtonGroup)
Vue.component('f-input', Input)
Vue.component('f-row', Row)
Vue.component('f-col', Col)
Vue.component('f-layout', Layout)
Vue.component('f-header', Header)
Vue.component('f-footer', Footer)
Vue.component('f-sider', Sider)
Vue.component('f-content', Content)
Vue.component('f-tabs', Tabs)
Vue.component('f-tabs-head', TabsHead)
Vue.component('f-tabs-body', TabsBody)
Vue.component('f-tabs-item', TabsItem)
Vue.component('f-tabs-pane', TabsPane)
Vue.component('f-popover', Popover)
Vue.component('f-collapse', Collapse)
Vue.component('f-collapse-item', CollapseItem)

Vue.use(plugin)

import createElement from 'vue'

const h = createElement
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hello',
        selectedTabs: 'sport',
        selectedTab: ['2','1']
    },

    created() {
    },

    methods: {
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast('<strong>toast显示</strong>', {
                enableHtml: true,
                position,
                closeButton: {
                    text: '滴滴滴',
                    callback(toast) {
                        toast.log()
                        console.log('回调');
                    }
                },
                autoClose: 8,
            })
        }
    }
})


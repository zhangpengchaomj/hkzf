import React from 'react'
import { Route } from 'react-router-dom'
import Index from './Index/index'
import House from './House'
import News from './News'
import My from './My'
import './index.scss'
// 导入TabBar组件
import { TabBar } from 'antd-mobile'

const itemList = [
  { title: '首页', icon: 'icon-ind', path: '/home' },
  { title: '找房', icon: 'icon-findHouse', path: '/home/house' },
  { title: '资讯', icon: 'icon-infom', path: '/home/news' },
  { title: '我的', icon: 'icon-my', path: '/home/my' }
]
class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      // 默认选中的tab栏
      selectedTab: this.props.location.pathname
      // hidden:是否隐藏tabBar
      // hidden: false,
      // 是否全屏
      // fullScreen: false
    }
  }

  renderItem() {
    return itemList.map(item => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        // badge={1}
        onPress={() => {
          this.setState({
            selectedTab: item.path
          })
          this.props.history.push(item.path)
        }}
        // data-seed="logId"
      />
    ))
  }

  render() {
    return (
      <div className="home">
        {/* 配置路由规则 */}
        <Route exact path="/home" component={Index} />
        {/* <Route path="/home/index" component={Index} /> */}
        <Route path="/home/house" component={House} />
        <Route path="/home/news" component={News} />
        <Route path="/home/my" component={My} />

        {/* 配置链接 */}
        <div className="nav">
          {/* 
            unselectedTintColor: 未选中的颜色
            tintColor： 选中的颜色
            barTintColor: 背景色
           */}
          <TabBar
            unselectedTintColor="#888"
            tintColor="#21b97a"
            barTintColor="white"
            noRenderContent={true}
            // hidden={this.state.hidden}
          >
            {/* 
              title： 显示的文字
              icon: 未选中的图标
              selectedIcon： 选中的图标
              selected： 是否被选中
              badge： 徽章
              onPress：点击事件
             */}
            {this.renderItem()}
          </TabBar>
        </div>
      </div>
    )
  }
}

export default Home

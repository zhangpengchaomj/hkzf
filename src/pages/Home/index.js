import React from 'react'
import { Route } from 'react-router-dom'
import Index from './Index/index'
import House from './House'
import News from './News'
import My from './My'
import './index.scss'
// 导入TabBar组件
import { TabBar } from 'antd-mobile'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 默认选中的tab栏
      selectedTab: 'blueTab',
      // hidden:是否隐藏tabBar
      hidden: false,
      // 是否全屏
      fullScreen: true
    }
  }
  // 渲染tabBar的内容
  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          textAlign: 'center'
        }}
      >
        <div style={{ paddingTop: 60 }}>
          Clicked “{pageText}” tab， show “{pageText}” information
        </div>
        <a
          href="qeqwe"
          style={{
            display: 'block',
            marginTop: 40,
            marginBottom: 20,
            color: '#108ee9'
          }}
          onClick={e => {
            e.preventDefault()
            this.setState({
              hidden: !this.state.hidden
            })
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a
          href="qeqwe"
          style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={e => {
            e.preventDefault()
            this.setState({
              fullScreen: !this.state.fullScreen
            })
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    )
  }
  render() {
    return (
      <div className="home">
        {/* 配置路由规则 */}
        <Route path="/home/index" component={Index} />
        <Route path="/home/house" component={House} />
        <Route path="/home/news" component={News} />
        <Route path="/home/my" component={My} />
        {/* 配置链接 */}
        <div
          style={
            this.state.fullScreen
              ? { position: 'fixed', height: '100%', width: '100%', top: 0 }
              : { height: 400 }
          }
        >
          {/* 
            unselectedTintColor: 未选中的颜色
            tintColor： 选中的颜色
            barTintColor: 背景色
           */}
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            {/* 
              title： 显示的文字
              icon: 未选中的图标
              selectedIcon： 选中的图标
              selected： 是否被选中
              badge： 徽章
              onPress：点击事件
             */}
            <TabBar.Item
              title="首页"
              key="首页"
              icon={<i className="iconfont icon-ind" />}
              selectedIcon={<i className="iconfont icon-ind" />}
              selected={this.state.selectedTab === 'blueTab'}
              // badge={1}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab'
                })
              }}
              // data-seed="logId"
            >
              {/* {this.renderContent('Life')} */}
            </TabBar.Item>
            <TabBar.Item
              icon={<i className="iconfont icon-findHouse" />}
              selectedIcon={<i className="iconfont icon-findHouse" />}
              title="找房"
              key="找房"
              // badge={'new'}
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab'
                })
              }}
              // data-seed="logId1"
            >
              {/* {this.renderContent('Koubei')} */}
            </TabBar.Item>
            <TabBar.Item
              icon={<i className="iconfont icon-infom" />}
              selectedIcon={<i className="iconfont icon-infom" />}
              title="咨询"
              key="咨询"
              // dot
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab'
                })
              }}
            >
              {/* {this.renderContent('Friend')} */}
            </TabBar.Item>
            <TabBar.Item
              icon={<i className="iconfont icon-my" />}
              selectedIcon={<i className="iconfont icon-my" />}
              title="我的"
              key="我的"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab'
                })
              }}
            >
              {/* {this.renderContent('My')} */}
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}

export default Home

import { Vue, Component } from 'vue-property-decorator'
import Skeleton from './package'
import appStyle from './app.less'

const style = {
  container: {
    width: '480px',
    height: '300px',
    backgroundSize: '100% 100%',
    display: 'inline-block',
    margin: '10px'
  }
}
@Component
class Home extends Vue {
  public name: string = '测试我的组件是否好使呢'
  public render(h) {
    return (
      <div>
        <h1>
          {this.name}
          <Skeleton />
        </h1>
      </div>
    )
  }
}
export default Home

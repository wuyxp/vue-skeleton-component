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
  public name: string = '通用化骨架屏'
  public render(h) {
    return (
      <div>
        <h1>
          {this.name}
          <Skeleton
            active={false}
            type='rect'
            options={{
              width: '300px',
              height: '200px'
            }}
          />
          <Skeleton
            loading={false}
            type='list'
            options={{
              row: 3,
              lineHight: 10,
              avatar: {
                position: 'left',
                size: 'large',
                shape: 'circle'
              }
            }}
          />
        </h1>
      </div>
    )
  }
}
export default Home

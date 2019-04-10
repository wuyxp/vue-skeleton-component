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
            title={true}
            type='rect'
            options={{
              width: '300px',
              height: '200px'
            }}
          />
          <Skeleton
            type='list'
            options={{
              row: 3,
              lineHight: 20,
              avatar: {
                position: 'left',
                size: 'large',
                shape: 'circle'
              }
            }}
          />
          <Skeleton
            type='list'
            options={{
              row: 2,
              lineHight: 20,
              avatar: {
                position: 'right',
                size: 'default',
                shape: 'square'
              }
            }}
          />
          <Skeleton
            type='list'
            options={{
              row: 4,
              lineHight: 20
            }}
          />
          <Skeleton
            type='avatar'
            options={{
              position: 'left',
              size: 'default',
              shape: 'circle'
            }}
          />
          <Skeleton
            type='avatar'
            options={{
              position: 'right',
              size: 'large',
              shape: 'circle'
            }}
          />
          <Skeleton
            type='avatar'
            options={{
              position: 'top',
              size: 'small',
              shape: 'circle'
            }}
          />
          <Skeleton
            type='avatar'
            options={{
              position: 'bottom',
              size: 'default',
              shape: 'square'
            }}
          />
          <Skeleton
            type='article'
            loading={false}
          > <div>aaa</div>loading的占位符 </Skeleton>
        </h1>
      </div>
    )
  }
}
export default Home

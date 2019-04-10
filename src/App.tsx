import { Vue, Component } from 'vue-property-decorator'
import Skeleton from './package'
import appStyle from './app.less'

@Component
class Home extends Vue {
  public name: string = '通用化骨架屏'
  public render(h) {
    return (
      <div>
        <h2>
          {this.name}
          <div class={appStyle.boxList}>
            <Skeleton
              active={false}
              title={true}
              type='rect'
              options={{
                width: '300px',
                height: '200px'
              }}
            />
            <pre>
              {`
              <Skeleton
                active={false}
                title={true}
                type='rect'
                options={{
                  width: '300px',
                  height: '200px'
                }}
              />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <Skeleton
              type='rect'
              options={{
                width: '300px',
                height: '200px'
              }}
            />
            <pre>
              {`
                <Skeleton
                  type='rect'
                  options={{
                    width: '300px',
                    height: '200px'
                  }}
                />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <Skeleton
              type='list'
              options={{
                row: 3,
                lineHight: 20,
                width: 500,
                avatar: {
                  position: 'left',
                  size: 'large',
                  shape: 'circle'
                }
              }}
            />
            <pre>
              {`
                <Skeleton
                  type='list'
                  options={{
                    row: 3,
                    lineHight: 20,
                    width: 500,
                    avatar: {
                      position: 'left',
                      size: 'large',
                      shape: 'circle'
                    }
                  }}
                />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <Skeleton
              title={true}
              type='list'
              options={{
                row: 2,
                lineHight: 20,
                width: 500,
                avatar: {
                  position: 'right',
                  size: 'default',
                  shape: 'square'
                }
              }}
            />
            <pre>
              {`
                <Skeleton
                  title={true}
                  type='list'
                  options={{
                    row: 2,
                    lineHight: 20,
                    width: 500,
                    avatar: {
                      position: 'right',
                      size: 'default',
                      shape: 'square'
                    }
                  }}
                />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <Skeleton
              type='list'
              options={{
                width: 500,
                row: 4,
                lineHight: 20
              }}
            />
            <pre>
              {`
                <Skeleton
                  type='list'
                  options={{
                    width: 500,
                    row: 4,
                    lineHight: 20
                  }}
                />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <Skeleton
              type='avatar'
              options={{
                position: 'left',
                size: 'default',
                shape: 'circle'
              }}
            />
            <pre>
              {`
                <Skeleton
                  type='avatar'
                  options={{
                    position: 'left',
                    size: 'default',
                    shape: 'circle'
                  }}
                />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <Skeleton
              type='avatar'
              options={{
                position: 'right',
                size: 'large',
                shape: 'circle'
              }}
            />
            <pre>
            {`
            <Skeleton
              type='avatar'
              options={{
                position: 'right',
                size: 'large',
                shape: 'circle'
              }}
            />
            `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <Skeleton
              type='avatar'
              options={{
                position: 'top',
                size: 'small',
                shape: 'circle'
              }}
            />
            <pre>
            {`
            <Skeleton
              type='avatar'
              options={{
                position: 'top',
                size: 'small',
                shape: 'circle'
              }}
            />
            `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <Skeleton
              type='avatar'
              options={{
                position: 'bottom',
                size: 'default',
                shape: 'square'
              }}
            />
            <pre>
              {`
              <Skeleton
                type='avatar'
                options={{
                  position: 'bottom',
                  size: 'default',
                  shape: 'square'
                }}
              />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <Skeleton
              type='article'
              loading={false}
            > <div>aaa</div>loading的占位符 </Skeleton>
            <pre>
              {`
                <Skeleton
                  type='article'
                  loading={false}
                >
                  <div>aaa</div>
                  loading的占位符
                </Skeleton>
              `}
            </pre>
          </div>
        </h2>
      </div>
    )
  }
}
export default Home

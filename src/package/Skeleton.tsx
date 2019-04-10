import {Vue, Component, Prop} from 'vue-property-decorator'
import BaseComponent from './BaseComponent'
import Rectangular from './Rect'
import List from './List'
import Avatar from './Avatar'
import Article from './Article'
import style from './style.less'

/**
 * type?: Type,
 * active?: Boolean,
 * loading?: Boolean,
 * title?: Boolean
 */
@Component
class Skeleton extends BaseComponent {
  public static componentName: string = 'Skeleton'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(Skeleton.componentName, Skeleton)

  public render(h) {
    const {type, options, title, loading, active} = this.$props
    return (
      <div class={style.contianer}>
        {
          loading ?
          <div>
            {
              title && <div class={[active ? style.progActive : style.prog, style.title]} />
            }
            {
              type === 'rect' && <Rectangular
                title={title}
                loading={loading}
                active={active}
                options={options}
              />
            }
            {
              type === 'list' && <List
                title={title}
                loading={loading}
                active={active}
                options={options}
              />
            }
            {
              type === 'article' && <Article
                title={title}
                loading={loading}
                active={active}
                options={options}
              />
            }
            {
              type === 'avatar' && <Avatar
                title={title}
                loading={loading}
                active={active}
                options={options}
              />
            }
          </div> :
          this.$slots.default
        }
      </div>
    )
  }
}

export default Skeleton

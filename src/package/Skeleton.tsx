import {Vue, Component, Prop} from 'vue-property-decorator'
import BaseComponent from './BaseComponent'
import Rectangular from './Rect'
import List from './List'
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

  public mounted() {}
  public render(h) {
    const {type, options, title, loading, active} = this.$props
    return (
      <div>
        {
          loading ?
          <div
            class={active ? style.progActive : style.prog}
          >
            {
              title && <div class={style.title} />
            }
            {
              type === 'rect' && <Rectangular options={options} />
            }
            {
              type === 'list' && <List options={options} />
            }
          </div> :
          this.$slots.default
        }
      </div>
    )
  }
}

export default Skeleton

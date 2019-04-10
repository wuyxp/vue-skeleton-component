import {Vue, Component, Prop} from 'vue-property-decorator'
import BaseComponent from './BaseComponent'
import Rect from './Rect'
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

  public mounted() {
  }
  public render(h) {
    const {type, options, title, loading, active} = this.$props
    return (
      <div>
        <div class={style.prog}>
          <Rect
            options={options}
          />
        </div>
      </div>
    )
  }
}

export default Skeleton

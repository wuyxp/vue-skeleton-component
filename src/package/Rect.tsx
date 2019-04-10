import {Vue, Component, Prop} from 'vue-property-decorator'
import BaseComponent from './BaseComponent'

@Component
class Rectangular extends BaseComponent {
  public static componentName: string = 'Rectangular'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(Rectangular.componentName, Rectangular)
  public name: string = 'Rectangular'
  public render(h) {
    const {width, height} = this.$props.options
    const style = {
      width,
      height,
      background: '#f2f2f2'
    }
    return (
      <div style={style}>
      </div>
    )
  }
}

export default Rectangular

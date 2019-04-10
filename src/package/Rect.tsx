import {Vue, Component, Prop} from 'vue-property-decorator'
import BaseComponent from './BaseComponent'

@Component
class Rect extends BaseComponent {
  public static componentName: string = 'Rect'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(Rect.componentName, Rect)
  public name: string = 'Rect'
  public mounted() {
    console.log('Rect')
    console.log(this.$props)
  }
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

export default Rect

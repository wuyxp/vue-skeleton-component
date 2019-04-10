import {Vue, Component, Prop} from 'vue-property-decorator'
import style from './style.less'

@Component
class Skeleton extends Vue {
  public static componentName: string = 'List'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(Skeleton.componentName, Skeleton)
  public name: string = 'List'
  public mounted() {
    // tslint:disable-next-line:no-console
    console.log('List')
  }
  public render(h) {
    return (
      <div>
        <h1>List</h1>
      </div>
    )
  }
}

export default Skeleton

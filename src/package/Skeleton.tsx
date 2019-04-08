import {Vue, Component, Prop} from 'vue-property-decorator'
import style from './style.less'

@Component
class Skeleton extends Vue {
  public static install
  public static componentName: string = 'Skeleton'
  public name: string = 'Skeleton'
  public mounted() {
    // tslint:disable-next-line:no-console
    console.log('mounted')
  }
  public render(h) {
    return (
      <div>
        <h1>这是头部</h1>
      </div>
    )
  }
}

export default Skeleton

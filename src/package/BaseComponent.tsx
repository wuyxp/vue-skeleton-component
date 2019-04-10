import {Vue, Component, Prop} from 'vue-property-decorator'

/**
 * type?: Type,
 * active?: Boolean,
 * loading?: Boolean,
 * title?: Boolean
 */
@Component
class Base extends Vue {
  public static componentName: string = 'Skeleton'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(Base.componentName, Base)

  @Prop({
    type: Object,
    default: () => ({})
  })
  public options

  @Prop({
    type: String,
    default: 'rect'
  })
  public type

  @Prop({
    type: Boolean,
    default: true
  })
  public active

  @Prop({
    type: Boolean,
    default: true
  })
  public loading

  @Prop({
    type: Boolean,
    default: false
  })
  public title

}

export default Base

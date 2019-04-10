import { Component } from 'vue-property-decorator'
import BaseComponent from './BaseComponent'
import style from './style.less'

@Component
class List extends BaseComponent {
  public static componentName: string = 'List'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(List.componentName, List)
  public name: string = 'List'
  public render(h) {
    const {type, options, title, loading, active} = this.$props
    const {row, lineHight, avatar} = options
    const arr = Array(row).fill(0)
    return (
      <ul>
        {
          arr.map((item, index) => (
            <li
              key={index}
              class={[active ? style.progActive : style.prog ]}
              style={{
                height: lineHight + 'px',
                marginBottom: lineHight * 0.6 + 'px',
                width: index === arr.length - 1 ? '60%' : '100%'
              }}
            />
          ))
        }
      </ul>
    )
  }
}

export default List

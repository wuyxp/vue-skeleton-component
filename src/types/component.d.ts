import Vue from 'vue'

type Type = 
  'rect' |
  'list' |
  'article' |
  'avatar'

type Size =
  'large' |
  'small' |
  'default'

type Position =
  'left' |
  'right' |
  'top' |
  'bottom'

type Shape =
  'circle' |
  'square'

/* 矩形骨架屏配置项 */
interface RectOptions {
  width: string,
  height: string 
}

/* 头像骨架屏 */
interface AvatarOptions {
  position: Position,
  size: Size,
  shape: Shape
}

/* 列表骨架屏 */
interface ListOptions {
  row: number,
  lineHight: number,
  width: number,
  avatar: AvatarOptions | null
}

/* 文章骨架屏 */
interface ArticleOptions {
  lineHight: number,
  width: number,
  row: number
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    type?: Type,
    active?: Boolean,
    loading?: Boolean,
    title?: Boolean,
    options?: RectOptions | ListOptions | AvatarOptions | ArticleOptions
  }
}
declare var require: any
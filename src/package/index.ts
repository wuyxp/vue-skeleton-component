import Skeleton from './Skeleton'
Skeleton.install = Vue => Vue.component(Skeleton.componentName, Skeleton);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Skeleton);
}

export default Skeleton

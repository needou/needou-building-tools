import TowerCrane from '../src/component/TowerCrane'
import _Vue from 'vue'

TowerCrane.install = Vue => {
    if (!Vue) {
        window.Vue = Vue = _Vue
    }
    Vue.component(TowerCrane.name, TowerCrane)
}
export default TowerCrane;
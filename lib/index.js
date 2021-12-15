import Vue from "vue"
import TowerCrane from '../src/components/TowerCrane'

const Components = {
    TowerCrane
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
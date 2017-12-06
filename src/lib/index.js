/**
 * Created by drjr on 17-12-6.
 */
import ToastComponent from './vue-toast.vue'

let Toast = {}
Toast.install = function (Vue, options) {

    var opt={
        duration: 3000,
    }

    for (var key in options){
        opt[key] = options[key];
    }

    Vue.prototype.$toast= function (message, option) {

        if(typeof option=='object'){
            for(var key in option){
                opt[key] = option[key];
            }
        }

        const ToastController = Vue.extend(ToastComponent);

        var instance = new ToastController().$mount(document.createElement("div"));

        instance.message = message;

        instance.visible = true;

        setTimeout(()=>{
            instance.visible = false;
            document.body.removeChild(instance.$el)
        }, opt.duration)
    }

    Vue.prototype.$toast['show']= function (message, option) {
        Vue.prototype.$toast(message,option);
    }

    Vue.prototype.$toast['success']= function (message, option) {
        Vue.prototype.$toast(message,option);
    }

    Vue.prototype.$toast['info']= function (message, option) {
        Vue.prototype.$toast(message,option);
    }

    Vue.prototype.$toast['error']= function (message, option) {
        Vue.prototype.$toast(message,option);
    }
}

export default Toast;
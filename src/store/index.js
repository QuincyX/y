import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        showTopNav:true,
        showBottomNav:true,

        title:'育人教育',

        hasLogin: false,        
        role:null||'guest',

        currentUserId:null,
        currentClassId:null||19,
        currentStudentId:null||'z6vzso72',        
        currentStudent:{},   

        token:null
    },
    getters:{
        isWeixin:function(){
            let ua = navigator.userAgent.toLowerCase()
            if(ua.match(/MicroMessenger/i)=="micromessenger") {
                return true;
            } else {
                return false;
            }
        },
    },
    mutations: {
        login(state,payload) {
            state.hasLogin = true
            state.currentUserId = payload.id
            state.role = payload.role

            localStorage.setItem('hasLogin', true)
            localStorage.setItem('id', payload.id)
            localStorage.setItem('role', payload.role)
        },
        logout(state) {
            state.hasLogin = false
            state.currentUserId = null
            state.role = 'guest'

            localStorage.clear()
        },
        changeRole(state,val){
            state.role=val.toString()
        },
        getClassInfo(state,val){
            state.classInfo=val
        },
        showNav(state,val){
            state.showTopNav=val
            state.showBottomNav=val
        },
        changeTitle(state,val){
            state.title=val.toString()
        },
        changeCurrentStudent(state,val){
            state.currentStudent = val
        },
        setToken(state,val){
            state.token = val
        }
    }
})

export default store
const MixinLog ={
    log(){
        console.log("公用方法");
    }
}

export default MixinLog;
//在其他组件导入  在不同组件中公用代码
// import ReactMixin from 'react-mixin'
//使用方法在
// ReactMixin(组件名.prototype,MixinLog)
//示例在refs
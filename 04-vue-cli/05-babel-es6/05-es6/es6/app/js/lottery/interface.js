//import引入模块
import $ from 'jquery';
//为什么要引入jquery,
//1.因为很多人基础前端都是由jquery开始学习的，很少有人上来就学原生的js,jquery简单易用
//2.因为jquery很好的封装了事件绑定，ajax请求，不用这个也可以，用fetch也行，但是有兼容性

/**
 * API请求接口
 * @type {Interface}
 */
class Interface {
  //没有要声明一些属性的时候可以不写constructor, 并不一定要写
  /**
   * [getOmit 获取遗漏数据]
   * @param  {string} issue [当前期号]
   * @return {[type]}       [description]
   */
  //方法名括号
  //方法之间没有逗号
  //Promise完成异步，set.setOmit对象的方法传递数据，进行数据共享，避免了回调传递数据
  getOmit(issue) {//必须要传递一个值，所以不给默认值
    let self = this;
    return new Promise((resolve,reject) => {
      $.ajax({
        url:'/get/omit',
        data:{
          issue
        },
        dataType:'json',
        success:function(res){
          self.setOmit(res.data);//将返回的数据存到当前的对象, 由于是多重继承，所以setOmit写在某一个类中
          resolve.call(self,res)
        },
        error:function(err){
          reject.call(err);
        }
      })
    });
  }
  /**
   * [getOpenCode 获取开奖号码]
   * @param  {string} issue [期号]
   * @return {[type]}       [description]
   */
  getOpenCode(issue){
    let self = this;
    return new Promise((resolve,rejet) => {
      $.ajax({
        url:'/get/opencode',
        data:{
          issue
        },
        dataType:'json',
        success:function(res){
          self.setOpenCode(res.data);//保存当前的开奖号码
          resolve.call(self,res);
        },
        error:function(err){
          reject.call(err);
        }
      })
    });
  }

  /**
   * [getState 获取当前状态]
   * @param  {string} issue [当前期号]
   * @return {[type]}       [description]
   */
  getState(issue){
    let self = this;
    return new Promise((resolve,rejet) => {
      $.ajax({
        url:'/get/state',
        data:{
          issue
        },
        dataType:'json',
        success:function(res){
          resolve.call(self,res);
        },
        error:function(err){
          reject.call(err);
        }
      })
    });
  }
}

//导出当前的接口
export default Interface

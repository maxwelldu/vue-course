import 'babel-polyfill';
import Base from './lottery/base.js';
import Timer from './lottery/timer.js';
import Calculate from './lottery/calculate.js';
import Interface from './lottery/interface.js';
import $ from 'jquery';

//深度拷贝的方法
const copyProperties=function(target,source){
  //拿到对象的所有属性
  for(let key of Reflect.ownKeys(source)){
    //选择器的拷贝，如果不是constructor, prototype, name的话则拷贝
    if(key!=='constructor'&&key!=='prototype'&&key!=='name'){
      //从源对象中拿到对象的属性
      let desc=Object.getOwnPropertyDescriptor(source,key);
      Object.defineProperty(target,key,desc);
    }
  }
}

//多重继承的一个方法
const mix=function(...mixins){
  class Mix{}
  for(let mixin of mixins){
    copyProperties(Mix,mixin);//拷贝
    copyProperties(Mix.prototype,mixin.prototype);//拷贝原型
  }
  return Mix
}

//多重继承
class Lottery extends mix(Base,Calculate,Interface,Timer){
  //name彩票名称， cname是中文名称， issue期号
  constructor(name='syy',cname='11选5',issue='**',state='**'){
    super();
    this.name=name;
    this.cname=cname;
    this.issue=issue;
    this.state=state;
    this.el='';//当前的选择器
    this.omit=new Map();//遗漏
    this.open_code=new Set();//开奖号码
    this.open_code_list=new Set();//开奖的记录
    this.play_list=new Map();//玩法列表
    this.number=new Set();//选号
    this.issue_el='#curr_issue';//当前期号的选择器
    this.countdown_el='#countdown';//倒计时选择器
    this.state_el='.state_el';//状态选择器
    this.cart_el='.codelist';//购物车选择器
    this.omit_el='';//遗漏的选择器
    this.cur_play='r5';//默认玩法
    this.initPlayList();//初始化玩法列表
    this.initNumber();
    this.updateState();//更新状态
    this.initEvent();//事件的初始化
  }

  /**
   * [updateState 状态更新]
   * @return {[type]} [description]
   */
  updateState(){
    let self=this;
    this.getState().then(function(res){
      self.issue=res.issue;//拿到期号
      self.end_time=res.end_time;//这个销售的截止时间
      self.state=res.state;//更新当前的期号
      $(self.issue_el).text(res.issue);
      //更新倒计时
      self.countdown(res.end_time,function(time){
        $(self.countdown_el).html(time)
      },function(){
        //倒计时结束后，重新获取最新的销售状态
        setTimeout(function () {
          self.updateState();
          self.getOmit(self.issue).then(function(res){

          });
          self.getOpenCode(self.issue).then(function(res){

          })
        }, 500);
      })
    })
  }

  /**
   * [initEvent 初始化事件]
   * @return {[type]} [description]
   */
  initEvent(){
    let self = this;
    $('#plays').on('click','li',self.changePlayNav.bind(self));
    $('.boll-list').on('click','.btn-boll',self.toggleCodeActive.bind(self));
    $('#confirm_sel_code').on('click',self.addCode.bind(self));
    $('.dxjo').on('click','li',self.assistHandle.bind(self));
    $('.qkmethod').on('click','.btn-middle',self.getRandomCode.bind(self));
  }
}

export default Lottery;

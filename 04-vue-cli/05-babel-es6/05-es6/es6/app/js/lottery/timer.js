//定时器
class Timer{
  //倒计时, end截止时间，update是时间更新的回调，handle是结束时的回调
  countdown(end,update,handle){
    const now = new Date().getTime();
    const self = this;
    if(now-end>0){//当时时间大于结束时间说明已经结束
      handle.call(self);//调用结束函数
    }else{//否则没有结束
      let last_time = end-now;//得到剩余时间
      const px_d = 1000*60*60*24;//一天的毫秒数
      const px_h = 1000*60*60;//一个小时的毫秒数
      const px_m = 1000*60;//一分钟的毫秒
      const px_s = 1000;//一秒是1000毫秒
      let d = Math.floor(last_time/px_d);//剩余的时间包含多少天, 取整
      let h = Math.floor((last_time-d*px_d)/px_h);//剩余多少小时，要减去天数/小时数
      let m = Math.floor((last_time-d*px_d-h*px_h)/px_m);//剩余的分钟数
      let s = Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s);//剩余的秒数
      let r = [];//声明一个数组放结果
      if(d>0){//如果d有值则大于0
        r.push(`<em>${d}</em>天`);
      }
      if(r.length||(h>0)){//如果没有天的时候，比如天是0，前面就不能有天,如果前面有天了，那小时就算是0也需要显示
        r.push(`<em>${h}</em>时`);
      }
      if(r.length||m>0){
        r.push(`<em>${m}</em>分`);
      }
      if(r.length||s>0){
        r.push(`<em>${s}</em>秒`);
      }
      //把这个值放到last_time属性中
      self.last_time=r.join('');
      //调用update方法更新
      update.call(self,r.join(''));
      //轮询一次,就形成了循环
      setTimeout(function () {
        self.countdown(end,update,handle);
      }, 1000);
    }
  }
}

//导出定时器模块
export default Timer

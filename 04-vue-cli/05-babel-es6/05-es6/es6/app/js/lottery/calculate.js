//计算模块
class Calculate {
  /**
   * [computeCount 计算注数]
   * @param  {number} active    [当前选中的号码]
   * @param  {string} play_name [当前的玩法标识]
   * @return {number}           [注数]
   */
  computeCount(active,play_name) {
    let count = 0;//当前的注数为0
    const exist = this.play_list.has(play_name);//玩法列表中判断一下, play_list是map类型
    const arr = new Array(active).fill('0');//指定长度为active的数组，里面填充0, ES5肯定要遍历数组
    if(exist && play_name.at(0)==='r'){//如果支持，当前操作的是r开头 r2-r8
      count = Calculate.combine(arr,play_name.split('')[1]).length;
    }
    return count;
  }

  /**
   * [computeBonus 奖金范围预测]
   * @param  {number} active    [当前选中的号码]
   * @param  {string} play_name [当前的玩法标识]
   * @return {array}           [奖金范围]
   */
  computeBonus(active,play_name){
    const play = play_name.split('');
    const self = this;
    let arr=new Array(play[1]*1).fill(0);//填0或字符串都可以
    let min,max;
    if(play[0]==='r'){//组合运算
      let min_active=5-(11-active);//最小命中数; 比如任八的玩法，你选8个，开奖号码是5个，对于任八的这种，你选的号至少有2个是开奖号；对于任七来说，你的最小命中数是1
      if(min_active>0){//如果最小命中数大于0
        if(min_active-play[1]>=0){//判断最小命中数-玩法的基数，如果大于0
          arr=new Array(min_active).fill(0);//实例化一个数组
          min=Calculate.combine(arr,play[1]).length;//计算最小命中注数
        }else{//不大于0
          if(play[1]-5>0&&active-play[1]>=0){//玩法是不是大于5
            arr=new Array(active-5).fill(0);//实例化一个数组
            min=Calculate.combine(arr,play[1]-5).length;//计算最小命中注数
          }else{
            min=active-play[1]>-1?1:0
          }
        }
      }else{
        min=active-play[1]>-1?1:0;
      }

      let max_active=Math.min(active,5);
      if(play[1]-5>0){
        if(active-play[1]>=0){
          arr=new Array(active-5).fill(0);
          max=Calculate.combine(arr,play[1]-5).length;
        }else{
          max=0;
        }
      }else if(play[1]-5<0){
        arr=new Array(Math.min(active,5)).fill(0);
        max=Calculate.combine(arr,play[1]).length;
      }else{
        max=1;
      }
    }
    return [min,max].map(item=>item*self.play_list.get(play_name).bonus)
  }

  /**
   * [combine 组合运算]
   * @param  {array} arr  [参与组合运算的数组]
   * @param  {number} size [组合运算的基数]
   * @return {number}      [计算注数]
   */
  static combine(arr,size) {//静态方法,递归的方式实现组合
    let allResult = [];
    //IIFE
    (function f(arr,size,result){
      let arrLen = arr.length;
      if(size>arrLen){
        return;
      }
      if(size===arrLen){
        allResult.push([].concat(result,arr))
      }else{
        for(let i=0;i<arrLen;i++){//不断的生成新的数组，就是数组的一个随机
          let newResult = [].concat(result);
          newResult.push(arr[i]);
          if(size===1){
            allResult.push(newResult)
          }else{
            let newArr = [].concat(arr);
            newArr.splice(0,i+1);
            f(newArr,size-1,newResult)
          }
        }
      }

    })(arr,size,[])
    return allResult
  }

}

//导出模块
export default Calculate

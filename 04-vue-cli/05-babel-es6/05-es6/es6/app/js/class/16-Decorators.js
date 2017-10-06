{
  //限制某个属性是只读的
  //第一个参数是修改的类本身，第二个是修改的属性名称，第三个是该属性的描述对象
  let readonly = function(target,name,descriptor){
    descriptor.writable=false;
    return descriptor
  };

  class Test{
    //使用
    @readonly
    time(){
      return '2017-03-11'
    }
  }

  //生成一个实例
  let test=new Test();

  //这个时候会报错，这个修饰器修改了类的行为，变成了只读了
  test.time=function(){
    console.log('reset time');
  };

  console.log(test.time());
}


{
  let typename = function(target,name,descriptor){
    //增加一个静态属性
    target.myname='hello';
  }

  //在类的里面可以用，可不可以在类的外面操作，一定是在class的前面,否则就报错
  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{
  //日志系统，前端基本要做埋点，做埋点的话就会有日志，这一块传统的做法是把埋点都写在业务逻辑中
  //比如页面上有广告，我们要为广告做点击统计，展示统计；之前我但在展示的时候执行一个埋点的函数，在点击的时候去执行一下埋点的函数
  //现在用修饰器实现一个不一样的写法

  //type表示是click或者show
  let log = (type) => {
    return function(target, name, descriptor){
      //原始的函数体
      let src_method=descriptor.value;
      //给这个方法重新赋值
      descriptor.value = (...arg) => {
        src_method.apply(target,arg);//这样写的话抽出来了之后，后期要修改埋点接口，只需要修改这个地方，业务逻辑的简洁器增强了不少
        //模拟一个埋点，用info来表示, 这句话可以换成真实的埋点，埋点语句一般就是new Image().src = API接口地址
        console.info(`log ${type}`);
      }
    }
  }

  //广告的类
  class AD {
    @log('show')
    show() {
      //写了业务逻辑，没有写埋点，埋点的都拆出来放到修饰器中了
      console.info('ad is show')
    }
    @log('click')
    click() {
      console.info('ad is click');
    }
  }

  let ad = new AD();
  ad.show();
  ad.click();
}

{
  // 基本定义和生成实例
  class Parent {//定义类，ES5是用function
    //构造函数
    constructor(name = 'ucai'){
      this.name = name;
    }
  }
  let v_parent = new Parent('v');
  console.log('构造函数和实例',v_parent);
}

{
  // 继承
  class Parent{
    constructor(name='ucai'){
      this.name=name;
    }
  }

  class Child extends Parent{}

  console.log('继承',new Child());
}

{
  // 继承传递参数
  class Parent{
    constructor(name='ucai'){
      this.name=name;
    }
  }

  class Child extends Parent{
    constructor(name='child'){
      super(name);//调用父类的构造函数, super一定要放在构造函数的第一行
      this.type = 'child';
    }
  }

  console.log('继承传递参数',new Child('hello'));
}

{
  // getter,setter
  class Parent{
    constructor(name='ucai'){
      this.name = name;
    }

    //这个千万不要觉得是方法，这个是属性
    get longName(){
      return 'mk' + this.name
    }

    set longName(value){
      this.name=value;
    }
  }

  let v = new Parent();
  console.log('getter',v.longName);
  v.longName='hello';
  console.log('setter',v.longName);
}

{
  // 静态方法
  class Parent{
    constructor(name='ucai'){
      this.name=name;
    }

    static tell(){//静态方法, 通过类调用，而不是通过类的实例
      console.log('tell');
    }
  }

  Parent.tell();

}

{
  // 静态属性
  class Parent{
    constructor(name='ucai'){
      this.name=name;
    }

    static tell(){//静态方法
      console.log('tell');
    }
  }

  //直接在类上定义，没有关键字
  Parent.type='test';

  console.log('静态属性',Parent.type);
}

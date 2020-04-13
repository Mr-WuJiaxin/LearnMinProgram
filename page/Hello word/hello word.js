Page({
  data:{
    name:'Coderwhy',
    age:18,
    students:[
      { id: 1, name: 'wujiax', age:22 },
      { id: 2, name: 'nihao', age: 23 },
      { id: 3, name: 'zhangsan', age: 24 },
      { id: 4, name: 'lisi', age: 25 },
    ],
    counter:0,
  },
  handleBtnClick(){
    //1.错误做法：界面是不会刷新的
    // this.data.counter +=1,
    //console.log(this.data.counter)
    //2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
    },
    handleSubteraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})
#移动端touch事件
我们在移动端开发时，会发现会遇到一个需求，就是手触摸手机屏幕进行滑动时，发生一系列事情，这里我来系统整理一下touch事件。 

## touch事件
首先，touch事件包含三类事件：  

- touchstart 手指触摸到指定dom元素上被触发
- touchmove 手指在指定dom元素上滑动时被触发
- touchend 手机离开指定的dom元素时被触发

## touch属性
下面是touch的属性截图：
![](imgs/01_touch.png)

通过这个图，我们可以看到其中有三个属性：

- changeTouches 涉及到当前事件的手指的列表
- targetTouches 正在触摸指定dom的手指的列表
- touches 正在触摸屏幕的所有手指的一个列表

这三个列表的差距非常的细微，首先其属性内部包含的东西都差不多，如图所示：

![](imgs/02_touch.png)



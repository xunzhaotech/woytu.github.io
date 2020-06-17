(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{611:function(v,a,t){"use strict";t.r(a);var e=t(4),_=Object(e.a)({},(function(){var v=this,a=v.$createElement,t=v._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk"}},[v._v("#")]),v._v(" JDK")]),v._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#flag"}},[v._v("flag")])]),t("li",[t("a",{attrs:{href:"#源码包"}},[v._v("源码包")])]),t("li",[t("a",{attrs:{href:"#jvm"}},[v._v("JVM")]),t("ul",[t("li",[t("a",{attrs:{href:"#常用参数"}},[v._v("常用参数")])]),t("li",[t("a",{attrs:{href:"#参考参数"}},[v._v("参考参数")])])])])])]),t("p"),v._v(" "),t("h2",{attrs:{id:"flag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[v._v("#")]),v._v(" flag")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.ej-technologies.com",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://www.ej-technologies.com"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/oracle/graal",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://github.com/oracle/graal"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"http://jdk.java.net/zgc/",target:"_blank",rel:"noopener noreferrer"}},[v._v("http://jdk.java.net/zgc/"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://wiki.openjdk.java.net/display/zgc/Main",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://wiki.openjdk.java.net/display/zgc/Main"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"http://openjdk.java.net/jeps/333",target:"_blank",rel:"noopener noreferrer"}},[v._v("http://openjdk.java.net/jeps/333"),t("OutboundLink")],1)])]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/jvm%E5%8F%82%E6%95%B0%E7%BB%9F%E8%AE%A1.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"源码包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码包"}},[v._v("#")]),v._v(" 源码包")]),v._v(" "),t("ul",[t("li",[v._v("JavaFX源码：JDK安装目录下的"),t("code",[v._v("javafx-src.zip")]),v._v("文件")]),v._v(" "),t("li",[v._v("Java源码：JDK安装目录下的"),t("code",[v._v("src.zip")]),v._v("文件")])]),v._v(" "),t("blockquote",[t("p",[v._v("IDEA查看源码都是从这两个ZIP文件加载，查看源码解压ZIP到"),t("code",[v._v("Maven")]),v._v("项目的"),t("code",[v._v("src/main/java")]),v._v("下，或者直接解压到普通项目"),t("code",[v._v("src")]),v._v("下")])]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v("rt.jar")]),v._v(" 是JAVA基础类库，包含"),t("code",[v._v("lang")]),v._v("在内的大部分功能，而且"),t("code",[v._v("rt.jar")]),v._v("默认就在根"),t("code",[v._v("classloader")]),v._v("的加载路径里面")])]),v._v(" "),t("blockquote",[t("p",[v._v("在 "),t("code",[v._v("java.util.concurrent")]),v._v("、"),t("code",[v._v("java.security")]),v._v("、"),t("code",[v._v("javax.cropty")]),v._v("、"),t("code",[v._v("javax.security")]),v._v(" 四个包中就占了两个（多线程、安全）")])]),v._v(" "),t("p",[t("strong",[v._v("多线程（multi-threading and concurrent）")])]),v._v(" "),t("ol",[t("li",[v._v("关键词：volatile, sychronized")]),v._v(" "),t("li",[v._v("传统的线程 API：java.lang.Thread, java.lang.Runnable, java.lang.ThreadGroup, Object#wait, Object#notify, Object#notifyAll")]),v._v(" "),t("li",[v._v("JDK 5 并发包（java.util.concurrent）API：线程池、任务执行器、计数信号量、倒计数门闩、并发集合（并发 Map、阻塞队列等）、\n基于 CPU CAS 指令的原子 API（java.util.concurrent.atomic）、锁 API（java.util.concurrent.lock）和条件对象等。")]),v._v(" "),t("li",[v._v("作为个人知识提升，还需要理解诸如自旋锁、分离锁、分拆锁、读写锁等的同步锁策略，以及可重入锁、锁的公平性的意义。\n以及各种并发锁的算法，比如：Peterson锁、Bakery锁 等等，以及现代 CPU 体系结构")])]),v._v(" "),t("blockquote",[t("p",[v._v("涉及多线程及并发的 API 在 java.lang 中及 java.util.concurrent.* 中。")])]),v._v(" "),t("p",[t("strong",[v._v("网络（network communication）")])]),v._v(" "),t("blockquote",[t("p",[v._v("java.net、javax.net")])]),v._v(" "),t("ol",[t("li",[v._v("阻塞 TCP 通信、阻塞 UDP 通信、组播")]),v._v(" "),t("li",[v._v("非阻塞 TCP 通信、非阻塞 UDP 通信")]),v._v(" "),t("li",[v._v("客户端通信 API（java.net.URL, java.net.URLConnection 等类库）")])]),v._v(" "),t("p",[v._v("涉及网络通信的 API 都在 java.net 和 java.nio.channels 包中。这里的网络已经将 RMI 相关包 java.rmi, javax.rmi 都排除了。")]),v._v(" "),t("p",[t("strong",[v._v("安全（security, cryptography and AAA）")])]),v._v(" "),t("ol",[t("li",[v._v("Java 加密类库 JCA")]),v._v(" "),t("li",[v._v("Java 加密类库扩展 JCE")]),v._v(" "),t("li",[v._v("涉及密码学知识点的消息摘要、消息认证码、对称加密、非对称加密、数字签名")]),v._v(" "),t("li",[v._v("涉及网络通信证书管理工具（keytool）及 API（PKI、X.509证书）")]),v._v(" "),t("li",[v._v("基于 SSL/TLS 的安全网络通信 API（JSSE），包括：密钥库管理、信任库管理、阻塞 SSL 通信和非阻塞 SSL 通信等等")]),v._v(" "),t("li",[v._v("Java 认证及授权服务（JAAS）API")])]),v._v(" "),t("p",[v._v("涉及安全的东西都在：")]),v._v(" "),t("ul",[t("li",[v._v("java.security（JCA、JCE、数字证书，以及 JCE 的 SPI）")]),v._v(" "),t("li",[v._v("javax.net（SSL/TLS）")]),v._v(" "),t("li",[v._v("javax.security（JAAS）")]),v._v(" "),t("li",[v._v("javax.crypto（密码学）")]),v._v(" "),t("li",[v._v("keytool 的 JDK 工具")])]),v._v(" "),t("p",[t("strong",[t("code",[v._v("java")]),v._v("、"),t("code",[v._v("javax")]),v._v("、"),t("code",[v._v("sun")]),v._v("、"),t("code",[v._v("org")]),v._v("包有什么区别")])]),v._v(" "),t("blockquote",[t("p",[v._v("都是jdk提供的类包，且都是在"),t("code",[v._v("rt.jar")]),v._v("中。")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("java.*")]),v._v(" java标准的一部分，是对外承诺的java开发接口，通常要保持向后兼容，一般不会轻易修改。")]),v._v(" "),t("li",[t("code",[v._v("javax.*")]),v._v(" java标准的一部分，但是没有包含在标准库中，一般属于标准库的扩展。通常属于某个特定领域，不是一般性的api。")])]),v._v(" "),t("blockquote",[t("p",[v._v("以扩展的方式提供api，以避免jdk的标准库过大。当然某些早期的javax，后来被并入到标准库中，所有也应该属于新版本JDK的标准库。\n比如jmx，java 5以前是以扩展方式提供，但是jdk5以后就做为标准库的一部分了，所有javax.management也是jdk5的标准库的一部分。")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("com.sun.*")]),v._v(" 是sun的hotspot虚拟机中"),t("code",[v._v("java.*")]),v._v(" 和 "),t("code",[v._v("javax.*")]),v._v("的实现类。")])]),v._v(" "),t("blockquote",[t("p",[v._v("因为不是sun对外公开承诺的接口，所以根据根据实现的需要随时增减，因此在不同版本的hotspot中可能是不同的，\n而且在其他的jdk实现中是没有的，调用这些类，可能不会向后兼容，所以一般不推荐使用。")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("org.omg.*")]),v._v(" 是由企业或者组织提供的java类库，大部分不是sun公司提供的，同"),t("code",[v._v("com.sun.*")]),v._v("，不具备向后兼容性，会根据需要随时增减。")])]),v._v(" "),t("blockquote",[t("p",[v._v("其中比较常用的是w3c提供的对XML、网页、服务器的类和接口。")])]),v._v(" "),t("h2",{attrs:{id:"jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[v._v("#")]),v._v(" JVM")]),v._v(" "),t("blockquote",[t("p",[v._v("因为Tomcat运行在JAVA虚拟机之上,适当调整运行JVM参数可以提升整体性能。")])]),v._v(" "),t("ul",[t("li",[v._v("Windows：修改"),t("code",[v._v("bin/catalina.bat")]),v._v("文件，文件中有注释说明")]),v._v(" "),t("li",[v._v("Linux：修改"),t("code",[v._v("bin/catalina.sh")]),v._v("文件，文件中有注释说明")])]),v._v(" "),t("h3",{attrs:{id:"常用参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用参数"}},[v._v("#")]),v._v(" 常用参数")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("参数")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("file.encoding")]),v._v(" "),t("td",[v._v("默认文件编码")])]),v._v(" "),t("tr",[t("td",[v._v("-Xmx1024m")]),v._v(" "),t("td",[v._v("初始堆大小为1024m")])]),v._v(" "),t("tr",[t("td",[v._v("-Xms1024m")]),v._v(" "),t("td",[v._v("最大堆大小为1024m")])]),v._v(" "),t("tr",[t("td",[v._v("-Xmn366m")]),v._v(" "),t("td",[v._v("设置年轻代大小为366m,Sun官方推荐配置为整个堆的3/8（35.7%）")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:NewSize=n")]),v._v(" "),t("td",[v._v("设置年轻代大小")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:MaxNewSize=n")]),v._v(" "),t("td",[v._v("设置最大的年轻代大小")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:PermSize=n")]),v._v(" "),t("td",[v._v("JDK1.7设置永久代大小")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:MaxPermSize=n")]),v._v(" "),t("td",[v._v("JDK1.7设置最大永久代大小")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:MetaspaceSize=n")]),v._v(" "),t("td",[v._v("JDK1.8设置元空间大小")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:MaxMetaspaceSize=n")]),v._v(" "),t("td",[v._v("JDK1.8设置最大元空间大小,最好与-XX:MetaspaceSize一致")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:NewRatio=4")]),v._v(" "),t("td",[v._v("设置年轻代（包括Eden和两个Survivor区）与终身代的比值（除去永久代）。设置为4，则年轻代与终身代所占比值为1：4，年轻代占整个堆栈的1/5")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:SurvivorRatio=n")]),v._v(" "),t("td",[v._v("年轻代中Eden区与两个Survivor区的比值。注意Survivor区有两个。如：3，表示Eden：Survivor=3：2，一个Survivor区占整个年轻代的1/5")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:MaxTenuringThreshold")]),v._v(" "),t("td",[v._v("设置垃圾最大年龄，默认为：15。如果设置为0的话，则年轻代对象不经过Survivor区，直接进入年老代。对于年老代比较多的应用，可以提高效率。如果将此值设置为一个较大值，则年轻代对象会在Survivor区进行多次复制，这样可以增加对象再年轻代的存活时间，增加在年轻代即被回收的概论。")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:+CMSScavengeBeforeRemark")]),v._v(" "),t("td",[v._v("CMS并发标记阶段与用户线程并发进行，此阶段会产生已经被标记了的对象又发生变化的情况，若打开此开关，可在一定程度上降低CMS重新标记阶段对上述“又发生变化”对象的扫描时间，当然，“清除尝试”也会消耗一些时间。注：开启此开关并不会保证在标记阶段前一定会进行清除操作")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:+UseSerialGC")]),v._v(" "),t("td",[v._v("设置串行收集器")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:+UseParallelGC")]),v._v(" "),t("td",[v._v("设置并行收集器")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:ParallelGCThreads=n")]),v._v(" "),t("td",[v._v("设置并行收集线程数")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:+UseParalledlOldGC")]),v._v(" "),t("td",[v._v("设置并行年老代收集器")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:MaxGCPauseMillis=n")]),v._v(" "),t("td",[v._v("设置并行收集最大暂停时间")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:GCTimeRatio=n")]),v._v(" "),t("td",[v._v("设置垃圾回收时间占程序运行时间的百分比。公式为1/(1+n)")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:+UseConcMarkSweepGC")]),v._v(" "),t("td",[v._v("设置年老代为并发收集。测试中配置这个以后，-XX:NewRatio=4的配置失效了，原因不明。所以，此时年轻代大小最好用-Xmn设置。")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:CMSInitiatingOccupancyFraction=70")]),v._v(" "),t("td",[v._v("CMS垃圾收集器，当老年代达到70%时，触发CMS垃圾回收。")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:+UseCMSInitiatingOccupancyOnly")]),v._v(" "),t("td",[v._v("指定使用CMSInitiatingOccupancyFraction的值,如果不指定,JVM仅在第一次使用设定值,后续则自动调整。")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:+ParallelRefProcEnabled")]),v._v(" "),t("td",[v._v("并行处理Reference，加快处理速度，缩短耗时")])])])]),v._v(" "),t("h3",{attrs:{id:"参考参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考参数"}},[v._v("#")]),v._v(" 参考参数")]),v._v(" "),t("blockquote",[t("p",[v._v("根据JDK8-4G内存-4核CPU生成的"),t("code",[v._v("JVM")]),v._v("参数，打印了"),t("code",[v._v("gc")]),v._v("各个阶段的日志")])]),v._v(" "),t("blockquote",[t("p",[v._v("看看"),t("code",[v._v("ygc")]),v._v("的回收时间，以及"),t("code",[v._v("old")]),v._v("区大小，最后看"),t("code",[v._v("FGC")])])]),v._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[v._v("JAVA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[v._v('"\n-server\n-Xmx2688M\n-Xms2688M\n-Xmn960m\n-XX:MaxMetaspaceSize=512M\n-XX:MetaspaceSize=512M\n-XX:+UseConcMarkSweepGC\n-XX:CMSInitiatingOccupancyFraction=70\n-XX:+UseCMSInitiatingOccupancyOnly\n-XX:+ExplicitGCInvokesConcurrentAndUnloadsClasses\n-XX:+ParallelRefProcEnabled\n-XX:+CMSScavengeBeforeRemark\n-XX:+HeapDumpOnOutOfMemoryError\n-XX:HeapDumpPath=/home/jvm_logs/heap.hprof\n-XX:ErrorFile=/home/jvm_logs/hs_err_pid%p.log\n-Xloggc:/home/jvm_logs/gc.log\n-Djava.rmi.server.hostname=192.168.1.220\n-Dcom.sun.management.jmxremote.port=18999\n-Dcom.sun.management.jmxremote.ssl=false\n-Dcom.sun.management.jmxremote.authenticate=false\n-XX:+PrintGCDetails\n-XX:+PrintGCDateStamps\n-verbose:class\n-XX:+PrintClassHistogramBeforeFullGC\n-XX:+PrintClassHistogramAfterFullGC\n-XX:+PrintCommandLineFlags\n-XX:+PrintGCApplicationConcurrentTime\n-XX:+PrintGCApplicationStoppedTime\n-XX:+PrintTenuringDistribution\n-XX:+PrintHeapAtGC\n"')]),v._v("\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);
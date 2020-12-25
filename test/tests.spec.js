import ModCookie from "../src"
var assert = require ('assert');

describe('mod-cookie 测试',function(){    
    describe("存储取值测试",function(){
        it("数组存储测试",function(){
            var setValue = ['cai']      
            ModCookie.setItem("test",setValue)
            var getValue = ModCookie.getItem("test")
            assert.deepEqual(getValue,setValue)
        })
        it("数值存储测试",function(){
            var setValue = 2      
            ModCookie.setItem("test",setValue)
            var getValue = ModCookie.getItem("test")
            assert.deepEqual(getValue,setValue)
        })
        it("布尔存储测试",function(){
            var setValue = true     
            ModCookie.setItem("test",setValue)
            var getValue = ModCookie.getItem("test")
            assert.deepEqual(getValue,setValue)
        })
        it("对象存储测试",function(){
            var setValue = {name:"mod"}     
            ModCookie.setItem("test",setValue)
            var getValue = ModCookie.getItem("test")
            assert.deepEqual(getValue,setValue)
        })
        it("字符存储测试",function(){
            var setValue = "hello world"     
            ModCookie.setItem("test",setValue)
            var getValue = ModCookie.getItem("test")
            assert.deepEqual(getValue,setValue)
        })
        it("空值取值测试",function(){
            var getValue = ModCookie.getItem("test2")
            assert.deepEqual(getValue,undefined)
        })
    })
    describe("清除测试",function(){
        it("过期前取值测试",function(done){            
            var setValue = "hello world"     
            ModCookie.setItem("test",setValue,1)
            setTimeout(function(){
                runDelay(done,function(){
                    var getValue = ModCookie.getItem("test")
                    assert.equal(getValue,setValue)
                })
            },100)
        })
        it("过期后取值测试",function(done){            
            var setValue = "hello world"     
            ModCookie.setItem("test",setValue,1)
            setTimeout(function(){
                runDelay(done,function(){
                    var getValue = ModCookie.getItem("test")
                    assert.equal(getValue,undefined)
                })
            },1000*2)
        })
        it("清除命令remove",function(){            
            var setValue = "hello world"     
            ModCookie.setItem("test",setValue)            
            ModCookie.removeItem('test');
            var getValue = ModCookie.getItem("test")
            assert.equal(getValue,undefined)            
        })
        it("清除命令clear",function(){            
            var setValue = "hello world"     
            ModCookie.setItem("test",setValue)            
            ModCookie.clear();
            var getValue = ModCookie.getItem("test")
            assert.equal(getValue,undefined)            
        })
    })
})
function runDelay(done, f ) {
    try {
        f();
        done();
    } catch(e) {
        done(e);
    }
}
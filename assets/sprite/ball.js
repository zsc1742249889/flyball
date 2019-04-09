// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        rigidBody:{
            type:cc.RigidBody,
            default:null
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.jumpState = true
        this.rigidBody = this.getComponent(cc.RigidBody);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.keyDown,this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.keyUp,this)
    },

    keyDown (event){
        switch(event.keyCode){
            case cc.macro.KEY.w:
            if(this.jumpState){
                this.jumpFunc()
            }
            this.jumpState = false;
            break;
            case cc.macro.KEY.s:
            break;
            case cc.macro.KEY.d:
            this.d = true
            break;
            case cc.macro.KEY.a:
            this.a = true
            break;
        }
    },

    keyUp (event){
        switch(event.keyCode){
            case cc.macro.KEY.w:
            this.jumpState = true
            break;
            case cc.macro.KEY.s:
            break;
            case cc.macro.KEY.d:
            this.d = false
            break;
            case cc.macro.KEY.a:
            this.a = false
            break;
        }
    },

    jumpFunc () {
        // if(this.jumpState){
            // this.rigidBody.active = false
            // var linearV = this.rigidBody.linearVelocity 
            this.rigidBody.linearVelocity = new cc.Vec2(0,250)
        
        // }
    },

    start () {

    },

    update (dt) {
        if(this.a){
            this.node.x -= 10
        }

        if(this.d){
            this.node.x += 10
        }
    },

});

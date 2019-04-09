// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var Barrier = require("barrier")

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

        wallArr:{
            default:[],
            type:cc.Node
        },

        ball:{
            default:null,
            type:cc.Node
        },

        barrier:cc.Prefab,

        speed:0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        this.makeNewBarrier();
    },

    makeNewBarrier (){
        var barrier = cc.instantiate(this.barrier);
        var posY = this.getRandomPos();
        barrier.parent = this.node
        barrier.position = cc.v2(0,posY)
    },

    getRandomPos (){
        var pow = Math.random()*10
        var y = Math.pow(1,pow) * Math.random()*160
        return y
    },

    wallMoveFunc (){
      
    },

    start () {

    },

    update (dt) {
        this.wallMoveFunc()
    },
});

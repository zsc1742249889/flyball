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
        speed:{
            type:cc.Integer,
            default:0
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start () {
        this.height = this.node.y
    },

    onBeginContact (contact,selfCollider,otherCollider){
        // var rigidBody = selfCollider.body;
        // var linearVelocity = rigidBody.linearVelocity;
        // rigidBody.linearVelocity = cc.v2(linearVelocity.x,0);
        // rigidBody.linearDamping = 1.5;
        
    },

    onEndContact (contact,selfCollider,otherCollider){
        var rigidBody = selfCollider.body;
        var linearVelocity = rigidBody.linearVelocity;
        rigidBody.linearVelocity = cc.v2(linearVelocity.x,0);
        rigidBody.linearDamping = 3;
        this.changeVelocity = false
    },

    update (dt) {
        // this.node.x -= speed*dt
        this.node.y = this.height
        var rigidBody = this.getComponent(cc.RigidBody);
        var speed = rigidBody.linearVelocity.x
        // rigidBody.linearVelocity = cc.v2(this.speed,0);
        if(speed > -5 && speed < 5){
            var point = this.node.getPosition();
            rigidBody.linearDamping = 0
            this.changeVelocity = true
        }
        if(this.changeVelocity){
            speed = speed - 1500*dt
            if(speed <= this.speed){
                speed = this.speed
            }
            rigidBody.linearVelocity = cc.v2(speed,0)
        }
    },
});

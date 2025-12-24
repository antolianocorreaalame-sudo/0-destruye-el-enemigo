controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f 5 5 5 5 5 5 f f f f f . . 
        . . f 5 2 2 2 5 5 5 5 5 5 f f . 
        . . f 5 5 2 5 2 2 5 2 2 2 2 f . 
        . . f 5 5 2 5 2 5 2 5 2 5 f . . 
        . f f 5 5 2 5 2 5 5 2 2 5 f . . 
        . f 5 5 5 5 5 2 5 5 5 2 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 100)
})
info.onScore(100, function () {
    game.gameOver(true)
    pause(2000)
    game.reset()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    mySprite.setPosition(65, 27)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite2)
    sprites.destroy(projectile)
    info.changeScoreBy(100)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 8 8 8 8 8 8 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 8 f d d f 8 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 8 8 8 8 8 8 f 4 e . . 
    . . 4 d f 8 8 8 8 8 8 f d 4 . . 
    . . 4 4 8 8 4 5 5 4 8 f 4 4 . . 
    . . . . . 8 f f f f 8 . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 2 2 . . . . . . . . . . . . 
    . . 2 2 2 2 . . . . . . . . . . 
    . . 2 . . 2 2 2 2 2 2 2 2 . . . 
    . . 2 . . 2 . . . 2 . . 2 . . . 
    . . 2 . . 2 . . . 2 . . 2 . . . 
    . . 2 . . . 2 2 2 . . . 2 . . . 
    . . 2 . . . 2 2 2 . . . 2 . . . 
    . . 2 . . 2 . . . 2 2 2 2 . . . 
    . . 2 2 2 2 . 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 . . . . . . . . 
    . . 2 2 . . . . . . . . . . . . 
    . . . 2 . . . . . . . . . . . . 
    . . . 2 2 . . . . . . . . . . . 
    . . . . 2 . . . . . . . . . . . 
    . . . . 2 2 . . . . . . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
mySprite.setPosition(33, 45)
scene.cameraFollowSprite(mySprite)
mySprite2.setPosition(73, 44)

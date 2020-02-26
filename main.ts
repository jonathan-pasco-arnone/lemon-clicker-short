controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (14 < info.score() && stand == 0) {
        stand = 1
        info.changeScoreBy(-15)
        stand_pic.destroy()
        stand_pic = sprites.create(img`
. . c c c c c c c c c c c c c c c c c c c c c c c c c c c c . . 
. b d d d d d d d d d d d d d d d d d d d d d d d d d d d d b . 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c b b b 3 d d d 3 3 d 3 d d d d 3 3 3 3 d d d d 3 d 3 3 3 b b c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c b b 3 3 d d d d 3 b b 3 3 d 3 3 d d 3 3 d d d 3 3 3 3 3 b b c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c b 3 3 3 d d d d 3 d b 3 d d d d d d d d 3 3 3 3 3 d d d 3 b c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c b b b b b b 3 3 3 3 3 3 3 d d d d 3 3 3 d 3 d d d d 3 3 b b c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c b d d d d d d d d d d d d d d d d d d d d d d d d d d d d b c 
c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c 
c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c 
. c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c . 
. . c b b c . . . . . . . . . . . . . . . . . . . . c b b c . . 
. . c 3 3 c . . . . . . . . . . . . . . . . . . . . c 3 3 c . . 
. . . c c . . . . . . . . . . . . . . . . . . . . . . c c . . . 
`, SpriteKind.Food)
        stand_pic.setPosition(28, 60)
        pause(2000)
    } else {
        game.showLongText("Not Enough Score Or Already Have 1", DialogLayout.Bottom)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (3999 < info.score() && win == 0) {
        win = 1
        win_pic.destroy()
        website.destroy()
        lemon.destroy()
        stand_pic.destroy()
        House.destroy()
        win_pic = sprites.create(img`
. b b b b b b b b b b b b b b . 
b 5 5 4 4 4 4 5 5 4 4 4 4 5 5 b 
b e 5 5 5 5 5 5 5 5 5 5 5 4 e b 
b 5 5 4 4 4 4 5 5 4 4 4 4 5 5 b 
b b b b b b b d d b b b b b b b 
. b b b b b b 5 5 b b b b b b . 
b 4 5 5 5 5 b 5 5 b 5 5 5 5 5 b 
b 5 4 5 4 5 4 b b 5 5 4 5 4 4 b 
b 4 5 4 5 5 4 4 5 4 5 5 5 4 5 b 
b 5 4 4 4 5 5 5 5 5 4 4 5 5 4 b 
b b b b b b b b b b b b b b b b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b 5 e e e e e e e e e e e e 5 b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.Food)
        win_pic.setPosition(70, 58)
        pause(1000)
        game.showLongText("YOU WIN", DialogLayout.Full)
        game.reset()
    } else {
        game.showLongText("Not Enough Score", DialogLayout.Bottom)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    lemon.destroy()
    lemon = sprites.create(img`
4 4 4 . . 4 4 4 4 4 . . . . . . 
4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
. b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
. b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
. c 4 5 5 5 5 d d d 5 5 5 5 5 b 
. c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
. . c 4 4 d 4 4 4 4 4 d d 5 d c 
. . . c 4 4 4 4 4 4 4 4 5 5 5 4 
. . . . c c b 4 4 4 b b 4 5 4 4 
. . . . . . c c c c c c b b 4 . 
`, SpriteKind.Food)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (499 < info.score() && websites == 0) {
        websites = 1
        info.changeScoreBy(-500)
        website.destroy()
        website = sprites.create(img`
. . . b b b b b b b b b . . . . 
. . b 1 d d d d d d d 1 b . . . 
. b 1 1 1 1 1 1 1 1 1 1 1 b . . 
. b d b c c c c c c c b d b . . 
. b d c 6 6 6 6 6 6 6 c d b . . 
. b d c 6 d 6 6 6 6 6 c d b . . 
. b d c 6 6 6 6 6 6 6 c d b . . 
. b d c 6 6 6 6 6 6 6 c d b . . 
. b d c 6 6 6 6 6 6 6 c d b . . 
. b d c c c c c c c c c d b . . 
. c b b b b b b b b b b b c . . 
c b c c c c c c c c c c c b c . 
c 1 d d d d d d d d d d d 1 c . 
c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
c b b b b b b b b b b b b b c . 
c c c c c c c c c c c c c c c . 
`, SpriteKind.Food)
        website.setPosition(144, 60)
        pause(2000)
    } else {
        game.showLongText("Not Enough Score Or Already Have 1", DialogLayout.Bottom)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (99 < info.score() && Houses == 0) {
        Houses = 1
        info.changeScoreBy(-100)
        House.destroy()
        House = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . 8 a 8 a a 8 a 8 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . a a a 8 8 8 a a 8 a 8 a a a . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . a a a 8 a a 8 a 8 a a 8 8 8 a a 8 a a a . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 . . . . . . . . 
. . . . . a a a 8 a a 8 a a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a a 8 a a 8 a a a . . . . . 
. . . a a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a a . . . 
d c c a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a c c d 
b c b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b c b 
d b b a a 8 a a 8 8 8 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 8 8 8 a a 8 a a b b d 
d b b a a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a a b b d 
d c c a a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a a c c d 
b c b a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a b c b 
d b b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b b d 
d b b a a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a a b b d 
d c c a a 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 a a c c d 
b c b a a 8 8 8 8 a a 8 a a 8 8 8 8 a a 8 8 8 a a 8 8 8 a a 8 8 8 8 a a 8 a a 8 8 8 8 a a b c b 
d b b a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a b b d 
d b b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b b d 
d c c a a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a a c c d 
b c b a a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a a b c b 
d b b a a 8 8 8 8 a a 8 a a 8 a a 8 8 8 c c b b b b c c 8 8 8 a a 8 a a 8 a a 8 8 8 8 a a b b d 
d b b a a 8 a a 8 a a 8 a a 8 8 8 c c b b b b b b b b b b c c 8 8 8 a a 8 a a 8 a a 8 a a b b d 
d c c 8 8 8 a a 8 a a 8 8 8 c c b b b b b c c c c c c b b b b b c c 8 8 8 a a 8 a a 8 8 8 c c d 
b c b a a 8 a a 8 8 8 c c b b b b b c c b d d d d d d b c c b b b b b c c 8 8 8 a a 8 a a b c b 
d b b a a 8 a a c c b b b b b c c b d d d d d d d d d d d d b c c b b b b b c c a a 8 a a b b d 
d b b a a c c b b b b c c c b d d d d d d d d d d d d d d d d d d b c c c b b b b c c a a b b d 
d c c c b b b b c c c b d d d b c c b b b b b b b b b b b b c c b d d d b c c c b b b b c c c d 
c c c c c c c c b b b b b b b c b d d d d d d d d d d d d d d b c b b b b b b b c c c c c c c c 
b d d d d d d d d d d d d b c d d d d d d d d d d d d d d d d d d c b d d d d d d d d d d d d b 
b b c b d d d d d d d d d c b d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b c d d d d d d d d d b c b b 
b b b c c c c c c c c c c c d 1 b b b b b b b b b b b b b b b b 1 d c c c c c c c c c c c b b b 
b b b b d d d d d d d d d c 1 1 b e e e e e e e e e e e e e e b 1 1 c d d d d d d d d d b b b b 
b b b 8 a a a a a a a 8 d c 1 b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 8 a a a a a a a 8 b b b 
b b b 8 8 8 8 8 8 8 8 8 d c 1 b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 8 8 8 8 8 8 8 8 8 b b b 
b b b 8 3 3 3 3 3 3 3 8 d c b b f 3 b 3 e f f f f f f e 3 3 b e b b c d 8 3 3 3 3 3 3 3 8 b b b 
b b b 8 3 f f 3 f f 3 8 d c b b f 3 b f f f f f f f f f f 3 b e b b c d 8 3 f f 3 f f 3 8 b b b 
b b b 8 3 c c 3 c c 3 8 d c b b f 3 e f f f f f f f f f f e b e b b c d 8 3 c c 3 c c 3 8 b b b 
b b b 8 3 3 3 3 3 3 3 8 d c b b f 3 e e e e e e e e e e e e b e b b c d 8 3 3 3 3 3 3 3 8 b b b 
c b b 8 3 f f 3 f f 3 8 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 f f 3 f f 3 8 b b c 
c b b 8 3 c c 3 c c 3 8 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 c c 3 c c 3 8 b b c 
c c b b b b b b b b b b d c b b e 3 b 3 3 b 3 3 b 3 3 f e e e e b b c d b b b b b b b b b b c c 
. c b b d d d d d d d d d c b b e 3 b 3 3 b 3 3 b 3 3 f f f f e b b c d d d d d d d d d b b c . 
. . c b d b b b d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 f 3 3 f e b b c d b b b d b b b d b c . . 
. . . c d b b b d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 b f f e e b b c d b b b d b b b d c . . . 
. . . . b d d d d d d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d d d d d d b . . . . 
. . . . . b d b b b d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d b b b d b . . . . . 
. . . . . . b c c c b b b c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c b b b c c c b . . . . . . 
`, SpriteKind.Food)
        House.setPosition(78, 10)
        pause(2000)
    } else {
        game.showLongText("Not Enough Score Or Already Have 1", DialogLayout.Bottom)
    }
})
let Houses = 0
let websites = 0
let win = 0
let win_pic: Sprite = null
let website: Sprite = null
let House: Sprite = null
let stand_pic: Sprite = null
let stand = 0
let lemon: Sprite = null
scene.setBackgroundColor(1)
info.setScore(0)
lemon = sprites.create(img`
4 4 4 . . 4 4 4 4 4 . . . . . . . 
4 5 5 4 4 5 5 5 5 5 4 4 . . . . . 
b 4 5 5 5 5 1 1 1 5 5 5 4 . . . . 
. b 5 5 5 5 1 1 5 5 1 1 5 4 . . . 
. b d 5 5 5 5 5 5 5 5 1 1 5 4 . . 
b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . . 
c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 . 
c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 . 
. c 4 5 5 5 5 d d d 5 5 5 5 5 b . 
. c 4 d 5 4 5 d 4 4 d 5 5 5 4 c . 
. . c 4 4 d 4 4 4 4 4 d d 5 d c . 
. . . c 4 4 4 4 4 4 4 4 5 5 5 4 . 
. . . . c c b 4 4 4 b b 4 5 4 4 . 
. . . . . . c c c c c c b b 4 . . 
. . . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
stand = 0
stand_pic = sprites.create(img`
. . c c c c c c c c c c c c c c c c c c c c c c c c c c c c . 2 
. 2 d d d d d d d d d d d d d d d d d d d d d d d d d d d d b 2 
c 2 2 d d d d d d d d d d d d d d d d d d d d d d d d d d d 2 c 
c b b 2 3 d d d 3 3 d 3 d d d d 3 3 3 3 d d d d 3 d 3 3 3 2 b c 
c d d d 2 d d d d d d d d d d d d d d d d d d d d d d 2 2 d d c 
c d d d d 2 2 d d d d d d d d d d d d d d d d d d 2 2 d d d d c 
c d d d d d 2 2 d d d d d d d d d d d d d d d d 2 d d d d d d c 
c b b 3 3 d d d 2 3 b b 3 3 d 3 3 d d 3 3 d d 2 3 3 3 3 3 b b c 
c d d d d d d d d 2 d d d d d d d d d d d d 2 2 d d d d d d d c 
c d d d d d d d d d 2 2 d d d d d d d d d d 2 d d d d d d d d c 
c d d d d d d d d d d d 2 d d d d d d d d 2 d d d d d d d d d c 
c b 3 3 3 d d d d 3 d b 2 2 d d d d d 2 2 3 3 3 3 3 d d d 3 b c 
c d d d d d d d d d d d d d 2 2 d d d 2 d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d 2 2 2 d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d 2 d d d d d d d d d d d d d c 
c b b b b b b 3 3 3 3 3 3 3 d d 2 d 2 2 3 d 3 d d d d 3 3 b b c 
c d d d d d d d d d d d d d d 2 d d d d 2 2 d d d d d d d d d c 
c b d d d d d d d d d d d 2 2 d d d d d d 2 2 2 d d d d d d b c 
c b b b b b b b b b b 2 2 2 b b b b b b b b b 2 b b b b b b b c 
c b b b b b b b b b b 2 b b b b b b b b b b b b 2 2 2 b b b b c 
. c c c c c c c 2 2 2 c c c c c c c c c c c c c c c c 2 2 c c . 
. . c b b c . 2 2 . . . . . . . . . . . . . . . . . c b b 2 2 . 
. . c 3 3 c 2 2 . . . . . . . . . . . . . . . . . . c 3 3 c . 2 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . c c . . . 
. . . . . . . . . . . . . f . . . f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f . . . f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . f . . . . . . f . . . . . . . . . . . 
. . . . . . . . . . . . . f . . . . . . f . . . . . . . . . . . 
. . . . . . . . . . . . . f . . . f f f . . . . . . . . . . . . 
`, SpriteKind.Food)
stand_pic.setPosition(15, 59)
House = sprites.create(img`
2 2 2 . . . . . . . . . . . . . . . . . 8 a 8 a a 8 a 8 . . . . . . . . . . . . . . . . . 2 2 2 
2 2 2 2 . . . . . . . . . . . . . a a a 8 8 8 a a 8 a 8 a a a . . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 2 . . . . . . . . . a a a 8 a a 8 a 8 a a 8 8 8 a a 8 a a a . . . . . . . . 2 2 2 2 2 2 
. 2 2 2 2 2 2 . . . . 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 . . . . . 2 2 2 2 2 . 
. . 2 2 2 2 2 2 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 . 2 2 2 2 2 . . 
. . . 2 2 2 2 2 2 a a 8 a a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a a 8 a a 2 2 2 2 2 2 . . . 
. . . a a 2 2 2 2 2 a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 2 2 2 2 2 a . . . 
d c c a a 8 2 2 2 2 2 2 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a 2 2 2 2 2 a a c c d 
b c b 8 8 8 a 2 2 2 2 2 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 2 2 2 2 2 2 8 8 8 b c b 
d b b a a 8 a a 2 2 2 2 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 2 2 2 2 2 a 8 a a b b d 
d b b a a 8 a a 8 2 2 2 2 a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a 2 2 2 2 2 a a 8 a a b b d 
d c c a a 8 8 8 8 2 2 2 2 2 2 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 2 2 2 2 2 8 8 8 8 a a c c d 
b c b a a 8 a a 8 a 2 2 2 2 2 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 2 2 2 2 2 a 8 a a 8 a a b c b 
d b b 8 8 8 a a 8 a a 2 2 2 2 2 a 8 a a 8 a 8 a a 8 a 8 a a 8 a 2 2 2 2 2 a a 8 a a 8 8 8 b b d 
d b b a a 8 a a 8 8 8 8 2 2 2 2 2 2 a a 8 a 8 a a 8 a 8 a a 8 2 2 2 2 2 8 8 8 8 a a 8 a a b b d 
d c c a a 8 a a 8 a a 8 a 2 2 2 2 2 8 8 8 a 8 a a 8 a 8 8 8 8 2 2 2 2 a 8 a a 8 a a 8 a a c c d 
b c b a a 8 8 8 8 a a 8 a a 2 2 2 2 2 a 8 8 8 a a 8 8 8 a a 2 2 2 2 a a 8 a a 8 8 8 8 a a b c b 
d b b a a 8 a a 8 a a 8 8 8 8 2 2 2 2 2 2 a 8 a a 8 a 8 a 2 2 2 2 2 8 8 8 a a 8 a a 8 a a b b d 
d b b 8 8 8 a a 8 a a 8 a a 8 a 2 2 2 2 2 2 8 a a 8 a 8 2 2 2 2 2 8 a a 8 a a 8 a a 8 8 8 b b d 
d c c a a 8 a a 8 8 8 8 a a 8 a a 2 2 2 2 2 2 2 a 8 a 8 2 2 2 2 a 8 a a 8 8 8 8 a a 8 a a c c d 
b c b a a 8 a a 8 a a 8 a a 8 a a 8 a 2 2 2 2 2 2 8 8 2 2 2 2 a a 8 a a 8 a a 8 a a 8 a a b c b 
d b b a a 8 8 8 8 a a 8 a a 8 a a 8 8 8 2 2 2 2 2 2 2 2 2 2 2 a a 8 a a 8 a a 8 8 8 8 a a b b d 
d b b a a 8 a a 8 a a 8 a a 8 8 8 c c b b b 2 2 2 2 2 2 2 2 c 8 8 8 a a 8 a a 8 a a 8 a a b b d 
d c c 8 8 8 a a 8 a a 8 8 8 c c b b b b b c c 2 2 2 2 2 2 b b b c c 8 8 8 a a 8 a a 8 8 8 c c d 
b c b a a 8 a a 8 8 8 c c b b b b b c c b d 2 2 2 2 2 2 2 2 b b b b b c c 8 8 8 a a 8 a a b c b 
d b b a a 8 a a c c b b b b b c c b 2 2 2 2 2 2 2 2 2 2 2 2 2 c c b b b b b c c a a 8 a a b b d 
d b b a a c c b b b b c c c b d d 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 d b c c c b b b b c c a a b b d 
d c c c b b b b c c c b d d d b c 2 2 2 2 2 2 2 b b b b 2 2 2 2 2 2 d d b c c c b b b b c c c d 
c c c c c c c c b b b b b b b c 2 2 2 2 d d d d d d d d d 2 2 2 2 2 2 b b b b b c c c c c c c c 
b d d d d d d d d d d d d b c 2 2 2 2 2 d d d d d d d d d d 2 2 2 2 2 2 d d d d d d d d d d d b 
b b c b d d d d d d d d d c 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 d d d d d d b c b b 
b b b c c c c c c c c c c 2 2 2 2 2 b b b b b b b b b b b b b b 1 2 2 2 2 2 2 c c c c c c b b b 
b b b b d d d d d d d d 2 2 2 2 2 e e e e e e e e e e e e e e b 1 1 2 2 2 2 2 2 2 d d d b b b b 
b b b 8 a a a a a a a 8 2 2 2 2 e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 2 2 2 2 2 2 a a 8 b b b 
b b b 8 8 8 8 8 8 8 8 2 2 2 2 b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 8 2 2 2 2 2 2 2 8 b b b 
b b b 8 3 3 3 3 3 3 2 2 2 2 2 b f 3 b 3 e f f f f f f e 3 3 b e b b c d 8 3 3 2 2 2 2 2 2 b b b 
b b b 8 3 f f 3 f 2 2 2 2 2 b b f 3 b f f f f f f f f f f 3 b e b b c d 8 3 f f 2 2 2 2 2 2 b b 
b b b 8 3 c c 3 2 2 2 2 2 c b b f 3 e f f f f f f f f f f e b e b b c d 8 3 c c 3 c 2 2 2 2 2 b 
b b b 8 3 3 3 3 2 2 2 2 d c b b f 3 e e e e e e e e e e e e b e b b c d 8 3 3 3 3 3 2 2 2 2 2 2 
c b b 8 3 f f 2 2 2 2 2 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 f f 3 f f 3 2 2 2 2 
c b b 8 3 c 2 2 2 2 2 8 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 c c 3 c c 3 8 2 2 2 
c c b b b 2 2 2 2 2 b b d c b b e 3 b 3 3 b 3 3 b 3 3 f e e e e b b c d b b b b b b b b b b 2 2 
. c b b 2 2 2 2 2 d d d d c b b e 3 b 3 3 b 3 3 b 3 3 f f f f e b b c d d d d d d d d d b b 2 2 
. . c b 2 2 2 2 d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 f 3 3 f e b b c d b b b d b b b d b c . . 
. . . 2 2 2 2 2 d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 b f f e e b b c d b b b d b b b d c . . . 
. 2 2 2 2 2 2 d d d d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d d d d d d b . . . . 
. 2 2 2 2 2 d b b b d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d b b b d b . . . . . 
. 2 2 2 2 . b c c c b b b c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c b b b c c c b . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f . . f f f f . . f f f f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f . . f . . f . . f . . f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f . . f . . f . . f . . f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f . . f . . f . . f . . f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f . . f . . f . . f . . f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f . . f f f f . . f f f f . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
House.setPosition(78, 10)
website = sprites.create(img`
2 2 . b b b b b b b b b . . . 2 
. 2 2 1 d d d d d d d 1 b 2 2 . 
. b 1 2 1 1 1 1 1 1 1 1 1 2 . . 
. b d 2 2 c c c c c c b 2 b . . 
. b d c 2 2 6 6 6 6 2 2 d b . . 
. b d c 6 2 6 6 6 2 2 c d b . . 
. b d c 6 6 2 2 6 2 6 c d b . . 
. b d c 6 6 6 6 2 6 6 c d b . . 
. b d c 6 6 2 2 6 2 6 c d b . . 
. b d c c 2 2 c c c 2 c d b . . 
. c b b b 2 b b b b b 2 2 c . . 
c b c c 2 c c c c c c c c 2 c . 
c 1 2 2 d d d d d d d d d 1 2 . 
c 1 2 1 1 d 1 1 d 1 1 d 1 1 2 2 
c 2 2 b b b b b b b b b b b c 2 
2 2 c c c c c c c c c c c c c 2 
. . f f f . f f f f . f f f f . 
. . f . . . f . . f . f . . f . 
. . f f f . f . . f . f . . f . 
. . . . f . f . . f . f . . f . 
. . f f f . f f f f . f f f f . 
`, SpriteKind.Food)
website.setPosition(144, 60)
win_pic = sprites.create(img`
. . b b b b b b b b b b b b . . 
. b 5 4 4 4 4 4 4 4 4 4 4 5 b . 
b e 4 5 4 4 4 5 5 4 4 4 5 4 e b 
b e 4 4 5 4 5 4 4 5 4 5 4 4 e b 
b e 4 4 4 5 4 4 4 4 5 4 4 4 e b 
b e e 4 5 4 4 4 4 4 4 5 4 e e b 
b e e 5 e e e e e e e e 5 e e b 
b 5 5 e e e e e e e e e e 5 5 b 
b b b b b b b d d b b b b b b b 
c b b b b b b 5 5 b b b b b b c 
c c c c c c b 5 5 b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b 5 e e e e e e e e e e e e 5 b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
. f . f . f f f . f f f . f f f 
. f . f . f . f . f . f . f . f 
. f f f . f . f . f . f . f . f 
. . . f . f . f . f . f . f . f 
. . . f . f . f . f . f . f . f 
. . . f . f f f . f f f . f f f 
`, SpriteKind.Food)
win_pic.setPosition(76, 107)
game.onUpdateInterval(500, function () {
    if (stand == 1) {
        info.changeScoreBy(1)
    }
    if (Houses == 1) {
        info.changeScoreBy(20)
    }
    if (websites == 1) {
        info.changeScoreBy(100)
    }
})
forever(function () {
    if (!(controller.A.isPressed()) && win == 0) {
        lemon.destroy()
        lemon = sprites.create(img`
4 4 4 . . 4 4 4 4 4 . . . . . . . 
4 5 5 4 4 5 5 5 5 5 4 4 . . . . . 
b 4 5 5 1 5 1 1 1 5 5 5 4 . . . . 
. b 5 5 5 5 1 1 5 5 1 1 5 4 . . . 
. b d 5 5 5 5 5 5 5 5 1 1 5 4 . . 
b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . . 
c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 . 
c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 . 
. c 4 5 5 5 5 d d d 5 5 5 5 5 b . 
. c 4 d 5 4 5 d 4 4 d 5 5 5 4 c . 
. . c 4 4 d 4 4 4 4 4 d d 5 d c . 
. . . c 4 4 4 4 4 4 4 4 5 5 5 4 . 
. . . . c c b 4 4 4 b b 4 5 4 4 . 
. . . . . . c c c c c c b b 4 . . 
. . . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    }
})

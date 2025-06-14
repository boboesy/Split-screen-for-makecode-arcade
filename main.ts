let p1 = sprites.create(img`
    . . . . . . 
    . 1 1 1 1 . 
    . 1 . . 1 . 
    . 1 1 1 1 . 
    . . . . . . 
`, SpriteKind.Player)

let p2 = sprites.create(img`
    . . . . . . 
    . 2 2 2 2 . 
    . 2 . . 2 . 
    . 2 2 2 2 . 
    . . . . . . 
`, SpriteKind.Player)

controller.player1.moveSprite(p1)
controller.player2.moveSprite(p2)

scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)

splitscreen.setup(p1, p2)

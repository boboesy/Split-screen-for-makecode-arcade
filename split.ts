namespace splitscreen {
    let player1: Sprite;
    let player2: Sprite;
    let camera1: scene.Camera;
    let camera2: scene.Camera;

    export function setup(p1: Sprite, p2: Sprite) {
        player1 = p1;
        player2 = p2;

        camera1 = scene.createCamera(scene.CameraFollowBehavior.LockX);
        camera2 = scene.createCamera(scene.CameraFollowBehavior.LockX);

        camera1.follow(player1);
        camera2.follow(player2);

        // Set viewports
        camera1.setViewport(0, 0, screen.width, screen.height / 2);
        camera2.setViewport(0, screen.height / 2, screen.width, screen.height / 2);

        game.onUpdate(function () {
            if (player1 && player2) {
                camera1.centerOn(player1);
                camera2.centerOn(player2);
            }
        });
    }
}

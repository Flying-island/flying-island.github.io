const app = new PIXI.Application({
 backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
const texture = PIXI.Texture.from('assets/smallflower.png');

// Create a 5x5 grid of bunnies
for (let i = 0; i < 25; i++) {
    const flower = new PIXI.Sprite(texture);
    flower.anchor.set(0.5);
    flower.x = (i % 5) * 40;
    flower.y = Math.floor(i / 5) * 40;
    flower.width = 70;
    flower.height = 50;
    container.addChild(flower);
}

// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Center flower sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    container.rotation -= 0.01 * delta;
});

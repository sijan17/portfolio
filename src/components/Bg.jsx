import React, { useContext, useEffect, useState } from "react";
import platform from "../assets/img/platform.png";
import hills from "../assets/img/hills.png";
import background from "../assets/img/background.png";
import spriteRunLeft from "../assets/img/spriteRunLeft.png";
import spriteRunRight from "../assets/img/spriteRunRight.png";
import spriteStandLeft from "../assets/img/spriteStandLeft.png";
import spriteStandRight from "../assets/img/spriteStandRight.png";
import { ScoreContext } from "../context/scoreContext";

const Bg = () => {
  const { score, setScore } = useContext(ScoreContext);
  const { keys, setKeys } = useState({});
  const { c, setC } = useState(undefined);

  class Player {
    constructor() {
      this.speed = 10;
      this.position = {
        x: 100,
        y: 100,
      };

      this.velocity = {
        x: 0,
        y: 0,
      };

      this.height = 150;
      this.width = 66;
      this.image = createImage(spriteStandRight);
      this.frames = 0;
      this.sprites = {
        stand: {
          right: createImage(spriteStandRight),
          left: createImage(spriteStandLeft),
          cropWidth: 177,
          width: 66,
        },
        run: {
          right: createImage(spriteRunRight),
          left: createImage(spriteRunLeft),
          cropWidth: 341,
          width: 127.875,
        },
      };
      this.currentSprite = this.sprites.stand.right;
      this.currentCropWidth = 177;
    }

    draw() {
      c.drawImage(
        this.currentSprite,
        this.currentCropWidth * this.frames,
        0,
        this.currentCropWidth,
        400,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }

    update() {
      this.frames += 1;

      if (
        this.frames > 28 &&
        (this.currentSprite == this.sprites.stand.right ||
          this.currentSprite == this.sprites.stand.left)
      ) {
        this.frames = 0;
      } else if (
        this.frames > 29 &&
        (this.currentSprite === this.sprites.run.right ||
          this.currentSprite === this.sprites.run.left)
      ) {
        this.frames = 0;
      }
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else {
      }
    }
  }

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    setC(canvas.getContext("2d"));
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const gravity = 0.5;

    class Platform {
      constructor({ x, y, image }) {
        this.position = {
          x,
          y,
        };
        this.image = image;

        this.width = image.width;
        this.height = image.height;
        console.log(image.width);
      }

      draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
      }
    }
    class GenericObject {
      constructor({ x, y, image }) {
        this.position = {
          x,
          y,
        };
        this.image = image;

        this.width = image.width;
        this.height = image.height;
        console.log(image.width);
      }

      draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
      }
    }

    function createImage(imageSrc) {
      const image = new Image();
      image.src = imageSrc;
      return image;
    }

    let platformImage = createImage(platform);

    let player = new Player();
    let platforms = [];

    let genericObjects = [];

    const keys = {
      right: {
        pressed: false,
      },
      left: {
        pressed: false,
      },
    };

    let scrollOffset = 0;

    function init() {
      platformImage = createImage(platform);

      player = new Player();
      platforms = [
        new Platform({ x: -1, y: 470, image: platformImage }),
        new Platform({
          x: platformImage.width - 3,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 2,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 3,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 4,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 5,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 6,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 7,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 8,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 9,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 10,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 11,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 12,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 13,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 14,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 15,
          y: 470,
          image: platformImage,
        }),
        new Platform({
          x: platformImage.width * 16,
          y: 470,
          image: platformImage,
        }),
      ];

      genericObjects = [
        new GenericObject({ x: -1, y: -1, image: createImage(background) }),
        new GenericObject({ x: -1, y: -1, image: createImage(hills) }),
      ];

      scrollOffset = 0;
    }

    function animate() {
      requestAnimationFrame(animate);
      c.fillStyle = "white";
      c.fillRect(0, 0, canvas.width, canvas.height);
      genericObjects.forEach((genericObject) => {
        genericObject.draw();
      });
      platforms.forEach((platform) => {
        platform.draw();
      });

      player.update();
      if (keys.right.pressed && player.position.x < canvas.width / 1.7) {
        player.velocity.x = player.speed;
      } else if (
        (keys.left.pressed && player.position.x > 100) ||
        (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
      ) {
        player.velocity.x = -player.speed;
      } else {
        player.velocity.x = 0;

        //Lose position
        if (player.position.y > canvas.height) {
          //   console.log("you lost");
          init();
        }

        if (keys.right.pressed) {
          scrollOffset += player.speed;

          platforms.forEach((platform) => {
            platform.position.x -= player.speed;
          });
          genericObjects.forEach((genericObject) => {
            genericObject.position.x -= player.speed * 0.66;
          });
        } else if (keys.left.pressed && scrollOffset > 0) {
          scrollOffset -= player.speed;

          platforms.forEach((platform) => {
            platform.position.x += player.speed;
          });
          genericObjects.forEach((genericObject) => {
            genericObject.position.x += player.speed * 0.66;
          });
        }
        setScore(scrollOffset);
      }

      //Check platform collision
      platforms.forEach((platform) => {
        if (
          player.position.y + player.height <= platform.position.y &&
          player.position.y + player.height + player.velocity.y >=
            platform.position.y &&
          player.position.x + player.width >= platform.position.x &&
          player.position.x <= platform.position.x + platform.width
        ) {
          player.velocity.y = 0;
        }
      });
    }

    animate();

    function handleKeyDown(key) {
      switch (key) {
        case "ArrowLeft":
          keys.left.pressed = true;
          player.currentSprite = player.sprites.run.left;
          player.currentCropWidth = player.sprites.run.cropWidth;
          player.width = player.sprites.run.width;
          break;
        case "ArrowRight":
          keys.right.pressed = true;
          player.currentSprite = player.sprites.run.right;
          player.currentCropWidth = player.sprites.run.cropWidth;
          player.width = player.sprites.run.width;

          break;
        case "ArrowUp":
          player.velocity.y -= 15;
          break;
        case "ArrowDown":
          // player.velocity.y += 20;
          break;
      }
    }

    addEventListener("keydown", ({ key }) => {
      switch (key) {
        case "ArrowLeft":
          handleKeyDown("ArrowLeft");
          break;
        case "ArrowRight":
          handleKeyDown("ArrowRight");

          break;
        case "ArrowUp":
          handleKeyDown("ArrowUp");
          break;
        case "ArrowDown":
          handleKeyDown("ArrowDown");
          break;
      }
    });

    function handleKeyUp(key) {
      switch (key) {
        case "ArrowLeft":
          keys.left.pressed = false;
          player.currentSprite = player.sprites.stand.left;
          player.currentCropWidth = player.sprites.stand.cropWidth;
          player.width = player.sprites.stand.width;
          break;
        case "ArrowRight":
          keys.right.pressed = false;

          player.currentSprite = player.sprites.stand.right;
          player.currentCropWidth = player.sprites.stand.cropWidth;
          player.width = player.sprites.stand.width;

          break;
        case "ArrowUp":
          break;
        case "ArrowDown":
          break;
      }
    }

    addEventListener("keyup", ({ key }) => {
      console.log(key);
      switch (key) {
        case "ArrowLeft":
          handleKeyUp("ArrowLeft");
          break;
        case "ArrowRight":
          handleKeyUp("ArrowRight");
          break;
        case "ArrowUp":
          break;
        case "ArrowDown":
          break;
      }
    });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <>
      <canvas className="fixed h-screen w-screen"></canvas>;
      <div className="absolute right-0 mr-4">{score}</div>
    </>
  );
};

export default Bg;

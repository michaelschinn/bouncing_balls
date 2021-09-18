| Author | Date | Description |
|---|---|---|
| Michael Chinn | 9/18/2021 | Pseudo code for the bouncing balls project |

# Pseudo Code - Bouncing Balls

## Objective
Generate balls in the `<canvas>` element, with quasi-random proprties, that will bounce off of the sides of the canvas.

## Structure
1. Define the canvas that will be drawn upon.
    - Define the context of the canvas
        - ctx | STRING | The context of our canvas can be either 2 or 3 dimensions. For the purposes of this project it will be set to '2d'.
    - Define width based off of the width of the canvas
    - Define a height based off the height of the canvas
2. A function to generate a random number out of a range of numbers
    - Input
        - min | INTEGER | The lowest number in the range
        - max | INTEGER | The highest Number in the range
    - Output
        - num | INERGER | (random number) x (max - min + 1) + min, rounded down.
3. Create a base Ball object and define it's properties
    - Properties
        - x | INTEGER | The x position of the ball on the canvas.
        - y | INTEGER | The y position of the ball on the canvas.
        - velX | INTEGER | The velocity of the ball on its x trajectory.
        - velY | INTEGER | The velocity of the ball on its y trajectory.
        - color | STRING | The color off the ball. This can be a RGB, RGBA or HEX value.
        - size | INTEGER | The the radius of the ball.
4. Define the parameters for drawing the ball on the canvas.
    - Begin drawing the path that will be the ball.
    - Assign it's color
    - Create the outer arc of the ball.
    - Fill the arc with the assigned color.

## Initialization

### Canvas
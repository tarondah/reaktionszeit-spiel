input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    while (Punkt_vergeben != 1) {
        Punkt_vergeben = 1
        basic.showString("A")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        Punkt_vergeben = 0
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    while (Punkt_vergeben != 1) {
        Punkt_vergeben = 1
        basic.showString("B")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        Punkt_vergeben = 0
    }
})
let Punkt_vergeben = 0
Punkt_vergeben = 0
basic.forever(function () {
    while (Punkt_vergeben == 0) {
        basic.pause(randint(1000, 5000))
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})

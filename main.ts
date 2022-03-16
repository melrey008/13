basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Angry)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Angry)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})

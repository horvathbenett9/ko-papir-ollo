let kpo = 0
input.onButtonPressed(Button.A, function () {
    kpo = randint(1, 3)
    if (kpo == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (kpo == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(500)
    basic.clearScreen()
})

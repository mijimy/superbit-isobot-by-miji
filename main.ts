function kanan () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    -200,
    SuperBit.enMotors.M1,
    200
    )
    basic.pause(400)
}
function junction_count () {
    if (I1 == 0 && I3 == 0) {
        if (last_state_count == 0) {
            Junction += 1
            last_state_count = 1
            basic.pause(50)
        }
    } else if (I5 == 0 && I3 == 0) {
        if (last_state_count == 0) {
            Junction += 1
            last_state_count = 1
            basic.pause(50)
        }
    } else {
        last_state_count = 0
    }
}
function stop () {
    SuperBit.MotorStopAll()
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
    line_follow_by_junction(1)
    kiri()
    line_follow_by_junction(1)
    kanan()
    line_follow_by_junction(1)
    kanan()
    stop_1second()
    line_follow_by_junction(2)
    kiri()
    stop_1second()
    line_follow_by_junction(1)
    kiri()
    stop_1second()
    line_follow_by_junction(2)
    kanan()
    stop_1second()
    line_follow_by_junction(1)
    kanan()
    stop_1second()
    line_follow_by_junction(2)
    kiri()
    stop_1second()
    line_follow_by_junction(1)
    kiri()
    line_follow_by_junction(1)
    kanan()
    foward()
    stop()
    basic.showIcon(IconNames.Yes)
})
function Follow_line () {
    if (I3 == 0) {
        if (I2 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            125,
            SuperBit.enMotors.M3,
            200
            )
        } else if (I4 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            200,
            SuperBit.enMotors.M3,
            125
            )
        } else {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            255,
            SuperBit.enMotors.M3,
            255
            )
        }
    } else if (I2 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        200
        )
    } else if (I4 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M3,
        0
        )
    }
}
function kiri () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    200,
    SuperBit.enMotors.M1,
    -200
    )
    basic.pause(400)
}
function read_sensor () {
    I1 = pins.digitalReadPin(DigitalPin.P13)
    I2 = pins.digitalReadPin(DigitalPin.P8)
    I3 = pins.digitalReadPin(DigitalPin.P2)
    I4 = pins.digitalReadPin(DigitalPin.P1)
    I5 = pins.digitalReadPin(DigitalPin.P0)
}
input.onButtonPressed(Button.B, function () {
	
})
function foward () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    200,
    SuperBit.enMotors.M1,
    200
    )
    basic.pause(400)
}
function stop_1second () {
    stop()
    basic.pause(1000)
}
function line_follow_by_junction (num: number) {
    Junction = 0
    last_state_count = 0
    while (Junction < num) {
        read_sensor()
        junction_count()
        Follow_line()
        basic.pause(10)
    }
}
let I4 = 0
let I2 = 0
let Junction = 0
let last_state_count = 0
let I5 = 0
let I3 = 0
let I1 = 0
SuperBit.MotorStopAll()
music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})

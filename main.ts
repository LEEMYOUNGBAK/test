OLED.init(128, 64)
basic.forever(function () {
    OLED.writeStringNewLine("" + Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P1) + "cm")
    basic.pause(500)
    OLED.clear()
    OLED.drawLine(
    0,
    32,
    Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P1),
    32
    )
})

OLED.init(128, 64)
basic.forever(function () {
    OLED.writeNumNewLine(Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P1))
})

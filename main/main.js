function main(distance, time){

    if(distance <=0 || time <0)
        return 0;
    var Allmoney = 6;

    if(distance >2 && distance <= 8)
        Allmoney += 0.8 * (distance - 2);

    if(distance > 8)
        Allmoney += 0.8 * 6 + 1.2 * (distance - 8)

    Allmoney += 0.25 * time;

    Allmoney = Math.round(Allmoney)//四舍五入
    return Allmoney;
}
module.exports = main;
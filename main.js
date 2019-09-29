new Vue({
    el: "#app",
    data: {
        calcProcess: "0",
        firstFlag: true,
        totalExp: 0,
        result: 0,
        tempExp:[],
        i: 0,
        exp: {"10":10, "11":11, "12":12, "13":14, "14":17, "15":21, "16":26, "17":34, "18":46, 19:"61",
              "20":81, "21":108, "22":142, "23":187, "24":244, "25":315, "26":403, "27":513, "28":647, "29":810,
              "30":1008, "31":1245, "32":1528, "33":1864, "34":2261, "35":2728, "36":3275, "37":3911, "38":4650, "39":5503,
              "40":6486, "41":7613, "42":8903, "43":10372, "44":12043, "45":13935, "46":16074, "47":18484, "48":21193, "49":24232,
              "50":27631, "51":31425, "52":35651, "53":40349, "54":45560, "55":51331, "56":57707, "57":64742, "58":72490, "59":81008,
              "60":90358, "61":100606, "62":111820, "63":124075, "64":137448, "65":152021, "66":167880, "67":185117, "68":203829, "69":224118,
              "70":246089, "71":269856, "72":295538, "73":323258, "74":353147, "75":385343, "76":419988, "77":457232, "78":497235, "79":540159,
              "80":586179, "81":635473, "82":688231, "83":744649, "84":804931, "85":869293, "86":937956, "87":1011154, "88":1089129, "89":1172133,
              "90":1260427, "91":1354286, "92":1453992, "93":1559840, "94":1672137, "95":1791200, "96":1917359, "97":2050957, "98":2192349, "99":2341902}
    },
    methods: {
        clear: function(){
            this.calcProcess = "0";
            this.firstFlag = true;
            this.totalExp = 0;
            this.result = 0;
            this.tempExp = [];
            this.i = 0;
        },
        remove: function(){
            this.calcProcess = this.calcProcess.slice(0, -3);
            this.totalExp -= this.exp[this.tempExp[this.i-1]];
            this.tempExp.pop();
            this.i--;
            this.check();

            if(this.calcProcess.length == 0){
                this.calcProcess = "0";
                this.firstFlag = true;
            }
        },
        calc: function (quality) {
            if(this.i >= 100){
                alert("これ以上追加できません！\n Cボタン or Delボタンを押してください。")
                return;
            }

            this.totalExp += this.exp[quality];
            this.tempExp[this.i] = quality;
            this.i++;

            if(this.firstFlag == true){
                this.calcProcess = quality + "+";  //１度目は初期値を置き換え
                this.firstFlag = false;
            }
            else{
                this.calcProcess += quality + "+";
            }

            this.check();      
        },
        check: function(){
            if (this.totalExp < 81) {
                if(this.totalExp == 0){
                    this.result = 0;
                }
                else if (this.totalExp < 11) {
                    this.result = 10;
                }
                else if (this.totalExp < 12) {
                    this.result = 11;
                }
                else if (this.totalExp < 14) {
                    this.result = 12;
                }
                else if (this.totalExp < 17) {
                    this.result = 13;
                }
                else if (this.totalExp < 21) {
                    this.result = 14;
                }
                else if (this.totalExp < 26) {
                    this.result = 15;
                }
                else if (this.totalExp < 34) {
                    this.result = 16;
                }
                else if (this.totalExp < 46) {
                    this.result = 17;
                }
                else if (this.totalExp < 61) {
                    this.result = 18;
                }
                else if (this.totalExp < 81) {
                    this.result = 19;
                }
            }
            else if(this.totalExp < 1008){
                if (this.totalExp < 108) {
                    this.result = 20;
                }
                else if (this.totalExp < 142) {
                    this.result = 21;
                }
                else if (this.totalExp < 187) {
                    this.result = 22;
                }
                else if (this.totalExp < 244) {
                    this.result = 23;
                }
                else if (this.totalExp < 315) {
                    this.result = 24;
                }
                else if (this.totalExp < 403) {
                    this.result = 25;
                }
                else if (this.totalExp < 513) {
                    this.result = 26;
                }
                else if (this.totalExp < 647) {
                    this.result = 27;
                }
                else if (this.totalExp < 810) {
                    this.result = 28;
                }
                else if (this.totalExp < 1008) {
                    this.result = 29;
                }
            }
            else if(this.totalExp < 6486){
                if (this.totalExp < 1245) {
                    this.result = 30;
                }
                else if (this.totalExp < 1528) {
                    this.result = 31;
                }
                else if (this.totalExp < 1864) {
                    this.result = 32;
                }
                else if (this.totalExp < 2261) {
                    this.result = 33;
                }
                else if (this.totalExp < 2728) {
                    this.result = 34;
                }
                else if (this.totalExp < 3275) {
                    this.result = 35;
                }
                else if (this.totalExp < 3911) {
                    this.result = 36;
                }
                else if (this.totalExp < 4650) {
                    this.result = 37;
                }
                else if (this.totalExp < 5503) {
                    this.result = 38;
                }
                else if (this.totalExp < 6486) {
                    this.result = 39;
                }
            }
            else if(this.totalExp < 27631){
                if (this.totalExp < 7613) {
                    this.result = 40;
                }
                else if (this.totalExp < 8903) {
                    this.result = 41;
                }
                else if (this.totalExp < 10372) {
                    this.result = 42;
                }
                else if (this.totalExp < 12043) {
                    this.result = 43;
                }
                else if (this.totalExp < 13935) {
                    this.result = 44;
                }
                else if (this.totalExp < 16074) {
                    this.result = 45;
                }
                else if (this.totalExp < 18484) {
                    this.result = 46;
                }
                else if (this.totalExp < 21193) {
                    this.result = 47;
                }
                else if (this.totalExp < 24232) {
                    this.result = 48;
                }
                else if (this.totalExp < 27631) {
                    this.result = 49;
                }
            }
            else if(this.totalExp < 90358){
                if (this.totalExp < 31425) {
                    this.result = 50;
                }
                else if (this.totalExp < 35651) {
                    this.result = 51;
                }
                else if (this.totalExp < 40349) {
                    this.result = 52;
                }
                else if (this.totalExp < 45560) {
                    this.result = 53;
                }
                else if (this.totalExp < 51331) {
                    this.result = 54;
                }
                else if (this.totalExp < 57707) {
                    this.result = 55;
                }
                else if (this.totalExp < 64742) {
                    this.result = 56;
                }
                else if (this.totalExp < 72490) {
                    this.result = 57;
                }
                else if (this.totalExp < 81008) {
                    this.result = 58;
                }
                else if (this.totalExp < 90358) {
                    this.result = 59;
                }
            }
            else if(this.totalExp < 246089){
                if (this.totalExp < 100606) {
                    this.result = 60;
                }
                else if (this.totalExp < 111820) {
                    this.result = 61;
                }
                else if (this.totalExp < 124075) {
                    this.result = 62;
                }
                else if (this.totalExp < 137448) {
                    this.result = 63;
                }
                else if (this.totalExp < 152021) {
                    this.result = 64;
                }
                else if (this.totalExp < 167880) {
                    this.result = 65;
                }
                else if (this.totalExp < 185117) {
                    this.result = 66;
                }
                else if (this.totalExp < 203829) {
                    this.result = 67;
                }
                else if (this.totalExp < 224118) {
                    this.result = 68;
                }
                else if (this.totalExp < 246089) {
                    this.result = 69;
                }
            }
            else if(this.totalExp < 586179){
                if (this.totalExp < 269856) {
                    this.result = 70;
                }
                else if (this.totalExp < 295538) {
                    this.result = 71;
                }
                else if (this.totalExp < 323258) {
                    this.result = 72;
                }
                else if (this.totalExp < 353147) {
                    this.result = 73;
                }
                else if (this.totalExp < 385343) {
                    this.result = 74;
                }
                else if (this.totalExp < 419988) {
                    this.result = 75;
                }
                else if (this.totalExp < 457232) {
                    this.result = 76;
                }
                else if (this.totalExp < 497235) {
                    this.result = 77;
                }
                else if (this.totalExp < 540159) {
                    this.result = 78;
                }
                else if (this.totalExp < 586179) {
                    this.result = 79;
                }
            }
            else if(this.totalExp < 1260427){
                if (this.totalExp < 635473) {
                    this.result = 80;
                }
                else if (this.totalExp < 688231) {
                    this.result = 81;
                }
                else if (this.totalExp < 744649) {
                    this.result = 82;
                }
                else if (this.totalExp < 804931) {
                    this.result = 83;
                }
                else if (this.totalExp < 869293) {
                    this.result = 84;
                }
                else if (this.totalExp < 937956) {
                    this.result = 85;
                }
                else if (this.totalExp < 1011154) {
                    this.result = 86;
                }
                else if (this.totalExp < 1089129) {
                    this.result = 87;
                }
                else if (this.totalExp < 1172133) {
                    this.result = 88;
                }
                else if (this.totalExp < 1260427) {
                    this.result = 89;
                }
            }
            else if(this.totalExp < 2500000){
                if (this.totalExp < 1354286) {
                    this.result = 90;
                }
                else if (this.totalExp < 1453992) {
                    this.result = 91;
                }
                else if (this.totalExp < 1559840) {
                    this.result = 92;
                }
                else if (this.totalExp < 1672137) {
                    this.result = 93;
                }
                else if (this.totalExp < 1791200) {
                    this.result = 94;
                }
                else if (this.totalExp < 1917359) {
                    this.result = 95;
                }
                else if (this.totalExp < 2050957) {
                    this.result = 96;
                }
                else if (this.totalExp < 2192349) {
                    this.result = 97;
                }
                else if (this.totalExp < 2341902) {
                    this.result = 98;
                }
                else if (this.totalExp < 2500000) {
                    this.result = 99;
                }
            }
            else if(this.totalExp >= 2500000){
                this.result = 100;
            }
        }
    }
})

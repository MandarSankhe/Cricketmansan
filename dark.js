
function js29(obj) {
    let index = obj.id;
    let linkArr = [
        "1QD36otEQ38n9DJc6mQfLrEga66jA76t9",
        "1eJiQXoLzLHY-BiJLITKpyqTBfyfC-0xY",
        "1Ci2IP-48rAIwxNx57417ImxFMhM-2mMC",
        "1EG-m3P1YornZxyyiST1q_hcXzDNBbQLv",
        "1FQu8T0expDGDVQQOjQNoqCN7_83Ip4UC",                             /*4*/
        "1eTN9IB8k67DqfUaRoA9_E-Ispdhz-Jz3",
        "19bkd8Lhegf6_RO2wQsPDLwadetLaVMq4",                             /*6*/
        "1wn1Le8NNyJctfLjEPZm1Xi-mPkjqX4sN",
        "1BNZ0YLzsWXY2I2ozmYlXfbJqVy7VCihr",                            /*8*/
        "1y-o3m_hdF-tGtGsYjG-eyT8Q7VPzWOCn",
        "1ggYrxEmLd3wl2B82QGI8Vuk4PNMwzEJl",                           /*10*/
        "1cm7i_RRVquLJDK3nTxw3Y2nM7RgAveeU",                          /*11*/
        "1Eborv6Yqa9IBroqj6ldBmK0Z2MVzFdNT",
        "1og3rFmvJShffmuRGuoxkLOHQpX5Zdak9",                         /*13*/
        "1YwdgHK2suMsRgutHnatqP0G2Y13xafm8",
        "1vifNEv4aMsn4jxNimg9wMgRk8RugfpYE",                        /*15*/
        "1MV_qgie6V4s4YVwap9VAmEhQ-b4zePX9",                        /*16*/
        "1AhEVnc9Jv3a8MDXaih4unhYfem2aW2ey",                       /*17*/
        "1alcHL9wWHkh7rsH9vMLVi-qRxftWA4a_",                      /*18*/
        "191PXbL8uVodCTcZpNBC4pG45KamNFgId",                     /*19*/
        "1ws-70vqwnVErZsJ5r-0MLC2lGg0xPW9o",
        "15Ss8yVv-Ni4M8qpzf4b7XWM-D3nR2nj4",                     /*21*/
        "1SMNHibLWa31s1fnGt882EzBWlSWBI5di",                     /*22*/
        "1iw6vW_dSa8r1b4yBZo1xEf5ON6BCN_6V",                     /*23*/
        "1JhNDmSGQhJ-sGNGnO3bUOLK4v7mOeEN8",                     /*24*/
        "1o7seWtRD1ZxuZAtf2NGG-ocNFs2yY9TI",
        "16ZTdWiBiDZzBq_3s8eraFAGZXrW-vQkJ",                     /*26*/
        "1QtZD9uezvdn8BdgJN6PdRTxPPUHoes6I",
        "",
        "",
        "",
        "",

    ];
    let titleArr = [
        "Iron-Man (2008)",
        "The Incredible Hulk (2008)",
        "Iron-Man 2 (2010)",
        "Thor (2011)",
        "Captain America: The First Avenger (2011)",
        "The Avengers (2012)",
        "Iron-Man 3 (2013)",
        "Thor: The Dark World (2013)",                                           /*7*/
        "Captain America The Winter Soldier (2014)",                             /*8*/
        "Guardians of the Galaxy (2014)",
        "Avengers: Age of Ultron (2015)",
        "Ant Man (2015)",                                                           /*11*/
        "Captain America: Civil War (2016)",                                        /*12*/
        "Doctor Strange (2016)",                                                    /*13*/
        "Guardians of the Galaxy Vol. 2 (2017)",                                    /*14*/
        "Spider-Man Homecoming (2017)",                                             /*15*/
        "Thor Ragnarok (2017)",
        "Black Panther (2018)",                                                    /*17*/
        "Avengers: Infinity War (2018)",                                          /*18*/
        "Ant-Man and The Wasp (2018)",                                           /*19*/
        "Captain Marvel (2019)",
        "Avengers Endgame (2019)",                                               /*21*/
        "Spider-Man Far from home (2019)",                                      /*22*/
        "Black Widow (2021)",
        "Shang-Chi and the Legend of the Ten Rings",                            /*24*/
        "Eternals (2021)",
        "Spider-Man: No Way Home (2021)",                                       /*26*/
        "Doctor Strange in the Multiverse of Madness (2022)",                 /*27*/
        "Thor Love and Thunder(2022)",                                          /*28*/
        "",
        "",
        "",
    ];

    var d = $('#d29').html('<iframe id="i29" allow="autoplay" allowfullscreen></iframe>');
    //d.dialog();
    $("#d29>#i29").attr("src", "https://drive.google.com/file/d/" + linkArr[index] + "/preview");
    $("#d29").dialog({
        width: "350",
        height: "280",
        title: titleArr[index],
        modal: true,
        buttons: {
            "Download": function () {
                window.open("https://drive.google.com/uc?id=" + linkArr[index] + "&export=download", '_blank');
            },
            Cancel: function () {
                clear();
                $(this).dialog("close");
            }
        },
        show: {
            effect: "blind",
            duration: 200
        },
        hide: {
            effect: "clip",
            duration: 200,
        },
    });

}

function clear() {
    $("#d29>#i29").attr("src", "");
    $("#d29").dialog("option", "title", " ");   
}



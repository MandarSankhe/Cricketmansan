
$('head').append('<link rel="stylesheet" type="text/css" href="/Cricketmansan/css/jquery-ui.css">');
$('head').append('<style> .ui-autocomplete { max-height: 60%; overflow-y: auto; } </style>');



$("#searchInput").on("keydown", function () {

    var data = [
        {
            label: "Breaking Bad",
            icon: "resources/shows/breakingbad.jpg",
            link: "resources/shows/breakingbad.html",
            category: "Shows"
        },
        {
            label: "Stranger Things",
            icon: "resources/shows/stranger-things.jpg",
            link: "resources/shows/stranger-things.html",
            category: "Shows"
        },
        {
            label: "Game of Thrones",
            icon: "resources/shows/GOT.jpg",
            link: "resources/shows/GOT.html",
            category: "Shows"
        },
        {
            label: "The Big Bang Theory",
            icon: "resources/shows/bigbangtheory.jpg",
            link: "resources/shows/bigbangtheory.html",
            category: "Shows"
        },
        {
            label: "Friends",
            icon: "resources/shows/friends.jpg",
            link: "resources/shows/friends.html",
            category: "Shows"
        },
        {
            label: "Lost in Space",
            icon: "resources/shows/lostinspace.jpg",
            link: "resources/shows/lostinspace.html",
            category: "Shows"
        },
        {
            label: "Prison Break",
            icon: "resources/shows/prisonbreak.webp",
            link: "resources/shows/prisonbreak.html",
            category: "Shows"
        },
        {
            label: "Peaky Blinders",
            icon: "resources/shows/peakyblinders.jpg",
            link: "resources/shows/peakyblinders.html",
            category: "Shows"
        },
        {
            label: "Vikings",
            icon: "resources/shows/vikings.jpg",
            link: "resources/shows/vikings.html",
            category: "Shows"
        },
        {
            label: "Squid Game",
            icon: "resources/shows/squidgame.jpg",
            link: "resources/shows/squidgame.html",
            category: "Shows"
        },
        {
            label: "Mr. Robot",
            icon: "resources/shows/mrrobot.jpg",
            link: "resources/shows/mrrobot.html",
            category: "Shows"
        },
        {
            label: "Down Underdogs",
            icon: "resources/shows/downunderdogs.jpg",
            link: "resources/shows/downunderdogs.html",
            category: "Shows"
        },
        {
            label: "Bandon Mein Tha Dum",
            icon: "resources/shows/bandonmeinthadum.jpg",
            link: "resources/shows/bandonmeinthadum.html",
            category: "Shows"
        },
        {
            label: "Mindhunter",
            icon: "resources/shows/mindhunter.jpg",
            link: "resources/shows/mindhunter.html",
            category: "Shows"
        },
        {
            label: "Black Mirror",
            icon: "resources/shows/blackmirror.jpg",
            link: "resources/shows/blackmirror.html",
            category: "Shows"
        },
        {
            label: "Manifest",
            icon: "resources/shows/manifest.jpg",
            link: "resources/shows/manifest.html",
            category: "Shows"
        },
        {
            label: "Sense8",
            icon: "resources/shows/sense8.jpg",
            link: "resources/shows/sense8.html",
            category: "Shows"
        },
        {
            label: "Euphoria",
            icon: "resources/shows/euphoria.jpg",
            link: "resources/shows/euphoria.html",
            category: "Shows"
        },
        {
            label: "Cricket Fever",
            icon: "resources/shows/cricketfever.jpeg",
            link: "resources/shows/cricketfever.html",
            category: "Shows"
        },
        {
            label: "Lock & Key",
            icon: "resources/shows/lockandkey.jpg",
            link: "resources/shows/lockandkey.html",
            category: "Shows"
        },
        {
            label: "Orange is the New Black",
            icon: "resources/shows/OINB.jpg",
            link: "resources/shows/OINB.html",
            category: "Shows"
        },
        {
            label: "Never Have I Ever",
            icon: "resources/shows/NHIE.jpg",
            link: "resources/shows/NHIE.html",
            category: "Shows"
        },
        {
            label: "Better Call Saul",
            icon: "resources/shows/bettercallsaul.jpg",
            link: "resources/shows/bettercallsaul.html",
            category: "Shows"
        },





        {
            label: "Spider-Man",
            icon: "resources/movies/spiderman.jpg",
            link: "resources/movies/spiderman.html",
            category: "Movies"
        },
        {
            label: "MCU Collection",
            icon: "resources/movies/MCU.jpg",
            link: "resources/movies/MCU.html",
            category: "Movies"
        },
        {
            label: "Ant-Man",
            icon: "resources/movies/MCU.jpg",
            link: "resources/movies/MCU.html",
            category: "Movies"
        },
        {
            label: "Iron Man",
            icon: "resources/movies/MCU.jpg",
            link: "resources/movies/MCU.html",
            category: "Movies"
        },
        {
            label: "Doctor Strange",
            icon: "resources/movies/MCU.jpg",
            link: "resources/movies/MCU.html",
            category: "Movies"
        },
        {
            label: "Captain America",
            icon: "resources/movies/MCU.jpg",
            link: "resources/movies/MCU.html",
            category: "Movies"
        },
        {
            label: "Black Widow",
            icon: "resources/movies/MCU.jpg",
            link: "resources/movies/MCU.html",
            category: "Movies"
        },

        {
            label: "Uncharted",
            icon: "resources/movies/uncharted.jpg",
            link: "resources/movies/uncharted.html",
            category: "Movies"
        },
        {
            label: "Harry Potter + Fantastic Beasts",
            icon: "resources/movies/harrypotter.jpg",
            link: "resources/movies/harrypotter.html",
            category: "Movies"
        },
        {
            label: "After Movie Series",
            icon: "resources/movies/after.jpg",
            link: "resources/movies/after.html",
            category: "Movies"
        },
        {
            label: "Jumanji",
            icon: "resources/movies/jumanji.jpg",
            link: "resources/movies/jumanji.html",
            category: "Movies"
        },
        {
            label: "The Adam Project",
            icon: "resources/movies/adamproject.jpg",
            link: "resources/movies/adamproject.html",
            category: "Movies"
        },
        {
            label: "Beyond All Boundaries (2013)",
            icon: "resources/movies/beyondallboundaries.jpg",
            link: "resources/movies/beyondallboundaries.html",
            category: "Movies"
        },
        {
            label: "Journey Movie Series",
            icon: "resources/movies/journey.jpg",
            link: "resources/movies/journey.html",
            category: "Movies"
        },
        {
            label: "Free Guy",
            icon: "resources/movies/freeguy.jpg",
            link: "resources/movies/freeguy.html",
            category: "Movies"
        },
        {
            label: "Pirates of the Caribbean",
            icon: "resources/movies/POTC.jpg",
            link: "resources/movies/POTC.html",
            category: "Movies"
        },
        {
            label: "Goal",
            icon: "resources/movies/goal.jpg",
            link: "resources/movies/goal.html",
            category: "Movies"
        },
        {
            label: "Fast and Furious",
            icon: "resources/movies/fastandfurious.jpg",
            link: "resources/movies/fastandfurious.html",
            category: "Movies"
        },
        {
            label: "Deadpool",
            icon: "resources/movies/deadpool.jpg",
            link: "resources/movies/deadpool.html",
            category: "Movies"
        },
        {
            label: "Twilight",
            icon: "resources/movies/twilight.jpg",
            link: "resources/movies/twilight.html",
            category: "Movies"
        },
        {
            label: "Aladdin",
            icon: "resources/movies/aladdin.jpg",
            link: "resources/movies/aladdin.html",
            category: "Movies"
        },
        {
            label: "Prince of Persia",
            icon: "resources/movies/POP.jpg",
            link: "resources/movies/POP.html",
            category: "Movies"
        },
        {
            label: "Tinder Swindler",
            icon: "resources/movies/tinderswindler.jpg",
            link: "resources/movies/tinderswindler.html",
            category: "Movies"
        },
        {
            label: "AI Love You",
            icon: "resources/movies/ailoveyou.jpg",
            link: "resources/movies/ailoveyou.html",
            category: "Movies"
        },
        {
            label: "United",
            icon: "resources/movies/united.jpg",
            link: "resources/movies/united.html",
            category: "Movies"
        },
        {
            label: "Death of a Gentleman",
            icon: "resources/movies/deathofagentleman.jpg",
            link: "resources/movies/deathofagentleman.html",
            category: "Movies"
        },
        {
            label: "The Girl Next Door - 2004",
            icon: "resources/movies/girlnextdoor.jpg",
            link: "resources/movies/girlnextdoor.html",
            category: "Movies"
        },
        {
            label: "The Girl With The Dragon Tattoo",
            icon: "resources/movies/girlwithdragontatoo.jpg",
            link: "resources/movies/girlwithdragontatoo.html",
            category: "Movies"
        },
        {
            label: "Mirage",
            icon: "resources/movies/mirage.jpg",
            link: "resources/movies/mirage.html",
            category: "Movies"
        }

    ];

    $("#searchInput").autocomplete({
        max: 5,
        delay: 0,
        source: data,
        select: function (event, ui) {
            //$('#searchInput').val(ui.item.label);
            window.open("/Cricketmansan/" + ui.item.link, "_self")
            return false;
        },

    });


    $("#searchInput").data("ui-autocomplete")._renderItem = function (ul, item) {

    
        var $li = $('<li>'),
            $img = $('<img>');
        var txt = String(item.label).replace(new RegExp(this.term, "gi"), "<b style=\"color: #C83069\">$&</b>");


        $img.attr({
            src: "/Cricketmansan/" + item.icon,
            alt: item.label
        });

        $li.attr('data-value', item.label);
        $li.append('<a href="#">');
        $li.find('a').append($img).append(txt);

        return $li.appendTo(ul);
    };
});

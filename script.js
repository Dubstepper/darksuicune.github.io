$(function(){
    var items = {
	'Absorb Bulb': ' Gear Station, PWT, Wild Roserade 1%, Wild Roselia 1%',
	'Adamant Orb': ' Dragonspiral Tower',
	'Air Balloon': ' Gear Station, PWT, Wild Drifblim 1%',
	'Apicot Berry': ' Join Avenue',
	'Big Root': ' Driftveil City, Wild Cradily 5%, Wild Lileep 5%',
	'Berry Juice': ' Join Avenue, Wild Shuckle 100%',
	'Binding Band': ' Gear Station, PWT',
	'Power Anklet': ' Gear Station, PWT',
	'Power Bracer': ' Gear Station, PWT',
	'Power Belt': ' Gear Station, PWT',
	'Power Weight': ' Gear Station, PWT',
	'Power Lens': ' Gear Station, PWT',
	'Power Band': ' Gear Station, PWT',
	'Black Belt': ' Icirrus City, Wild Throh 5%, Wild Sawk 5%',
	'Black Sludge': ' Castelia Sewers, Wild Grimer 5%, Wild Muk 50%, Wild Croagunk 5%, Wild Toxicroak 5%, Wild Trubbish 5%, Wild Garbodor 50%',
	'Black Glasses': ' Desert Resort',
	'Charcoal': ' Castelia City',
	'Deep Sea Scale': ' White Forest, Join Avenue, Wild Chinchou 5%, Wild Lanturn 5%, Wild Gorebyss 5%, Wild Relicanth 5%',
	'Deep Sea Tooth': ' White Forest, Join Avenue, Wild Carvanha 5%, Wild Sharpedo 5%, Wild Huntail 5%, Wild Basculin 5%',
	'Choice Band': ' Gear Station, PWT',
	'Choice Specs': ' Gear Station, PWT',
	'Choice Scarf': ' Gear Station, PWT',
	'Damp Rock': ' Route 8',
	'Draco Plate': ' Undella Bay',
	'Dragon Fang': ' Dragonspiral Tower, Wild Bagon 5%, Wild Shelgon 5%, Wild Salamence 5%, Wild Druddigon 5%',
	'Dread Plate': ' Abyssal Ruins',
	'Earth Plate': ' Abyssal Ruins',
	'Everstone': ' Castelia City, Wild Boldore 50%, Wild Roggenrola 50%, Wild Gigalith 50%, Wild Geodude 5%, Wild Graveler 5%, Wild Golem 5%',
	'Eviolite': ' Castelia City',
	'Expert Belt': ' Driftveil City, Route 19 (Hidden), Wild Throh 1%, Wild Sawk 1%',
	'Fist Plate': ' Abyssal Ruins',
	'Flame Orb': ' Gear Station, PWT, Wild Heatmor 1%',
	'Flame Plate': ' Abyssal Ruins',
	'Focus Sash': ' Gear Station, PWT',
	'Heat Rock': ' Route 8',
	'Icicle Plate': ' Abyssal Ruins',
	'Icy Rock': ' Route 8',
	'Insect Plate': ' Abyssal Ruins',
	'Iron Plate': ' Abyssal Ruins',
	'King\'s Rock': ' Route 13, Wild Poliwhirl 5%, Wild Poliwrath 5%, Wild Slowbro 5%, Wild Politoed 5%, Wild Slowking 5%, Wild Hariyama 5%',
	'Leftovers': ' Castelia Sewers, Wild Snorlax 100%, Wild Munchlax 100%',
	'Life Orb': ' Gear Station, PWT',
	'Light Clay': ' Wild Golett 5%, Wild Golurk 5%',
	'Meadow Plate': ' Abyssal Ruins',
	'Mental Herb': ' Wild Sewaddle 5%, Wild Swadloon 5%, Wild Leavanny 5%',
	'Metal Coat': ' Clay Tunnel, Chargestone Cave, Wild Magnemite 5%, Wild Magneton 5%, Wild Steelix 5%, Wild Beldum 5%, Wild Metang 5%, Wild Metagross 5%, Wild Bronzor 5%, Wild Bronzong 5%, Wild Magnezone 5%',
	'Mind Plate': ' Abyssal Ruins',
	'Miracle Seed': ' Castelia City, Wild Cherubi 5%, Wild Cherrim 5%, Wild Maractus 5%',
	'Mystic Water': ' Route 4, Castelia City, Wild Castform 100%',
	'Never-Melt Ice': ' Dragonspiral Tower (Winter), Wild Snover 5%, Wild Abomasnow 5%, Wild Cryogonal 5%',
	'Poison Barb': ' Route 22, Wild Beedrill 5%, Wild Tentacool 5%, Wild Tentacruel 5%, Wild Qwilfish 5%, Wild Roselia 5%, Wild Budew 5%, Wild Roserade 5%, Wild Vespiquen 5%, Wild Skorupi 5%, Wild Drapion 5%, Wild Venipede 5%, Wild Whirlipede 5%, Wild Scolipede 5%',
	'Quick Claw': ' Skyarrow Bridge, Wild Sandshrew 5%, Wild Sandslash 5%, Wild Meowth 5%, Wild Persian 5%, Wild Sneasel 5%, Wild Zangoose 5%, Wild Weavile 5%',
	'Razor Fang': ' Route 11',
	'Odd Incense': ' Driftveil City',
	'Rock Incense': ' Driftveil City',
	'Wave Incense': ' Driftveil City',
	'Wise Glasses': ' Gear Station, PWT',
	'Sea Incense': ' Driftveil City',
	'Sharp Beak': ' Mistralton City, Wild Fearow 5%, Wild Doduo 5%, Wild Dodrio 5%',
	'Rose Incense': ' Driftveil City',
	'Silver Powder': ' Pinwheel Forest, Wild Butterfree 5%, Wild Masquerain 5%, Wild Wormadam 5%, Wild Mothim 5%, Wild Volcarona 100%',
	'Red Card': ' Gear Station, PWT',
	'Rocky Helmet': ' Relic Passage, PWT',
	'Shell Bell': ' Driftveil City',
	'Silk Scarf': ' Virbank Complex',
	'SilverPowder': ' Wild Butterfree 5%, Wild Masquerain 5%, Wild Wormadam 5%, Wild Mothim 5%, Wild Volcarona 100%',
	'Sky Plate': ' Abyssal Ruins',
	'Smooth Rock': ' Route 8',
	'Stick': ' Route 13, Wild Farfetch\'d 5% ',
	'Soft Sand': ' Desert Resort, Wild Diglett 5%, Wild Dugtrio 5%, Wild Trapinch 5%, Wild Stunfisk 5%',
	'Splash Plate': ' Abyssal Ruins',
	'Spell Tag': ' Celestial Tower, Wild Shuppet 5%, Wild Banette 5%, Wild Yamask 5%, Wild Cofagrigus 5%',
	'Spooky Plate': ' Abyssal Ruins',
	'Stone Plate': ' Abyssal Ruins',
	'Thick Club': ' Wild Cubone 5%, Wild Marowak 5%',
	'Twisted Spoon': ' Castelia Sewers, Wild Abra 5%, Wild Kadabra 5%, Wild Alakazam 5%',
	'Toxic Orb': ' Gear Station, PWT, Wild Muk 1%',
	'Toxic Plate': ' Abyssal Ruins',
	'Zap Plate': ' Abyssal Ruins',
	'Babiri Berry': ' Join Avenue, Wild Snorunt 5%, Wild Glalie 5%, Wild Froslass 5%',
	'Belue Berry': ' Join Avenue',
	'Charti Berry': ' Join Avenue, Wild Taillow 5%, Wild Swellow 5%',
	'Chesto Berry': ' Join Avenue, Wild Whismur 5%, Wild Loudred 5%, Wild Exploud 5%, Wild Spinda 5%, Wild Minccino 50%, Wild Cinccino 50%',
	'Chilan Berry': ' Join Avenue',
	'Chople Berry': ' Join Avenue',
	'Coba Berry': ' Join Avenue',
	'Colbur Berry': ' Join Avenue, Wild Chimecho 5%, Wild Chingling 5%',
	'Durin Berry': ' Join Avenue', 
	'Griseous Orb': ' Dragonspiral Tower',
	'Lustrous Orb': ' Dragonspiral Tower', 
	'Macho Brace': ' Route 16', 
	'Magnet': ' Chargestone Cave', 
	'Muscle Band': ' Gear Station, PWT', 
	'Hard Stone': ' Relic Passage, Join Avenue, Wild Corsola 5%, Wild Nosepass 5%, Wild Aron 5%, Wild Lairon 5%, Wild Aggron 5%, Wild Probopass 5%, Wild Roggenrola 5%, Wild Boldore 5%, Wild Gigalith 5%, Wild Dwebble 5%, Wild Crustle 5%', 
	'Ganlon Berry': ' Join Avenue', 
	'Haban Berry': ' Join Avenue, Wild Gible 5%, Wild Gabite 5%, Wild Garchomp 5%', 
	'Kasib Berry': ' Join Avenue, Wild Duskull 5%, Wild Dusclops 5%, Wild Dusknoir 5%', 
	'Kebia Berry': ' Join Avenue, Wild Shroomish 5%, Wild Breloom 5%', 
	'Leppa Berry': ' Join Avenue, Wild Clefairy 50%, Wild Clefable 50%, Wild Cleffa 50%', 
	'Liechi Berry': ' Join Avenue', 
	'Lum Berry': ' Join Avenue, Wild Mew 100%, Wild Celebi 100%, Wild Shaymin 100%', 
	'Occa Berry': ' Join Avenue, Wild Mawile 5%, Wild Pansage 5%, Wild Simisage 5%', 
	'Metal Powder': ' Route 13, Wild Ditto 5%', 
	'Iron Ball': ' Gear Station, PWT', 
	'Light Ball': ' Wild Pikachu 5%', 
	'Lagging Tail': ' Wild Slowpoke 5%, Wild Lickitung 5%, Wild Lickilicky 5%', 
	'Oran Berry': ' Join Avenue Wild Sentret 5%, Wild Furret 50%, Wild Zigzagoon 5%, Wild Linoone 50%, Wild Bibarel 50%, Wild Pansage 50%, Wild Simisage 50%, Wild Pansear 50%, Wild Simisear 50%, Wild Panpour 50%, Wild Simipour 50%, Wild Audino 50%', 
	'Passho Berry': ' Join Avenue, Wild Phanpy 5%, Wild Donphan 5%, Wild Pansear 5%, Wild Simisear 5%', 
	'Payapa Berry': ' Join Avenue, Wild Mankey 5%, Wild Primeape 5%', 
	'Rawst Berry': ' Join Avenue, Wild Vulpix 100%, Wild Ninetales 100%, Wild Growlithe 50%, Wild Arcanine 50%, Wild Numel 100%, Wild Camerupt 100%, Wild Darumaka 50%, Wild Darmanitan 50%', 
	'Rindo Berry': ' Join Avenue, Wild Finneon 5%, Wild Lumineon 5%, Wild Panpour 5%, Wild Simipour 5%', 
	'Salac Berry': ' Join Avenue', 
	'Shuca Berry': ' Join Avenue, Wild Ponyta 5%, Wild Rapidash 5%', 
	'Sitrus Berry': ' Join Avenue, Wild Furret 5%, Wild Linoone 5%, Wild Bibarel 5%, Wild Audino 5%', 
	'Tanga Berry': ' Join Avenue', 
	'Wacan Berry': ' Join Avenue', 
	'Watmel Berry': ' Join Avenue', 
	'Yache Berry': ' Join Avenue, Wild Starly 5%, Wild Staravia 5%, Wild Staraptor 5%' 
        
    };
    
    var moves = {
    	'Hone Claws':' TM01 Victory Road',
	'Dragon Claw':' TM02 Dragonspiral Tower',
	'Psyshock':' TM03 Giant Chasm',
	'Calm Mind':' TM04 Striaton City Poke Mart',
	'Roar':' TM05 Route 23',
	'Toxic':' TM06 Seaside Cave',
	'Hail':' TM07 Mistralton City Poke Mart',
	'Bulk Up':' TM08 Striaton City Poke Mart',
	'Venoshock':' TM09 Defeat Roxie',
	'Hidden Power':' TM10 Battle Subway, PWT',
	'Sunny Day':' TM11 Mistralton City Poke Mart',
	'Taunt':' TM12 Route 23',
	'Ice Beam':' TM13 Giant Chasm',
	'Blizzard':' TM14 Lacunosa Town Poke Mart',
	'Hyper Beam':' TM15 Route 9 Dept. Store',
	'Light Screen':' TM16 Nimbasa City Poke Mart',
	'Protect':' TM17 Battle Subway, PWT',
	'Rain Dance':' TM18 Mistralton City Poke Mart',
	'Telekinesis':' TM19 Route 18',
	'Safeguard':' TM20 Battle Subway, PWT',
	'Frustration':' TM21 Floccesy Ranch',
	'SolarBeam':' TM22 Pinwheel Forest',
	'Smack Down':' TM23 Battle Subway, PWT',
	'Thunderbolt':' TM24 Victory Road',
	'Thunder':' TM25 Lacunosa Town Poke Mart',
	'Earthquake':' TM26 Route 15',
	'Return':' TM2 Aspertia City',
	'Dig':' TM28 Route 4',
	'Psychic':' TM29 Route 13',
	'Shadow Ball':' TM30 Reversal Mountain',
	'Brick Break':' TM31 Battle Subway, PWT',
	'Double Team':' TM31 Battle Subway, PWT',
	'Reflect':' TM33 Nimbasa City Poke Mart',
	'Sludge Wave':' TM34 Battle Subway, PWT',
	'Flamethrower':' TM35 Route 23',
	'Sludge Bomb':' TM36 Route 8',
	'Sandstorm':' TM37 Mistralton City Poke Mart',
	'Fire Blast':' TM38 Lacunosa Town Poke Mart',
	'Rock Tomb':' TM39 Relic Castle',
	'Aerial Ace':' TM40 Mistralton City',
	'Torment':' TM41 Castelia Sewers',
	'Facade':' TM42 Humilau City',
	'Flame Charge':' TM43 Tubeline Bridge',
	'Rest':' TM44 Castelia City',
	'Attract':' TM45 Castelia City',
	'Thief':' TM46 Virbank Complex',
	'Low Sweep':' TM47 Wellspring Cave',
	'Round':' TM48 Battle Subway, PWT',
	'Echoed Voice':' TM49 Nimbasa City Musical Hall',
	'Overheat':' TM50 N\'s Castle',
	'Ally Switch':' TM51 Battle Subway, PWT',
	'Focus Blast':' TM52 Wellspring Cave',
	'Energy Ball':' TM53 Aspertia City',
	'False Swipe':' TM54 Reversal Mountain',
	'Scald':' TM55 Defeat Marlon',
	'Fling':' TM56 Route 6',
	'Charge Beam':' TM57 Lentimas Town',
	'Sky Drop':' TM58 Mistralton City',
	'Incinerate':' TM59 Battle Subway, PWT',
	'Quash':' TM60 Battle Subway, PWT',
	'Will-O-Wisp':' TM61 Celestial Tower',
	'Acrobatics':' TM62 Defeat Skyla',
	'Embargo':' TM63 Driftveil City Market',
	'Explosion':' TM64 Battle Subway, PWT',
	'Shadow Claw':' TM65 Celestial Tower',
	'Payback':' TM66 Route 16',
	'Retaliate':' TM67 Plasma Frigate',
	'Giga Impact':' TM68 Route 9 Dept. Store',
	'Rock Polish':' TM69 Reversal Mountain',
	'Flash':' TM70 Castelia City',
	'Stone Edge':' TM71 Twist Mountain',
	'Volt Switch':' TM72 Defeat Elesa',
	'Thunder Wave':' TM73 Nimbasa City Poke Mart',
	'Gyro Ball':' TM74 Nimbasa City Poke Mart',
	'Swords Dance':' TM75 Battle Subway, PWT',
	'Struggle Bug':' TM76 Defeat Burgh',
	'Psych Up':' TM77 Battle Subway, PWT',
	'Bulldoze':' TM78 Defeat Clay',
	'Frost Breath':' TM79 Battle Subway, PWT',
	'Rock Slide':' TM80 Mistralton Cave',
	'X-Scissor':' TM81 Route 7',
	'Dragon Tail':' TM82 Defeat Drayden',
	'Work Up':' TM83 Defeat Cheren',
	'Poison Jab':' TM84 Moor of Icirrus',
	'Dream Eater':' TM85 Dreamyard',
	'Grass Knot':' TM86 Pinwheel Forest',
	'Swagger':' TM87 Battle Subway, PWT',
	'Pluck':' TM88 Battle Subway, PWT',
	'U-Turn':' TM89 Battle Subway, PWT',
	'Substitute':' TM90 Twist Mountain',
	'Flash Cannon':' TM91 Twist Mountain',
	'Trick Room':' TM92 Abundant Shrine',
	'Wild Charge':' TM93 Victory Road',
	'Rock Smash':' TM94 Virbank Complex',
	'Snarl':' TM95 Lostlorn Forest',
	'Grass Pledge':' PWT Move Tutor',
	'Fire Pledge':' PWT Move Tutor',
	'Water Pledge':' PWT Move Tutor',
	'Frenzy Plant':' PWT Move Tutor',
	'Blast Burn':' PWT Move Tutor',
	'Hydro Cannon':' PWT Move Tutor',
	'Covet':' Driftveil City Move Tutor',
	'Bug Bite':' Driftveil City Move Tutor',
	'Drill Run':' Driftveil City Move Tutor',
	'Bounce':' Driftveil City Move Tutor',
	'Signal Beam':' Driftveil City Move Tutor',
	'Iron Head':' Driftveil City Move Tutor',
	'Super Fang':' Driftveil City Move Tutor',
	'Uproar':' Driftveil City Move Tutor',
	'Seed Bomb':' Driftveil City Move Tutor',
	'Dual Chop':' Driftveil City Move Tutor',
	'Low Kick':' Driftveil City Move Tutor',
	'Gunk Shot':' Driftveil City Move Tutor',
	'Thunder Punch':' Driftveil City Move Tutor',
	'Fire Punch':' Driftveil City Move Tutor',
	'Ice Punch':' Driftveil City Move Tutor',
	'Last Resort':' Lentimas Town Move Tutor',
	'Iron Defense':' Lentimas Town Move Tutor',
	'Magnet Rise':' Lentimas Town Move Tutor',
	'Magic Coat':' Lentimas Town Move Tutor',
	'Block':' Lentimas Town Move Tutor',
	'Hyper Voice':' Lentimas Town Move Tutor',
	'Electroweb':' Lentimas Town Move Tutor',
	'Icy Wind':' Lentimas Town Move Tutor',
	'Iron Tail':' Lentimas Town Move Tutor',
	'Aqua Tail':' Lentimas Town Move Tutor',
	'Earth Power':' Lentimas Town Move Tutor',
	'Zen Headbutt':' Lentimas Town Move Tutor',
	'Foul Play':' Lentimas Town Move Tutor',
	'Superpower':' Lentimas Town Move Tutor',
	'Gravity':' Lentimas Town Move Tutor',
	'Dragon Pulse':' Lentimas Town Move Tutor',
	'Dark Pulse':' Lentimas Town Move Tutor',
	'Draco Meteor':' Opelucid City Move Tutor',
	'Bind':' Humilau City Move Tutor',
	'Snore':' Humilau City Move Tutor',
	'Heal Bell':' Humilau City Move Tutor',
	'Knock Off':' Humilau City Move Tutor',
	'Synthesis':' Humilau City Move Tutor',
	'Roost':' Humilau City Move Tutor',
	'Sky Attack':' Humilau City Move Tutor',
	'Role Play':' Humilau City Move Tutor',
	'Heat Wave':' Humilau City Move Tutor',
	'Giga Drain':' Humilau City Move Tutor',
	'Drain Punch':' Humilau City Move Tutor',
	'Pain Split':' Humilau City Move Tutor',
	'Tailwind':' Humilau City Move Tutor',
	'Worry Seed':' Nacrene City Move Tutor',
	'Gastro Acid':' Nacrene City Move Tutor',
	'Helping Hand':' Nacrene City Move Tutor',
	'After You':' Nacrene City Move Tutor',
	'Magic Room':' Nacrene City Move Tutor',
	'Wonder Room':' Nacrene City Move Tutor',
	'Spite':' Nacrene City Move Tutor',
	'Recycle':' Nacrene City Move Tutor',
	'Trick':' Nacrene City Move Tutor',
	'Stealth Rock':' Nacrene City Move Tutor',
	'Outrage':' Nacrene City Move Tutor',
	'Endeavor':' Nacrene City Move Tutor',
	'Sleep Talk':' Nacrene City Move Tutor',
	'Skill Swap':' Nacrene City Move Tutor',
	'Snatch':' Nacrene City Move Tutor'
    };
    
    var locations = {
    	'Snivy':' Starter',
	'Servine':' Evolve Snivy',
	'Serperior':' Evolve Servine',
	'Tepig':' Starter',
	'Pignite':' Evolve Tepig',
	'Emboar':' Evolve Pignite',
	'Oshawott':' Starter',
	'Dewott':' Evolve Oshawott',
	'Samurott':' Evovle Dewott',
	'Lillipup':' Floccesy Ranch Grass 40%',
	'Patrat':' Route 19 Grass 50%, Route 19 Shaking Grass 100%, Virbank Complex Outside Grass 35%',
	'Watchog':' Route 1 Grass & Dark Grass 40%, Route 2 Grass 30%',
	'Purrloin':' Route 19 Grass 50%',
	'Liepard':' Dreamyard Grass & Dark Grass 25%, Route 2 Grass 20%, Route 5 Grass & Dark Grass 20%',
	'Pidove':' Virbank Complex Outside Grass 35%, Route 20 Autumn, Spring, Winter Grass & Dark Grass 25%',
	'Tranquill':' Victory Road Outside Grass & Dark Grass 80%, Dragonspiral Tower Grass 35 %, Routes 3 & 7 Grass & Dark Grass 30%',
	'Unfezant':' Routes 3, 6, 7, & 12 Shaking Grass 5%,  Dragonspiral Tower Shaking Grass 5%',
	'Sewaddle':' Route 20 Grass 35%',
	'Swadloon':' Pinwheel & Lostlorn Forest Grass & Dark Grass 25%',
	'Leavanny':' Routes 6 & 12 Shaking Grass 5%, Lostlorn Forest Shaking Grass 5%',
	'Sunkern':' Route 20 Summer Grass & Dark Grass 26%',
	'Sunflora':' Evolve Sunkern',
	'Herdier':' Route 1 Dark Grass 39%, Route 1 Grass 50%',
	'Stoutland':' Route 1, 2, 3 Shaking Grass 5%, P2 Laboratory Shaking Grass 5%',
	'Mareep':' Floccesy Ranch Grass 10%',
	'Flaaffy':' Evolve Mareep',
	'Ampharos':' Evolve Flaaffy',
	'Psyduck':' Floccesy Ranch Grass 10%',
	'Golduck':' Seaside Cave 1F Grass 35%, Village Bridge Grass & Dark Grass 35%',
	'Azurill':' Route 20 Surf 30%, Flocessy Ranch Surf 30%',
	'Marill':' Routes 6 & 22, Abundant Shrine, Pinwheel Forest, Relic Passage, & Victory Road Surf Rippling Water 60%,',
	'Azumarill':' Routes 6, 11, 20, and 22 Surf Rippling Water 5%',
	'Riolu':' Floccesy Ranch Grass 5%',
	'Lucario':' Evolve Riolu',
	'Dunsparce':' Routes 1, 2, 6, 12, 18, & 20 Shaking Grass 10%',
	'Audino':' Any Shaking Grass',
	'Pansage':' Pinwheel & Lostlorn Forest Shaking Grass 10%',
	'Simisage':' Evolve Pansage',
	'Pansear':' Pinwheel & Lostlorn Forest Shaking Grass 10%',
	'Simisear':' Evolve Pansear',
	'Panpour':' Pinwheel & Lostlorn Forest Shaking Grass 10%',
	'Simipour':' Evolve Pansear',
	'Venipede':' Route 20 Dark Grass 20%, Lostlorn Forest Grass 20%',
	'Whirlipede':' Lostlorn Forest Dark Grass 20%',
	'Scolipede':' Pinwheel Forest Shaking Grass 5%',
	'Koffing':' Virbank Complex Grass & Dark Grass 15%',
	'Weezing':' P2 Laboratory Grass 15%',
	'Magnemite':' Virbank Complex Grass & Dark Grass 25%',
	'Magneton':' P2 Laboratory Grass 15%',
	'Magnezone':' P2 Laboratory Shaking Grass 5%',
	'Growlithe':' Virbank Complex Grass & Dark Grass 20%',
	'Arcanine':' Evolve Growlithe',
	'Magby':' Virbank Complex Grass & Dark Grass 25%',
	'Magmar':' Evolve Magby',
	'Magmortar':' Evolve Magmar',
	'Elekid':' Trade Required',
	'Electabuzz':' Trade Required',
	'Electivire':' Trade Required',
	'Rattata':' Castelia Sewers Grass 45%',
	'Raticate':' Dreamyard Basement Dark Grass 25%',
	'Zubat':' Castelia Sewers Grass 45%',
	'Golbat':' Dreamyard Basement Double Grass 25%, Celestial Tower 4F Grass 20%',
	'Crobat':' Dreamyard Shaking Grass 5%',
	'Grimer':' Castelia Sewers Surf & Fishing 100%',
	'Muk':' Castelia Sewers Fish Rippling Water 10%',
	'Woobat':' Wellspring Cave 1F & B1F Grass 50%',
	'Swoobat':' Evolve Woobat',
	'Roggenrola':' Relic Passage Room 3 34%',
	'Boldore':' Giant Chasm Outside Grass 100%, Victory Road 2F & 4F Grass 80%',
	'Gigalith':' Evolve Boldore',
	'Onix':' Twist Mountain, Relic Passage, Clay Tunnel, Underground Ruins, & Victory Road Dust Clouds 20%',
	'Steelix':' Twist Mountain Dusk Clouds 5%',
	'Timburr':' Relic Passage Room 3 Grass 20%',
	'Gurdurr':' Victory Road Cliffside Grass & Dark Grass 70%',
	'Conkeldurr':' Evolve Gurdurr',
	'Drilbur':' Mistralton & Chargestone Cave Dust Clouds 100%',
	'Excadrill':' Giant Chasm Cave, Reversal Mountain, Seaside Cave, & Wellspring Cave Dust Clouds 100%',
	'Skitty':' Trade Required',
	'Delcatty':' Trade Required',
	'Buneary':' Castelia City Park Grass & Dark Grass 15%',
	'Lopunny':' Castelia City Park Shaking Grass 5%',
	'Cottonee':' Victory Road Forest Grass & Dark Grass 70%',
	'Whimsicott':' Pinwheel, Lostlorn, & Victory Road Forest Shaking Grass 5%',
	'Petilil':' Trade Required',
	'Lilligant':' Trade Required',
	'Munna':' Dreamyard Grass & Dark Grass 20%',
	'Musharna':' Dreamyard Shaking Grass 5%',
	'Cleffa':' Breed Clefairy',
	'Clefairy':' Giant Chasm Plains Grass & Dark Grass 20%',
	'Clefable':' Giant Chasm Shaking Grass 5%',
	'Eevee':' Castelia City Park Grass & Dark Grass 5%',
	'Vaporeon':' Evolve Eevee',
	'Jolteon':' Evolve Eevee',
	'Flareon':' Evolve Eevee',
	'Espeon':' Evolve Eevee',
	'Umbreon':' Evolve Eevee',
	'Leafeon':' Evolve Eevee',
	'Glaceon':' Evolve Eevee',
	'Sandile':' Relic Castle Grass 40%, Route 4 Grass 35%',
	'Krokorok':' Relic Castle Maze Grass 10%',
	'Krookodile':' Evolve Krokorok',
	'Basculin':' Water',
	'Darumaka':' Route 4 Grass 35%',
	'Darmanitan':' Evolve Darumaka',
	'Trubbish':' Route 4 Grass 25%, Routes 5 & 16 Grass & Dark Grass 20%',
	'Garbodor':' Route 9 Grass & Dark Grass 15%',
	'Minccino':' Routes 5, 9, & 16 Grass & Dark Grass 30%',
	'Cinccino':' Routes 5, 9, & 16 Shaking Grass 5%',
	'Rufflet':' Trade Required',
	'Braviary':' Trade Required',
	'Vullaby':' Route 23 Grass & Dark Grass 5%',
	'Mandibuzz':' Route 4 Thursday',
	'Sandslash':' Relic Castle Grass 20%',
	'Sandslash':' Route 15 Grass & Dark Grass 30%',
	'Dwebble':' Desert Resort Grass 10%',
	'Crustle':' Route 18 Grass & Dark Grass 20%',
	'Scraggy':' Desert Resort Grass 10%',
	'Scrafty':' Route 18 Grass & Dark Grass 30%',
	'Maractus':' Desert Resort Grass 10%',
	'Sigilyph':' Desert Resort Grass 10%',
	'Trapinch':' Reversal Mountain Outside Grass 15%',
	'Vibrava':' Reversal Mountain Outside Dark Grass 5%',
	'Flygon':' Evolve Vibrava',
	'Yamask':' Relic Castle Grass 40%',
	'Cofagrigus':' Evolve Yamask',
	'Tirtouga':' Revive Fossil',
	'Carracosta':' Evolve Tirtouga',
	'Archen':' Revive Fossil',
	'Archeops':' Evolve Archen',
	'Klink':' Chargestone Cave Grass 24%',
	'Klang':' P2 Laboratory Grass 15%',
	'Klinklang':' P2 Laboratory Shaking Grass 5%',
	'Budew':' Breed Roselia',
	'Roselia':' Victory Road Forest Grass & Dark Grass 30%',
	'Roserade':' Route 12, Lostorn & Victory Road Forests Shaking Grass 5%',
	'Gothita':' Routes 5 & 16 Grass & Dark Grass 30%',
	'Gothorita':' Route 9 Grass & Dark Grass 25%',
	'Gothitelle':' Route 9 Shaking Grass 5%',
	'Solosis':' Trade Required',
	'Duosion':' Trade Required',
	'Reuniclus':' Trade Required',
	'Combee':' Route 12 Grass & Dark Grass 20%',
	'Vespiquen':' Route 12 & Lostlorn Forest Shaking Grass 5%',
	'Emolga':' Shaking Grass',
	'Heracross':' Route 12 Grass & Dark Grass 15%',
	'Pinsir':' Lostlorn Forest Hidden Grotto',
	'Blitzle':' Breed Zebstrika',
	'Zebstrika':' Route 7 Grass & Dark Grass 20%',
	'Buizel':' Routes 11, 14, & 23 Surf Rippling Water 60%',
	'Floatzel':' Routes 11, 14, 23 & Lostlorn Forest Surf Rippling Water 10%',
	'Zorua':' Driftveil City (Gift)',
	'Zoroark':' Evolve Zorua',
	'Ducklett':' Driftveil Drawbridge Shadowed Areas 100%',
	'Swanna':' Marvelous Bridge Shadowed Areas 100%',
	'Karrablast':' Routes 6, 8, & 11 Grass & Dark Grass 5%',
	'Escavalier':' Evolve Karrablast',
	'Shelmet':' Routes 6, 8, & 11 Grass & Dark Grass 25%',
	'Accelgor':' Evolve Shelmet',
	'Deerling':' Route 6 Grass & Dark Grass 30%, Route 7 Grass & Dark Grass 20%',
	'Sawsbuck':' Dragonspiral Tower Grass & Dark Grass 35%',
	'Foongus':' Route 6 Grass & Dark Grass 10%',
	'Amoonguss':' Route 22 Grass & Dark Grass 20%',
	'Castform':' Route 6 Shaking Grass 5%',
	'Nosepass':' Clay Tunnel & Underground Ruins Grass 15%',
	'Probopass':' Evolve Nosepass',
	'Aron':' Mistralton Cave Grass 20%',
	'Lairon':' Clay Tunnel & Underground Ruins Grass 15%',
	'Aggron':' Evolve Lairon',
	'Baltoy':' Relic Castle Maze Grass 100%',
	'Claydol':' Evolve Baltoy',
	'Larvesta':' Breed Volcarona',
	'Volcarona':' Relic Castle Maze End',
	'Joltik':' Chargestone Cave Grass 39%',
	'Galvantula':' Evolve Joltik',
	'Ferroseed':' Chargestone Cave Grass 20%',
	'Ferrothorn':' Evolve Ferroseed',
	'Tynamo':' Chargestone Cave Grass 2%, Seaside Cave Grass 8%',
	'Eelektrik':' Seaside Cave Grass 5%',
	'Eelektross':' Evolve Eelektrik',
	'Frillish':' Routes 4, 17, & 18 Surf 100%, Virbank City Surf 100%',
	'Jellicent':' Undella Bay Surf Rippling Water 60%, Humilau City & Route 21 Surf Rippling Water 60%',
	'Alomomola':' Routes 4, 17, & 18 Surf Rippling Water 95%',
	'Axew':' Mistralton Cave Grass 20%',
	'Fraxure':' Nature Preserve Grass & Dark Grass 10%',
	'Haxorus':' Nature Preserve',
	'Zangoose':' Village Bridge Grass & Dark Grass 15%',
	'Seviper':' Route 11 Grass & Dark Grass 10%, Village Bridge Grass & Dark Grass 15%',
	'Elgyem':' Celestial Tower 4F Grss 40%',
	'Beheeyem':' Evolve Elgyem',
	'Litwick':' Celestial Tower 1F Grass 100%',
	'Lampent':' Evolve Litwick',
	'Chandelure':' Evolve Lampent',
	'Heatmor':' Twist Mountain Grass Summer 20%',
	'Durant':' Clay Tunnel & Underground Ruins Grass 20%',
	'Cubchoo':' Route 7 Grass & Dark Grass Winter 25%',
	'Beartic':' Twist Mountain Grass Winter 20%',
	'Cryogonal':' Twist Mountain Grass Winter 15%',
	'Tornadus':' Trade Required',
	'Thundurus':' Trade Required',
	'Landorus':' Trade Required',
	'Skorupi':' Reversal Mountain Outside Grass & Dark Grass 30%',
	'Drapion':' Evolve Skorupi',
	'Skarmory':' Reversal Mountain Outside Dark Grass 15%',
	'Numel':' Trade Required',
	'Camerupt':' Trade Required',
	'Spoink':' Reversal Mountain Grass 30%',
	'Grumpig':' Reversal Mountain Outside Dark Grass 30%',
	'Drifloon':' Route 13 Hidden Grotto',
	'Drifblim':' Reversal Mountain Outside Grass & Dark Grass 20%',
	'Shuppet':' Breed Banette',
	'Banette':' Victory Road Grass 70%',
	'Wingull':' Breed Pelipper',
	'Pelipper':' Route 13 Grass & Dark Grass 25%',
	'Lunatone':' Routes 13 & 22 Grass & Dark Grass 10%',
	'Solrock':' Routes 13 & 22 Grass & Dark Grass  10%',
	'Absol':' Routes 13 & 14 Grass & Dark Grass 15%',
	'Tangela':' Giant Chasm Outside Grass & Dark Grass 30%',
	'Tangrowth':' Route 13 Shaking Grass 5%, Giant Chasm Outside Shaking Grass 5%',
	'Mienfoo':' Route 14 Double Grass 30%, Route 22 Grass & Dark Grass 25%',
	'Mienshao':' Dragonspiral Tower Outside Grass & Dark Grass 25%',
	'Gligar':' Route 15 Grass & Dark Grass 25%',
	'Gliscor':' Routes 11, 15, & 23 Shaking Grass 5%',
	'Pawniard':' Route 9 Grass & Dark Grass 15%',
	'Bisharp':' Evolve Pawniard',
	'Cobalion':' Route 13',
	'Terrakion':' Route 22',
	'Virizion':' Route 11',
	'Tympole':' Breed Palpitoad',
	'Palpitoad':' Route 8 & Moor of Icirrus Grass 40%',
	'Seismitoad':' Route 8 & Moor of Icirrus Surf Rippling Water 5%',
	'Stunfisk':' Icirrus City & Moor of Icirrus Surf 100%',
	'Shuckle':' Seaside Cave Grass 5%',
	'Mantyke':' Undella Bay Surf 30%',
	'Mantine':' Undella Bay Surf Rippling Water 5%',
	'Remoraid':' Route 21 Fish Rippling Water 65%, Undella Bay Fish Rippling Water 60%',
	'Octillery':' Undella Bay & Route 21 Fish Rippling Water 5%',
	'Corsola':' Humilau City Surf Rippling Water 30%',
	'Staryu':' Undella Town & Route 13 Surf Rippling Water 60%',
	'Starmie':' Route 13, Undella Town, & Humilau City Surf Rippling Water 5%',
	'Wailmer':' Undella Bay Surf Rippling Water Winter 60%, Undella Bay Surf Rippling Water Spring, Summer, & Autumn 30%',
	'Wailord':' Undella Bay Surf Rippling Water 5%',
	'Lapras':' Village Bridge Surf Rippling Water 5%',
	'Spheal':' Undella Bay Surf Winter 30%',
	'Sealeo':' Undella Bay Surf Rippling Water Winter 30%',
	'Walrein':' Undella Bay Surf Rippling Water Winter 5%',
	'Swablu':' Route 15 & Abundant Shrine Grass 20%',
	'Altaria':' Victory Road Outside & Nature Preserve Grass & Dark Grass 20%',
	'Vulpix':' Abundant Shrine Grass 10%, Abundant Shrine Dark Grass 20%',
	'Ninetales':' Abundant Shrine Shaking Grass 5%',
	'Bronzor':' Abundant Shrine Grass 15%',
	'Bronzong':' Abundant Shrine Dark Grass 10%',
	'Sneasel':' Giant Chasm Grass 20%',
	'Weavile':' Evolve Sneasel',
	'Delibird':' Giant Chasm & Route 22 Grass & Dark Grass 5%',
	'Vanillite':' Breed Vanillish',
	'Vanillish':' Dragonspiral Tower Grass & Dark Grass Winter 25%',
	'Vanilluxe':' Dragonspiral Tower & Giant Chasm Shaking Grass 5%',
	'Swinub':' Breed Piloswine',
	'Piloswine':' Giant Chasm Grass & Dark Grass 30%',
	'Mamoswine':' Giant Chasm Shaking Grass 5%',
	'Ditto':' Giant Chasm Grass & Dark Grass 15%',
	'Beldum':' Breed Beldum',
	'Metang':' Giant Chasm Grass & Dark Grass 10%',
	'Metagross':' Giant Chasm Shaking Grass 5%',
	'Seel':' Giant Chasm Cave Surf Rippling Water 60%',
	'Dewgong':' Giant Chasm & Seaside Cave Surf Rippling Water 10%',
	'Throh':' Victory Road Cliffside Grass & Dark Grass 30%',
	'Sawk':' Route 23 Grass & Dark Grass 25%',
	'Bouffalant':' Route 23 Grass & Dark Grass 35%',
	'Druddigon':' Victory Road 7F & N\'s Castle Entrance Grass 80%',
	'Golett':' Breed Golurk',
	'Golurk':' Dragonspiral Tower 2F Grass 100%',
	'Deino':' Breed Zweilous',
	'Zweilous':' Victory Road & N\'s Castle Entrance Grass 20%',
	'Hydreigon':' Evolve Zweilous',
	'Slakoth':' Breed Vigoroth',
	'Vigoroth':' Pinwheel Forest Grass & Dark Grass 15%',
	'Slaking':' Pinwheel Forest Shaking Grass 5%',
	'Corphish':' Route 3 Surf Rippling Water 60%',
	'Crawdaunt':' Route 3 & Striaton City Surf Rippling Water 10%',
	'Igglybuff':' Breed Igglybuff',
	'Jigglypuff':' Route 1 & 2 Grass & Dark Grass 10%',
	'Wigglytuff':' Route 1 & 2 Shaking Grass 5%',
	'Lickitung':' Route 2 Grass 10%',
	'Lickilicky':' Route 2 Shaking Grass 5%',
	'Yanma':' Route 3 Grass & Double Grass 10%',
	'Yanmega':' Route 3 Shaking Grass 5%',
	'Tropius':' Route 18 Grass & Double Grass 10%',
	'Carnivine':' Route 18 Grass & Double Grass 10%',
	'Croagunk':' Route 8, Icirrus City, & Moor of Icirrus Grass 15%',
	'Toxicroat':' Pinwheel Forest Grass & Double Grass 10%',
	'Larvitar':' Breed Pupitar',
	'Pupitar':' Route 15 Grass & Double Grass 15%',
	'Tyranitar':' Route 15 Shaking Grass 5%',
	'Reshiram':' Trade Required',
	'Zekrom':' Dragonspiral Tower',
	'Kyurem':' Giant Chasm'
    };
        
    $('.Pokemon').keypress(function(event){
        if(event.which == 13){
            $('.go').click();
        }
    });
    
    $('.go').click(function(){
        var poke = $('.Pokemon').val();
        var hp = ($('.hp').val() && $('.hp').val() !== '0' ? ' Level up holding Power Weight against Stunfisk for a total of 6 HP EVs per level. Level up holding Power Weight against Victini for a total of 7 HP EVs per level.' : ''); 
        var attack = ($('.atk').val() && $('.atk').val() !== '0' ? ' Level up holding Power Bracer against Tranquill, Sawsbuck, Druddigon, or Beartic for a total of 6 Attack EVs per level. Level up holding Power Bracer against Patrat, Lillipup, Mienfoo, or Golett for a total of 5 Attack EVs per level.': '');
        var defense = ($('.def').val() && $('def').val() !== '0' ? ' Level up holding Power Belt against Roggenrola, Onix, Sewaddle, or Venipede for a total of 5 Defense EVs per level. Level up holding Power Belt against Sandslash or Cofagrigus for a total of 6 Defense EVs per level.': '');
        var spattack = ($('.spatk').val() && $('.spatk').val() !== '0' ? ' Level up holding Power Lens against Litwick or Elgyem for a total of 5 Special Attack EVs per level. ': '');
        var spdefense = ($('.spdef').val() && $('.spdef').val() !== '0' ? ' Level up holding Power Band against Frillish for a total of 5 Special Defense EVs per level. Level up holding Power Band against Claydol for a total of 6 Special Defense EVs per level. ': '');
        var speed = ($('.spe').val() && $('.spe').val() !== '0' ? ' Level up holding Power Anklet against Basculin for a total of 5 Speed EVs per level.': '');
        
	var moveRespOne,
		moveRespTwo,
		moveRespThree,
		moveRespFour,
		learnable = [];
		
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://pokeapi.co/api/v1/pokemon/' + poke.toLowerCase() + '/', false);
	xhr.send(null);
	var parse = JSON.parse(xhr.responseText);

	if(moves[$('.move-1 :selected').text()] !== undefined){
		moveRespOne = moves[$('.move-1 :selected').text()];
	} else {
		moveRespOne = 'If your Pokemon doesn\'t learn this by level 100 or by <a href="http://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Egg_Group">breeding</a>, it ain\'t going to';
	}
	
	if(moves[$('.move-2 :selected').text()] !== undefined){
		moveRespTwo = moves[$('.move-2 :selected').text()];
	} else {
		moveRespTwo = 'If your Pokemon doesn\'t learn this by level 100 or by <a href="http://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Egg_Group">breeding</a>, it ain\'t going to';
	}
	
	if(moves[$('.move-3 :selected').text()] !== undefined){
		moveRespThree = moves[$('.move-3 :selected').text()];
	} else {
		moveRespThree = 'If your Pokemon doesn\'t learn this by level 100 or by <a href="http://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Egg_Group">breeding</a>, it ain\'t going to';
	}
	
	if(moves[$('.move-4 :selected').text()] !== undefined){
		moveRespFour = moves[$('.move-4 :selected').text()];
	} else {
		moveRespFour = 'If your Pokemon doesn\'t learn this by level 100 or by <a href="http://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Egg_Group">breeding</a>, it ain\'t going to';
	}
        
        $('.result-container').html('<span class="result">How to breed the perfect ' + poke + '!</span>' +
        '<p class="moveinfo">' + poke + ': ' + locations[poke] + '</p>' +
        '<p class="moveinfo">' + $('.item :selected').text() +': ' + items[$('.item :selected').text()] + '</p>' +
        '<p class="moveinfo">EVs: ' + hp + attack + defense + spattack + spdefense + speed + '</p>' +
        '<p class="moveinfo">' + $('.nature :selected').text() + ' Nature: Breed with a ' + $('.nature :selected').text() + ' nature Ditto holding an Everstone </p>' +
        '<p class="moveinfo">' + $('.move-1 :selected').text() + ': ' + moveRespOne + '</p>' +
        '<p class="moveinfo">' + $('.move-2 :selected').text() + ': ' + moveRespTwo + '</p>' +
        '<p class="moveinfo">' + $('.move-3 :selected').text() + ': ' + moveRespThree + '</p>' +
        '<p class="moveinfo">' + $('.move-4 :selected').text() + ': ' + moveRespFour + '</p>'
        );
  });
				
});

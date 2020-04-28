var valider = document.getElementById("validate");
valider.addEventListener("click",nb_joueurs);
var compteur_j = [0,0,0,0];
var num_joueur = 1;
var nb_joueur;
var nb_tours=0;
var chiffre;
var num_ques;
var duo = false;
/*var tab_test_question = ["Quel est le nom de Cesar ?","Comment va la mama ?","Ou se trouve le drapeau","Ou est le trésor ?"];
var tab_test_reponse = [["reponse1","reponse2","reponse3","reponse4"],[22,23,24,25],[31,32,33,34],[41,42,43,44]];*/
var tab1_question = [
    "https://cdn.pixabay.com/photo/2017/01/06/17/18/caramel-1958358_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/05/32/animal-1867562__480.jpg",
    "https://cdn.pixabay.com/photo/2012/12/17/19/14/keyboard-70506__480.jpg",
    "https://cdn.pixabay.com/photo/2018/05/16/20/18/motherboard-3406930__480.jpg",
    "https://cdn.pixabay.com/photo/2020/04/11/08/06/usb-5029286__480.jpg",
    "https://cdn.pixabay.com/photo/2016/02/14/20/28/open-hard-drive-1200164__480.jpg",
    "https://cdn.pixabay.com/photo/2014/12/11/22/07/cpu-564771__480.jpg",
    "https://cdn.pixabay.com/photo/2016/04/08/12/15/the-gpu-1316015__480.png",
    "https://cdn.pixabay.com/photo/2015/11/25/18/49/breakfast-1062749__480.jpg",
    "https://cdn.pixabay.com/photo/2017/07/09/20/48/icon-2488093__480.png",
    "https://cdn.pixabay.com/photo/2020/04/23/19/36/lily-of-the-valley-5083800__480.jpg",
    "https://cdn.pixabay.com/photo/2020/04/18/18/50/flowers-5060553__480.jpg",
    "https://cdn.pixabay.com/photo/2020/04/22/13/57/squirrel-5078283__480.jpg",
    "https://cdn.pixabay.com/photo/2012/06/19/18/09/elk-50296__480.jpg",
    "https://cdn.pixabay.com/photo/2020/04/19/02/43/woodpecker-5061636_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/04/24/20/40/stork-5088633__480.jpg",
    "https://cdn.pixabay.com/photo/2020/04/07/17/01/chicks-5014152__480.jpg",
    "https://cdn.pixabay.com/photo/2015/09/16/01/38/christ-942048__480.jpg",
    "https://cdn.pixabay.com/photo/2019/09/17/21/15/waterfalls-4484581__480.jpg",
    "https://cdn.pixabay.com/photo/2014/11/13/23/34/london-530055__480.jpg",
    "https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716__480.jpg",
    "https://cdn.pixabay.com/photo/2014/09/11/18/23/london-441853__480.jpg",
    "https://cdn.pixabay.com/photo/2013/10/29/08/34/queen-of-liberty-202218__480.jpg",
    "https://cdn.pixabay.com/photo/2014/07/10/10/20/golden-gate-bridge-388917__480.jpg",
    "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-363244__480.jpg",
    "https://cdn.pixabay.com/photo/2014/11/20/20/45/giants-causeway-539862_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/12/08/00/40/empire-state-building-1081929__480.jpg",
    "https://cdn.pixabay.com/photo/2016/09/08/23/08/florence-1655830__480.jpg",
    "https://cdn.pixabay.com/photo/2015/11/09/18/52/venice-1035684__480.jpg",
    "https://cdn.pixabay.com/photo/2019/07/10/08/49/manarola-4328226_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/08/26/14/11/panorama-427997__480.jpg",
    "https://cdn.pixabay.com/photo/2020/03/18/21/47/ireland-4945565__480.jpg"
];
var tab1_reponse = [
    ["pudding","cake","cookie","cheese"],
    ["rooster","nuggets","chicken","bird"],
    ["keyboard","board","mouse","smartphone"],
    ["motherboard","GPU","smart card","video card"],
    ["USB drive card","USB key","hard drive","CD"],
    ["hard drive","USB key","USB drive card","CD"],
    ["CPU","GPU","smart card","video card"],
    ["GPU","CPU","smart card","video card"],
    ["scones","cake","cookie","bread"],
    ["files","location","computer","screen"],
    ["Lily of the valley","","",""],
    ["pansy","","",""],
    ["squirrel","","",""],
    ["elk","","",""],
    ["Woodpecker","","",""],
    ["stork","","",""],
    ["chicks","","",""],
    ["Corcovado","","",""],
    ["Niagara Falls","","",""],
    ["Westminster Parliament","","",""],
    ["Neuschwanstein Castle","","",""],
    ["Tower Bridge","","",""],
    ["Statue of Liberty","","",""],
    ["Golden Gate Bridge","","",""],
    ["Sydney Opera House","","",""],
    ["Giant's Causeway","","",""],
    ["Empire State Building","Trump Building","Krysler Building",""],
    ["Florence","","",""],
    ["Venice","","",""],
    ["Cinqueterre","","",""],
    ["Barcelona","","",""],
    ["Dublin","","",""]
];
var tab1_proposition = ["What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","What is this ?","Which city is it ?","Which city is it ?","Which place is it ?","Which city is it ?","Which city is it ?"]
var tab2_question = ["Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?","Which word is spelled correctly?"];
var tab2_reponse = [["Cumbersome","Cambersome","Cumbersomme","Cunbersome"],["Effortful","Efortful","Efortfull","Effortfull"],["Exhausting","Exausting","Ehausting","Eausting"],["Gruling","Grulling","Grauling","Graulling"],["Heavy","Havy","Heavi","Havi"],["Knotty","Knoty","Noty","Notty"],["Onerous","Onirous","Honirous","Honerous"],["Rough","Rougth","Raugh","Raugth"],["Strenuous","Streneous","Strineous","Strinuous"],["Thorny","Torny","Torni","Thorni"],["Exaggerate","Exagerate","Exagarate","Exaggarate"],["Embarrass","Embarrasse","Embarasse","Embarass"],["Conscience","Coscience","Cocience","Concience"],["Column","Columne","Collumn","Collumne"],["Business","Buisness","Busines","Buisnes"],["Appearance","Apparance","Apearance","Aparance"],["Foreign","Foregn","Foraign","Foragn"],["Guarantee","Garanty","Garantee","Garaty"],["Height","Heigth","Heighth","Heigh"],["Knowledge","Nowledge","Knowlege","Nowlege"],["Neighbor","Neigbor","Neigbhor","Neibohr"],["Occurred","Ocurred","Ocured","Occured"],["Opponent","Oponent","Opponant","Oponant"],["Pleasant","Pleassant","Pleasante","Pleassante"],["Rhythm","Ryhtm","Rithm","Rihtm"],["Cymotrichous","Cimotricous","Cimotrichous","Cymotricous"],["Autochthonous","Autocthonous","Autoctonous","Autochtonous"],["Elucubrate","Elucubraite","Elucubrat","Elucubrait"],["Eagle","Aegle","Eaglle","Aeglle"],["Autumn","Authumn","Otumn","Othumn"],["Character","Caracter","Caracther","Characther"],["Enough","Enougth","Enaugh","Enaugth"],["Island","Iland","Ilande","Irland"],["Jealous","Jalous","Jealouse","Jalouse"],["Parallel","Parralel","Paralel","Parrallel"],["Tongue","Thonge","Thongue","Tonge"],["Weight","Wight","Wigth","Weigth"],["Length","Lenght","Langth","Langht"],["Disappear","Dissapear","Dissapaer","Dissapear"],["Appearance","Apearance","Appearence","Apearance"],["Caribbean","Carribean","Carribean","Caribbean"],["Cemetery","Cimetery","Cimitery","Cemitery"],["Colleague","Coleague","Colleage","Coleage"],["Environment","Enviroment","Environement","Enviromment"],["Foreseeable","Foreseable","Forseeable","Forseable"],["Jewelry","Jewelery","Jewlery","Jewlry"],["Judgment","Jugement","Judgement","Jugment"],["License","Lisence","Lisense","Licence"],["Lollipop","Lolipop","Lollippop","Lolippop"],["Mischievous","Michievous","Mischivous","Michivous"],["Neanderthal","Neandertal","Neeandertal","Neeandertal"],["Noticeable","Noticable","Notticeable","Notticable"],["Weird","Wird","Vird","Veird"],["Vacuum","Vaccum","Vacum","Vaccuum"],["Threshold","Thereshold","Therehold","Thrhold"],["Unforeseen","Unforseen","Unforsen","Unforesen"],["Receipt","Recept","Reccept","Recceipt"],["Schedule","Scedule","Schudele","Scudele"],["Successful","Sucessfull","Successfull","Sucessful"]];
var tab3_question = ["Who write 'Animal Farm'?","Who write 'To kill a mockingbird'?","Who write 'Nineteen eighty-four'?","Who write 'Hamlett'?","Who write 'The importance of being Earnest'?","Who write 'A Brief History of Time'","Who sing 'Let it be'?","Who is the first computer programmer?","Who conceived the Boolean algebra?","Who is at the origin of the stored program computer?","What is the “Bombe” created by Allan Turing during the II World War?","Who went to the moon for the first time?","When the first video were game invented?","Who invented the GPS?","When were the Mobile Phones created?","When were the Email invented?","When was the internet invented?","When was the Electronic Spreadsheet invented?","When was the 3D printing invented?","When was YouTube invented?","What are the dates of the civil war in the USA?","What are the dates of the Irish civil war?","When does the USA launch a bomb on Hiroshima?","When does the United Kingdom live the European Union?","When does the United Kingdom enter in the European Union?","What is the nationality of Daniel Craig?","What is the nationality of Sean Connery?"];
var tab3_reponse = [["George Orwell","Charles Dickens","Shakespeare","Edgar Allan Poes"],["Harper Lee","Charles Dickens","Lewis Caroll","Jack London"],["George Orwell","Oscar Wilde","Shakespeare","Edgar Allan Poes"],["Shakespeare","Oscar Wilde","Harold Pinter","Edgar Allan Poe"],["Oscar Wilde","Harold Pinter","Skespeare","Edgar Allan Poe"],["Stephen Hawking","Ada Lovelace","Arthur Duncan Gardner","John Von Neumann"],["The Beatles","Homeless","The Rolling Stones","Coldplay"],["Ada Lovelace","Alan Mathison Turing","Brian Kernighan","Bill Gates"],["George Boole","John Von Neumann","Carl Gauss","Etienne Bézout"],["John Von Neumann","Ada Lovelace","Sherlock Holmes","Marck Zuckerberg"],["It’s a device that used by the British to decipher German secret messages"],["Neil Armstrong","Lance Armstrong","Louis Armstrong","Adolf Hitler"],["1948","1954","1956","1945"],["The US Department of Defense","The Nazis","An investor","France"],["1973","1975","1969","1967"],["1971","1970","1975","1977"],["1983","1985","1089","1981"],["1978","1974","1970","1972"],["1986","1990","1987","1984"],["2005","2007","2004","2001"],["1861-1865","1914-1945","1876-1883","1850-1857"],["1922-1923","1914-1918","1887-1889","1894-1896"],["1945","1946","1944","1947"],["2020","2012","2016","2015"],["1961","1967","1971","1964"],["English","Irish","American","Canadian"],["Scotish","American","French","Irish"]];
var tab4_question = ["What is the word trainers in American?","What is the word jumper or pullover in American?","What is the word waistcoat in American?","What is the word braces in American?","What is the word chips in American?","What is the word biscuit in American?","What is the word crisps in American?","What is the word peckish in American?","What is the word courgette in American?","What is the word aubergine in American?","What is the word jacket potato in American?","What is the word runner bean in American?","What is the word flat in American?","What is the word ground floor in American?","What is the word first floor in American?","What is the word underground in American?","What is the word chemist’s in American?","What is the word phone box in American?","What is the word queue in American?","What is the word bonnet in American?","What is the word boot in American?","What is the word windscreen in American?","What is the word takeaway in American?","What is the word timetable in American?","What is the word rubber in American?","What is the word post in American?","What is the word the Plough in American?","What is the word holiday in American?","What is the word autumn in American?","What is the word high street in American?","What is the word lorry in American?","What is the word estate car in American?","What is the word lift in American?","What is the word nappy in American?","What is the word dummy in American?","What is the word loo in American?","What is the word telly in American?","What is the word sweet in American?","What is the word candy floss in American?","What is the word ice lolly in American?","What is the word treacle in American?","What is the word torch in American?","What is the word mobile phone in American?","What is the word rubbish in American?","What is the word bin in American?","What is the word football in American?","What is the word pitch in American?","What is the word draw in American?","What is the word kit in American?","What is the word motorway in American?","What is the word pavement in American?","What is the word zebra crossing in American?","What is the word road surface in American?","What is the word full stop in American?","What is the word nought in American?","What is the word postal code in American?","What is the word diversion in American?","What is the word flyover in American?","What is the word car park in American?","What is the word petrol in American?","What is the word hare in American?","What is the word sneakers in English?","What is the word sweater in English?","What is the word vest in English?","What is the word suspenders in English?","What is the word French fries in English?","What is the word cookie in English?","What is the word potato chips in English?","What is the word hungry in English?","What is the word zucchini in English?","What is the word eggplant in English?","What is the word backed potato in English?","What is the word string bean in English?","What is the word apartment in English?","What is the word first floor in English?","What is the word second floor in English?","What is the word subway in English?","What is the word drugstore in English?","What is the word phone booth in English?","What is the word line in English?","What is the word hood in English?","What is the word trunk in English?","What is the word windshield in English?","What is the word takeout in English?","What is the word schedule in English?","What is the word eraser in English?","What is the word mail in English?","What is the word the big dipper in English?","What is the word vacation in English?","What is the word fall in English?","What is the word main Street in English?","What is the word truck in English?","What is the word station wagon in English?","What is the word elevator in English?","What is the word diaper in English?","What is the word pacifier in English?","What is the word restroom in English?","What is the word TV in English?","What is the word candy in English?","What is the word cotton candy in English?","What is the word popsicle in English?","What is the word molasses in English?","What is the word flashlight in English?","What is the word cell phone in English?","What is the word garbage in English?","What is the word trash can in English?","What is the word soccer in English?","What is the word field in English?","What is the word tie in English?","What is the word uniform in English?","What is the word highway in English?","What is the word sidewalk in English?","What is the word crosswalk in English?","What is the word pavement in English?","What is the word period in English?","What is the word zero in English?","What is the word zip code in English?","What is the word detour in English?","What is the word overpass in English?","What is the word parking lot in English?","What is the word gas in English?","What is the word jackrabbit in English?"]
var tab4_reponse = [["sneakers","snack","trousers","pants"],["sweater","weather","cheek","wedding"],["vest","skirt","jumper","coat"],["suspenders","cell","sir","speech"],["French fries","mashed potatoes","potato chips","stew"],["cookie","pretzel","turkey","cookie"],["chips","roast chicken","toast","nuggets"],["hungry","suprious","giddy","guiltless"],["zucchini","brussels sprouts","eggplant","cucumber"],["eggplant","lettuce","beetroot","capsicum"],["backed potato","chips","french fries","beans"],["string bean","swede","spinach","pea"],["apartment","house","home","elevator"],["first floor","floor","first level","first step"],["second floor","floor one","first level","floor"],["subway","train","truck","ground"],["drugstore","surgery","pharmacy","medical practice"],["phone booth","phone board","phone table","phone store"],["line","circle","lake","area"],["hood","village","pants","cap"],["trunk","battery","muffler","wheel"],["windshield","wheel","trunk","rearview mirror"],["takeout","listen","take","hear"],["schedule","ordinary","timepast","usual"],["eraser","highlither","writer","ruler"],["mail","mud","meal","ad"],["The Big Dipper","The Main Constellation","The Great Dog","The Winged Horse"],["vacation","direction","etablishment","hull"],["fall","sail","boundary","flood"],["main Street","bass Street","secondary Street","bottom Street"],["truck","van","bus","boat"],["station wagon","train station","carshare parking","airport"],["elevator","barracks","moving staircase","stairs"],["diaper","knickers","pants","underpants"],["pacifier","cradle","stroller","pushchair"],["restroom","basin","bathroom","shower"],["TV","radio","CD player","home cinema"],["candy","pie","cookie","cake"],["cotton candy","manege","funfair","toffee apple"],["popsicle","ice","sorbet","granita"],["molasses","fruit sugar","carbohydrate","ethanol"],["flashlight","light","beacon","front beam"],["cell phone","tablet","charger","headphone"],["garbage","bin","dump","tip"],["trash can","waste","litter","junkyard"],["soccer","grass","ad","grocery"],["field","farming","land","grassland"],["tie","picture","bow tie","shirt"],["uniform","suit","style","rescue squad"],["highway","main road","highspeed road","diversion"],["sidewalk","terrain","place","courtyard"],["crosswalk","bandwidth","panel","sign"],["pavement","terrain","place","courtyard"],["period","give way","no entry","exclamation point"],["zero","empty","naked","a special number"],["zip code","city code","adress code","transit code"],["detour","highway","give way","stop"],["overpass","tunnel","airplane","bird"],["parking lot","station wagon","train station","carshare parking"],["gas","ethanol","chemistry","oil rig"],["jackrabbit","pig","hedge","hairs"],["trainers","snack","trousers","pants"],["jumper","weather","cheek","wedding"],["waistcoat","skirt","jumper","coat"],["braces","cell","sir","speech"],["chips","mashed potatoes","potato chips","stew"],["biscuit","pretzel","turkey","cookie"],["crisps","chicken","toast","nuggets"],["peckish","suprious","giddy","guiltless"],["courgette","cucumber","brussels sprouts","eggplant"],["aubergine","lettuce","beetroot","capsicum"],["jacket potato","chips","french fries","beans"],["runner bean","swede","spinach","pea"],["flat","house","home","elevator"],["ground floor","first level","first step"],["first floor","floor one","first level","floor"],["underground","train","truck","ground"],["chemist’s","surgery","pharmacy","medical practice"],["phone box","phone table","phone store"],["queue","circle","lake","area"],["bonnet","village","pants","cap"],["boot","battery","muffler","wheel"],["windscreen","wheel","trunk","rearview mirror"],["takeaway","listen","take","hear"],["timetable","ordinary","timepast","usual"],["rubber","highlither","writer","ruler"],["post","mud","meal","ad"],["the Plough","Dog","The Winged Horse"],["holiday","direction","etablishment","hull"],["autumn","sail","boundary","flood"],["high street","secondary Street","bottom Street"],["lorry","van","bus","boat"],["estate car","train station","carshare parking","airport"],["lift","barracks","moving staircase","stairs"],["nappy","knickers","pants","underpants"],["dummy","cradle","stroller","pushchair"],["loo","basin","bathroom","shower"],["telly","CD player","home cinema"],["sweet","pie","cookie","cake"],["candy floss","manege","funfair","toffee apple"],["ice lolly","ice","sorbet","granita"],["treacle","sugar","carbohydrate","ethanol"],["torch","light","beacon","front beam"],["mobile phone","tablet","charger","headphone"],["rubbish","bin","dump","tip"],["bin","waste","litter","junkyard"],["football","grass","ad","grocery"],["pitch","farming","land","grassland"],["draw","picture","bow tie","shirt"],["kit","suit","style","rescue squad"],["motorway","main road","highspeed road","diversion"],["pavement","terrain","place","courtyard"],["zebra crossing","bandwidth","panel","sign"],["road surface","terrain","place","courtyard"],["full stop","no entry","exclamation point"],["nought","naked","a special number","zero"],["postal code","adress code","transit code"],["diversion","highway","give way","stop"],["flyover","tunnel","airplane","bird"],["car park","train station","carshare parking"],["petrol","ethanol","chemistry","oil rig"],["hare","pig","hedge","hairs"]];
var tab5_question = ["What mean the acronym VOD?","What mean the acronym ADSL?","What mean the acronym API?","What mean the acronym BSS?","What mean the acronym DRAM?","What mean the acronym HTTP?","What mean the acronym IMAP?","What mean the acronym CSS?","What mean the acronym LAN?","What mean the acronym PC?","What mean the acronym SSD?","What mean the acronym USB?","What mean the acronym VPN?","What mean the acronym WPA?","What mean the acronym WWW?","What mean the acronym URL?","What mean the acronym DOS?","What mean the acronym HTML?","What mean the acronym LED?","What mean the acronym VGA?","What mean the acronym HDMI?","What mean the acronym IBM?","What mean the acronym ROM?","What mean the acronym FLOPS?","What mean the acronym GPU?","What mean the acronym HD?","What mean the acronym SATA?","What mean the acronym UTF?","What mean the acronym CSV?","What mean the acronym AMD?","What mean the acronym ASCII?","What mean the acronym AVI?","What mean the acronym CD?","What mean the acronym GPS?","What mean the acronym UPC?"];
var tab5_reponse = [["Video On Demand","Vertical On-board Delivery","Verification Of Deposit","Venous Occlusive Disease"]["Asymetric Digital Subscriber Line","Acceptable dry statement of Liberty","Alliance of the Dirty Soldier of Louisiana","Adventure of Discount Safari in Liberia"],["Application Programming Interface","Ancestor of Pig's Intelligence","Age of the People on Internet","Activity Place Internal"],["Business Support System","Basic Storeof Steak","Battlefield of Safety Sex","Basket Society Separation"],["Dynamic Random Access Memory","Design of the Rooftop of Archeological Museum","Day of Real Academy Disturb","Demonstration Regard Accessibily of Respect"],["HyperText Trasnfer Protocol","HealThy Tomato Plate","Hard Technological Technique Protocol","Hard Tempory Twilight Protocol"],["Interactive Mail Access Protocol","Interim Moment of Alert Process","Interupt Malware of Application Process","Intelligent Mainframe Application Peripheral"],["Cascading Style Sheet","Computer Science Song","Cookie Spyware Style","Computer Social Share"],["Local Area Network","Link Advanced on Nature","Log in A Newspaper","Light of Admirable Night"],["Personal Computer","Pretty Cow","Particular Climate","Pleasant Code"],["Solid State Driver","Super Super Dry","Super Softare of Drawing","Streaming of Special Driver"],["Universal Serial Bus","Unknown Safe Bug","Upload Service of Browser","Ultra Small Boobs"],["Virtual Private Networtk","Very Personnal News","Vast Personnal Number","Virus of the Perfect Number"],["Wi-Fi Protected Access","World Processor Accesibilty","Website of Protested Art","Webcam of Psychedelic Alcohol"],["World Wide Web","Wild White Weather","Welcome Waterfall Web","Warm Wrong Word"],["Uniform Resource Locator","Union of the Referant Learner","Upload References of Lights","Uncle Raymond Lights"],["Disk Operating System","Download Output System","Discovery of an Outstanding Serie","Different Organic Aliment"],["HyperText Markup Language","Honda Tiger Mailling List","Hear The Music Live","High-temparature Materials Laboratory"],["Light Emitting Diode","Liquid Emitting Diode"," Licence Expiry Date","Local Employment Dynamics"],["Video Graphics Array","Video Game Awards","Venus Gravity Assist","Variable Gain Amplifier"],["High Definiton Multimedia Interface","Hacking Displays Made Interesting","Hacking Displays Made Interesting","High-Definition Multimedia Interconnect"],["International Business Machine","International Brotherhood of Magicians","Immigration and Border Management","Integration Bus Message"],["Read Only Memory","Regional Oxidant Model","Regional Offender Manager","Range Of Movement"],["Floating-Point Operations Per Second","FLigh OPerationS","FLight OPtimization System","Frontal Lobe Personality Scale"],["Graphics Processing Unit","Gas Power Unit","Gas Piston Upper","Green Power Unity"],["High Definition","Hard Disk","Heavy Duty","Home Defence"],["Serial Advanced Technology Attachment","Serial Advanced Technology Architetcure","Scholastic Abilities Test for Adults","South American Tourism Association"],["Unicode Trandformation Format","Unsuccessful Tenderers Fee","UnTranslated French","Undead Task Force"],["Comma-Separated Values","Community Service Volunteers","Circuit Switched Voice","Cash Surrender Value"],["Advanced Micro Devices","Acid Mine Drainage","Active Matrix Display","AMerican Dream"],["American Standard Code for International Interchange","Australian Standard Coding for Information Interchange","American Standard Code of Information Institute","American Standard Code for Information Interch-ange"],["Audio Video Interleaved","Automatic Vehocle Identification","Audio Visual Interleve","Analog Video Interface"],["Compact Disk","Circular Detetcion","Cool Down","Donstruction Document"],["Global Positioning System","Gallons Per Sack","Gear Position Sensor","General Practuce Strategy"],["Universal Product Code","Ultra Physical Contact","Urine Protein Creatinine","Uniform Plumbing Code"]];
var right_answer = 1;
var joueur = [-1,-1,-1,-1];
var creation_joueurs = document.getElementsByClassName("joueur");
var identifiant = ["score1","score2","score3","score4"];
var tab_image = [document.getElementById("img1"),document.getElementById("img2"),document.getElementById("img3"),document.getElementById("img4"),document.getElementById("img5"),document.getElementById("img6")]
var id1 = document.getElementById("score1").textContent;
var id2 = document.getElementById("score1").textContent;
var id3 = document.getElementById("score1").textContent;
var id4 = document.getElementById("score1").textContent;
var jesaispas = [document.getElementById("score1"),document.getElementById("score2"),document.getElementById("score3"),document.getElementById("score4")];
var question_en_cours = false;
var cest_parti = true;
console.log("La taille du tableau 5 est de "+tab5_question.length);
/*console.log(tab_question[0][0]);
document.getElementById("Titre").textContent = tab_question[0][0];
var essai = [0,1,2,3];
essai[0] = 11;
essai[4] = 12;
console.log(essai);
console.log(4 in essai);*/
var test = [-1,-1,-1,-1]
var w;
function Ouvrir() {
  w=window.open("essai.html","pop1","width=200,height=200");
}
function Fermer() {
  if (w.document) {  
    w.close(); 
  }
}

//verification();
function verification()
{
    for(let i=0;i<tab1_question.length;i++)
        document.write("Question : "+tab1_question[i]+" Réponse : "+tab1_reponse[i][0]+"<br>")
}

remplir_tableau();
function remplir_tableau()
{
    chiffre1 = alea(0,3);
    test[0]=chiffre1;
    chiffre2 = alea(0,3);
    while(chiffre1 == chiffre2)
        chiffre2 = alea(0,3);
    test[1] = chiffre2;
    chiffre3 = alea(0,3);
    while ((chiffre3 == chiffre2)||(chiffre3 == chiffre1))
        chiffre3 = alea(0,3);
    test[2] = chiffre3;
    if ((chiffre1 != 1)&&(chiffre2 != 1)&&(chiffre3 != 1))
        chiffre4 = 1;
    else if ((chiffre1 != 2)&&(chiffre2 != 2)&&(chiffre3 != 2))
        chiffre4 = 2;
    else if ((chiffre1 != 3)&&(chiffre2 != 3)&&(chiffre3 != 3))
        chiffre4 = 3;
    else
        chiffre4 = 0;
    test[3] = chiffre4;
    return test;
}

function nb_joueurs()
{
    var nb_jou = document.getElementById("mySelect").value;
    if (nb_jou == 1)
    {
        creer_joueur(1);
        nb_joueur = 1;
    }
    else if (nb_jou == 2)
    {
        creer_joueur(2);
        nb_joueur = 2;
    }
    else if (nb_jou == 3)
    {
        creer_joueur(3);
        nb_joueur = 3;
    }
    else if (nb_jou == 4)
    {
        creer_joueur(4);
        nb_joueur = 4;
    }
    else
        alert("Error");
}

function creer_joueur(n)
{
    document.getElementById("nb_joueur").style.display = "none";
    document.getElementById("pres").style.display = "";
    var joueurValide1 = document.getElementById("joueur1");
    joueurValide1.style.display = "";
    /*var score = document.getElementById("score1").textContent;
    score = Number.parseInt(scosco);
    score = 4;
    document.getElementById("score1").textContent = score;*/
    if (n>=2)
    {
        var joueurValide2 = document.getElementById("joueur2");
        joueurValide2.style.display = "";
    }
    if (n>=3)
    {
        var joueurValide3 = document.getElementById("joueur3");
        joueurValide3.style.display = "";
    }
    if (n>=4)
    {
        var joueurValide4 = document.getElementById("joueur4");
        joueurValide4.style.display = "";
    }
    /*for(var j=0;j<n;j++)
    {
        joueur[j]=0;
        var elt = document.createElement("p");
        var content = document.createTextNode("Joueur "+[j+1]+" Score "+compteur_j[j]);
        elt.appendChild(content);
        document.getElementById("tab_joueur").appendChild(elt);
        var creation_joueurs = document.getElementsByClassName("joueur");
        creation_joueurs[j].textContent = "Joueur "+[j+1]+" Score ";
        jesaispas[j].textContent = "0";
        console.log(jesaispas[j].style.display);
        console.log(jesaispas[j].textContent);
    }*/
}

var parti = document.getElementById("lets_go");
parti.addEventListener("click",pose_question);

function alea(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function pose_question()
{
    if(cest_parti == true)
    {
        chiffre = alea(1,7);
        if (chiffre == 6)
        {
            document.getElementById("de").style.display = "";
            tab_image[chiffre-1].style.display = "";
            document.getElementById("un").style.display = "";
            document.getElementById("deux").style.display = "";
            document.getElementById("trois").style.display = "";
            document.getElementById("quatre").style.display = "";
            document.getElementById("cinq").style.display = "";
        }
        else
        {
            document.getElementById("Show_me_question").style.display = "";
            cest_parti = false;
            question_en_cours = true;
            document.getElementById("de").style.display = "";
            var affiche_de = document.getElementById("de");
            //affiche_de.textContent = chiffre;
            tab_image[chiffre-1].style.display = "";
            document.getElementById("theme").style.display = "none";
            var theme = document.getElementsByClassName("theme");
            for(let i=0;i<theme.length;i++)
                theme[i].style.display = "none";
            document.getElementById("lets_go").style.display = "none";
            //affiche_question(chiffre);
        }
    }
}

function pose_question2()
{
    document.getElementById("Show_me_question").style.display = "";
    cest_parti = false;
    question_en_cours = true;
    document.getElementById("de").style.display = "";
    var affiche_de = document.getElementById("de");
    //affiche_de.textContent = chiffre;
    tab_image[chiffre-1].style.display = "";
    document.getElementById("theme").style.display = "none";
    var theme = document.getElementsByClassName("theme");
    for(let i=0;i<theme.length;i++)
        theme[i].style.display = "none";
    document.getElementById("lets_go").style.display = "none";
}

document.getElementById("un").addEventListener("click",un);
document.getElementById("deux").addEventListener("click",deux);
document.getElementById("trois").addEventListener("click",trois);
document.getElementById("quatre").addEventListener("click",quatre);
document.getElementById("cinq").addEventListener("click",cinq);

function un()
{
    document.getElementById("de").style.display = "";
    tab_image[chiffre-1].style.display = "none";
    chiffre = 1;
    ne_plus_afficher();
    pose_question2();
}

function deux()
{
    document.getElementById("de").style.display = "";
    tab_image[chiffre-1].style.display = "none";
    chiffre = 2;
    ne_plus_afficher();
    pose_question2();
}

function trois()
{
    document.getElementById("de").style.display = "";
    tab_image[chiffre-1].style.display = "none";
    chiffre = 3;
    ne_plus_afficher();
    pose_question2();
}

function quatre()
{
    document.getElementById("de").style.display = "";
    tab_image[chiffre-1].style.display = "none";
    chiffre = 4;
    ne_plus_afficher();
    pose_question2();
}

function cinq()
{
    document.getElementById("de").style.display = "";
    tab_image[chiffre-1].style.display = "none";
    chiffre = 5;
    ne_plus_afficher();
    pose_question2();
}

function ne_plus_afficher()
{
    document.getElementById("un").style.display = "none";
    document.getElementById("deux").style.display = "none";
    document.getElementById("trois").style.display = "none";
    document.getElementById("quatre").style.display = "none";
    document.getElementById("cinq").style.display = "none";
}

var showMe = document.getElementById("Show_me_question");
showMe.addEventListener("click",affiche_question);

function affiche_question()
{
    if (chiffre == 1)
    {
        console.log("Je suis le chiffre 1")
        document.getElementById("Show_me_question").style.display = "none";
        document.getElementById("question").style.display = "";
        document.getElementById("reponses").style.display = "none";
        document.getElementById("answer").style.display = "";
        document.getElementById("cash").style.display = "";
        document.getElementById("duo").style.display = "";
        document.getElementById("square").style.display = "";
        var taille = tab1_question.length;
        num_ques = alea(0,(taille)-1);
        var question = 0;
        console.log("Le numéro de la question est " + num_ques);
        document.getElementById("image2").src = tab1_question[num_ques];
        console.log(document.getElementById("image2").src);
        console.log(document.getElementById("image2").style.display);
        document.getElementById("image2").style.display = "";
        console.log(document.getElementById("image2").style.display);
        document.getElementById("answer").textContent = tab1_proposition[num_ques];
        console.log("Je suis à la fin du chiffre 1");
        /*var nouvelleImage = document.createElement("img");
        var att = document.createAttribute("src");
        att.value = "imagede";
        nouvelleImage.setAttributeNode("att");
        console.log(document.getElementsByTagName("img")[6]);
        document.getElementById("caseq").appendChild(nouvelleImage);*/
    }
    else
    {
        document.getElementById("Show_me_question").style.display = "none";
        document.getElementById("question").style.display = "";
        document.getElementById("reponses").style.display = "none";
        document.getElementById("answer").style.display = "";
        document.getElementById("cash").style.display = "";
        document.getElementById("duo").style.display = "";
        document.getElementById("square").style.display = "";
        var tab_question;
        var taille = 0;
        console.log("chiffre vaut "+chiffre);
        if (chiffre == 1)
        {
            tab_question = tab1_question;
            taille = tab1_question.length;
        }
        else if (chiffre == 2)
        {
            tab_question = tab2_question;
            taille = tab2_question.length;
        }
        else if (chiffre == 3)
        {
            tab_question = tab3_question;
            taille = tab3_question.length;
        }
        else if (chiffre == 4)
        {
            tab_question = tab4_question;
            taille = tab4_question.length;
        }
        else if (chiffre == 5)
        {
            tab_question = tab5_question;
            taille = tab5_question.length;
        }
        else if (chiffre == 6)
        {
            tab_question = tab6_question;
            taille = tab6_question.length;
        }
        console.log("La taille du tableau est "+taille);
        //var taille = tab_question.length;
        num_ques = alea(0,(taille)-1);
        var question = 0;
        console.log("Le numéro de la question est " + num_ques);
        question = tab_question[num_ques];
        document.getElementById("caseq").textContent = question;
        //affiche_reponses_square(chiffre, num_ques);
    }
}   

function affiche_reponses_square()
{
    console.log("En avant pour les réponses")
    document.getElementById("duo").style.display = "none";
    document.getElementById("cash").style.display = "none";
    document.getElementById("square").style.display = "none";
    document.getElementById("premiere_rep").style.visibility = "";
    document.getElementById("deuxieme_rep").style.visibility = "";
    document.getElementById("troisieme_rep").style.visibility = "";
    document.getElementById("quatrieme_rep").style.visibility = "";
    document.getElementById("premiere_rep").style.display = "";
    document.getElementById("deuxieme_rep").style.display = "";
    document.getElementById("troisieme_rep").style.display = "";
    document.getElementById("quatrieme_rep").style.display = "";
    document.getElementById("reponses").style.display = "";
    /*var tab = [0,1,2,3];
    chiffre_hasard1 = 0;
    chiffre_hasard2 = 1;
    chiffre_hasard3 = 2;
    chiffre_hasard4 = 3;
    console.log(tab);*/
    var tab_reponse;
    var ordre = remplir_tableau();
    console.log("ordre vaut "+ordre);
    var chiffre_hasard1 = ordre[0];
    var chiffre_hasard2 = ordre[1];
    var chiffre_hasard3 = ordre[2];
    var chiffre_hasard4 = ordre[3]; 
    if (chiffre_hasard1 == 0)
        right_answer = 1;
    else if (chiffre_hasard2 == 0)
        right_answer = 2;
    else if (chiffre_hasard3 == 0)
        right_answer = 3;
    else if (chiffre_hasard4 == 0)
        right_answer = 4;
    if (chiffre == 1)
        tab_reponse = tab1_reponse;
    else if (chiffre == 2)
        tab_reponse = tab2_reponse;
    else if (chiffre == 3)
        tab_reponse = tab3_reponse;
    else if (chiffre == 4)
        tab_reponse = tab4_reponse;
    else if (chiffre == 5)
        tab_reponse = tab5_reponse;
    else if (chiffre == 6)
        tab_reponse = tab6_reponse;
    console.log("Le chiffre_hasard4 vaut " + Number.parseInt(chiffre_hasard4));
    console.log("Le numéro de la question est "+num_ques);
    console.log("La quatrième réponse est "+tab_reponse[num_ques][chiffre_hasard4]);
    var un = tab_reponse[num_ques][chiffre_hasard1];
    var deux = tab_reponse[num_ques][chiffre_hasard2];
    var trois = tab_reponse[num_ques][chiffre_hasard3];
    var quatre = tab_reponse[num_ques][chiffre_hasard4];
    document.getElementById("premiere_rep").textContent = un;
    document.getElementById("deuxieme_rep").textContent = deux;
    document.getElementById("troisieme_rep").textContent = trois;
    document.getElementById("quatrieme_rep").textContent = quatre;
}

var premier = document.getElementById("premiere_rep");
premier.addEventListener("click",right_or_false1);
var deuxieme = document.getElementById("deuxieme_rep");
deuxieme.addEventListener("click",right_or_false2);
var troisieme = document.getElementById("troisieme_rep");
troisieme.addEventListener("click",right_or_false3);
var quatrieme = document.getElementById("quatrieme_rep");
quatrieme.addEventListener("click",right_or_false4);

function right_or_false1()
{
    if (question_en_cours == true)
    {
        question_en_cours = false;
        console.log(right_answer);
        var num_joueur = nb_tours%nb_joueur;
        console.log("Le nombre de joueur est "+nb_joueur)
        console.log("Le numéro du joueur est "+num_joueur);
        console.log("Le nombre de tour est "+nb_tours);
        if (right_answer == 1)
        {
            premier.style.background = "rgba(0,255,0,0.65)";
            if (num_joueur == 0)
            {
                var score = score1.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score1.textContent = score;
            }
            else if (num_joueur == 1)
            {
                var score = score2.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score2.textContent = score;
            }
            else if (num_joueur == 2)
            {
                var score = score3.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score3.textContent = score;
            }
            else if (num_joueur == 3)
            {
                var score = score4.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score4.textContent = score;
            }
        }
        else
        {
            premier.style.background = "rgba(255,0,0,0.65)";
            if (right_answer == 2)
                deuxieme.style.background = "rgba(0,255,0,0.65)";
            else if (right_answer == 3)
                troisieme.style.background = "rgba(0,255,0,0.65)";
            else if (right_answer == 4)
                quatrieme.style.background = "rgba(0,255,0,0.65)";
        }
    }
    document.getElementById("suivante").style.display = "";
    console.log("le display = " +document.getElementById("suivante").style.display);
}

function right_or_false2()
{
    if (question_en_cours == true)
    {
        question_en_cours = false;
        var num_joueur = nb_tours%nb_joueur;
        if (right_answer == 2)
        {
            deuxieme.style.background = "rgba(0,255,0,0.65)";
            if (num_joueur == 0)
            {
                var score = score1.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score1.textContent = score;
            }
            else if (num_joueur == 1)
            {
                var score = score2.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score2.textContent = score;
            }
            else if (num_joueur == 2)
            {
                var score = score3.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score3.textContent = score;
            }
            else if (num_joueur == 3)
            {
                var score = score4.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score4.textContent = score;
            }
        }
        else
        {
            deuxieme.style.background = "rgba(255,0,0,0.65)";
            if (right_answer == 1)
                premier.style.background = "rgba(0,255,0,0.65)";
            else if (right_answer == 3)
                troisieme.style.background = "rgba(0,255,0,0.65)";
            else if (right_answer == 4)
                quatrieme.style.background = "rgba(0,255,0,0.65)";
        }
    }
    document.getElementById("suivante").style.display = "";
    console.log("le display = " +document.getElementById("suivante").style.display);
}

function right_or_false3()
{
    if (question_en_cours == true)
    {
        question_en_cours = false;
        var num_joueur = nb_tours%nb_joueur;
        if (right_answer == 3)
        {
            troisieme.style.background = "rgba(0,255,0,0.65)";
            if (num_joueur == 0)
            {
                var score = score1.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score1.textContent = score;
            }
            else if (num_joueur == 1)
            {
                var score = score2.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score2.textContent = score;
            }
            else if (num_joueur == 2)
            {
                var score = score3.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score3.textContent = score;
            }
            else if (num_joueur == 3)
            {
                var score = score4.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score4.textContent = score;
            }
        }
        else
        {
            troisieme.style.background = "rgba(255,0,0,0.65)";
            if (right_answer == 1)
                premier.style.background = "rgba(0,255,0,0.65)";
            else if (right_answer == 2)
                deuxieme.style.background = "rgba(0,255,0,0.65)";
            else if (right_answer == 4)
                quatrieme.style.background = "rgba(0,255,0,0.65)";
        }
    }
    document.getElementById("suivante").style.display = "";
    console.log("le display = " +document.getElementById("suivante").style.display);
}

function right_or_false4()
{
    if (question_en_cours == true)
    {
        question_en_cours = false;
        var num_joueur = nb_tours%nb_joueur;
        if (right_answer == 4)
        {
            quatrieme.style.background = "rgba(0,255,0,0.65)";
            if (num_joueur == 0)
            {
                var score = score1.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score1.textContent = score;
            }
            else if (num_joueur == 1)
            {
                var score = score2.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score2.textContent = score;
            }
            else if (num_joueur == 2)
            {
                var score = score3.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score3.textContent = score;
            }
            else if (num_joueur == 3)
            {
                var score = score4.textContent;
                score = Number.parseInt(score);
                if (duo == true)
                    score+=1;
                else
                    score+=2;
                score4.textContent = score;
            }
        }
        else
        {
            quatrieme.style.background = "rgba(255,0,0,0.65)";
            if (right_answer == 1)
                premier.style.background = "rgba(0,255,0,0.65)";
            else if (right_answer == 3)
                troisieme.style.background = "rgba(0,255,0,0.65)";
            else if (right_answer == 2)
                deuxieme.style.background = "rgba(0,255,0,0.65)";
        }
    }
    document.getElementById("suivante").style.display = "";
    console.log("le display = " +document.getElementById("suivante").style.display);
}   

var suivante = document.getElementById("suivante");
suivante.addEventListener("click",question_suivante);

function question_suivante()
{
    document.getElementById("question").style.display = "none";
    document.getElementById("de").style.display = "none";
    document.getElementById("right_answer").style.display = "none";
    document.getElementById("validate2").style.display = "none";
    document.getElementById("rep_cash").style.display = "none";
    document.getElementById("rep_cash").style.backgroundColor = "";
    quatrieme.style.background = "";
    troisieme.style.background = "";
    deuxieme.style.background = "";
    premier.style.background = "";
    nb_tours++;
    cest_parti = true;
    for(let i=0;i<6;i++)
        tab_image[i].style.display = "none";
    document.getElementById("suivante").style.display = "none";
    document.getElementById("premiere_rep").style.visibility = "hidden";
    document.getElementById("deuxieme_rep").style.visibility = "hidden";
    document.getElementById("troisieme_rep").style.visibility = "hidden";
    document.getElementById("quatrieme_rep").style.visibility = "hidden";
    document.getElementById("premiere_rep").style.display = "none";
    document.getElementById("deuxieme_rep").style.display = "none";
    document.getElementById("troisieme_rep").style.display = "none";
    document.getElementById("quatrieme_rep").style.display = "none";
    document.getElementById("theme").style.display = "";
    var theme = document.getElementsByClassName("theme");
    for(let i=0;i<theme.length;i++)
        theme[i].style.display = "";
    document.getElementById("lets_go").style.display = "";
    document.getElementById("answer").textContent = "Answer the following question :";
    duo = false;
}

/*var rules = document.getElementById("rules");
rules.addEventListener("mouseover",need_help);*/

//function need_help

//fonction pour uniquement 2 réponses
var cash = document.getElementById("cash");
var duo = document.getElementById("duo");
var square = document.getElementById("square");
cash.addEventListener("click",affiche_reponses_cash);
duo.addEventListener("click",affiche_reponses_duo);
square.addEventListener("click",affiche_reponses_square);

function affiche_reponses_duo()
{
    duo = true;
    document.getElementById("premiere_rep").style.display = "";
    document.getElementById("deuxieme_rep").style.display = "";
    document.getElementById("duo").style.display = "none";
    document.getElementById("cash").style.display = "none";
    document.getElementById("square").style.display = "none";
    console.log("En avant pour les réponses");
    document.getElementById("premiere_rep").style.visibility = "";
    document.getElementById("deuxieme_rep").style.visibility = "";
    document.getElementById("reponses").style.display = "";
    var pos_right_answer = alea(0,1);
    var wrong_answer = alea(1,3);
    if (chiffre == 1)
        tab_reponse = tab1_reponse;
    else if (chiffre == 2)
        tab_reponse = tab2_reponse;
    else if (chiffre == 3)
        tab_reponse = tab3_reponse;
    else if (chiffre == 4)
        tab_reponse = tab4_reponse;
    else if (chiffre == 5)
        tab_reponse = tab5_reponse;
    else if (chiffre == 6)
        tab_reponse = tab6_reponse;
    if (pos_right_answer == 1)
        right_answer = 2;
    else if (pos_right_answer == 0)
        right_answer = 1
    if (pos_right_answer == 0)
    {
        document.getElementById("premiere_rep").textContent = tab_reponse[num_ques][0];
        document.getElementById("deuxieme_rep").textContent = tab_reponse[num_ques][wrong_answer];
    }
    else if (pos_right_answer == 1)
    {
        document.getElementById("premiere_rep").textContent = tab_reponse[num_ques][wrong_answer];
        document.getElementById("deuxieme_rep").textContent = tab_reponse[num_ques][0];
    }
}

function affiche_reponses_cash()
{
    document.getElementById("duo").style.display = "none";
    document.getElementById("cash").style.display = "none";
    document.getElementById("square").style.display = "none";
    if (chiffre == 1)
        tab_reponse = tab1_reponse;
    else if (chiffre == 2)
        tab_reponse = tab2_reponse;
    else if (chiffre == 3)
        tab_reponse = tab3_reponse;
    else if (chiffre == 4)
        tab_reponse = tab4_reponse;
    else if (chiffre == 5)
        tab_reponse = tab5_reponse;
    else if (chiffre == 6)
        tab_reponse = tab6_reponse;
    console.log(tab_reponse[num_ques][0]);
    document.getElementById("reponses").style.display = "";
    document.getElementById("rep_cash").style.display = "";
    document.getElementById("validate2").style.display = "";
}

document.getElementById("validate2").addEventListener("click",verifier_question);

function verifier_question()
{
    document.getElementById("validate2").style.display = "none";
    var num_joueur = nb_tours%nb_joueur;
    var champ = document.getElementById("rep_cash").value;
    console.log(champ);
    if (chiffre == 1)
        tab_reponse = tab1_reponse;
    else if (chiffre == 2)
        tab_reponse = tab2_reponse;
    else if (chiffre == 3)
        tab_reponse = tab3_reponse;
    else if (chiffre == 4)
        tab_reponse = tab4_reponse;
    else if (chiffre == 5)
        tab_reponse = tab5_reponse;
    else if (chiffre == 6)
        tab_reponse = tab6_reponse;
    if (champ.toLowerCase() == tab_reponse[num_ques][0].toLowerCase())
    {
        document.getElementById("rep_cash").style.background = "rgba(0,255,0,0.65)";
        if (num_joueur == 0)
            {
                var score = score1.textContent;
                score = Number.parseInt(score);
                score+=4;
                score1.textContent = score;
            }
            else if (num_joueur == 1)
            {
                var score = score2.textContent;
                score = Number.parseInt(score);
                score+=4;
                score2.textContent = score;
            }
            else if (num_joueur == 2)
            {
                var score = score3.textContent;
                score = Number.parseInt(score);
                score+=4;
                score3.textContent = score;
            }
            else if (num_joueur == 3)
            {
                var score = score4.textContent;
                score = Number.parseInt(score);
                score+=4;
                score4.textContent = score;
            }
    }
    else
    {
        document.getElementById("rep_cash").style.background = "rgba(255,0,0,0.65)";
        document.getElementById("right_answer").style.display = "";
        document.getElementById("right_answer").textContent = tab_reponse[num_ques][0];
    }
    document.getElementById("suivante").style.display = "";
}

function PopupCentrer(page, largeur, hauteur, options) {
    var top=(screen.height-hauteur)/2;
    var left=(screen.width-largeur)/2;
    window.open(page,"","top="+top+",left="+left+",width="+largeur+",height="+hauteur+","+options);
  }
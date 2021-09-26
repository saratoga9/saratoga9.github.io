(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~features-announcements-announcements-module~features-cheat-sheet-cheat-sheet-module~features~36533566"],{

/***/ "3pPQ":
/*!*****************************************!*\
  !*** ./apps/web/src/app/shared/data.ts ***!
  \*****************************************/
/*! exports provided: DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
const DATA = {};
//This is for the announcement section
DATA.announcements = [
    {
        title: 'Utah County Emergency Rental Assistance Program',
        //date: new Date(2021, 1, 4).toUTCString(),
        description: 'The Utah County Commission has reached out to make everyone aware of the Utah County Emergency Rental Assistance Programs. Our County has been allocated funds ' +
            'from the federal government specifically to assist individuals and families who are struggling to pay their rent and utilities. Information for this program and a link' +
            'to apply can be found at <a class="btn btn-sm btn-info font-size-14 text-capitalize" href="https://https://rentrelief.utah.gov" target="_blank">rentrelief.utah.gov</a> ' +
            '<br />Application assistance can be found by contacting the Community Action Services at <b>(801)373-8200</b> or by walking in at the following address: ' +
            '<a href="https://goo.gl/maps/Q1sLyYcY6eh9J16m7" target="_blank"><b>815 S Freedom Blvd #100, Provo, UT 84601</b></a>',
    },
    {
        title: 'Protecting Children and Youth Training',
        //date: new Date(2021, 1, 4).toUTCString(),
        description: 'All leaders and teachers of children or youth are to complete this training within one month of being called. We also invite the parents to do the same.' +
            ' To take the training, <a class="btn btn-sm btn-info font-size-14 text-capitalize" href="https://www.churchofjesuschrist.org/callings/church-safety-and-health/protecting-children-and-youth?lang=eng&cid=rdb_v_protectingchildren" target="_blank">Click Here!</a> ',
    },
    {
        title: 'FAST SUNDAY',
        date: new Date(2021, 8, 26).toUTCString(),
        description: '' +
            '<br /> 6:00pm | Emotional Resilience Class' +
            '<br />Saratoga Springs 9th Chapel, <a href="https://goo.gl/maps/3GGjqSoP4KDLErPKA" target="_blank">220 W, 200 S, Lehi</a>',
    },
    {
        title: '8:00am - Utah Food Bank Delivery',
        date: new Date(2021, 8, 30).toUTCString(),
        description: 'Saratoga Spring 12 Branch Parking Lot, ' +
            '<a href="https://goo.gl/maps/GCA2rMwdfKwQbxZu5" target="_blank">1149 North 300 West Lehi UT 84043</a>, ' +
            '8:00am. If you like to volunteer, be there 7:00am. High Councilor Brother Brigham Johnson Will Provide ' +
            'Instructions.<br /><br />' +
            '<b>5:00pm-8:00pm | Stake Primary "Come Follow Me" Carnival </b><br />' +
            'Lehi YSA Stake Building,<a href="https://goo.gl/maps/pgs9DRn6sPpSEpcX9" target="_blank">1550 South 1100 West, Lehi</a><br /><br />' +
            '<b>7:00pm - YSA Institute</b>' +
            '<br />Stake Office,' +
            ' <a href="https://goo.gl/maps/7P6XidTpcAGkFcAFA" target="_blank">680 E Cedar Hollow Road, Lehi</a><br /><br />',
    },
    {
        title: '10:00am | 2:00pm | 6:00pm MDT - General Conference',
        date: new Date(2021, 9, 2).toUTCString(),
        description: 'Ways to Watch or Listen to General Conference Live <a class="btn btn-sm btn-info font-size-14 text-capitalize" href="https://www.churchofjesuschrist.org/learn/ways-to-watch-general-conference?lang=eng" target="_blank">click here!</a>',
    },
    {
        title: '10:00am | 2:00pm MDT - General Conference',
        date: new Date(2021, 9, 3).toUTCString(),
        description: 'Ways to Watch or Listen to General Conference Live <a class="btn btn-sm btn-info font-size-14 text-capitalize" href="https://www.churchofjesuschrist.org/learn/ways-to-watch-general-conference?lang=eng" target="_blank">click here!</a>',
    },
    {
        title: 'Ward Primary Sacrament Program',
        date: new Date(2021, 10, 14).toUTCString(),
        description: 'More info will follow from the Primary organization. Stay tuned!',
    },
];
DATA.broadcastLinks = [
    // ---------------------------------------------------------------------
    // Sacrament
    // ---------------------------------------------------------------------
    {
        active: false,
        label: 'Sunday 9:00am - Ward Youth Council Meeting',
        link: 'https://us02web.zoom.us/j/81274737972?pwd=SkdqUGtaRDFjN0MxYnpsVHBHRUV5UT09',
        passcode: '884917',
        meetingId: '812 7473 7972',
    },
    {
        //active means will show on site
        active: false,
        label: 'Sunday 10:00am - 2nd/4th Sunday Primary Singing Time',
        link: 'https://us02web.zoom.us/j/89005274966?pwd=dEZMcnd3NFZBaDBiRlJJbVRPdCtjZz09',
        passcode: '927525',
        meetingId: '890 0527 4966',
    },
    {
        active: false,
        label: 'Sunday 12:00noon - Sacrament Meeting',
        link: 'https://us02web.zoom.us/j/83961021451?pwd=SVdNL2xpWDc0VXdGaDBRekswb2hlUT09',
        passcode: '531783',
        meetingId: '839 6102 1451',
    },
    // ---------------------------------------------------------------------
    // Sunday School
    // ---------------------------------------------------------------------
    {
        active: false,
        label: 'Sunday 2:00pm - Sunday School Gospel Doctrine (English)',
        link: 'https://us02web.zoom.us/j/81428954869?pwd=NkNoTVViTHEzK3dXdWxWVzArVWo0UT09',
        passcode: '019419',
        meetingId: '814 2895 4869',
    },
    {
        active: false,
        label: 'Sunday 2:00pm - Sunday School Gospel Doctrine (Tongan)',
        link: 'https://us02web.zoom.us/j/81428954869?pwd=NkNoTVViTHEzK3dXdWxWVzArVWo0UT09',
        passcode: '019419',
        meetingId: '814 2895 4869',
    },
    {
        active: false,
        label: 'Sunday 2:00pm - Sunday School - Youth Class (12-14)',
        link: 'https://us02web.zoom.us/j/81428954869?pwd=NkNoTVViTHEzK3dXdWxWVzArVWo0UT09',
        passcode: '019419',
        meetingId: '814 2895 4869',
    },
    {
        active: false,
        label: 'Sunday 2:00pm - Sunday School - Youth Class (15-18)',
        link: 'https://us02web.zoom.us/j/81428954869?pwd=NkNoTVViTHEzK3dXdWxWVzArVWo0UT09',
        passcode: '019419',
        meetingId: '814 2895 4869',
    },
    {
        active: false,
        label: 'Sunday 2:30pm - Sunday School - Teacher Council Meeting (Primary/EQ/RS/YW teachers)',
        link: '',
        passcode: '',
        meetingId: '',
    },
    // ---------------------------------------------------------------------
    // 2nd Hour Org Class
    // ---------------------------------------------------------------------
    // {
    // active: false,
    // label: 'Sunday 2:00pm - 5th Sunday Combined Class',
    // link:
    //   'https://us02web.zoom.us/j/81019714798',
    //passcode: '',
    //meetingId: '839 0304 6539',
    //},
    {
        active: false,
        label: 'Sunday 2:00pm - Elders Quorum',
        link: 'https://us02web.zoom.us/j/88381408577?pwd=ZEdIbFhIMVI4VFVZVGgzcVpzY1J1UT09',
        passcode: '381721',
        meetingId: '883 8140 8577',
    },
    {
        active: false,
        label: 'Sunday 2:00pm - Elders Quorum (Tongan)',
        link: 'https://us02web.zoom.us/j/88381408577?pwd=ZEdIbFhIMVI4VFVZVGgzcVpzY1J1UT09',
        passcode: '381721',
        meetingId: '883 8140 8577',
    },
    {
        active: false,
        label: 'Sunday 2:00pm - Relief Society',
        link: 'https://us02web.zoom.us/j/88381408577?pwd=ZEdIbFhIMVI4VFVZVGgzcVpzY1J1UT09',
        passcode: '381721',
        meetingId: '883 8140 8577',
    },
    {
        active: false,
        label: 'Sunday 2:00pm - Relief Society (Tongan)',
        link: 'https://us02web.zoom.us/j/88381408577?pwd=ZEdIbFhIMVI4VFVZVGgzcVpzY1J1UT09',
        passcode: '381721',
        meetingId: '883 8140 8577',
    },
    {
        active: false,
        label: 'Sunday 2:00pm - Young Women Class',
        link: 'https://us02web.zoom.us/j/88381408577?pwd=ZEdIbFhIMVI4VFVZVGgzcVpzY1J1UT09',
        passcode: '381721',
        meetingId: '883 8140 8577',
    },
    {
        active: false,
        label: 'Sunday 2:00pm - Young Men Class',
        link: 'https://us02web.zoom.us/j/88381408577?pwd=ZEdIbFhIMVI4VFVZVGgzcVpzY1J1UT09',
        passcode: '381721',
        meetingId: '883 8140 8577',
    },
    {
        active: false,
        label: 'Sunday 6:30pm - Great to be 8 | Primary Baptism Preview',
        link: 'https://us02web.zoom.us/j/82801962455?pwd=TXZIYkRmSGkwemRzdzh0QS9QR1FOZz09',
        passcode: '876390',
        meetingId: '828 0196 2455',
    },
    {
        active: false,
        label: 'Saturday 4:00pm - Leadership Training Meeting',
        link: 'https://us02web.zoom.us/j/85061001578?pwd=aGhVYkVNSkxLaUROMGtmdlpGWE5sdz09',
        passcode: 'OU2Stake',
        meetingId: '850 6100 1578',
    },
    {
        active: false,
        label: 'Sunday 6:00pm - Seminary Graduation - (Event Code: 45296)',
        link: 'http://mywebcast.churchofjesuschrist.org/oremutah2ndstake',
        passcode: '45296',
    },
];
DATA.people = {
    memberOfBishopric: { name: 'Member of Bishopric' },
    chorister1: { name: 'Sister Manu Harris' },
    chorister2: { name: 'Sister Salome Pita' },
    organist1: { name: 'Sister Keili Malohifoʻou' },
    organist2: { name: 'Sister Manu Harris' },
    tbd: { name: 'TBD' },
    pray1: { name: 'Brother Manase Tonga' },
    pray2: { name: 'Sister Kailey Uluilakepa' },
    hc: { name: 'Brother Vakameilalo Tuʻifua' },
    bp1stc: { name: 'Brother Salesi Sika' },
    bp2ndc: { name: 'Brother Jackson Kaka' },
    wc: { name: 'Brother Adam Chase' },
    bp: { name: 'Bishop Wayne Tarawhiti' },
    stkpres: { name: 'President Richard Paongo' },
    premusic: { name: 'TBD' },
};
DATA.addresses = {
    chapel: {
        reference: '220 W 200 S, Lehi, UT 84043',
        link: 'https://goo.gl/maps/UCX6H9QWRjoZPNTt9',
    },
};
DATA.hymns = {
    tbd: {
        title: 'To Be Determined',
        page: 0,
        link: 'null',
    },
    2: {
        title: 'Ko e Laumālie ʻo e ʻOtuá',
        page: 2,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/the-spirit-of-god?lang=ton',
    },
    3: {
        title: 'Now Let Us Rejoice',
        page: 3,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/now-let-us-rejoice?lang=eng',
    },
    4: {
        title: 'Vakai ʻe Kāinga',
        page: 4,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/high-on-the-mountain-top?lang=ton',
    },
    5: {
        title: 'High on the Mountain Top',
        page: 6,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/high-on-the-mountain-top?lang=eng',
    },
    6: {
        title: 'Redeemer of Israel',
        page: 6,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/redeemer-of-israel?lang=eng',
    },
    7: {
        title: 'Israel, Israel, God Is Calling',
        page: 7,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/israel-israel-god-is-calling?lang=eng',
    },
    10: {
        title: 'Fakamālō ki he ʻOtua',
        page: 10,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/we-thank-thee-o-god-for-a-prophet?lang=ton',
    },
    15: {
        title: 'Ko Sīsū ko e Maka-tuliki',
        page: 15,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/merrily-merrily-over-the-sea?lang=eng&clang=ton',
    },
    18: {
        title: 'Haʻu Kāinga ʻOua Manavahē',
        page: 18,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/come-come-ye-saints?lang=ton',
    },
    19: {
        title: 'We Thank Thee, O God, for a Prophet',
        page: 19,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/we-thank-thee-o-god-for-a-prophet?lang=eng',
    },
    21: {
        title: 'Come Listen to a Prophetʻs Voice',
        page: 21,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/come-listen-to-a-prophets-voice?lang=eng',
    },
    22: {
        title: 'ʻE Saione ʻi ʻOlunga',
        page: 22,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/beautiful-zion-built-above?lang=ton',
    },
    25: {
        title: 'Siʻoku Kāinga ke Mou Tokanga',
        page: 25,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/take-heed-ye-saints?lang=ton',
    },
    //27: {
    //    title: 'Folofola Mai ʻa Sīsū',
    //    page: 27,
    //    link:
    //      'https://www.churchofjesuschrist.org/study/manual/hymns/thus-sayeth-the-lord?lang=ton',
    //  },
    27: {
        title: 'Praise to the Man',
        page: 27,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/praise-to-the-man?lang=eng',
    },
    30: {
        title: 'Come Come Ye Saints',
        page: 30,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/come-come-ye-saints?lang=eng',
    },
    48: {
        title: '‘Oku Ou Fie Ma’u Koe',
        page: 48,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/i-need-thee-every-hour?lang=ton',
    },
    57: {
        title: 'Muimui ‘Iate Au',
        page: 57,
        link: 'https://www.churchofjesuschrist.org/music/text/hymns/come-follow-me?lang=ton',
    },
    //58: {
    //title: 'Come, Ye Children of the Lord',
    //page: 58,
    //link:
    //'https://www.churchofjesuschrist.org/music/library/hymns/come-ye-children-of-the-lord?lang=eng',
    //},
    58: {
        title: 'Ka Faingataʻa Ho Hala Feinga',
        page: 58,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/if-the-way-be-full-of-trial?lang=ton',
    },
    62: {
        title: 'All Creatures of Our God and King',
        page: 62,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/all-creatures-of-our-god-and-king?lang=eng',
    },
    66: {
        title: 'Rejoice, the Lord Is King!',
        page: 66,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/rejoice-the-lord-is-king?lang=eng',
    },
    81: {
        title: 'Press Forward Saints',
        page: 81,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/press-forward-saints?lang=eng',
    },
    83: {
        title: 'Guide Us, O Thou Great Jehovah',
        page: 83,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/guide-us-o-thou-great-jehovah?lang=eng',
    },
    85: {
        title: 'How Firm a Foundation',
        page: 85,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/how-firm-a-foundation?lang=eng',
    },
    90: {
        title: 'Sīsū Homau Huhuʻi',
        page: 90,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/in-humility-our-savior?lang=eng&clang=ton',
    },
    91: {
        title: 'ʻOtua Tali ʻEmau Hū',
        page: 91,
        link: 'https://www.churchofjesuschrist.org/music/text/hymns/god-our-father-hear-us-pray?lang=ton',
    },
    92: {
        title: 'Ne Fai pē mei Kālevale',
        page: 92,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/take-the-name-of-jesus-with-you?lang=ton',
    },
    96: {
        title: 'Fakaʻofa Kiate Au',
        page: 96,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/he-who-was-crucified?lang=ton',
    },
    97: {
        title: 'Tau Fakamālō Kia Sīsū',
        page: 97,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/well-sing-all-hail-to-jesus-name?lang=ton',
    },
    98: {
        title: 'I Need Thee Every Hour',
        page: 98,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/i-need-thee-every-hour?lang=eng',
    },
    107: {
        title: 'Sīsū ē Ne ʻAloʻi',
        page: 107,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/jesus-once-of-humble-birth?lang=por&clang=ton',
    },
    116: {
        title: 'Come, Follow Me',
        page: 116,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/come-follow-me?lang=eng',
    },
    129: {
        title: 'Where Can I Turn for Peace?',
        page: 129,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/where-can-i-turn-for-peace?lang=eng',
    },
    136: {
        title: 'I Know That My Redeemer Lives',
        page: 136,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/i-know-that-my-redeemer-lives?lang=eng',
    },
    139: {
        title: 'Lau ʻEni ko e Tofiʻa',
        page: 139,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/this-your-inheritance?lang=ton',
    },
    142: {
        title: 'Sweet Hour of Prayer',
        page: 142,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/sweet-hour-of-prayer?lang=eng',
    },
    140: {
        title: 'Did You Think to Pray?',
        page: 140,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/did-you-think-to-pray?lang=eng',
    },
    143: {
        title: 'Let the Holy Spirit Guide',
        page: 143,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/let-the-holy-spirit-guide?lang=eng',
    },
    145: {
        title: 'Faitotonu Neongo ʻa e Luma',
        page: 145,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/do-what-is-right?lang=ton',
    },
    152: {
        title: 'God Be with You Till We Meet Again',
        page: 152,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/god-be-with-you-till-we-meet-again?lang=eng',
    },
    160: {
        title: 'Sīsū ne Ne Huhuʻi',
        page: 160,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/o-thou-rock-of-our-salvation?lang=ton',
    },
    169: {
        title: 'As Now We Take the Sacrament',
        page: 169,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/as-now-we-take-the-sacrament?lang=eng',
    },
    170: {
        title: 'God, Our Father, Hear Us Pray',
        page: 170,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/god-our-father-hear-us-pray?lang=eng',
    },
    171: {
        title: 'With Humble Heart',
        page: 171,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/with-humble-heart?lang=eng',
    },
    172: {
        title: 'We’ll Bring the World His Truth',
        page: 172,
        link: 'https://www.churchofjesuschrist.org/music/library/childrens-songbook/well-bring-the-world-his-truth-army-of-helaman?lang=eng',
    },
    173: {
        title: 'Fetaulaki Fiefia',
        page: 173,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/gladly-meeting?lang=ton',
    },
    174: {
        title: 'While of These Emblems We Partake',
        page: 174,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/while-of-these-emblems-we-partake-aeolian?lang=eng',
    },
    178: {
        title: 'O Lord of Hosts',
        page: 178,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/o-lord-of-hosts?lang=eng',
    },
    180: {
        title: 'Father in Heaven, We Do Believe',
        page: 180,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/father-in-heaven-we-do-believe?lang=eng',
    },
    181: {
        title: 'Jesus of Nazareth, Savior and King',
        page: 181,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/jesus-of-nazareth-savior-and-king?lang=eng',
    },
    182: {
        title: 'We’ll Sing All Hail to Jesus’ Name',
        page: 182,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/well-sing-all-hail-to-jesus-name?lang=eng',
    },
    184: {
        title: 'Upon the Cross of Calvary',
        page: 184,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/upon-the-cross-of-calvary?lang=eng',
    },
    //184: {
    //title: 'Fakahā ʻe he ʻOtua',
    //page: 184,
    //link:
    //'https://www.churchofjesuschrist.org/study/manual/hymns/god-is-willing-to-gather?lang=ton',
    //},
    187: {
        title: 'God Loved Us, So He Sent His Son',
        page: 187,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/god-loved-us-so-he-sent-his-son?lang=eng',
    },
    // 187: {
    // title: 'Ofa ʻi ʻApi [Love at Home]',
    //page: 187,
    //link:
    //  'https://www.churchofjesuschrist.org/study/manual/hymns/love-at-home?lang=ton',
    //},
    190: {
        title: 'In Memory of the Crucified',
        page: 190,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/in-memory-of-the-crucified?lang=eng',
    },
    192: {
        title: 'He Died! The Great Redeemer Died',
        page: 192,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/he-died-the-great-redeemer-died?lang=eng',
    },
    193: {
        title: 'I Stand All Amazed',
        page: 193,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/i-stand-all-amazed?lang=eng',
    },
    //193: {
    //title: 'Fanau ae ‘a e ‘Otua (I am a child of God)',
    //page: 193,
    //link:
    //'https://www.churchofjesuschrist.org/study/manual/hymns/i-am-a-child-of-god?lang=ton',
    //},
    194: {
        title: 'There Is a Green Hill Far Away',
        page: 194,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/there-is-a-green-hill-far-away?lang=eng',
    },
    195: {
        title: 'How Great the Wisdom and the Love',
        page: 195,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/how-great-the-wisdom-and-the-love?lang=eng',
    },
    //196: {
    //title: 'Jesus, Once of Humble Birth',
    //page: 196,
    //link:
    //'https://www.churchofjesuschrist.org/music/library/hymns/jesus-once-of-humble-birth?lang=eng',
    //},
    196: {
        title: 'Akoʻi Au ke U ʻEva he Māmá',
        page: 196,
        link: 'https://www.churchofjesuschrist.org/music/text/hymns/teach-me-to-walk-in-the-light?lang=ton',
    },
    199: {
        title: 'He Is Risen!',
        page: 199,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/he-is-risen?lang=eng',
    },
    200: {
        title: 'Ke Mou Feʻofaʻaki',
        page: 200,
        link: 'https://www.churchofjesuschrist.org/music/text/hymns/love-one-another?lang=ton',
    },
    201: {
        title: 'Joy to the World',
        page: 201,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/joy-to-the-world?lang=eng',
    },
    204: {
        title: 'Silent Night',
        page: 204,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/silent-night?lang=eng',
    },
    209: {
        title: 'Hark! The Herald Angels Sing',
        page: 209,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/hark-the-herald-angels-sing?lang=eng',
    },
    //219: {
    //title: 'Because I Have Been Given Much',
    //page: 219,
    //link:
    //'https://lyricstranslate.com/en/mormon-hymns-because-i-have-been-given-much-lyrics.html',
    //},
    220: {
        title: 'Lord, I Would Follow Thee',
        page: 220,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/lord-i-would-follow-thee?lang=eng',
    },
    227: {
        title: 'There Is Sunshine in My Soul Today',
        page: 227,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/there-is-sunshine-in-my-soul-today?lang=eng',
    },
    239: {
        title: 'Choose the Right',
        page: 239,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/choose-the-right?lang=eng',
    },
    241: {
        title: 'Count Your Blessings',
        page: 241,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/count-your-blessings?lang=eng',
    },
    256: {
        title: 'As Zion’s Youth in Latter Days',
        page: 256,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/as-zions-youth-in-latter-days?lang=eng',
    },
    259: {
        title: 'Hope of Israel',
        page: 259,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/hope-of-israel?lang=eng',
    },
    264: {
        title: 'Hark All Ye Nations',
        page: 264,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/hark-all-ye-nations?lang=eng',
    },
    270: {
        title: 'I’ll Go Where You Want Me to Go',
        page: 270,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/ill-go-where-you-want-me-to-go?lang=eng',
    },
    286: {
        title: 'Oh, What Songs of the Heart',
        page: 286,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/oh-what-songs-of-the-heart?lang=eng',
    },
    293: {
        title: 'Each Life That Touches Ours for Good',
        page: 293,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/each-life-that-touches-ours-for-good?lang=eng',
    },
    294: {
        title: 'Love at Home',
        page: 294,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/love-at-home?lang=eng',
    },
    302: {
        title: 'I Know My Father Lives',
        page: 302,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/i-know-my-father-lives?lang=eng',
    },
    304: {
        title: 'Teach Me to Walk in the Light',
        page: 304,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/teach-me-to-walk-in-the-light?lang=eng',
    },
    308: {
        title: 'Love One Another',
        page: 308,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/love-one-another?lang=eng',
    },
    338: {
        title: 'America the Beautiful',
        page: 338,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/america-the-beautiful?lang=eng',
    },
    339: {
        title: 'My Country, ’Tis of Thee',
        page: 339,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/my-country-tis-of-thee?lang=eng',
    },
};
DATA.releases = [
    {
        name: 'Brother Isi Kaufusi',
        calling: 'Sunday School Teacher',
    },
];
DATA.sustaining = [
    {
        name: 'Sister Jelaire Fitzgerald',
        calling: 'RS Teacher',
    },
    {
        name: 'Sister Lindy Tonga',
        calling: 'RS Activity Assitant Coordinator',
    },
    {
        name: 'Sister Jane Chase',
        calling: 'RS Ministering Secretary',
    },
    {
        name: 'Sister Salome Pita',
        calling: 'YW Adviser',
    },
    {
        name: 'Sister Kristy Sorenson',
        calling: 'YW Activity Specialist',
    },
    {
        name: 'Brother Isi Kaufusi',
        calling: 'Primary Teacher',
    },
];
DATA.aaronicPriesthoodAdvancements = [];
DATA.newMembers = [
// { name: 'Moe Fanene' },
// { name: 'Piripi Fitzgerald' },
// { name: 'Isabel Yoshiko Lisia Uyema' },
// { name: 'Seamus Hone Iosepa Fitzgerald' },
// { name: 'Te Kiato Fitzgerald' },
// { name: 'Poutu Fitzgerald' },
];
DATA.baptisms = [
//{ name: 'Joseph Prasad Jr.' },
//{ name: 'Sosiua Hola' },
//{ name: 'Owen Martin' },
];
DATA.babyBlessing = [
//{ name: 'Penni Lynn Tonga' },
];
DATA.missionaries = [
    // {
    //   name: 'Jarom Brown',
    //   mission: 'Arizona Tempe',
    //   startDate: new Date(2019, 8, 25),
    //   endDate: new Date(2021, 7, 26),
    //   photoUrl: './assets/people/jarom-brown.png',
    // },
    {
        name: 'Peni Mounga',
        mission: 'New Jersey Morristown / Church-Service Mission',
        startDate: new Date(2019, 11, 18),
        endDate: new Date(2022, 0, 4),
        photoUrl: './assets/people/peni-mounga.png',
    },
    {
        name: 'Naomi Pulu',
        mission: 'Minnesota Minneapolis',
        startDate: new Date(2021, 2, 10),
        endDate: new Date(2022, 8, 28),
        photoUrl: './assets/people/SisterPulu.jpg',
    },
];
//THIS IS THE TEMPLATE OF THE SACRAMENT PROGRAM WHICH ALSO GOES TO THE CHEAT SHEET.
//UPDATE THE FOLLOWING: date, conducting, chorister, organist, invocation & benediction, hymns, speakers/testimonies
//NOTE: If it's a FAST SUNDAY, change the "testimonySunday" section to "true"
//NOTE:
DATA.cheatSheet = {
    zoomSession: true,
    sacrament: {
        id: 1,
        date: new Date(2021, 8, 26),
        startTime: '12:00 PM',
        endTime: '1:00 PM',
        address: DATA.addresses.chapel,
        presiding: DATA.people.bp,
        conducting: DATA.people.bp2ndc,
        chorister: DATA.people.chorister1,
        organist: DATA.people.organist1,
        invocation: DATA.people.tbd,
        openingSong: DATA.hymns[27],
        sacramentSong: DATA.hymns[194],
        testimonySunday: true,
        speakers: [
            {
                person: { name: 'Brother Maika Tuʻifua (Testimony)' },
                role: 'testimony',
                index: 1,
                beforeRestHymn: true,
            },
            {
                person: { name: 'Brother Manoa Tuʻifua (Testimony)' },
                role: 'testimony',
                index: 1,
                beforeRestHymn: true,
            },
            {
                person: { name: 'Brother Jacob Tuʻifua (Musical Number)' },
                role: 'musical',
                index: 1,
                beforeRestHymn: true,
            },
            {
                person: { name: 'Sister Brooke Tuʻifua' },
                role: 'speaker',
                index: 1,
                beforeRestHymn: true,
            },
            // {
            //   person: { name: 'Sister Celeste Detoles' },
            //   role: 'testimony',
            //   index: 1,
            //   beforeRestHymn: true,
            // } as Speaker,
            {
                person: { name: 'Toki Family - Musical NUmber' },
                role: 'musical',
                index: 1,
                beforeRestHymn: true,
            },
            {
                person: { name: 'Brother Vakameilalo Tuʻifua' },
                role: 'speaker',
                index: 1,
                beforeRestHymn: true,
            },
        ],
        // closingSong: DATA.hymns[129],
        benediction: DATA.people.tbd,
    },
    stakeVisitors: [],
    stakeBusinessAssignment: DATA.people.hc,
    announcements: DATA.announcements,
    releases: DATA.releases,
    sustaining: DATA.sustaining,
    newMembers: DATA.newMembers,
    babyBlessing: DATA.babyBlessing,
    aaronicPriesthoodAdvancements: DATA.aaronicPriesthoodAdvancements,
    baptisms: DATA.baptisms,
};


/***/ })

}]);
//# sourceMappingURL=default~features-announcements-announcements-module~features-cheat-sheet-cheat-sheet-module~features~36533566.js.map
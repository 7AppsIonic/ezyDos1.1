define([
  'app'
], function (app) {
  'use strict';

  app.service('dataService', [
    function () {
      this.events = [{
        id: 1,
        name: 'TH Travel & Tours',
        city: 'Kuala-lumpur, Malaysia',
        district: 'Jalan Tun Razak',
        street: '153, Menara TH Selborn,',
        number: '| +60 3-2681 2020(Office)',
        zip: '45700',
        lat: 3.1686241,
        lng: 101.6417865,
        dates: [
          'Monday: 8:30 AM / 5:30 PM',
          'Sunday: CLOSE'
        ],
        contact: {
          tel: '+60 3-2681 2020',
          email: 'info@thts.com.my'
        },
        website: 'http://thts.com.my'
      }, {
        id: 2,
        name: 'Batuta Travel & Tours',
        city: 'Tingkat 1, Lot 903 & 904 ',
        district: 'W. Persekutuan, Malaysia',
        street: 'Bangunan PKDK',
        number: '+609-7442652',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM / 6:30 PM',
          'Sunday: CLOSE'
        ],
        lat: 6.126998,
        lng: 102.238511,
        wheelchairLift: true,
        contact: {
          tel: '+60 3-2681 2020',
          email: 'info@batutatravel.com.my'
        },
        website: 'http://batutatravel.com.my'
      }, {
        id: 3,
        name: 'Andalusia Travel & Services',
        city: '29, Jalan 1/76c',
        district: ' Wilayah Persekutuan',
        street: 'Desa Pandan, 55100 Kuala Lumpur,',
        number: '+60 3-9200 2206',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM / 6:30 PM',
          'Sunday: CLOSE'
        ],
        lat: 3.1461146,
        lng: 101.6657111,
        wheelchair: true,
        contact: {
          tel: '+60 3-2681 2020',
          email: 'test@example.com'
        },
        website: 'http://andalusiatravel.com.my'
      }, {
        id: 4,
        name: 'Falcon Travel & Services',
        city: '38-1-1, Jalan 4/91,',
        district: ' Taman Shamelin Perkasa,',
        street: 'Kuala Lumpur',
        number: '+60 3-9283 1080',
        zip: '56100,',
        dates: [
          'Monday: 9:00 AM / 7:00 PM',
          'Sunday: CLOSE'
        ],
        satTrans: true,
        contact: {
          tel: '+60 3-9283 1080',
          email: 'test@example.com'
        },
        website: 'http://ezymekah.com'
      }, {
        id: 5,
        name: 'KAA Travel & Tours',
        city: 'Menara Hap Seng',
        district: '1_05, Jalan P. Ramlee',
        street: 'Taman Shamelin Perkasa,Kuala Lumpur',
        number: '+60 3-2148 0604',
        zip: '50540',
        dates: [
          'Monday: 24 HRS',
          'Sunday: 24 HRS'
        ],
        lat: 3.1248974,
        lng: 101.6670395,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '+60 3-2148 0604',
          email: 'support@kaatravel.com'
        },
        website: 'http://www.kaatravel.com/'
      }, {
        id: 6,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 51.344143,
        lng: 10.966972,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 7,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 50.941998,
        lng: 10.073971,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 8,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 51.463053,
        lng: 11.069677,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 9,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 51.434340,
        lng: 11.101727,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'http://example.com'
      }, {
        id: 10,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 51.418927,
        lng: 11.143613,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 11,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 51.204197,
        lng: 6.687951,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 12,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 51.333347,
        lng: 6.584587,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 13,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 51.361224,
        lng: 6.428719,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 14,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 51.421209,
        lng: 6.882591,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 15,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.497492,
        lng: 13.395252,
        wheelchair: true,
        wheelchairLift: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 16,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.515881,
        lng: 13.295689,
        wheelchair: true,
        wheelchairLift: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 17,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.480977,
        lng: 13.369846,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 18,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 19,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 20,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 21,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 22,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 23,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 24,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 25,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 26,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 27,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 28,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'test@example.com'
        },
        website: 'N/A'
      }, {
        id: 29,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }, {
        id: 30,
        name: 'Not Listed Yet',
        city: 'N/A',
        district: 'N/A',
        street: 'N/A',
        number: 'N/A',
        zip: 'N/A',
        dates: [
          'Monday: N/A',
          'Sunday: N/A'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: 'N/A',
          email: 'N/A'
        },
        website: 'N/A'
      }];

      this.pages = [{
        alias: 'Incase of emegencies',
        content: '<img src="img/th.png" width="100%" height="250"><p><h1>TH TRAVEL & SERVICES SDN. BHD.</h1> <p><strong>Tabung Haji Travel & Services</strong> merupakan Ahli Kumpulan Syarikat TH yang diperbadankan pada 9 September 1972 untuk mengendali dan mengurus perkhidmatan haji/umrah bagi jemaah Malaysia. Berteraskan prinsip 3K iaitu Keyakinan, Kemudahan dan Keselesaan, kami bertekad untuk memberikan perkhidmatan yang terbaik agar perjalanan ibadah atau percutian anda sentiasa dalam ketenangan dan keselesaan.Semoga Tabung Haji Travel sentiasa menjadi pilihan untuk perjalanan menunaikan haji & umrah serta melancong bersama rakan dan ahli keluarga.<p>Website: <a href="http://www.th-properties.com/">TH Travel & Tours</a> </p> <h2>Tentang Kami:</h2> <ol> <li>Berbekalkan pengalaman lebih 45 tahun menguruskan perjalanan haji & umrah.</li></ol> <blockquote><p>Memahami kehendak para jemaah dengan menyediakan pakej berpatutan.</p></blockquote> <h3>Alamat (Lokasi)</h3> <ul> <li>153 Jalan Tun Razak, Kuala-lumpur&nbsp;<a href="#">Bookmark This</a></li><p><hr><p><li><img src="img/batuta.png" width="100%" height="250"><p><h1>BATUTA TRAVEL & TOURS SDN. BHD.</h1> <p><strong>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</strong> Syarikat kami merupakan salah sebuah syarikat yang diberi lesen oleh Lembaga Tabung Haji untuk mengelola jemaah haji untuk menunaikan Ibadat haji bagi musim haji 1437 H / 2016 M dan telah diberi lesen sejak dari tahun 1987 lagi. Kami juga menawarkan perkhidmatan mengelola pakej umrah yang bermula pada bulan Rabiul Awal dan berakhir pada bulan RAMADHAN pada setiap tahun.Segala maklumat mengenai perkhidmatan yang ditawarkan oleh syarikat kami ada di dalam laman sesawang ini. Sebarang pertanyaan boleh menghubungi kami di talian atau email kepada kami di batuta@batutatravel.com.my. Wassalam.<p>Website: <a href="http://www.batutatravel.com.my/">Batuta Travel & Tours</a> </p> <h2>Tentang Kami:</h2> <ol>Big in value, Top in service, Trusted in name.</ol></p></blockquote> <h3>Alamat (Lokasi)</h3> <ul> <li>Wisma Andalusia Belangkas , Kuala Lumpur, Malaysia,<br>&nbsp;<a href="#">Bookmark This</a></li><p><hr><p><li><img src="img/andalusia.png" width="100%" height="250"><p><h1>ANDALUSIA TRAVEL & SERVICES SDN. BHD.</h1> <p><strong>ANDALUSIA Travel & Tours Sdn.Bhd</strong> merupakan pengelola jemaah umrah dan haji dengan tawaran pakej harga ekonomi.<p>Website: <a href="#">Andalusia Travel & Tours</a> </p> <h2>Tentang Kami:</h2> <ol> <li>Berbekalkan pengalaman lebih 45 tahun menguruskan perjalanan haji & umrah.</li></ol> <blockquote><p>Memahami kehendak para jemaah dengan menyediakan pakej berpatutan.</p></blockquote> <h3>Alamat (Lokasi)</h3> <ul> <li>153 Jalan Tun Razak, Kuala-lumpur&nbsp;<a href="#">Bookmark This</a></li><p><hr><p><li><img src="img/falcon.png" width="100%" height="250"><p><h1>FALCON TRAVEL & TOURS SDN BHD</h1> <p><strong>FALCON TRAVEL & TOURS SDN. BHD.</strong> Tour Agency in Kuala Lumpur, Malaysia sentiasa menjadi pilihan untuk perjalanan menunaikan haji & umrah serta melancong bersama rakan dan ahli keluarga.<p>Website: <a href="http://www.th-properties.com/">Falcon Travel & Tours</a> </p> <h2>Tentang Kami:</h2> <ol> <li>Berbekalkan pengalaman lebih 45 tahun menguruskan perjalanan haji & umrah.</li></ol> <blockquote><p>Memahami kehendak para jemaah dengan menyediakan pakej berpatutan.</p></blockquote> <h3>Alamat (Lokasi)</h3> <ul> <li>38-1-1, Jalan 4/91, Taman Shamelin Perkasa, 56100, Kuala Lumpur, WP Kuala Lumpur, 56100, Malaysia&nbsp;<a href="#">Bookmark This</a></li></li> </ul>',
        title: 'Bookmark',
        icon: 'ion-ios-bookmarks'
      },{
        alias: 'Incase of emegencies',
        content: '<h1>Assallam</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Transportation',
        icon: 'ion-android-bicycle'
      },{
        alias: 'Incase of emegencies',
        content: '<h1>Assallam</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Collection of Duas',
        icon: 'ion-ios-book'
      },{
        alias: 'Incase of emegencies',
        content: '<h1>Assallam</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Pilgrim Stories',
        icon: 'ion-ios-world'
      },{
        alias: 'Incase of emegencies',
        content: '<h1>Assallam</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Admin Settings',
        icon: 'ion-ios-gear'
      },{
        alias: 'Incase of emegencies',
        content: '<h1>Assallam</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Apply your Hajj',
        icon: 'ion-ios-compose'
      },{
        alias: 'Incase of emegencies',
        content: '<h1>Assallam</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Tools',
        icon: 'ion-wrench'
      },{
        alias: 'contact',
        content: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'About App',
        icon: 'ion-ios-email'
      }];
    }
  ]);
});

console.log('connected');

console.log('yo')

$(document).ready(function(){
 words = $('#announcements_p').val();
});

var home2 ="<div id='home' class='animated slideOutDown'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo' ></img><div class=\"webCircle\">W</div><div class=\"fbCircle\">F</div><div class=\"mailCircle\">E</div><p id='link_nfc'>www.nfcimplus.com</p><p id='link_fb'>facebook.com/nfcimplus</p><p id='link_email'>hello@nfcimplus.com</p></div>"
var home3 ="<div id='home' onClick=\"homey1();return false;\" class='animated slideInUp'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo' ></img><div class=\"webCircle\">W</div><div class=\"fbCircle\">F</div><div class=\"mailCircle\">E</div><p id='link_nfc'>www.nfcimplus.com</p><p id='link_fb'>facebook.com/nfcimplus</p><p id='link_email'>hello@nfcimplus.com</p></div>"

var first ="<div id='home2' class='animated slideInDown'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><div class='zoom_img'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' id='fb_small'></a></div><div class='zoom_img'><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' id='twitter_small'></a></div><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='worship'><span id='sunday'>Sunday Worship</span><br><br><span id='sunday2'>Weekly Sunday Services</span><br><br><span id='worshipContent' >We invite you to join us for our weekly worship service <span id='reals'>every Sunday at 11:00am.</span><br><br>Services are held at the New Frontier Church Vision Center, located at 142 West 29th St. (between 6th and 7th Avenues) New York, NY. Maps & Directions<br><br>After service, join us in fellowship to share God's love. Enjoy a light lunch and meet other Christians. New comers, please see a team member to get connected.</span></div><div class='zoom_img1'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"blahblahblah\" ></div><div id= \"crossfade\"><img class = \"cone\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/slide15_zpsufy44aks.jpg\"><img class = \"ctwo\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/worship_zpssbisydeb.jpg\"><img class = \"cthree\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/slide4_zpsojkohsgj.jpg\"><img class = \"cfour\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/slide3_zpsunompof5.gif\"><img class = \"cfive\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/slide2_zpsrplsjoy9.jpg\"></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"dailyFromFirst();location.href='/daily_page';return false;\">Daily</a></li><li><a onClick=\"worship();return false;\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"about();return false;\" id='about_page'>About IM+</a></li><li><a onClick=\"mission();return false;\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a onClick=\"discipleship();return false;\" id='discipleship_page'>Discipleship</a></li><li><a onClick=\"serving();return false;\" id='serving_page'>Serving</a></li><li><a onClick=\"contactPage();return false;\" id='contact_page'>Contact</a></li></ul></div></div>"
var first2 ="<div id='home2' class='animated slideOutUp'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='worship'><span id='sunday'>Sunday Worship</span><br><br><span id='sunday2'>Weekly Sunday Services</span><br><br><span id='worshipContent' >We invite you to join us for our weekly worship service <span id='reals'>every Sunday at 11:00am.</span><br><br>Services are held at the New Frontier Church Vision Center, located at 142 West 29th St. (between 6th and 7th Avenues) New York, NY. Maps & Directions<br><br>After service, join us in fellowship to share God's love. Enjoy a light lunch and meet other Christians. New comers, please see a team member to get connected.</span></div><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"blahblahblah\" ><div id= \"crossfade\"><img class = \"cone\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/slide15_zpsufy44aks.jpg\"><img class = \"ctwo\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/worship_zpssbisydeb.jpg\"><img class = \"cthree\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/slide4_zpsojkohsgj.jpg\"><img class = \"cfour\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/slide3_zpsunompof5.gif\"><img class = \"cfive\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/slide2_zpsrplsjoy9.jpg\"></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"daily();return false;\">Daily</a></li><li><a onClick=\"worship();return false;\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"about();return false;\" id='about_page'>About IM+</a></li><li><a onClick=\"mission();return false;\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a onClick=\"discipleship();return false;\" id='discipleship_page'>Discipleship</a></li><li><a onClick=\"serving();return false;\" id='serving_page'>Serving</a></li><li><a onClick=\"contact();return false;\" id='contact_page'>Contact</a></li></ul></div></div>"

var worship1 ="<div id='home2' class='animated slideInRight'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><div class='zoom_img'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' id='fb_small'></a></div><div class='zoom_img'><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a></div><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='worship_page'>Join us in worship every Sunday at our church location in Herald Square. Whether you’re a first time believer or a life-long disciple, our weekly services are a great place to connect with God.<br><br>Each week our services feature contemporary praise, time of meaningful prayer and a sermon by Pastor Paul Woo rooted in the Word. After services, be sure to stick around for fellowship, which includes lunch. Before you leave, please be sure to connect with one of our New Comers team members so we can serve you better.</div><div class='zoom_img1'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homeFromWorship();return false;\" ></div><div id= \"crossfade1\"><img class = \"cone\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic2_zpspvrhjkxc.jpg\"><img class = \"ctwo\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic8_zpsnasymhwo.jpg\"><img class = \"cthree\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic3_zpsc2b6mrcc.jpg\"><img class = \"cfour\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic7_zpsmp6wsdm4.jpg\"><img class = \"cfive\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic1_zpsfcre55t4.jpg\"><img class = \"csix\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic4_zpso3gbbc4m.jpg\"><img class = \"cseven\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic5_zpsult6c3qx.jpg\"><img class = \"ceight\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic6_zpspnq2os0h.jpg\"></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"dailyFromWorship();location.href='/daily_page';return false;\">Daily</a></li><li><a onClick=\"blahblahblah\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"aboutFromWorship();return false;\" id='about_page'>About IM+</a></li><li><a onClick=\"missionFromWorship();return false;\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a onClick=\"discipleshipFromWorship();return false;\" id='discipleship_page'>Discipleship</a></li><li><a onClick=\"servingFromWorship();return false;\" id='serving_page'>Serving</a></li><li><a onClick=\"contactFromWorship();return false;\" id='contact_page'>Contact</a></li></ul></div></div>"
var worship2 ="<div id='home2' class='animated slideOutRight'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='worship_page'>Join us in worship every Sunday at our church location in Herald Square. Whether you’re a first time believer or a life-long disciple, our weekly services are a great place to connect with God.<br><br>Each week our services feature contemporary praise, time of meaningful prayer and a sermon by Pastor Paul Woo rooted in the Word. After services, be sure to stick around for fellowship, which includes lunch. Before you leave, please be sure to connect with one of our New Comers team members so we can serve you better.</div><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homeFromWorship();return false;\" ><div id= \"crossfade1\"><img class = \"cone\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic2_zpspvrhjkxc.jpg\"><img class = \"ctwo\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic8_zpsnasymhwo.jpg\"><img class = \"cthree\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic3_zpsc2b6mrcc.jpg\"><img class = \"cfour\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic7_zpsmp6wsdm4.jpg\"><img class = \"cfive\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic1_zpsfcre55t4.jpg\"><img class = \"csix\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic4_zpso3gbbc4m.jpg\"><img class = \"cseven\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic5_zpsult6c3qx.jpg\"><img class = \"ceight\" src = \"http://i1301.photobucket.com/albums/ag119/jabattack1/pic6_zpspnq2os0h.jpg\"></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"daily();return false;\">Daily</a></li><li><a onClick=\"blahblah;\">Worship</a></li><li><a href=\"#\">About</a><ul><li><a href=\"\" id='nails'>About IM+</a></li><li><a href=\"/massage\">Message</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a href=\"/about\">Discipleship</a></li><li><a href=\"/menu\">Serving</a></li><li><a href=\"/gallery\">Contact</a></li></ul></div></div>"

var about1 ="<div id='home2' class='animated slideInLeft'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><div class='zoom_img'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a></div><div class='zoom_img'><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a></div><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='aboutContent' ><span id='aboutabout'>About</span><br><br>International Ministry Plus (IM+) is a ministry of the New Frontier Church created with one goal in mind: <span id='spread'>to spread the Gospel to people of all ages, races and colors.</span><br><br>\“There before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and in front of the Lamb.\” -Rev 7:9-<br><br>New York City is often described as the capital of the world. It exerts a significant impact upon commerce, finance, politics, media, art, fashion, research, technology, education, and entertainment. New York City is also known as a great ‘melting pot’. As many as 800 languages are spoken and people from 196 countries are represented in the city. The World is here.<br><br>IM+ believes that New York City is the place on earth where this heavenly vision of people of all different nations, tribes and languages, worshipping the Lord Jesus together can be fulfilled. Therefore, IM+ strives to be a Glocal Church and obey the Great Commission in Matthew 28:19, “Therefore go and make disciples of all nations.”</div><div class='zoom_img1'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homey2();return false;\"></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"dailyFromAbout();location.href='/daily_page';return false;\">Daily</a></li><li><a onClick=\"worshipFromAbout();return false;\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"blahblahblah\" id='about_page'>About IM+</a></li><li><a onClick=\"missionFromAbout();return false;\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a onClick=\"discipleshipFromAbout();return false;\" id='discipleship_page'>Discipleship</a></li><li><a onClick=\"servingFromAbout();return false;\" id='serving_page'>Serving</a></li><li><a onClick=\"contactFromAbout();return false;\" id='contact_page'>Contact</a></li></ul></div><p class=\"marquee\"><span id='core'>Core Values</span> - In order to fulfill the Great Commission of Christ in New York City, IM+ focuses on the ‘Four Greats’.&nbsp;&nbsp;<span id='adoration'>Great Adoration</span> - IM+ wants to be a church that worships God in Spirit and in Truth. Loving God and worshiping Him is the foremost important value of all Christians. The members of the ministry come from different parts of the world with different background and cultures, but we want to give God the best worship possible in one spirit and mind.&nbsp;&nbsp;<span id='compassion'>Great Compassion</span> - IM+ wants to be a church that reaches out and touch the lives of millions of New Yorkers with the good news of Jesus Christ with love and compassion. We want to be the hands and the feet of Christ, healing, serving and caring for the lost and the broken hearted to give them hope of eternal glory that can only be found in Christ.&nbsp;&nbsp;<span id='education'>Great Education</span> - IM+ wants to be a church that teaches the believers the word of God in its fullness in order to nurture them for spiritual growth. Jesus calls all believers to be truly committed disciples. As Jesus himself spent time with his disciples in smaller settings by teaching and sharing his life, we would like to focus on intentional discipleship where the members not only gain biblical knowledge but also attain the necessary life style habits of good disciples of Christ.&nbsp;&nbsp;<span id='unification'>Great Unification</span> - IM+ wants to be a church that focuses on fellowship to unite the members as one body in Christ. The members are all different in many different ways but we want to be a united family where brothers and sisters in Christ grow and serve the Lord together. We believe that the greatest commandment of Jesus for Christians is to love each other and be united as one.</p></div>"
var about2 ="<div id='home2' class='animated slideOutLeft'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='aboutContent' ><span id='aboutabout'>About</span><br><br>International Ministry Plus (IM+) is a ministry of the New Frontier Church created with one goal in mind: <span id='spread'>to spread the Gospel to people of all ages, races and colors.</span><br><br>\“There before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and in front of the Lamb.\” -Rev 7:9-<br><br>New York City is often described as the capital of the world. It exerts a significant impact upon commerce, finance, politics, media, art, fashion, research, technology, education, and entertainment. New York City is also known as a great ‘melting pot’. As many as 800 languages are spoken and people from 196 countries are represented in the city. The World is here.<br><br>IM+ believes that New York City is the place on earth where this heavenly vision of people of all different nations, tribes and languages, worshipping the Lord Jesus together can be fulfilled. Therefore, IM+ strives to be a Glocal Church and obey the Great Commission in Matthew 28:19, “Therefore go and make disciples of all nations.”</div><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homey2();return false;\" ><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"daily();return false;\">Daily</a></li><li><a onClick=\"worship_about();return false;\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"about();return false;\" id='about_page'>About IM+</a></li><li><a onClick=\"mission();return false;\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a href=\"/about\">Discipleship</a></li><li><a href=\"/menu\">Serving</a></li><li><a href=\"/gallery\">Contact</a></li></ul></div><p class=\"marquee\"><span id='core'>Core Values</span> - In order to fulfill the Great Commission of Christ in New York City, IM+ focuses on the ‘Four Greats’.&nbsp;&nbsp;<span id='adoration'>Great Adoration</span> - IM+ wants to be a church that worships God in Spirit and in Truth. Loving God and worshiping Him is the foremost important value of all Christians. The members of the ministry come from different parts of the world with different background and cultures, but we want to give God the best worship possible in one spirit and mind.&nbsp;&nbsp;<span id='compassion'>Great Compassion</span> - IM+ wants to be a church that reaches out and touch the lives of millions of New Yorkers with the good news of Jesus Christ with love and compassion. We want to be the hands and the feet of Christ, healing, serving and caring for the lost and the broken hearted to give them hope of eternal glory that can only be found in Christ.&nbsp;&nbsp;<span id='education'>Great Education</span> - IM+ wants to be a church that teaches the believers the word of God in its fullness in order to nurture them for spiritual growth. Jesus calls all believers to be truly committed disciples. As Jesus himself spent time with his disciples in smaller settings by teaching and sharing his life, we would like to focus on intentional discipleship where the members not only gain biblical knowledge but also attain the necessary life style habits of good disciples of Christ.&nbsp;&nbsp;<span id='unification'>Great Unification</span> - IM+ wants to be a church that focuses on fellowship to unite the members as one body in Christ. The members are all different in many different ways but we want to be a united family where brothers and sisters in Christ grow and serve the Lord together. We believe that the greatest commandment of Jesus for Christians is to love each other and be united as one.</p></div>"


  $(document).ready(function(){
    $('.img-zoom').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });
  });

var mission1 ="<div id='home2' class='animated slideInLeft'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><div class='zoom_img'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a></div><div class='zoom_img'><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a></div><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='mission_link'><span id='mission_title'>Mission</span><br><span id='evangelical'>Evangelical Statement of Faith</span><br><br><li>We believe the Bible to be the inspired, the infallible, authoritative Word of God.</li><li>We believe that there is one God, eternally existent in three persons: Father, Son, and the Holy Spirit.</li><li>We believe in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death &nbsp;&nbsp;&nbsp;&nbsp;through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, and in His personal return in power &nbsp;&nbsp;&nbsp;&nbsp;and glory.</li><li>We believe that for the salvation of lost and sinful people, regeneration of the Holy Spirit is absolutely essential.</li><li>We believe in the present ministry of the Holy Spirit by whose indwelling the Christian is enabled to live a godly life.</li><li>We believe in the resurrection of both the saved and the lost; they that are saved unto the resurrection of life and they that are lost unto the &nbsp;&nbsp;&nbsp;&nbsp;resurrection of damnation.</li><li>We believe in the spiritual unity of believers in our Lord Jesus Christ.</li></div><div class='zoom_img1'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homeFromMission();return false;\" ></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"dailyFromMission();location.href='/daily_page';return false;\">Daily</a></li><li><a onClick=\"worshipFromMission();return false;\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"aboutFromMission();return false;\" id='about_page'>About IM+</a></li><li><a onClick=\"blahblahblah\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a onClick=\"discipleshipFromMission();return false;\" id='discipleship_page'>Discipleship</a></li><li><a onClick=\"servingFromMission();return false;\" id='serving_page'>Serving</a></li><li><a onClick=\"contactFromMission();return false;\" id='contact_page'>Contact</a></li></ul></div><p class=\"marquee1\"><span id='apostle'>Apostle’s Creed</span> - I believe in God, the Father Almighty, the Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord: Who was conceived of the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried.  He descended to the dead.  The third day He arose again from the dead.  He ascended into heaven and sits at the right hand of God the Father Almighty, whence He shall come to judge the living and the dead.  I believe in the Holy Spirit, the holy universal church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting.</p></div>"
var mission2 ="<div id='home2' class='animated slideOutLeft'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='mission_link'><span id='mission_title'>Mission</span><br><span id='evangelical'>Evangelical Statement of Faith</span><br><br><li>We believe the Bible to be the inspired, the infallible, authoritative Word of God.</li><li>We believe that there is one God, eternally existent in three persons: Father, Son, and the Holy Spirit.</li><li>We believe in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death &nbsp;&nbsp;&nbsp;&nbsp;through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, and in His personal return in power &nbsp;&nbsp;&nbsp;&nbsp;and glory.</li><li>We believe that for the salvation of lost and sinful people, regeneration of the Holy Spirit is absolutely essential.</li><li>We believe in the present ministry of the Holy Spirit by whose indwelling the Christian is enabled to live a godly life.</li><li>We believe in the resurrection of both the saved and the lost; they that are saved unto the resurrection of life and they that are lost unto the &nbsp;&nbsp;&nbsp;&nbsp;resurrection of damnation.</li><li>We believe in the spiritual unity of believers in our Lord Jesus Christ.</li></div><div class='zoom_img1'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homeFromMission();return false;\" ></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"daily();return false;\">Daily</a></li><li><a onClick=\"blahblah;\">Worship</a></li><li><a href=\"#\">About</a><ul><li><a href=\"\" id='nails'>About IM+</a></li><li><a href=\"/massage\">Message</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a href=\"/about\">Discipleship</a></li><li><a href=\"/menu\">Serving</a></li><li><a href=\"/gallery\">Contact</a></li></ul></div><p class=\"marquee1\"><span id='apostle'>Apostle’s Creed</span> - I believe in God, the Father Almighty, the Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord: Who was conceived of the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried.  He descended to the dead.  The third day He arose again from the dead.  He ascended into heaven and sits at the right hand of God the Father Almighty, whence He shall come to judge the living and the dead.  I believe in the Holy Spirit, the holy universal church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting.</p></div>"

var discipleship1 ="<div id='home2' class='animated slideInRight'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><div class='zoom_img'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a></div><div class='zoom_img'><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a></div><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='discipleship_stuff'><span id='discipleship_title'>Discipleship</span><br><br>\"Therefore, go and make disciples of all nations, baptizing them in the name of the Father, of the Son, and of the Holy Spirit…\” (Matthew 28:19)<br><br>As he was lifted up into the Heaven after the resurrection, Jesus gave his disciples and all Christians this command to fulfill. IM+ believes that all of us have personally received this commandment in one way or another, which means that we must become disciples ourselves first to disciple others, and that, in a nutshell, is the purpose of the discipleship training classes.<br><br>In discipleship training classes, a group of up to 12 brothers and sisters in Christ meet on every Wednesday at 7:30pm and go over a Christian workbook, which covers the foundations of our faith and the fundamentals of  Christian life by learning and discussing the biblical grounds for what we do and believe as Christians. The chapters begin with the study of Jesus, and continues to cover the themes like God’s character, prayer, fellowship, temptations, etc.<br><br>It is a twelve-week course led by Pastor Paul. If you are interested, please contact <a href='mailto:hello@nfcimplus.com'>hello@nfcimplus.com</a></div><div class='zoom_img1'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homeFromDiscipleship();return false;\"></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"dailyFromDiscipleship();location.href='/daily_page';return false;\">Daily</a></li><li><a onClick=\"worshipFromDiscipleship();return false;\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"aboutFromDiscipleship();return false;\" id='about_page'>About IM+</a></li><li><a onClick=\"missionFromDiscipleship();return false;\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a onClick=\"blahblahblah\" id='discipleship_page'>Discipleship</a></li><li><a onClick=\"servingFromDiscipleship();return false;\" id='serving_page'>Serving</a></li><li><a onClick=\"contactFromDiscipleship();return false;\" id='contact_page'>Contact</a></li></ul></div></div>"
var discipleship2 ="<div id='home2' class='animated slideOutRight'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='discipleship_stuff'><span id='discipleship_title'>Discipleship</span><br><br>\"Therefore, go and make disciples of all nations, baptizing them in the name of the Father, of the Son, and of the Holy Spirit…\” (Matthew 28:19)<br><br>As he was lifted up into the Heaven after the resurrection, Jesus gave his disciples and all Christians this command to fulfill. IM+ believes that all of us have personally received this commandment in one way or another, which means that we must become disciples ourselves first to disciple others, and that, in a nutshell, is the purpose of the discipleship training classes.<br><br>In discipleship training classes, a group of up to 12 brothers and sisters in Christ meet on every Wednesday at 7:30pm and go over a Christian workbook, which covers the foundations of our faith and the fundamentals of  Christian life by learning and discussing the biblical grounds for what we do and believe as Christians. The chapters begin with the study of Jesus, and continues to cover the themes like God’s character, prayer, fellowship, temptations, etc.<br><br>It is a twelve-week course led by Pastor Paul. If you are interested, please contact <a href='mailto:hello@nfcimplus.com'>hello@nfcimplus.com</a></div><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homeFromDiscipleship();return false;\"><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"daily();return false;\">Daily</a></li><li><a onClick=\"blahblah;\">Worship</a></li><li><a href=\"#\">About</a><ul><li><a href=\"\" id='nails'>About IM+</a></li><li><a href=\"/massage\">Message</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a href=\"/about\">Discipleship</a></li><li><a href=\"/menu\">Serving</a></li><li><a href=\"/gallery\">Contact</a></li></ul></div></div>"

var serving1 ="<div id='home2' class='animated slideInDown'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><div class='zoom_img'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a></div><div class='zoom_img'><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a></div><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='serving_stuff'><span id='serving_title'>Serving</span><br><br>We believe that through serving, God will bring you into a deeper relationship with Him. Our desire is to help Christ-followers discover how God has uniquely wired them with gifts, talents and passions and equip them to magnify God by serving in their church. Our hope is that we would cultivate the same attitude described in Philippians 2:3, doing nothing from rivalry or conceit, but in humility counting others more significant than ourselves.<br><br>As you feel led to call IM+ your church home, service will inevitably become a part of your life’s worship. We pray that, in serving here, God would mature and strengthen our gifts and create in us a servant’s heart that would bleed into all areas of our life.<br><br>Permit God to guide you to the ministry in which He has created and designed you to serve. Don’t be afraid to step out and try something new. He will always enable you to do what He calls you to do.<br><br><span id='listenWell'>The following are some questions to ask yourself to determine if you are experiencing the life God has for you in serving His church:</span><br><br><li>Am I willing to answer the call to ministry, even in the smallest of ways?</li><li>Am I using my time and talents to accomplish the ministry God has for me?</li><li>Am I living a life of gratitude by joyfully donating a portion of my time and talent back to God?</li></div><div class='zoom_img1'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homeFromServing();return false;\"></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"dailyFromServing();location.href='/daily_page';return false;\">Daily</a></li><li><a onClick=\"worshipFromServing();return false;\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"aboutFromServing();return false;\" id='about_page'>About IM+</a></li><li><a onClick=\"missionFromServing();return false;\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a onClick=\"discipleshipFromServing();return false;\" id='discipleship_page'>Discipleship</a></li><li><a onClick=\"blahblahblah\" id='serving_page'>Serving</a></li><li><a onClick=\"contactFromServing();return false;\" id='contact_page'>Contact</a></li></ul></div><p class=\"marquee1\"><span id='join'>What Can I do to Serve?</span> &nbsp;At the present time, we have opportunities in the following teams: Praise Team, Ushering Team, Fellowship Team, New Believer’s Class Team, Operations Team, New Comers Team, Outreach Team, Intercessory Prayer Team. &nbsp;<span id='how'>How Do I Get Started?</span> &nbsp;If you’re interested in learning more, please contact us at <a href='mailto:serving@nfcimplus.com'>serving@nfcimplus.com</a>.</p></div>"
var serving2 ="<div id='home2' class='animated slideOutUp'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='serving_stuff'><span id='serving_title'>Serving</span><br><br>We believe that through serving, God will bring you into a deeper relationship with Him. Our desire is to help Christ-followers discover how God has uniquely wired them with gifts, talents and passions and equip them to magnify God by serving in their church. Our hope is that we would cultivate the same attitude described in Philippians 2:3, doing nothing from rivalry or conceit, but in humility counting others more significant than ourselves.<br><br>As you feel led to call IM+ your church home, service will inevitably become a part of your life’s worship. We pray that, in serving here, God would mature and strengthen our gifts and create in us a servant’s heart that would bleed into all areas of our life.<br><br>Permit God to guide you to the ministry in which He has created and designed you to serve. Don’t be afraid to step out and try something new. He will always enable you to do what He calls you to do.<br><br><span id='listenWell'>The following are some questions to ask yourself to determine if you are experiencing the life God has for you in serving His church:</span><br><br><li>Am I willing to answer the call to ministry, even in the smallest of ways?</li><li>Am I using my time and talents to accomplish the ministry God has for me?</li><li>Am I living a life of gratitude by joyfully donating a portion of my time and talent back to God?</li></div><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homeFromServing();return false;\"><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"daily();return false;\">Daily</a></li><li><a onClick=\"worshipFromServing();return false;\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"aboutFromServing();return false;\" id='about_page'>About IM+</a></li><li><a onClick=\"missionFromServing();return false;\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a onClick=\"discipleshipFromServing();return false;\" id='discipleship_page'>Discipleship</a></li><li><a onClick=\"blahblahblah\" id='serving_page'>Serving</a></li><li><a onClick=\"contactFromServing();return false;\" id='contact_page'>Contact</a></li></ul></div><p class=\"marquee1\"><span id='join'>What Can I do to Serve?</span> &nbsp;At the present time, we have opportunities in the following teams: Praise Team, Ushering Team, Fellowship Team, New Believer’s Class Team, Operations Team, New Comers Team, Outreach Team, Intercessory Prayer Team. &nbsp;<span id='how'>How Do I Get Started?</span> &nbsp;If you’re interested in learning more, please contact us at <a href='mailto:serving@nfcimplus.com'>serving@nfcimplus.com</a>.</p></div>"

var contact1 ="<div id='home2' class='animated slideInRight'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><div class='zoom_img'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a></div><div class='zoom_img'><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a></div><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='contact_stuff'><span id='subject_head'>Subject:</span><span id='message_head'>Message:</span><span id='contact_title'>Contact</span><br><span id='send_us'>Send Us a Message</span><br><br><label class='ilabel'>Name:<span id='email_head'>Email Address:</span><br><form method=\"POST\" action=\"/users\"><input type='text' name='full_name' id='full_name' class='itext'/></label><label class='ilabel'><input type='text' name='email_address' id='email_address' class='itext'/></label><br><br><label class='ilabel'><input type='text' name='subject' id='subject' class='itext'/></label><br><br><label class='ilabel'><br><textarea type='text' name='message_box' id='message_box' placeholder='We’d love to hear from you! Please fill out this contact form and someone from our team will reach out to you shortly!' class='itext'></textarea></label><br><input type='submit' id='submit_button' value='SUBMIT' class='ibutton' onClick=\"submit_button();return false;\"/></form></div><div id='church_directions'><span id='getting_here'>Getting Here</span><iframe id='chruch_map' src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6731973373207!2d-73.99199600000001!3d40.74721600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af9d1d9f63%3A0x29f56189af3e071!2s142+W+29th+St%2C+New+York%2C+NY+10001!5e0!3m2!1sen!2sus!4v1436904589007\" width=\"420\" height=\"150\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe><span id='transportation'><span id='public_bold'>Public Transportation</span><br>1 Train to 28 St<br>1, 2, 3 Train to 34 St – Penn Station<br>B, D, F, M Train to 34 St – Herald Square</span></div><br><div class='zoom_img1'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homeFromContact();return false;\"></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"dailyFromContact();location.href='/daily_page';return false;\">Daily</a></li><li><a onClick=\"worshipFromContact();return false;\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"aboutFromContact();return false;\" id='about_page'>About IM+</a></li><li><a onClick=\"missionFromContact();return false;\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a onClick=\"discipleshipFromContact();return false;\" id='discipleship_page'>Discipleship</a></li><li><a onClick=\"servingFromContact();return false;\" id='serving_page'>Serving</a></li><li><a onClick=\"blahblahblah\" id='contact_page'>Contact</a></li></ul></div></div>"
var contact2 ="<div id='home2' class='animated slideOutRight'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><div class='zoom_img'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' class='img-zoom' id='fb_small'></a></div><div class='zoom_img'><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' class='img-zoom' id='twitter_small'></a></div><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='contact_stuff'><span id='subject_head'>Subject:</span><span id='message_head'>Message:</span><span id='contact_title'>Contact</span><br><span id='send_us'>Send Us a Message</span><br><br><label class='ilabel'>Name:<span id='email_head'>Email Address:</span><br><input type='text' name='full_name' id='full_name' class='itext'/></label><label class='ilabel'><input type='text' name='email_address' id='email_address' class='itext'/></label><br><br><label class='ilabel'><input type='text' name='subject' id='subject' class='itext'/></label><br><br><label class='ilabel'><br><textarea type='text' name='message_box' id='message_box' placeholder='We’d love to hear from you! Please fill out this contact form and someone from our team will reach out to you shortly!' class='itext'></textarea></label><br><input type='submit' id='submit_button' value='SUBMIT' class='ibutton' onClick=\"submit_button();return false;\"/></div><div id='church_directions'><span id='getting_here'>Getting Here</span><iframe id='chruch_map' src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6731973373207!2d-73.99199600000001!3d40.74721600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af9d1d9f63%3A0x29f56189af3e071!2s142+W+29th+St%2C+New+York%2C+NY+10001!5e0!3m2!1sen!2sus!4v1436904589007\" width=\"420\" height=\"150\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe><span id='transportation'><span id='public_bold'>Public Transportation</span><br>1 Train to 28 St<br>1, 2, 3 Train to 34 St – Penn Station<br>B, D, F, M Train to 34 St – Herald Square</span></div><br><div class='zoom_img1'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"homeFromContact();return false;\"></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"daily();return false;\">Daily</a></li><li><a onClick=\"worshipFromContact();return false;\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"aboutFromContact();return false;\" id='about_page'>About IM+</a></li><li><a onClick=\"missionFromContact();return false;\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a onClick=\"discipleshipFromContact();return false;\" id='discipleship_page'>Discipleship</a></li><li><a onClick=\"servingFromContact\" id='serving_page'>Serving</a></li><li><a onClick=\"blahblahblah\" id='contact_page'>Contact</a></li></ul></div></div>"

var daily2 ="<div id='home2' class='animated slideOutLeft'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo-small_zpsaasq8r9l.png' id='logo_small'><div class='zoom_img'><a href='https://www.facebook.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/fb_small_zpsfzzqhbtk.png' id='fb_small'></a></div><div class='zoom_img'><a href='https://twitter.com/nfcimplus' target='_blank'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/twitter_small_zpsimiwkluc.png' id='twitter_small'></a></div><div id='small_info'>International Ministry + <br>142 W. 29th St. New York, NY 10001<br>Sunday Service: 11:00 am</div><div id='announcementContent' ><span id='announcementabout'>Today's Annoucement</span><br><br></div><div id='qtContent' ><span id='qtabout'>Daily Quiet Time</span><br><br></div><div class='zoom_img1'><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/logo2_zpsln58ekfk.png' id='home_logo2' onClick=\"blahblahblah\" ></div><div id='top_banner' class=\"navigation\"><ul><li><a onClick=\"daily();return false;\">Daily</a></li><li><a onClick=\"worship();return false;\">Worship</a></li><li><a onClick=\"blahblahblah\">About</a><ul><li><a onClick=\"about();return false;\" id='about_page'>About IM+</a></li><li><a onClick=\"mission();return false;\" id='mission_page'>Mission</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a onClick=\"discipleship();return false;\" id='discipleship_page'>Discipleship</a></li><li><a onClick=\"serving();return false;\" id='serving_page'>Serving</a></li><li><a onClick=\"contactPage();return false;\" id='contact_page'>Contact</a></li></ul></div></div>"


// window.onload = function(){
// $('#announcement_edit').on('click', function (){
// 	console.log("hit")
	// $('#announcements_area').val($('#announcements_area').val());
// });
// };


function homey1(){
    $('#content').empty();
    $('#content').append(home2);
     setTimeout(function() {
        $('#content').append(first);
    }, 820);    
}

function homey(){
    $('#content').empty();
    $('#content').append(first2);
     setTimeout(function() {
        $('#content').append(home3);
    }, 820);    
}

function homeFromWorship(){
    $('#content').empty();
    $('#content').append(worship2);
     setTimeout(function() {
        $('#content').append(first);
    }, 820);    
}

function homey2(){
    $('#content').empty();
    $('#content').append(about2);
     setTimeout(function() {
        $('#content').append(first);
    }, 820);    
}

function homeFromMission(){
    $('#content').empty();
    $('#content').append(mission2);
     setTimeout(function() {
        $('#content').append(first);
    }, 820);    
}

function homeFromDaily(){
    $('#content').empty();
    $('#content').append(daily2);
     setTimeout(function() {
        $('#content').append(first);
    }, 820);    
}

function homeFromContact(){
    $('#content').empty();
    $('#content').append(contact2);
     setTimeout(function() {
        $('#content').append(first);
    }, 820);    
}

function dailyFromFirst(){
    $('#content').empty();
    $('#content').append(first2);  
}

function dailyFromWorship(){
    $('#content').empty();
    $('#content').append(worship2);  
}

function dailyFromAbout(){
    $('#content').empty();
    $('#content').append(about2);  
}

function dailyFromMission(){
    $('#content').empty();
    $('#content').append(mission2);  
}

function dailyFromDiscipleship(){
    $('#content').empty();
    $('#content').append(discipleship2);  
}

function dailyFromServing(){
    $('#content').empty();
    $('#content').append(serving2);  
}

function dailyFromContact(){
    $('#content').empty();
    $('#content').append(contact2);  
}

function worship(){
    $('#content').empty();
    $('#content').append(first2);
     setTimeout(function() {
        $('#content').append(worship1);
    }, 820);    
}

function worshipFromAbout(){
    $('#content').empty();
    $('#content').append(about2);
     setTimeout(function() {
        $('#content').append(worship1);
    }, 820);    
}

function worshipFromMission(){
    $('#content').empty();
    $('#content').append(mission2);
     setTimeout(function() {
        $('#content').append(worship1);
    }, 820);    
}

function worshipFromDiscipleship(){
    $('#content').empty();
    $('#content').append(discipleship2);
     setTimeout(function() {
        $('#content').append(worship1);
    }, 820);    
}

function worshipFromServing(){
    $('#content').empty();
    $('#content').append(serving2);
     setTimeout(function() {
        $('#content').append(worship1);
    }, 820);    
}

function worshipFromContact(){
    $('#content').empty();
    $('#content').append(contact2);
     setTimeout(function() {
        $('#content').append(worship1);
    }, 820);    
}

function worshipFromDaily(){
    $('#content').empty();
    $('#content').append(daily2);
     setTimeout(function() {
        $('#content').append(worship1);
    }, 820);    
}

function worship_about(){
    $('#content').empty();
    $('#content').append(about2);
     setTimeout(function() {
        $('#content').append(worship1);
    }, 820);    
}

// function daily(){
//     $('#content').empty();
//     $('#content').append(first2);
//      setTimeout(function() {
//         $('#content').append(daily1);
//     }, 820);    
// }

function about(){
	$('#content').empty();
    $('#content').append(first2);
     setTimeout(function() {
        $('#content').append(about1);
    }, 820);
}

function aboutFromWorship(){
	$('#content').empty();
    $('#content').append(worship2);
     setTimeout(function() {
        $('#content').append(about1);
    }, 820);
}

function aboutFromMission(){
	$('#content').empty();
    $('#content').append(mission2);
     setTimeout(function() {
        $('#content').append(about1);
    }, 820);
}

function aboutFromDiscipleship(){
	$('#content').empty();
    $('#content').append(discipleship2);
     setTimeout(function() {
        $('#content').append(about1);
    }, 820);
}

function aboutFromServing(){
	$('#content').empty();
    $('#content').append(serving2);
     setTimeout(function() {
        $('#content').append(about1);
    }, 820);
}

function aboutFromContact(){
	$('#content').empty();
    $('#content').append(contact2);
     setTimeout(function() {
        $('#content').append(about1);
    }, 820);
}

function aboutFromDaily(){
	$('#content').empty();
    $('#content').append(daily2);
     setTimeout(function() {
        $('#content').append(about1);
    }, 820);
}


function mission(){
	$('#content').empty();
    $('#content').append(first2);
     setTimeout(function() {
        $('#content').append(mission1);
    }, 820);
}

function missionFromWorship(){
	$('#content').empty();
    $('#content').append(worship2);
     setTimeout(function() {
        $('#content').append(mission1);
    }, 820);
}

function missionFromAbout(){
	$('#content').empty();
    $('#content').append(about2);
     setTimeout(function() {
        $('#content').append(mission1);
    }, 820);
}

function missionFromDiscipleship(){
	$('#content').empty();
    $('#content').append(discipleship2);
     setTimeout(function() {
        $('#content').append(mission1);
    }, 820);
}

function missionFromServing(){
	$('#content').empty();
    $('#content').append(serving2);
     setTimeout(function() {
        $('#content').append(mission1);
    }, 820);
}

function missionFromContact(){
	$('#content').empty();
    $('#content').append(contact2);
     setTimeout(function() {
        $('#content').append(mission1);
    }, 820);
}

function missionFromDaily(){
	$('#content').empty();
    $('#content').append(daily2);
     setTimeout(function() {
        $('#content').append(mission1);
    }, 820);
}

function discipleship(){
	$('#content').empty();
    $('#content').append(first2);
     setTimeout(function() {
        $('#content').append(discipleship1);
    }, 820);
}

function discipleshipFromWorship(){
	$('#content').empty();
    $('#content').append(worship2);
     setTimeout(function() {
        $('#content').append(discipleship1);
    }, 820);
}

function discipleshipFromAbout(){
	$('#content').empty();
    $('#content').append(about2);
     setTimeout(function() {
        $('#content').append(discipleship1);
    }, 820);
}

function discipleshipFromMission(){
	$('#content').empty();
    $('#content').append(mission2);
     setTimeout(function() {
        $('#content').append(discipleship1);
    }, 820);
}

function discipleshipFromServing(){
	$('#content').empty();
    $('#content').append(serving2);
     setTimeout(function() {
        $('#content').append(discipleship1);
    }, 820);
}

function discipleshipFromContact(){
	$('#content').empty();
    $('#content').append(contact2);
     setTimeout(function() {
        $('#content').append(discipleship1);
    }, 820);
}

function discipleshipFromDaily(){
	$('#content').empty();
    $('#content').append(daily2);
     setTimeout(function() {
        $('#content').append(discipleship1);
    }, 820);
}

function homeFromDiscipleship(){
    $('#content').empty();
    $('#content').append(discipleship2);
     setTimeout(function() {
        $('#content').append(first);
    }, 820);    
}

function serving(){
	$('#content').empty();
    $('#content').append(first2);
     setTimeout(function() {
        $('#content').append(serving1);
    }, 820);
}

function servingFromWorship(){
	$('#content').empty();
    $('#content').append(worship2);
     setTimeout(function() {
        $('#content').append(serving1);
    }, 820);
}

function servingFromAbout(){
	$('#content').empty();
    $('#content').append(about2);
     setTimeout(function() {
        $('#content').append(serving1);
    }, 820);
}

function servingFromMission(){
	$('#content').empty();
    $('#content').append(mission2);
     setTimeout(function() {
        $('#content').append(serving1);
    }, 820);
}

function servingFromDiscipleship(){
	$('#content').empty();
    $('#content').append(discipleship2);
     setTimeout(function() {
        $('#content').append(serving1);
    }, 820);
}

function servingFromContact(){
	$('#content').empty();
    $('#content').append(contact2);
     setTimeout(function() {
        $('#content').append(serving1);
    }, 820);
}

function servingFromDaily(){
	$('#content').empty();
    $('#content').append(daily2);
     setTimeout(function() {
        $('#content').append(serving1);
    }, 820);
}

function homeFromServing(){
    $('#content').empty();
    $('#content').append(serving2);
     setTimeout(function() {
        $('#content').append(first);
    }, 820);    
}

function contactPage(){
 $('#content').empty();
    $('#content').append(first2);
     setTimeout(function() {
        $('#content').append(contact1);
    }, 820);    
}

function contactFromWorship(){
	$('#content').empty();
    $('#content').append(worship2);
     setTimeout(function() {
        $('#content').append(contact1);
    }, 820);
}

function contactFromAbout(){
	$('#content').empty();
    $('#content').append(about2);
     setTimeout(function() {
        $('#content').append(contact1);
    }, 820);
}

function contactFromMission(){
	$('#content').empty();
    $('#content').append(mission2);
     setTimeout(function() {
        $('#content').append(contact1);
    }, 820);
}

function contactFromDiscipleship(){
	$('#content').empty();
    $('#content').append(discipleship2);
     setTimeout(function() {
        $('#content').append(contact1);
    }, 820);
}

function contactFromServing(){
	$('#content').empty();
    $('#content').append(serving2);
     setTimeout(function() {
        $('#content').append(contact1);
    }, 820);
}

function contactFromDaily(){
	$('#content').empty();
    $('#content').append(daily2);
     setTimeout(function() {
        $('#content').append(contact1);
    }, 820);
}

function submit_button(){
	alert("Hello! This is a test site.  Please go to www.nfcimplus.com to message us!!");   
}

// $(".toggle").on("click", function () {
//     $(".marquee").toggleClass("microsoft");
// });


var topgg = {           
            
       top1: [
        {
            url: 'https://caomei75.cc/?channelCode=cm98',
            text: '草莓直播',
            img: 'https://hd.cdn8-video.com/01l8hkh.gif',
            description:'草莓直播，美女直播应有尽有',   
            hits:'6975'
        }, 
         {
            url: 'http://tui075.com/?channelCode=dai5',
            text: '月亮直播',
            img: 'https://hd.cdn8-video.com/01l8hkh.gif',
            description:'月亮直播，美女直播应有尽有',   
            hits:'6975'
        },
        {
            url: 'https://gs778.vip/?channelCode=QD-11-34',
            text: '月亮直播',
            img: 'https://hd.cdn8-video.com/345675434.gif',
            description:'月亮直播，美女直播应有尽有',   
            hits:'5955'
        },
        {
            url: 'https://td1.yese3388.com/?channel=BNCW87',
            text: '春茶直播',
            img: 'https://hd.cdn8-video.com/metoo.webp',
            description:'春茶直播，美女直播应有尽有',   
            hits:'7955'
        },
        {
            url: 'https://caomei75.cc/?channelCode=cm98',
            text: 'BB直播',
            img: 'https://image.wamd.xyz/wGPlwuna.gif',
            description:'BB直播，美女直播应有尽有',   
            hits:'88955'
        },
        {
            url: 'https://gs778.vip/?channelCode=QD-11-34',
            text: '私密直播',
            img: 'https://hd.cdn8-video.com/ouiytrewertyui.gif',
            description:'私密直播，美女直播应有尽有',   
            hits:'22955'
        },
        {
            url: 'https://caomei75.cc/?channelCode=cm98',
            text: '魅爱直播',
            img: 'https://hd.cdn8-video.com/x4.webp',
            description:'母女齐上，美女直播应有尽有',   
            hits:'6955'
        },
        {
            url: 'https://fq9023.cc/?channelCode=XS83',
            text: '蜻蜓直播',
            img: 'https://hd.cdn8-video.com/346fde.gif',
            description:'母女齐上，美女直播应有尽有',   
            hits:'69555'
        },  
        {
            url: 'https://xx.xc10.tv/?channelCode=yz18_2 ',
            text: '口爆中出',
            img: 'https://hd.cdn8-video.com/efwefw.gif',
            description:'母女齐上，美女直播应有尽有',   
            hits:'6955'
        },        
        {
            url: 'https://td1.yese3388.com/?channel=BNCW87',
            text: '春茶社区',
            img: 'https://hd.cdn8-video.com/shangmengyuepao.gif',
            description:'母女齐上，美女直播应有尽有',   
            hits:'63955'
        },  
        {
            url: 'https://caomei75.cc/?channelCode=cm98',
            text: '母女齐上',
            img: 'https://hd.cdn8-video.com/fgh567.gif',
            description:'母女齐上，美女直播应有尽有',   
            hits:'69655'
           
        },  
        {
            url: 'http://blwer05.com/?dc=bxza7605',
            text: '逼哩逼哩',
            img: 'https://rkbgtr.com:12299/images/bilibili.jpg',
            description:'逼哩逼哩，美女直播应有尽有',   
            hits:'33955'
        },  



    ],
    top2: [
        // {
        //     url: 'https://dfg22.xyz/?channelCode=zhou1',
        //     text: '制服诱惑',
        //     img: 'https://hd.cdn8-video.com/fdghjhgf.gif'
        // },
        
        
        
    ],
    top3: [
        // {
        //     url: 'https://dfg22.xyz/?channelCode=zhou1',
        //     text: '护士裸聊',
        //     img: 'https://hd.cdn8-video.com/dhjgkjjhs.gif'
        // },
         
    ]
}

var banner = [

]
var bottom = [
    // {
    //     url: '#',
    //     text1: '广告招租',
    //     text2: '广告招租',
    //     img: 'https://i.ibb.co/DkR3qVH/default.png',
    //     number: getRandomInt(1500, 2000)
    // },
    // {
    //     url: 'https://dfg22.xyz/?channelCode=zhou1',
    //     text1: '高潮喷水',
    //     text2: '上万免费直播间任你挑选,主播可约',
    //     img: 'https://hd.cdn8-video.com/fjfkjgkhl.gif',
    //     number: getRandomInt(1500, 2000)
    // },
    
]

for (let index = 1; index < 4; index++) {
    name = 'top'+ index;
    renderTop(topgg, name)
}

var str_html=''
banner.forEach(element => {
    str_html += '<div class="need_grid_img" onclick="window.open(\''+element.url+'\', \'_blank\')" style=" background: url('+element.img+')  no-repeat 50% 50% #f2f2f2; background-size: cover;"> </div>';
});
$('#slider_app .swiper-wrapper').append(str_html);

var str_html_bottom =''
bottom.forEach(element => {
    str_html_bottom += '<a href="javascript:void(0);" title="'+element.text1+'" class="item-wrap">'+
    '  <div class="img-wrap" onclick="window.open(\''+element.url+'\',\'_blank\')"> <img src="'+element.img+'" alt="'+element.text1+'" title="'+element.text1+'"> </div>'+
    '  <div class="content">'+
    '    <div class="row1">'+
    '      <div class="col-left">'+
    '        <div class="name" onclick="window.open(\''+element.url+'\',\'_blank\')"> '+element.text1+' <span class="tj-wrap">推荐</span> </div>'+
    '        <div class="count"> '+element.number+' 万次进入     </div>'+
    '      </div>'+
    '      <div class="btn-wrap btn-download" data-ioslink="'+element.url+'" data-androidlink="'+element.url+'"> <img src="static/picture/gl.gif" alt=""> 进入 </div>'+
    '    </div>'+
    '    <div class="desc">'+element.text2+'</div>'+
    '  </div>'+
    '</a>';
});
$('#bottom').append(str_html_bottom);

function renderTop(top, name) {
    var str_html = ''
    var arr = top[name]
    arr.forEach(element => {
        str_html +='<div class="item tline">'+
            '<div class="left icon">'+
                '<img src="'+element.img+'">'+
            '</div>'+
            '<div class="middle">'+
                '<p class="title">'+element.text+'</p>'+
                '<p class="description">'+element.description+'</p>'+
            '</div>'+
            '<div class="right">'+
                '<p class="title">下载:<span>'+element.hits+'</span></p>'+
                '<p class="platform">'+
                    '<a  href="'+element.url +'" target="_blank" class="download-btn">立即下载</a>'+
                '</p>'+
            '</div>'+
        '</div>';

    });
    $(document).ready(function(){
        $('#'+name).append(str_html);
    });
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

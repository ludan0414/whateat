function whoami(){
    try{
        var ipaddr = window.ipJson.ip;
        if (window.ua.search("22021211RC")!==-1 || ipaddr.search('42.200.')!==-1){
            return 'zjx';
        }
        if (ipaddr.search("66.249.")!==-1 || ipaddr.search('114.246.')!==-1 || ipaddr.search("183.172.")!==-1){
            return 'jtl';
        }
        if (window.ua.search("iPhone OS 17_6_1")!==-1){
            return 'czx';
        }
        if (ipaddr.search("58.247.")!==-1 || window.ua.search('22041211AC')!==-1){
            return 'rxx';
        }
        if (ipaddr.search("120.244.")!==-1 || window.ua.search('PJE')!==-1){
            return 'ludan';
        }
    }
    catch(err){}
    return 'unidentified';
}
function send(ac){
    if (whoami() == 'ludan'){
        return;
    }
    var reader = AV.Object.extend('whateat');
    var reder = new reader();
    reder.set('remark',whoami());
    reder.set('action',ac);
    reder.save();
}
var contextMenuItem={
    "id":"pinny",
    "title":"pin",
    "contexts":["selection"]
};
chrome.runtime.onInstalled.addListener(() =>{
    chrome.contextMenus.create(contextMenuItem);
})
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.selectionText){
        chrome.storage.sync.get(['total','list1'],function(textx){
            var newtotal=0;
            var newlist=[]
            if(textx.list1){
                newtotal=parseInt(textx.total)+1;
                newlist=textx.list1;
}
            newlist.push(clickData.selectionText);
            chrome.storage.sync.set({'total':newtotal,'list1':newlist},function(){               
                var notifOptions = {
                type: "basic",
                iconUrl: "icon48.png",
                title: "Added",
                message: "Successfully Added"
                };
                chrome.notifications.create('Add', notifOptions);
            });
})
}});

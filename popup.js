$(function(){
      chrome.storage.sync.get(['total','list1'],function(pin){
        var rowIdx=0
      if(pin.list1){$.each( pin.list1, function( key, value ){
        if(value.includes('.jpg') || value.includes('.jpeg') || value.includes('.gif') ||value.includes('.png') ||value.includes('image')) {
      $('#addedtasklist').append(`<tr id="R${++rowIdx}">
      <td class="text-center row-index"> 
      <p><b>${rowIdx}.</b></p></td> 
        <td class="row-index text-center scrollable" contenteditable="false"> 
              <a href="${value}" target="_blank" ><img src='${value}'"></img></a><br>
              </td> 
        <td class="row-index text-center"><i class="material-icons id="deli${rowIdx}"">delete</i></td>
         </tr>`);
       }
       else if(value.includes('.pdf') ||value.includes('.ppt') || value.includes('.doc')||value.includes('youtu.be') ||value.includes('https')||value.includes('http')){
        $('#addedtasklist').append(`<tr id="R${++rowIdx}">
        <td class="text-center row-index"> 
        <p><b>${rowIdx}.</b></p></td> 
        <td class="row-index text-center scrollable" contenteditable="false"> 
        <a href="${value}" target="_blank" >${value}</a><br>
        </td> 
          <td class="row-index text-center"><i class="material-icons id="deli${rowIdx}"">delete</i></td>
           </tr>`);
       }
      else{
        $('#addedtasklist').append(`<tr id="R${++rowIdx}">
      <td class="text-center row-index"> 
      <p><b>${rowIdx}.</b></p></td> 
        <td class="row-index text-center scrollable" contenteditable="false"> 
              <p> ${value}</p></td> 
        <td class="row-index text-center"><i class="material-icons id="deli${rowIdx}"">delete</i></td>
         </tr>`);
      } })
      }});

// ADD TASK BUTTON
      $("#addtaskbtn").click(function(){
        chrome.storage.sync.get(['total','list1'],function(pin){
        data=$("#addtaskinput").val();
        l=pin.list1.length
        pin.list1[l]=data;
        chrome.storage.sync.set({'list1':pin.list1})
        console.log(pin.list1)
        $("#addtaskinput").val('')  
        location.reload();
        })});

// DELETE PARTICULAR ENTRY
      $(function(){
        $('i').click(function(){
          // console.log('hello');
          id=$(this).parent().parent().attr('id');
          // console.log(id);
          key=parseInt(id.slice(1));
          chrome.storage.sync.get(['total','list1'] ,function(pin){
          // console.log(pin.list1)
          // console.log(key);
          pin.list1.splice(key-1,1);
          chrome.storage.sync.set({'list1':pin.list1});
          location.reload();
          });
          });
        });

// DELETE ALL ENTRY
        $("#deleteallbtn").click(function(){
          $('table').empty();
          chrome.storage.sync.set({'total':0,'list1':[]})
          });


        
});

// $(function(){
//   $("#deleteallbtn").click(function(){
//     $('table').empty();
//     chrome.storage.sync.set({'total':0,'list1':[]})
//   })
// });

// // $('i').click(function(){console.log('hello')});


// // $(function(){
// //   $("#addtaskbtn").click(function(){
// //     chrome.storage.sync.get(['total','list1'],function(pin){
// //     data=$("#addtaskinput").val();
// //     l=pin.list1.length
// //     pin.list1[l]=data;
// //     chrome.storage.sync.set({'list1':pin.list1})
// //     console.log(pin.list1)
// //     $("#addtaskinput").val('')  
// //     location.reload();
// //     })})});

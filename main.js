(function() {
  'use strict';

  var listEl = document.querySelector('#list');

  var books = [
    {title: 'Emma', year: 1815, author: 'Jane Austen'},
    {title: 'Jane Eyre', year: 1847, author: 'Charlotte Brontë'},
    {title: 'Wuthering Heights', year: 1847, author: 'Emily Brontë'},
  ];

  function appendListItem (text) {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(text));
    listEl.appendChild(entry);
  }

  //================================
  // Your code here


  for (var i = 0; i < books.length; i++){
    var temp = books[i];
   // list.append('<li>'+ temp+'</li>');
    appendListItem(books[i].title + ' by ' +  books[i].author + ' (' + books[i].year +')');
    console.log(temp);
    //console.log(books.title[1]);
  }

 
 

  

  //================================

}());

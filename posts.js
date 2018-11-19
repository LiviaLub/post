$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    dataType: 'json',
    success: function(data) {
        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + data[i].id + '</td><td>' + data[i].userId + '</td><td>' + data[i].title + '</td><td>' + data[i].body + '</td></tr>');
            $('#myTable').append(row);
        }
    },
    error: function(){
        alert('Error!!');
    }
});

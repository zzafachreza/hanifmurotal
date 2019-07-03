
 $(document).ready(function(){
    $('.modal').modal();
     $('.tabs').tabs();
     

     $.getJSON('http://web.fachreza-maulana.com/index.php', { get_param: 'value' }, function(data) {
        $.each(data, function(index, element) {     
            /* mengisikan table dari hasil json */
            // alert(element.id);
            $('#tabledata').find('tbody')
                .append($('<tr>')
                        .append(
                            '<td>'+element.surah+' - <b>'+element.qari+'</b>'+
                            '<br/><audio controls><source src="'+element.link+'" type="audio/mpeg"></audio></td>'
                        )
                );
        });
    });

  });


function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tabledata").style.display ='none';
                document.getElementById("txtHint").innerHTML = this.responseText;

            }
        };
        xmlhttp.open("GET", "http://web.fachreza-maulana.com/list.php?q=" + str, true);
        xmlhttp.send();
    }
}




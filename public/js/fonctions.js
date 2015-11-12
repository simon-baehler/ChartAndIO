/**
 * Created by Simon on 20/10/2015.
 */

function add_subject() {
  $("#add_subject").click(function () {
    var text = document.getElementById("nom").value;
    console.log(text);
    if(text != "")
      $('.table.table.table-hover tbody').append("<tr> <td>"+text+"</td><td>supprimer</td></tr>");
  });
}
function alert_btn() {
  $("#alert").click(function () {
    alert("alert");
  });
}

$(document).ready(function () {


  // Bouton alert
  add_subject();
  // Bouton toggle
  alert_btn();

})

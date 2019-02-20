
$(function(){
  alert('Alerta!');
  $(li).on('click',() => {
    alert("You've found one 'li'!");
    if($(this).is('.shiny'))
    {
      alert("and You've found the shiny one!");
    }
  })
});
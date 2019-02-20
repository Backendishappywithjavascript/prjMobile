
$(() => {
  $('li').on('click',() => {
    alert("You've found a 'li'!");
    if($(this).is(".shiny"))
    {
      alert("and You've found the shiny one!");
    }
  })
});
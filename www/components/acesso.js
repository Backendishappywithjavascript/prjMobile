
$(() => {
  
  $('li').on('click',() => {
    alert("You've found a 'li'!");
  })

  $('li.shiny').on('click',() => {
    alert("and is a shiny one!")
  })
});
$(function () {
    // New burger function
    $('.create-burger').on('submit', (event) => {
      event.preventDefault()
  
      let newBurger = {
        burger_name: $('#burger-name').val().trim(),
        devoured: false
      }
  
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
      }).then(function() {
        console.log('New Burger Created')
        location.reload()
      })
    })
  
    // Function that will update burger's devoured status from False to True
    $('.change-status').on('click', function(event) {
      let id = $(this).data('id')
      console.log(this);
          newValue = {
            devoured: true
          }
  
      // $.ajax('/api/burgers/' + id, {
      //   type: 'PUT',
      //   data: newValue
      // }).then(function () {
      //   console.log('Nom Nom Nom')
      //   location.reload()
      // })
    })  
  })
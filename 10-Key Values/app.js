const keyValue = document.querySelector('#key_value')
const eventKey = document.querySelector("#event_key")
const eventLocation = document.querySelector('#event_location')
const eventWhich = document.querySelector("#event_which")
const eventCode = document.querySelector("#event_code")
const locationText = document.querySelector('#location_text')

window.addEventListener('keydown', update)

function update(e) {
   keyValue.innerHTML = e.keyCode
   eventKey.innerHTML = e.key
   eventLocation.innerHTML = e.location
   eventWhich.innerHTML = e.which
   eventCode.innerHTML = e.code

   if(e.location == 0)
   {
       locationText.innerHTML = "(General Keys)"

   }else if(e.location == 1)
   {
       locationText.innerHTML = "(Left-side modifier keys)"
   }else
   {
       locationText.innerHTML = "(Right-side modifier keys)"

   }
}
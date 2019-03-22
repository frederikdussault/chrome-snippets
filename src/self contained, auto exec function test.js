/*
self contained, auto exec function test
*/

(function () {
  console.log("wrapper autoexec test - adUtility:", { adUtility })

  var a = 0

  document.addEventListener('auAfterSlotDisplayed', function (e) {
    a++
    console.log("wrapper autoexec test - e:", { e }, "a = " + a)

    console.log(
      'wrapper: assign bid request: ' +
      ' \ne.detail.id: ' + e.detail.id +
      ' \ne.detail.name: ' + e.detail.name +
      ' \ne.detail.size: ' + e.detail.size +
      ' \ne.detail.type: ' + e.detail.type +
      ' \ne.detail.slot.slot: ' + e.detail.slot.slot
    )
  })
})()
$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  var $homeLinks = $('.home-jump-link')
  var $homeSections = $('.home-section-heading')

  function getScrollOffset () {
    var nav = document.querySelector('.navbar.fixed-top') || document.querySelector('#mainNav')
    var navHeight = nav ? nav.getBoundingClientRect().height : 0

    return Math.ceil(navHeight + 24)
  }

  function updateSectionOffsets () {
    var offset = getScrollOffset()

    $homeSections.css('scroll-margin-top', offset + 'px')
  }

  function scrollToSection (target) {
    var offset = getScrollOffset()
    var targetTop = target.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    })
  }

  $homeLinks.on('click', function (event) {
    var hash = this.getAttribute('href')
    var target = hash ? document.querySelector(hash) : null

    if (!target) {
      return
    }

    event.preventDefault()
    scrollToSection(target)

    if (history.pushState) {
      history.pushState(null, '', hash)
    }
  })

  updateSectionOffsets()
  $(window).on('resize', updateSectionOffsets)
})

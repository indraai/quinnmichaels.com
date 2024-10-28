"use strict"

console.log('WELCOME TO QUINN\'S SINGING BOWL STUDIO')
$('[data-video]').on('click', (e) => {
  e.preventDefault();
  const url = `https://www.youtube.com/embed/${e.target.dataset.video}`;
  $('#VideoViewer .videowrapper iframe').attr('src', url);
  $('#VideoViewer').addClass('open');
  $('.videos').addClass('hidden');
});

$('#VideoViewer .close-button').on('click', (e) => {
  $('.videos').removeClass('hidden');
  $('#VideoViewer').removeClass('open');
  $('#VideoViewer .videowrapper iframe').attr('src', '');
});

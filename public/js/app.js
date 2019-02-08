// Global Variables
var numberPage = $('.number-page');
var ProjectName = $('.ProjectName');
var yearText = $('.text-container-inner-plus');
var img1 = $('.img-inner1');
var img2 = $('.img-inner2');
var img3 = $('.img-inner3');
var textInner = $('.text-container-inner ');
var btn1 = $('.under-1');
var btn2 = $('.under-2');

// Project Content
var project1 = {
  name: 'Frameless Shower Doors',
  imgs: [
    'public/images/gallery/frameless/01.jpg',
    'public/images/gallery/frameless/02.jpg',
    'public/images/gallery/frameless/03.jpg',
    'public/images/gallery/frameless/04.jpg',
    'public/images/gallery/frameless/05.jpg',
    'public/images/gallery/frameless/06.jpg'
  ],
  text:
    'Glass frameless shower doors complete the looks of bathrooms with a luxurious touch. Bathrooms are used for a range of purposes, such as showering, shaving, brushing, bathing and even application of makeup, making it a necessity to have a luxurious and relaxing atmosphere in this important room of any home. It is no wonder bathrooms are considered the most important, not just by the ancient Romans, but also every household globally.'
};

var project2 = {
  name: 'Framed Shower Doors',
  imgs: [
    'public/images/gallery/framed/01.jpg',
    'public/images/gallery/framed/02.jpg',
    'public/images/gallery/framed/03.jpg',
    'public/images/gallery/framed/04.jpg',
    'public/images/gallery/framed/05.jpg',
    'public/images/gallery/framed/06.jpg'
  ],
  text:
    'We install glass doors that are framed. Aluminium or steel metals are used to frame thin glass used to make shower doors in order to reinforce their strength and provide support. Unlike frameless glass doors, those that are framed are attractive, and very stylish. We guarantee top notch craftsmanship for all kind of installations involving either frameless or framed glass designs. We handle a wide selection of framed shower enclosures. We offer glass custom shower door installation and shower door replacement in Dallas Fort-Worth Metroplex.'
};
var project3 = {
  name: 'Mirrors',
  imgs: [
    'public/images/gallery/mirrors/01.jpg',
    'public/images/gallery/mirrors/02.jpg',
    'public/images/gallery/mirrors/03.jpg',
    'public/images/gallery/mirrors/04.jpg',
    'public/images/gallery/mirrors/05.jpg',
    'public/images/gallery/mirrors/06.jpg'
  ],
  text:
    'Mirrors provide an excellent way of giving homes and businesses a unique yet exciting look. At Imperial Glass TX, we do not just sell custom mirrors, but also frame them as desired by a client. Decorative mirrors can make interior spaces appear brighter and bigger due to light reflections. We give the interior spaces of residential homes a fresh and clean look with a modern touch using any of the various mirrors we design.'
};
var project4 = {
  name: 'Windowds',
  imgs: [
    'public/images/gallery/mirrors/01.jpg',
    'public/images/gallery/mirrors/02.jpg',
    'public/images/gallery/mirrors/03.jpg',
    'public/images/gallery/mirrors/04.jpg',
    'public/images/gallery/mirrors/05.jpg',
    'public/images/gallery/mirrors/06.jpg'
  ],
  text:
    'We provide any type of custom glass window. Our scope ranges from small residential apartments to large scale public buildings, consistently maintaining our commitment to service.Our products can be tailored to meet standards for code compliance, Passive House (high energy efficiency) certification, fire safety codes, sound reduction, and more. With a vast stock of parts and years of expertise, we can repair any type of glass window or door in the DFW'
};
var project5 = {
  name: 'Glass Railing Systems',
  imgs: [
    'public/images/gallery/railings/01.jpg',
    'public/images/gallery/railings/02.jpg',
    'public/images/gallery/railings/03.jpg',
    'public/images/gallery/railings/04.jpg',
    'public/images/gallery/railings/05.jpg',
    'public/images/gallery/railings/06.jpg'
  ],
  text:
    'At Imperial Glass TX, we take pride in creating both modular and custom glass railings, meeting the established structural requirements. Whether you are looking for decorating your residential or commercial space, we are specialists in designing and installing structural glass railings, aluminum railings, and stainless steel railings.'
};
var project6 = {
  name: 'Commercial Wall Mirrors',
  imgs: [
    'public/images/gallery/comirrors/01.jpg',
    'public/images/gallery/comirrors/02.jpg',
    'public/images/gallery/comirrors/03.jpg',
    'public/images/gallery/comirrors/04.jpg',
    'public/images/gallery/comirrors/05.jpg',
    'public/images/gallery/comirrors/06.jpg'
  ],
  text:
    'In addition to our residential glass services, Imperial Glass TX. is also pleased to be the DFW area’s mirror company. We’re available to provide businesses with custom-cut mirrors for bathrooms, workout facilities, and so much more.Offering myriad options and completely customized shapes and dimensions, our team can help you get exactly what you need in mirrors cut to size. Whether you’re interested in repairing damaged glass front doors, installing glass partitions in your up-and-coming business, or investing in intensive renovations, you can count on the Imperial Glass TX team for excellent craftsmanship and comprehensive customer service.'
};
var project7 = {
  name: 'Commercial Front Doors',
  imgs: [
    'public/images/gallery/doors/01.jpg',
    'public/images/gallery/doors/02.jpg',
    'public/images/gallery/doors/03.jpg',
    'public/images/gallery/doors/04.jpg',
    'public/images/gallery/doors/05.jpg',
    'public/images/gallery/doors/06.jpg'
  ],
  text:
    'Whether you’re interested in repairing damaged glass front doors, installing glass partitions in your up-and-coming business, or investing in intensive renovations, you can count on the Imperial Glass TX team for excellent craftsmanship and comprehensive customer service. Our glass company has been proudly assisting business owners throughout the DFW area since 2001, and we will work hard to ensure that our services are tailored to perfectly match your needs. Our essential blend of creativity and skill is just what you need to plan and execute your commercial glass installations and repairs.'
};

// The next function set new values of every project through a hover event
function setNewValues(project) {
  $('.overlay-content-section').empty();

  var projectName = $('<h2>')
    .text(project.name)
    .addClass('ProjectName');

  var textContent = $('<p>')
    .text(project.text)
    .addClass('text-container-inner mt-1 mb-4');

  var gallery = $('<div>').addClass('gallery');
  var row = $('<div>').addClass('row');
  var column1 = $('<div>').addClass('column');
  var column2 = $('<div>').addClass('column');
  var column3 = $('<div>').addClass('column');
  var img1 = $('<img>')
    .attr('src', project.imgs[0])
    .attr('alt', project.name);
  var img2 = $('<img>')
    .attr('src', project.imgs[1])
    .attr('alt', project.name);
  var img3 = $('<img>')
    .attr('src', project.imgs[2])
    .attr('alt', project.name);
  var img4 = $('<img>')
    .attr('src', project.imgs[3])
    .attr('alt', project.name);
  var img5 = $('<img>')
    .attr('src', project.imgs[4])
    .attr('alt', project.name);
  var img6 = $('<img>')
    .attr('src', project.imgs[5])
    .attr('alt', project.name);
  column1.append(img1, img2);
  column2.append(img3, img4);
  column3.append(img5, img6);
  row.append(column1, column2, column3);
  gallery.append(row);

  showImgToggle = $('<a>')
    .attr('id', 'btn-display')
    .attr('href', '#')
    .text('Show Images');

  $('.overlay-content-section').append(
    projectName,
    textContent,
    gallery,
    showImgToggle
  );
}

$('.menu__link1').hover(function() {
  setNewValues(project1);
});

$('.menu__link2').hover(function() {
  setNewValues(project2);
});

$('.menu__link3').hover(function() {
  setNewValues(project3);
});

$('.menu__link4').hover(function() {
  setNewValues(project4);
});
$('.menu__link5').hover(function() {
  setNewValues(project5);
});
$('.menu__link6').hover(function() {
  setNewValues(project6);
});
$('.menu__link7').hover(function() {
  setNewValues(project7);
});

// The next funciton display images of every project through a click event
function displayImages() {
  event.preventDefault();
  if ($('.gallery').is(':visible'))
    $('.gallery').hide(), $('#btn-display').text('Show Images');
  else $('.gallery').show(), $('#btn-display').text('Hide Images');
}
$(document).on('click', '#btn-display', displayImages);

// The next function is activated once a email request is send it and the server has receive it.
$('#contact-form').submit(event => {
  event.preventDefault();
  if ($('[name="name"]').val() == '') {
    alert('Please enter your Full Name');
  } else if ($('[name="email"]').val() == '') {
    alert('Please enter your a valid email');
  } else if ($('[name="message"]').val() == '') {
    alert('Please enter your message');
  } else {
    const newContact = {
      name: $('[name="name"]')
        .val()
        .trim(),
      email: $('[name="email"]')
        .val()
        .trim(),
      subject: $('[name="subject"]')
        .val()
        .trim(),
      message: $('[name="message"]')
        .val()
        .trim()
    };

    $.post('/send', newContact).done(function(data) {
      if (data) {
        $('[name="name"]').val(''),
          $('[name="email"]').val(''),
          $('[name="subject"]').val(''),
          $('[name="message"]').val('');
        $('#myModal').modal('toggle');
        $('#modalBody').text(
          'Dear ' +
            data.name +
            ', thank you for contact us, we have received your menssage. As early as possible we will get back to you.'
        );
      }
    });
  }
});

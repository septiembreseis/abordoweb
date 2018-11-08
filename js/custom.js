        var stepper = function () {
  var stepperNumber,
      minusButton;
  
  return {
    
    allSteppers: $( '.input-stepper' ),
  
    // check to see if the input is at '0'...
    checkStepperNumber: function ( thisStepper ) {
      stepperInput = $( thisStepper ).find( 'input' );
      stepperNumber = stepperInput.val();
      decrementButton = $( thisStepper ).find( 'button.minus' );

      if ( stepperNumber === '0' || stepperNumber <= 0 ) {
        // if so, disable the minus button. 
        decrementButton.prop( 'disabled', true );
        stepperInput.val( 0 );
      } else {
        // if number is positive, enable the minus button
        decrementButton.prop( 'disabled', false );
      }

    },

    init: function () {
      stepper.allSteppers.each( function ( index, element ) {
        var thisStepperInput = $( element ).find( 'input' );
        var thisMinusButton = $( element ).find( 'button.minus' );

        if ( thisStepperInput.val() === '0' || thisStepperInput.val() <= 0 ) {
          thisMinusButton.prop( 'disabled', true );
          thisStepperInput.val( 0 );
        } else {
          // if number is positive, enable the minus button
          thisMinusButton.prop( 'disabled', false );
        }
      });
    }
    
  }
}();

// on button.plus click ...
$( '.input-stepper button.plus' ).on( 'click', function ( e ) {
  thisStepper = $( e.target ).closest( '.input-stepper' );
  stepperInput = thisStepper.find( 'input' );
  
  // check the input value
  stepperNumber = stepperInput.val();
  
  // increment the input value
  stepperNumber++;
  stepperInput.val( stepperNumber );
  
  // then check the stepper number
  stepper.checkStepperNumber( thisStepper );
});

// on button.minus click ...
$( '.input-stepper button.minus' ).on( 'click', function ( e ) {
  thisStepper = $( e.target ).closest( '.input-stepper' );
  stepperInput = thisStepper.find( 'input' );
  
  // check the input value
  stepperNumber = stepperInput.val();
  
  // decrement the input value
  stepperNumber--;
  stepperInput.val( stepperNumber );
  
  // then check the stepper number
  stepper.checkStepperNumber( thisStepper );
});

// on input field blur ...
$( '.input-stepper input' ).on( 'blur', function ( e ) {
  thisStepper = $( e.target ).closest( '.input-stepper' );
  // check the stepper number
  stepper.checkStepperNumber( thisStepper );
});

// check the stepper number on load
if ( $( '.input-stepper' ).length ) {
  stepper.init();
 }



$('.pop-pasajeros').click(function()
            {   
                $(".suma-pasajeros").toggle();     
            });
    
        $(".suma-pasajeros").toggle(function() {
                $(this).css('display','inherit');
            }, function() {
                $(this).css('display','none');
            });

    
        $(document).ready(function(){
            $(".suma-pasajeros").css('display','none');
            $("p").click(function(){
                $(this).toggleClass("highlight");
                
            });
        });
        $(document).ready(function() {
          $(function() {
            $('.datepicker').datepicker({
              dateFormat: 'D, M d, yy',
              showButtonPanel: false,
              changeMonth: false,
              changeYear: false,
              /*showOn: "button",
              buttonImage: "images/calendar.gif",
              buttonImageOnly: true,
              minDate: '+1D',
              maxDate: '+3M',*/
              inline: true
            });
          });
          $.datepicker.regional['es'] = {
            closeText: 'Cerrar',
            prevText: '<Ant',
            nextText: 'Sig>',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juev', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
          };
          $.datepicker.setDefaults($.datepicker.regional['es']);
        });

function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.opacity = '1';
    }
    else document.getElementById('ifYes').style.opacity = '0';
}

function yesno2Check() {
    if (document.getElementById('yes2Check').checked) {
        document.getElementById('ifYes2').style.opacity = '1';
    }
    else document.getElementById('ifYes2').style.opacity = '0';
}

function yesno3Check() {
    if (document.getElementById('yes3Check').checked) {
        document.getElementById('ifYes3').style.opacity = '1';
    }
    else document.getElementById('ifYes3').style.opacity = '0';
}

function yesno4Check() {
    if (document.getElementById('yes4Check').checked) {
        document.getElementById('ifYes4').style.opacity = '1';
    }
    else document.getElementById('ifYes4').style.opacity = '0';
}

   $(function() {
        $('#destinovan').change(function(){
            $('.seguro').hide();
            $('#' + $(this).val()).show();
        });
    });

                var placeholderText = {
                    "Autobús": "Escribe tu código de reservación",
                    "Renta de vehículo (van)": "Escribe tu número de contrato",
                    "Paquetería": "Escribe tu código de rastreo"
                };

                $("#tipoServicio").on("change", function () {

                    if (this.value != -1) {
                        $("#codreserv").val(placeholderText[$("#tipoServicio option:selected").text()]);
                    } else {
                        $("#codreserv").val("");
                    }

                });



var chicago = new google.maps.LatLng(41.850033, -87.6500523);




function ZoomControl(controlDiv, map) {
  

  controlDiv.style.padding = '5px';


  var controlWrapper = document.createElement('div');
  controlWrapper.style.backgroundColor = 'white';
  controlWrapper.style.borderStyle = 'solid';
  controlWrapper.style.borderColor = 'gray';
  controlWrapper.style.borderWidth = '1px';
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.textAlign = 'center';
  controlWrapper.style.width = '32px'; 
  controlWrapper.style.height = '64px';
  controlDiv.appendChild(controlWrapper);
  

  var zoomInButton = document.createElement('div');
  zoomInButton.style.width = '32px'; 
  zoomInButton.style.height = '32px';

  zoomInButton.style.backgroundImage = 'url("http://placehold.it/32/00ff00")';
  controlWrapper.appendChild(zoomInButton);
    

  var zoomOutButton = document.createElement('div');
  zoomOutButton.style.width = '32px'; 
  zoomOutButton.style.height = '32px';

  zoomOutButton.style.backgroundImage = 'url("http://placehold.it/32/0000ff")';
  controlWrapper.appendChild(zoomOutButton);


  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });
    

  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });  
    
}


function initialize() {
  var mapDiv = document.getElementById('map');
    
  var mapOptions = {
    zoom: 10,
    center: chicago,

    disableDefaultUI: true,

  }
  
  map = new google.maps.Map(mapDiv, mapOptions);


  var zoomControlDiv = document.createElement('div');
  var zoomControl = new ZoomControl(zoomControlDiv, map);

  zoomControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);
}

initialize();
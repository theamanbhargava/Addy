$(window).load(initMap = function(){
               
               var geocoder;
               var map;
               var marker;
               
               codebackconvert = function(d)
               {
               return parseInt(d, 36);
               }
               
               codeconvert = function(d)
               {
               return (+d).toString(36).toUpperCase();
               }
               
               codeAddress = function () {
               geocoder = new google.maps.Geocoder();
               
               var address = document.getElementById('namesearch').value;
               geocoder.geocode( { 'address': address}, function(results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                map = new google.maps.Map(document.getElementById('maparea'), {
                                                          zoom: 8,
                                                          scaleControl: true,styles: [
                                                                                      {
                                                                                      "elementType": "geometry",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#ebe3cd"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "elementType": "labels.text.fill",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#523735"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "elementType": "labels.text.stroke",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#f5f1e6"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "administrative",
                                                                                      "elementType": "geometry.stroke",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#c9b2a6"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "administrative.land_parcel",
                                                                                      "elementType": "geometry.stroke",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#dcd2be"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "administrative.land_parcel",
                                                                                      "elementType": "labels.text.fill",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#ae9e90"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "landscape.natural",
                                                                                      "elementType": "geometry",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#dfd2ae"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "poi",
                                                                                      "elementType": "geometry",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#dfd2ae"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "poi",
                                                                                      "elementType": "labels.text.fill",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#93817c"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "poi.park",
                                                                                      "elementType": "geometry.fill",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#a5b076"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "poi.park",
                                                                                      "elementType": "labels.text.fill",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#447530"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "road",
                                                                                      "elementType": "geometry",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#f5f1e6"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "road.arterial",
                                                                                      "elementType": "geometry",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#fdfcf8"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "road.highway",
                                                                                      "elementType": "geometry",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#f8c967"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "road.highway",
                                                                                      "elementType": "geometry.stroke",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#e9bc62"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "road.highway.controlled_access",
                                                                                      "elementType": "geometry",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#e98d58"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "road.highway.controlled_access",
                                                                                      "elementType": "geometry.stroke",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#db8555"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "road.local",
                                                                                      "elementType": "labels.text.fill",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#806b63"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "transit.line",
                                                                                      "elementType": "geometry",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#dfd2ae"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "transit.line",
                                                                                      "elementType": "labels.text.fill",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#8f7d77"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "transit.line",
                                                                                      "elementType": "labels.text.stroke",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#ebe3cd"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "transit.station",
                                                                                      "elementType": "geometry",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#dfd2ae"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "water",
                                                                                      "elementType": "geometry.fill",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#b9d3c2"
                                                                                                  }
                                                                                                  ]
                                                                                      },
                                                                                      {
                                                                                      "featureType": "water",
                                                                                      "elementType": "labels.text.fill",
                                                                                      "stylers": [
                                                                                                  {
                                                                                                  "color": "#92998d"
                                                                                                  }
                                                                                                  ]
                                                                                      }
                                                                                      ],
                                                          streetViewControl: true,
                                                          mapTypeControlOptions: {
                                                          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                                                          mapTypeIds:[google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP]
                                                          },
                                                          center: results[0].geometry.location,
                                                          mapTypeId: google.maps.MapTypeId.ROADMAP
                                                          });
                                
                                map.setCenter(results[0].geometry.location);
                                marker = new google.maps.Marker({
                                                                map: map,
                                                                position: results[0].geometry.location,
                                                                draggable: true,
                                                                title: 'drag'
                                                                });
                                updateMarkerPosition(results[0].geometry.location);
                                updateaddycode(results[0].geometry.location);
                                geocodePosition(results[0].geometry.location);
                                
                                google.maps.event.addListener(marker, 'dragstart', function() {updateMarkerAddress('Finding');});
                                
                                google.maps.event.addListener(marker, 'drag', function() {updateMarkerPosition(marker.getPosition());updateaddycode(marker.getPosition());});
                                
                                google.maps.event.addListener(marker, 'dragend', function() {geocodePosition(marker.getPosition());map.panTo(marker.getPosition());});
                                
                                google.maps.event.addListener(map, 'click', function(e) {
                                                              updateMarkerPosition(e.latLng);
                                                              updateaddycode(e.latLng);
                                                              geocodePosition(marker.getPosition());
                                                              marker.setPosition(e.latLng);
                                                              map.panTo(marker.getPosition());
                                                              });
                                
                                } else {
                                alert('Error: ' + status);
                                }
                                });
               }
               
               function geocodePosition(pos) {
               geocoder.geocode({
                                latLng: pos
                                }, function(responses) {
                                if (responses && responses.length > 0) {
                                updateMarkerAddress(responses[0].formatted_address);
                                } else {
                                updateMarkerAddress('Cannot determine address at this location.');
                                }
                                });
               }
               
               function updateMarkerPosition(latLng) {
               
               document.getElementById('info').innerHTML = [
                                                            latLng.lat(),
                                                            latLng.lng()
                                                            ].join(', ');
               }
               
               
               
               function updateaddycode(latLng) {
               
               var latitude = latLng.lat();
               var longitude = latLng.lng();
               var lati = Math.round(latitude*100)+18000;
               var long = Math.round(longitude*100)+9000;
               var latcode = codeconvert(lati);
               var longcode = codeconvert(long);
               document.getElementById('addycode').innerHTML = [latcode,longcode].join('-');
               
               }
               
               function updateMarkerAddress(str) {
               document.getElementById('address').innerHTML = str;
               }
               
               
               back = function() {
               
               var backcode = document.getElementById('backcode').value;
               var backcode1 = backcode.substring(0,2);
               var backcode2 = backcode.substring(3,5);
               document.getElementById('namesearch').value = [(codebackconvert(backcode1)/10000)-180,(codebackconvert(backcode2)/10000)-90].join(', ');
               codeAddress();
               }
               });

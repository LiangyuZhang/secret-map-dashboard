import { TestBed, inject } from '@angular/core/testing';
import { ElementRef} from '@angular/core';
import { MapAreaComponent } from './map-area/map-area.component';
import { MapAreaDirective } from './map-area.directive';

describe('MapAreaDirective', () => {
  let element, fixture;

  // setup
  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [ MapAreaComponent, MapAreaDirective ]
      });
    fixture = TestBed.createComponent(MapAreaComponent);
    element = fixture.nativeElement;
  });

  it('should create an instance', () => {
    const directive = new MapAreaDirective(element);
    directive.beacons = [
      {
        'maxCount': 100,
        'minCount': 1,
        'y': 5,
        'x': 2,
        'beaconId': 'B01'
      }
    ];
    directive.booths = [
     {
        'contact': 'John Doe',
        'measurementUnit': 'metre',
        'description': 'Node description',
        'shape': {'y': 0, 'x': 0, 'width': 3, 'height': 3},
        'boothId': 'A01'
    }
   ];
    expect(directive).toBeTruthy();
  });

});

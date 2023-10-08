import { Component } from '@angular/core';
import { Listing } from './listing';
import { LISTINGS } from './mock_listings';

@Component({
    selector: 'app_listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.css']
  })

  export class ListingsComponent {
    listings = LISTINGS;
    selectedListing?: Listing;

    onSelect(listing: Listing): void {
        this.selectedListing = listing;
    }
  }

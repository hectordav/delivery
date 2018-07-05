import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
declare var google:any;


@IonicPage()
@Component({
  selector: 'page-autocomplete',
  templateUrl: 'autocomplete.html',
})
export class AutocompletePage {
	autocompleteItems;
	autocomplete;
	backPressed:any =false;
	loader:any;
	service= new google.maps.places.AutocompleteService();

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  	this.autocompleteItems = [];
		this.autocomplete = {
		query: ''
		}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutocompletePage');
  }
  updateSearch() {
      console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let self = this;
        let config = { 
          /*  types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'*/
            input: this.autocomplete.query, 
            componentRestrictions: { country: 'MX' } 
        }
        this.service.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            predictions.forEach(function (prediction) {
               self.autocompleteItems.push(prediction);
            });
        });
  }
  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }


}

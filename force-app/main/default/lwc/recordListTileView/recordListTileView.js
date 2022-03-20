import { LightningElement, wire, api, track } from 'lwc';
import getObjects from '@salesforce/apex/ServicesController.getObjects';
import { NavigationMixin } from "lightning/navigation";
import iconResource from '@salesforce/resourceUrl/ServiceIcons';

export default class RecordListTileView extends NavigationMixin( LightningElement) {

    @track redenderedObjectList = [];
    objectList;
    @track error;

    iconField = 'Logo__c';
    cardTitle = 'Name';
    objectApiName = 'Account';
    cardSubtitle = 'Phone';

    getListObjects(){
       
        getObjects(
            {iconField:this.iconField, cardTitle:this.cardTitle, objectApiName:this.objectApiName,cardSubtitle:this.cardSubtitle }
        )
            .then(result => {
                this.objectList = result;
                this.buildObjectList();	
            })
            .catch(error => {
                this.error = error;
            });
    }
   
    
    connectedCallback(){
        this.getListObjects();
    }

    handleClick(event) {
        event.preventDefault();
        event.stopPropagation();     
        this.navigateToRecordViewPage(event.target.dataset.recordId);
    }

    
    navigateToRecordViewPage(eventRecordId) {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId :eventRecordId ,
            objectApiName: this.objectApiName,
            actionName: 'view'
            }
        });
    }

    buildObjectList(){
        this.objectList.forEach(element => {
            this.redenderedObjectList.push({
                id: element.Id,
				title: element.Name,
				logo: iconResource+element.Logo__c,
                subtitle: element.Phone
            }
						
            );
        });
    }
	

}
public with sharing class ServicesController {

    @AuraEnabled(cacheable=true)
    public static List<SObject> getObjects(String iconField, String cardTitle, String objectApiName, String cardSubtitle){
        String query = 'SELECT Id,'+ cardTitle + ',' +  iconField +','+cardSubtitle +' FROM ' + objectApiName;
        return Database.query(query);
    }
}
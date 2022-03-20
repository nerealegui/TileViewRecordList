# Salesforce LWC Tile Menu

_Ready to use LWC Component to generate tile menus from Objects_


This tile menu is an example on how a tile menu can be created via a LWC to show a record list in Salesforce. You will be able to: 


- Create a tile menu for **Custom and Standard Objects**
- Associate a logo or image to each record.
- Have a ready to use LWC in Lightning pages.

<img width="1437" alt="image" src="https://user-images.githubusercontent.com/17240961/159176147-c47542d7-b19b-45b1-90f6-0321a751b587.png">


You can modify the _recordListTileView.js-meta.xml_ to enable the component in additional pages, the ones by default are the Home Page and Community Pages.
```
    <targets>
        <target>lightningCommunity__Default</target>
        <target>lightningCommunity__Page</target>
        <target>lightning__HomePage</target>
    </targets>
```


## Installation

Before starting make sure Lightning is enabled in your org.

Get the repository

```sh
git clone https://github.com/nereagit/TileViewRecordList
```

Deploy the components in your org, for this you should be authenticated with your target org.

```sh
sfdx auth:web:login --setdefaultdevhubusername --setalias my-hub-org 
sfdx force:source:deploy --manifest "<project-forder-path>/TileViewRecordList/manifest/package.xml" 
```

## Development

Want to contribute? Great!
Reach out or open a pull request in the project, any contribution is welcome!

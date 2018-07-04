<md-button class="md-icon-button" aria-label="Favorite"
           ng-click="deleteRecord($event,note,$index)">
    <span class="icon icon-trash"></span>
    <md-tooltip md-direction="right|bottom">Delete</md-tooltip>
</md-button>

<md-button class="md-icon-button" aria-label="Settings" ng-click="editRecord($event,note,$index)">
    <span class="icon icon-edit"></span>
    <md-tooltip md-direction="right|bottom">Update</md-tooltip>
</md-button>

<md-fab-speed-dial md-open="false" md-direction="right" class="md-scale">
    <md-fab-trigger>
        <md-button class="md-icon-button" aria-label="Share">
            <span class="icon icon-color"></span>
            <md-tooltip md-direction="right|bottom">Change color</md-tooltip>
        </md-button>
    </md-fab-trigger>
    <md-fab-actions>
        <md-button class="md-fab md-raised md-mini" ng-click="changeColor($event,note,'1')">
            <md-icon style="color: white">lens</md-icon>
            <md-tooltip>White</md-tooltip>
        </md-button>

        <md-button class="md-fab md-raised md-mini" ng-click="changeColor($event,note,'2')">
            <md-icon style="color: LightPink ">lens</md-icon>
            <md-tooltip>LightPink</md-tooltip>
        </md-button>

        <md-button class="md-fab md-raised md-mini" ng-click="changeColor($event,note,'3')">
            <md-icon style="color: PaleGreen  ">lens</md-icon>
            <md-tooltip>PaleGreen</md-tooltip>
        </md-button>

        <md-button class="md-fab md-raised md-mini" ng-click="changeColor($event,note,'4')">
            <md-icon style="color: darkgray ">lens</md-icon>
            <md-tooltip>DarkGray</md-tooltip>
        </md-button>
    </md-fab-actions>
</md-fab-speed-dial>

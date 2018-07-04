<div class="md-padding">
    <div layout="row" fxLayoutGap="20px" layout-wrap>

        <div ng-repeat="note in listnotes | filter:{ typenote: 2,active: 1}" ng-switch on="note.typenote" class="maxsirina">
            <md-card ng-switch-when="2">
                <img ng-src="{{note.textnote}}" class="md-card-image" alt="Picture">
                <md-card-actions layout="row" layout-align="start center">
                    <md-button class="md-icon-button" aria-label="Delete"
                               ng-click="deleteRecord($event,note,$index)">
                        <span class="icon icon-trash"></span>
                    </md-button>
                    <md-button class="md-icon-button" aria-label="Settings" ng-click="editRecord($event,note,$index)">
                        <span class="icon icon-edit"></span>
                    </md-button>
                    <md-button class="md-icon-button" aria-label="Share">
                        <span class="icon icon-color"></span>
                    </md-button>
                </md-card-actions>
            </md-card>

        </div>


        <div ng-show="!listnotes.length" flex> <!--ng-if="listnotes.length === 0"-->
            <div layout="row" layout-align="center">
                <img src="illustrations/notes-empty-state.svg" alt="Add note :)">
            </div>
        </div>
    </div>


</div>


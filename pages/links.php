<div class="md-padding">
    <div layout="row" fxLayoutGap="20px" layout-wrap>

        <div ng-repeat="note in listnotes | filter:{ typenote: 3,active: 1 }" ng-switch on="note.typenote" class="maxsirina">

            <md-card ng-switch-when="3">
                <md-card-actions layout="row" layout-align="start center">
                    <md-button ng-href="{{note.textnote}}" target="_blank">{{note.title}}</md-button>
                    <md-card-icon-actions>
                        <md-button ng-href="{{note.textnote}}" target="_blank" class="md-icon-button" aria-label="icon">
                            <span class="icon icon-new-tab"></span>
                        </md-button>
                    </md-card-icon-actions>
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


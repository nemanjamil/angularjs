<div class="md-padding">
    <div layout="row" fxLayoutGap="20px" layout-wrap>

        <div ng-repeat="note in listnotes | filter:{ typenote: 2,active: 1}" ng-switch on="note.typenote"
             class="maxsirina">


            <md-card
                ng-class="
                {
                'whitecss': note.color == 1,
                'lightpink': note.color == 2,
                'palegreen': note.color == 3,
                'darkgray': note.color == 4
                }"
                ng-switch-when="2"
                class="relativeclass"
                >
                <img ng-src="{{note.textnote}}" class="md-card-image" alt="Picture">

                <div class="positionofactionbutton">
                    <md-card-actions layout="row" layout-align="start center">
                        <?php
                        require("md-fab-speed-dial.php");
                        ?>
                        <!-- <md-button class="md-icon-button" aria-label="Delete"
                                    ng-click="deleteRecord($event,note,$index)">
                             <span class="icon icon-trash"></span>
                         </md-button>
                         <md-button class="md-icon-button" aria-label="Settings" ng-click="editRecord($event,note,$index)">
                             <span class="icon icon-edit"></span>
                         </md-button>
                         <md-button class="md-icon-button" aria-label="Share">
                             <span class="icon icon-color"></span>
                         </md-button>-->
                    </md-card-actions>
                </div>
            </md-card>

        </div>


        <div ng-show="!listnotes.length" flex> <!--ng-if="listnotes.length === 0"-->
            <div layout="row" layout-align="center">
                <img src="illustrations/notes-empty-state.svg" alt="Add note :)">
            </div>
        </div>
    </div>


</div>


<div class="md-padding">
    <div layout="row" fxLayoutGap="20px" layout-wrap>

        <div ng-repeat="note in listnotes | filter:{ typenote: 1,active : 1 }"  class="maxsirina">
            <md-card
                ng-class="
                {
                'whitecss': note.color == 1,
                'lightpink': note.color == 2,
                'palegreen': note.color == 3,
                'darkgray': note.color == 4
                }"
                ng-mouseenter="showelement($event)"
                ng-mouseleave="hideelement($event)">
                <md-card-title>
                    <md-card-title-text>
                        <span class="md-headline">{{note.title}}</span>
                    </md-card-title-text>
                </md-card-title>
                <md-card-content>
                    <p>{{note.textnote}}</p>
                </md-card-content>

                <md-card-actions layout="row" layout-align="start center" class="vidim stasakriti">
                    <?php
                    require("md-fab-speed-dial.php");
                    ?>
                </md-card-actions>
                <!--<md-card-actions layout="row" layout-align="start center" ng-style="disableTagButton"
                                 class="vidim stasakriti">
                    <md-button class="md-icon-button" aria-label="Favorite"
                               ng-click="deleteRecord($event,note,$index)">
                        <span class="icon icon-trash"></span>
                    </md-button>
                    <md-button class="md-icon-button" aria-label="Settings" ng-click="editRecord($event,note,$index)">
                        <span class="icon icon-edit"></span>
                    </md-button>
                    <md-button class="md-icon-button" aria-label="Share">
                        <span class="icon icon-color"></span>
                    </md-button>
                </md-card-actions>-->
            </md-card>
        </div>


        <div ng-show="!listnotes.length" flex> <!--ng-if="listnotes.length === 0"-->
            <div layout="row" layout-align="center">
                <img src="illustrations/notes-empty-state.svg" alt="Add note :)">
            </div>
        </div>
    </div>


</div>


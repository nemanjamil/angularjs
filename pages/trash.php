<?php
require_once('listdata.php');
?>
<div class="md-padding">
    <div layout="row" fxLayoutGap="20px" layout-wrap>

        <div ng-repeat="note in listnotes | filter:{ active: 0 }" ng-switch on="note.typenote" class="maxsirina">
            <md-card
                ng-class="
                {
                'whitecss': note.color == 1,
                'lightpink': note.color == 2,
                'palegreen': note.color == 3,
                'darkgray': note.color == 4
                }"
                ng-switch-when="2">
                <img ng-src="{{note.textnote}}" class="md-card-image" alt="Picture">

                <md-card-actions layout="row" layout-align="start center" layout-wrap>
                    <md-button flex="50" ng-click="backtoNodes($event,note)"">Send Back to nodes</md-button>
                    <md-button flex="40" ng-click="fullRemovefromNodes($event,note)">Remove</md-button>
                </md-card-actions>


            </md-card>
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
            <md-card
                ng-class="
                {
                'whitecss': note.color == 1,
                'lightpink': note.color == 2,
                'palegreen': note.color == 3,
                'darkgray': note.color == 4
                }"
                ng-switch-default>
                <md-card-title>
                    <md-card-title-text>
                        <span class="md-headline">{{note.title}}</span>
                    </md-card-title-text>
                </md-card-title>
                <md-card-content>
                    <p>{{note.textnote}}</p>
                </md-card-content>

                <md-card-actions layout="row" layout-align="start center" layout-wrap>
                    <md-button flex="50" ng-click="backtoNodes($event,note)"">Send Back to nodes</md-button>
                    <md-button flex="40" ng-click="fullRemovefromNodes($event,note)">Remove</md-button>
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


<section class="main">


    <section layout="row" layout-sm="column" layout-align="end center" layout-wrap>
        <div layout="row" layout-align="start center" flex>
            <h1 class="fs30">Notes <span>{{status}}</span></h1>
            <span flex></span>
        </div>
        <md-button class="md-raised butborrad" ng-click="showAdvanced($event)">Add New Note</md-button>



    </section>



        <div class="md-padding" layout-xs="column" layout="row">
            <div flex-xs flex-gt-xs="50" layout="column">
                <md-card ng-mouseover="showelement()" ng-mouseout="hideelement()" ng-repeat="note in listnotes | filter: { typenote: 1 }">
                    <md-card-title>
                        <md-card-title-text>
                            <span class="md-headline">{{note.title}}</span>
                        </md-card-title-text>
                    </md-card-title>
                    <md-card-content>
                        <p>{{note.textnote}}</p>
                    </md-card-content>
                    <md-card-actions layout="row" layout-align="start center" ng-style="disableTagButton">
                        <md-button class="md-icon-button" aria-label="Favorite" ng-click="deleteRecord(note)">
                            <span class="icon icon-trash"></span>
                        </md-button>
                        <md-button class="md-icon-button" aria-label="Settings" ng-click="editRecord(note)">
                            <span class="icon icon-edit"></span>
                        </md-button>
                        <md-button class="md-icon-button" aria-label="Share">
                            <span class="icon icon-color"></span>
                        </md-button>
                    </md-card-actions>
                </md-card>

            </div>

            <div flex-xs flex-gt-xs="50" layout="column">
                <md-card ng-style="{'position':'relative'}"  ng-repeat="note in listnotes | filter: { typenote: 2 }">
                    <img ng-src="{{imagePath}}" class="md-card-image" alt="Washed Out">

                    <div class="acctionButtonsAbs">
                        <md-card-actions layout="row" layout-align="start center">
                            <md-button class="md-icon-button" aria-label="Favorite">
                                <span class="icon icon-trash"></span>
                            </md-button>
                            <md-button class="md-icon-button" aria-label="Settings">
                                <span class="icon icon-edit"></span>
                            </md-button>
                            <md-button class="md-icon-button" aria-label="Share">
                                <span class="icon icon-color"></span>
                            </md-button>
                        </md-card-actions>
                    </div>
                </md-card>
            </div>

            <div flex-xs flex-gt-xs="50" layout="column">
                <md-card  ng-repeat="note in listnotes | filter: { typenote: 3 }">
                    <md-card-content>
                        <p><a href="">{{note.title}}</a></p>
                    </md-card-content>
                </md-card>
            </div>

        </div>


        <div>

            <div ng-view></div>

            <div>Input Name</div>
            <div><input ng-model="name" value="bar"> {{ name }}</div>

            <div>Customer Name</div>
            <div><input ng-model="newIme.name"></div>
            <div>Customer Age</div>
            <div><input ng-model="newIme.age"></div>
            <button ng-click="addCustomer()"> CLICK</button>


            <a href="Book/Moby">Moby</a> |
            <ul class="example-animate-container">
                <li class="animate-repeat" ng-repeat="friend in friends">
                    {{friend.name}} is {{friend.age}} years old.
                </li>
                <li ng-if="results.length === 0">
                    <strong>No results found...</strong>
                </li>
            </ul>

             <ul class="example-animate-container">
                 <li class="animate-repeat" ng-repeat="note in listnotes">
                     {{note.title}} is {{note.textnote}} and {{note.typenote}}
                 <li ng-if="results.length === 0">
                     <strong>No results found...</strong>
                 </li>
             </ul>


        </div>


</section>